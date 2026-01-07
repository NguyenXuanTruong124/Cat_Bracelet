import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';
import '../styles/Checkout.css';

export default function Checkout() {
  const navigate = useNavigate();
  const { cartItems, cartSubtotal, clearCart, cartCount } = useCart();

  const [paymentCode, setPaymentCode] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState(null);

  useEffect(() => {
    // generate a simple payment code
    setPaymentCode('PAY-' + Math.random().toString(36).slice(2, 10).toUpperCase());
  }, []);

  // ensure page is scrolled to top when arriving at checkout
  useEffect(() => {
    // small timeout to ensure this runs after navigation/render
    const t = setTimeout(() => {
      try {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
      } catch (e) {
        // noop
      }
    }, 0);
    return () => clearTimeout(t);
  }, []);

  const total = useMemo(() => cartSubtotal, [cartSubtotal]);

  const handleConfirm = () => {
    // simulate order placement
    const id = 'ORD-' + Date.now();
    setOrderId(id);
    setOrderPlaced(true);
    // clear cart after placing order
    clearCart();
  };

  const handleCancel = () => {
    navigate('/customer');
  };

  if (orderPlaced) {
    return (
      <div className="checkout-page">
        <Header />
        <main className="checkout-wrap">
          <section className="checkout-confirm">
            <h2>Order Confirmed</h2>
            <p>Your order <strong>{orderId}</strong> has been placed.</p>
            <p>Please complete payment using code:</p>
            <div className="payment-code success">{paymentCode}</div>
            <p className="note">We sent a confirmation email (simulation).</p>
            <button className="btn-primary" onClick={() => navigate('/shop')}>Back to shop</button>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <Header />

      <main className="checkout-wrap">
        <h1>Orders</h1>

        {cartItems.length === 0 ? (
          <div className="checkout-empty">
            <p>Your cart is empty.</p>
            <button className="btn-outline" onClick={() => navigate('/shop')}>Continue shopping</button>
          </div>
        ) : (
          <div className="checkout-grid">
            <section className="checkout-items">
              <h2>Items ({cartCount})</h2>
              <div className="items-list">
                {cartItems.map((it) => (
                  <div className="checkout-item" key={`${it.id}-${it.variantKey}`}>
                    <img src={it.image} alt={it.name} />
                    <div className="ci-info">
                      <div className="ci-name">{it.name}</div>
                      <div className="ci-meta">Qty: {it.qty} • ${it.price}</div>
                    </div>
                    <div className="ci-total">${(it.qty * it.price).toFixed(2)}</div>
                  </div>
                ))}
              </div>
            </section>

            <aside className="checkout-summary">
              <h3>Summary</h3>
              <div className="summary-row">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span>Calculated at payment</span>
              </div>

              <div className="payment-code">Payment code</div>
              <div className="payment-code large">{paymentCode}</div>

              <div className="checkout-actions">
                <button className="btn-primary" onClick={handleConfirm}>Confirm Order</button>
                <button className="btn-ghost" onClick={handleCancel}>Cancel</button>
              </div>
            </aside>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
