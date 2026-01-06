import React from 'react';
import '../styles/Customer.css';

function Customer() {
  const products = [
    {
      id: 1,
      name: "Ruby Heart Earrings",
      material: "18ct Gold & Ruby",
      price: 135.00,
      originalPrice: 150.00,
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400"
    },
    {
      id: 2,
      name: "Rose Red Chain",
      material: "18ct Gold Plated",
      price: 175.00,
      image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=400"
    },
    {
      id: 3,
      name: "Crimson Pendant",
      material: "White gold",
      price: 420.00,
      originalPrice: 470.00,
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400"
    },
    {
      id: 4,
      name: "Love Knot Bracelet",
      material: "Red String & Gold",
      price: 95.00,
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400"
    },
    {
      id: 5,
      name: "Vintage Ruby Ring",
      material: "18ct Gold",
      price: 210.00,
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400"
    },
    {
      id: 6,
      name: "Classic Gold Hoop",
      material: "Yellow Gold",
      price: 85.00,
      image: "https://images.unsplash.com/photo-1630019852942-f89202989a51?w=400"
    }
  ];

  return (
    <div className="customer-page">
      
      {/* --- 1. HEADER --- */}
      <header className="main-header">
        <div className="header-inner">
          <nav className="header-nav">
            <a href="#home">Home</a>
            <a href="#shop">Shop</a>
            <a href="#collections">Collections</a>
            <a href="#about">About Us</a>
          </nav>
          
          <div className="header-logo">
            <span className="logo-text">CAT BRACELET</span>
          </div>
          
          <div className="header-actions">
            <div className="search-minimal">
              <i className="fas fa-search"></i>
              <input type="text" placeholder="Search..." />
            </div>
            <div className="action-icons">
              <a href="#wishlist">
                <i className="far fa-heart"></i>
                <span className="count">1</span>
              </a>
              <a href="#cart">
                <i className="fas fa-shopping-bag"></i>
                <span className="count">3</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* --- 2. HERO SPLIT SECTION --- */}
      <section className="hero-split">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-heading">
              Handcrafted <br />
              <span className="italic-text">& ethically sourced</span>
            </h1>
            <p className="hero-desc">
              A collection inspired by old-world charm, crafted with rubies and diamonds for your inner elegance.
            </p>
            <button className="btn-explore">
              Explore <i className="fas fa-arrow-right" style={{marginLeft: '8px'}}></i>
            </button>
            <div className="hero-socials">
              <span>Follow us</span>
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
          <div className="hero-image-area">
            <div className="circle-bg"></div>
            {/* Ảnh người mẫu */}
            <img 
              src="image/2.jpg" 
              alt="Model Jewelry" 
              className="model-img" 
            />
          </div>
        </div>
      </section>

      {/* --- 3. FEATURES SECTION (KHUNG GỌN & PHẲNG) --- */}
      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            
            {/* Item 1 */}
            <div className="feature-item">
              <div className="feature-icon"><i className="fas fa-truck-moving"></i></div>
              <div className="feature-text">
                <h3>Delivery</h3>
                <p>Free delivery for orders over $100.</p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="feature-item">
              <div className="feature-icon"><i className="far fa-comments"></i></div>
              <div className="feature-text">
                <h3>Customer care</h3>
                <p>Support 24/7 via email & chat.</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="feature-item">
              <div className="feature-icon"><i className="fas fa-shield-alt"></i></div>
              <div className="feature-text">
                <h3>Secure payment</h3>
                <p>100% secure payment. Pay later.</p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="feature-item">
              <div className="feature-icon"><i className="far fa-star"></i></div>
              <div className="feature-text">
                <h3>Second life</h3>
                <p>Lifelong warranty & repair service.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- 4. PRODUCTS SECTION --- */}
      <section className="products-section">
        <div className="container">
          <h2 className="section-title">New Arrivals</h2>
          <div className="products-grid">
            {products.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-image-wrapper">
                  <img src={product.image} alt={product.name} />
                  {product.originalPrice && <span className="sale-tag">Sale</span>}
                </div>
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <div className="product-price">
                    <span className="current-price">${product.price.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 5. FOOTER --- */}
      <footer className="customer-footer">
        <p>© 2024 Cat Bracelet. Red Passion Theme.</p>
      </footer>
    </div>
  );
}

export default Customer;