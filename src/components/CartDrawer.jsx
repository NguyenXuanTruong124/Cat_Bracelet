import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

export default function CartDrawer() {
  const {
    cartOpen,
    setCartOpen,
    cartItems,
    cartCount,
    cartSubtotal,
    incQty,
    decQty,
    removeItem,
    clearCart,
  } = useCart();

  const navigate = useNavigate();

  const goToCheckout = () => {
    setCartOpen(false);
    navigate('/checkout');
  };

  return (
    <>
      <div className={`cart-overlay ${cartOpen ? 'open' : ''}`} onClick={() => setCartOpen(false)} />

      <aside className={`cart-drawer ${cartOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <div className="cart-title">
            Your Cart <span className="cart-title-count">({cartCount})</span>
          </div>

          <button className="cart-close" onClick={() => setCartOpen(false)}>
            Close
          </button>
        </div>

        <div className="cart-body">
          {cartItems.length === 0 ? (
            <div className="cart-empty">
              <div className="cart-empty-title">Cart is empty</div>
              <div className="cart-empty-sub">Add a product to see it here.</div>
              <button className="btn-outline" onClick={() => setCartOpen(false)}>
                Continue shopping
              </button>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {cartItems.map((it) => (
                  <div key={`${it.id}-${it.variantKey}`} className="cart-item">
                    <div className="cart-item-img">
                      <img src={it.image} alt={it.name} />
                    </div>

                    <div className="cart-item-info">
                      <div className="cart-item-name">{it.name}</div>
                      <div className="cart-item-price">
                        ${it.price} <span className="cart-item-mul">×</span> {it.qty}
                      </div>

                      <div className="cart-qty">
                        <button className="qty-btn" onClick={() => decQty(it.id, it.variantKey)}>-</button>
                        <div className="qty-value">{it.qty}</div>
                        <button className="qty-btn" onClick={() => incQty(it.id, it.variantKey)}>+</button>

                        <button className="remove-btn" onClick={() => removeItem(it.id, it.variantKey)}>
                          Remove
                        </button>
                      </div>
                    </div>

                    <div className="cart-item-total">${(it.price * it.qty).toFixed(2)}</div>
                  </div>
                ))}
              </div>

              <div className="cart-summary">
                <div className="sum-row">
                  <span>Subtotal</span>
                  <span className="sum-strong">${cartSubtotal.toFixed(2)}</span>
                </div>
                <div className="sum-note">Shipping & taxes calculated at checkout.</div>

                <button className="btn-primary btn-checkout" onClick={goToCheckout}>Payment</button>

                <button className="btn-ghost" onClick={clearCart}>Clear cart</button>
              </div>
            </>
          )}
        </div>
      </aside>
    </>
  );
}
