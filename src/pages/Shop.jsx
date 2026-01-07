import React, { useMemo, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';
import '../styles/Shop.css';
import '../styles/Footer.css';

export default function Shop() {
  // All products data
  const allProducts = useMemo(
    () => [
      {
        id: 1,
        category: 'BRACELETS',
        name: 'Mini Charm Hoop Earrings',
        material: '18ct Gold Plated Vermeil',
        price: 135,
        originalPrice: 150,
        badge: { type: 'sale', text: 'Sale 10%' },
        image:
          'image/Image/hình ảnh Sp/1 tròn 10 - 16 nhuyễn - 2 đĩa/D2-1EN10-16KIN-2CH7-R2.jpg',
      },
      {
        id: 2,
        category: 'BRACELETS',
        name: 'Kyle Chain Ring',
        material: '18ct Gold Plated Vermeil',
        price: 175,
        badge: { type: 'best', text: 'Best Seller' },
        image:
          'image/Image/hình ảnh Sp/13 nhuyễn - 9 bi3-251006/D2-13EEN-9CH3-R20.jpg',
      },
      {
        id: 3,
        category: 'NECKLACES',
        name: 'Diamond Medallion Necklace',
        material: 'White gold',
        price: 420,
        originalPrice: 470,
        badge: { type: 'sale', text: 'Sale 11%' },
        image:
          'image/Image/hình ảnh Sp/14 nhuyễn - 2 đĩa/D2-14KFN-2CH7-R20.jpg',
      },
      {
        id: 4,
        category: 'SETS',
        name: 'Shell and Pearl Necklace Set',
        material: '18ct Gold Plated Vermeil',
        price: 295,
        image: 'image/Image/hình ảnh Sp/DA THO/D7-1KFT-R2.jpg',
      },
      {
        id: 5,
        category: 'BRACELETS',
        name: 'Evil Eye Protection Bracelet',
        material: 'Natural Stone',
        price: 89,
        image: '/image/Image/Vòng tay evil eye/D2-W15-4KIN-4KFN-2CH4-2CH7-R20.jpg',
      },
      {
        id: 6,
        category: 'SETS',
        name: 'Crystal Healing Bundle',
        material: 'Mixed Materials',
        price: 340,
        originalPrice: 380,
        badge: { type: 'sale', text: 'Sale 10%' },
        image: 'image/Image/hình ảnh Sp/DA THO/D2-1FGT-R2.jpg',
      },
      {
        id: 7,
        category: 'NECKLACES',
        name: 'Minimalist Pearl Pendant',
        material: 'Sterling Silver',
        price: 210,
        image:
          'image/Image/hình ảnh Sp/14 nhuyễn - 2 đĩa/D2-14KCN-2CH7-R20.jpg',
      },
      {
        id: 8,
        category: 'BRACELETS',
        name: 'Rose Gold Beaded Bracelet',
        material: '18ct Gold Plated',
        price: 145,
        originalPrice: 165,
        badge: { type: 'sale', text: 'Sale 12%' },
        image:
          'image/Image/hình ảnh Sp/13 nhuyễn - 9 bi3-251006/D5-13KCN-9CH3-R20.jpg',
      },
    ],
    []
  );

  // Filter state
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [sortBy, setSortBy] = useState('newest');

  // Categories
  const categories = ['ALL', ...new Set(allProducts.map((p) => p.category))];

  // Filter products
  const filteredProducts = useMemo(() => {
    let result = allProducts;

    if (selectedCategory !== 'ALL') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    result = result.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    if (sortBy === 'price-low') result = [...result].sort((a, b) => a.price - b.price);
    if (sortBy === 'price-high') result = [...result].sort((a, b) => b.price - a.price);

    return result;
  }, [selectedCategory, priceRange, sortBy, allProducts]);

  // Banner featured product (không ảnh hưởng trang khác)
  const featured =
    allProducts.find((p) => p.badge?.type === 'best') ||
    allProducts.find((p) => p.badge?.type === 'sale') ||
    allProducts[0];

  const { addToCart, cartCount, setCartOpen } = useCart();

  return (
    <div className="shop-page">
      <Header cartCount={cartCount} onCartClick={() => setCartOpen(true)} />

      {/* ===== SHOP BANNER (scoped-only) ===== */}
      <section className="shero">
        <div className="shero__wrap">
          <div className="shero__grid">
            {/* Left */}
            <div className="shero__left">
              <div className="shero__chips">
                <span className="shero__chip is-red">New arrivals</span>
                <span className="shero__chip">Handmade</span>
                <span className="shero__chip">Natural stones</span>
              </div>

              <h1 className="shero__title">
                Shop our <em>Bracelets</em>
              </h1>

              <p className="shero__desc">
                Minimal luxury jewelry — clean, premium, and made for everyday wear.
                Choose your style, we’ll help you find the perfect fit.
              </p>

              <div className="shero__actions">
                <a className="shero__btn is-primary" href="#shop-products">
                  Shop now
                </a>
                <a className="shero__btn is-outline" href="#shop-filters">
                  Filter products
                </a>
              </div>

              <div className="shero__featured">
                <div className="shero__kicker">Featured</div>
                <div className="shero__fname">{featured.name}</div>
                <div className="shero__meta">
                  <span>{featured.category}</span>
                  <span className="dot">•</span>
                  <span>${featured.price}</span>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="shero__right">
              <div className="shero__media">
                <div className="shero__glow" aria-hidden="true" />
                <img className="shero__img" src={featured.image} alt={featured.name} />

                {featured.badge?.text ? (
                  <span
                    className={`shero__badge ${
                      featured.badge.type === 'best' ? 'is-best' : 'is-sale'
                    }`}
                  >
                    {featured.badge.text}
                  </span>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SHOP LAYOUT (giữ nguyên logic) ===== */}
      <div className="shop-container" id="shop-filters">
        <aside className="shop-sidebar">
          <div className="filter-block">
            <h3 className="filter-title">Category</h3>
            <div className="filter-options">
              {categories.map((cat) => (
                <label key={cat} className="filter-label">
                  <input
                    type="radio"
                    name="category"
                    value={cat}
                    checked={selectedCategory === cat}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  />
                  <span>{cat}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="filter-block">
            <h3 className="filter-title">Price Range</h3>
            <div className="price-inputs">
              <input
                type="number"
                min="0"
                max="500"
                value={priceRange[0]}
                onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                placeholder="Min"
              />
              <span>-</span>
              <input
                type="number"
                min="0"
                max="500"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                placeholder="Max"
              />
            </div>
            <div className="price-display">
              ${priceRange[0]} - ${priceRange[1]}
            </div>
          </div>

          <button
            className="filter-reset"
            onClick={() => {
              setSelectedCategory('ALL');
              setPriceRange([0, 500]);
              setSortBy('newest');
            }}
          >
            Reset Filters
          </button>
        </aside>

        <div className="shop-main" id="shop-products">
          <div className="shop-header">
            <div className="shop-count">Showing {filteredProducts.length} products</div>
            <select
              className="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>

          <div className="products-grid">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div key={product.id} className="product-card">
                  <div className="product-image-wrapper">
                    {product.badge && (
                      <span className={`sale-tag ${product.badge.type}`}>
                        {product.badge.text}
                      </span>
                    )}
                    <img src={product.image} alt={product.name} />
                  </div>

                  <div className="product-info">
                    <div className="product-category">{product.category}</div>
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-material">{product.material}</p>

                    <div className="product-price">
                      {product.originalPrice ? (
                        <>
                          <span className="original-price">${product.originalPrice}</span>
                          <span className="current-price">${product.price}</span>
                        </>
                      ) : (
                        <span className="current-price">${product.price}</span>
                      )}
                    </div>

                    <button
                      className="add-to-cart-btn"
                      onClick={() => addToCart(product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-products">
                <p>No products found. Try adjusting your filters.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
