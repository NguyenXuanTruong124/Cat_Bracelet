import React, { createContext, useContext, useMemo, useState } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const cartCount = useMemo(() => cartItems.reduce((s, it) => s + it.qty, 0), [cartItems]);
  const cartSubtotal = useMemo(() => cartItems.reduce((s, it) => s + it.qty * it.price, 0), [cartItems]);

  const addToCart = (product, opts = {}) => {
    const normalizedPrice = typeof product.price === 'number' ? product.price : 150;
    const variantKey = opts.variantKey ?? opts.selectedVariant ?? product.variantKey ?? 'default';
    const image = opts.image ?? product.image;

    const normalized = {
      id: product.id,
      name: product.name,
      price: normalizedPrice,
      image,
      variantKey,
    };

    setCartItems((prev) => {
      const idx = prev.findIndex((x) => x.id === normalized.id && x.variantKey === normalized.variantKey);
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = { ...next[idx], qty: next[idx].qty + 1 };
        return next;
      }
      return [...prev, { ...normalized, qty: 1 }];
    });

    setCartOpen(true);
  };

  const incQty = (id, variantKey) => {
    setCartItems((prev) => prev.map((it) => (it.id === id && it.variantKey === variantKey ? { ...it, qty: it.qty + 1 } : it)));
  };

  const decQty = (id, variantKey) => {
    setCartItems((prev) =>
      prev
        .map((it) => (it.id === id && it.variantKey === variantKey ? { ...it, qty: it.qty - 1 } : it))
        .filter((it) => it.qty > 0)
    );
  };

  const removeItem = (id, variantKey) => {
    setCartItems((prev) => prev.filter((it) => !(it.id === id && it.variantKey === variantKey)));
  };

  const clearCart = () => setCartItems([]);

  const value = {
    cartOpen,
    setCartOpen,
    cartItems,
    cartCount,
    cartSubtotal,
    addToCart,
    incQty,
    decQty,
    removeItem,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}

export default CartContext;
