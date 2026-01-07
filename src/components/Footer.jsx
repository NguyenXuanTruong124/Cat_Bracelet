import React, { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log('Subscribe:', email);
    setEmail('');
  };

  return (
    <footer className="main-footer">
      <div className="footer-wrapper">
        {/* LEFT: Branding + Newsletter */}
        <div className="footer-left">
          <h3 className="footer-brand">CAT BRACELET</h3>
          <p className="footer-desc">
            Handcrafted bracelets & natural stone jewelry. Personalized designs, minimal luxury, made with care.
          </p>

          <div className="newsletter-box">
            <h4>Join our newsletter</h4>
            <form onSubmit={handleSubscribe} className="newsletter-form">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn-subscribe">SUBSCRIBE</button>
            </form>
            <p className="newsletter-disclaimer">
              By subscribing, you agree to receive marketing emails. You can unsubscribe at any time.
            </p>
          </div>
        </div>

        {/* CENTER-LEFT: SHOP */}
        <div className="footer-col">
          <h4>SHOP</h4>
          <ul>
            <li><a href="#/">Bracelets</a></li>
            <li><a href="#/">Necklaces</a></li>
            <li><a href="#/">Sets</a></li>
            <li><a href="#/">Gift Cards</a></li>
            <li><a href="#/">New Arrivals</a></li>
          </ul>
        </div>

        {/* CENTER-RIGHT: CUSTOMER CARE */}
        <div className="footer-col">
          <h4>CUSTOMER CARE</h4>
          <ul>
            <li><a href="#/">Shipping & Delivery</a></li>
            <li><a href="#/">Returns & Exchanges</a></li>
            <li><a href="#/">Warranty & Repair</a></li>
            <li><a href="#/">Size Guide</a></li>
            <li><a href="#/">FAQs</a></li>
          </ul>
        </div>

        {/* RIGHT: ABOUT + CONTACT + SOCIAL */}
        <div className="footer-col footer-about">
          <h4>ABOUT</h4>
          <ul>
            <li><a href="#/">Our Story</a></li>
            <li><a href="#/">Materials</a></li>
            <li><a href="#/">Journal</a></li>
            <li><a href="#/">Contact</a></li>
          </ul>

          <div className="footer-contact">
            <div className="contact-item">
              <span className="contact-label">EMAIL</span>
              <a href="mailto:support@catbracelet.com">support@catbracelet.com</a>
            </div>
            <div className="contact-item">
              <span className="contact-label">HOTLINE</span>
              <a href="tel:+84900000000">(+84) 0900 000 000</a>
            </div>
            <div className="contact-item">
              <span className="contact-label">ADDRESS</span>
              <p>Ho Chi Minh City, Vietnam</p>
            </div>
          </div>

          <div className="footer-socials">
            <a href="#/" className="social-btn">FACEBOOK</a>
            <a href="#/" className="social-btn">INSTAGRAM</a>
            <a href="#/" className="social-btn">TIKTOK</a>
          </div>
        </div>
      </div>

      {/* BOTTOM: Copyright + Payment Methods */}
      <div className="footer-bottom">
        <p>&copy; 2026 Cat Bracelet. All rights reserved.</p>
        <div className="payment-methods">
          <a href="#/">Privacy Policy</a>
          <a href="#/">Terms</a>
          <a href="#/">Cookies</a>
          <span className="payment-badge">VISA</span>
          <span className="payment-badge">MASTERCARD</span>
          <span className="payment-badge">MOMO</span>
          <span className="payment-badge">VNPAY</span>
        </div>
      </div>
    </footer>
  );
}
