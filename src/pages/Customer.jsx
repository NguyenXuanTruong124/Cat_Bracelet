import React, { useMemo, useState } from "react";
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';
import "../styles/Customer.css";
import "../styles/Footer.css";

export default function Customer() {
  // ===== PRODUCTS (demo data, bạn tự thay ảnh sau) =====
  // Mỗi product có variants: [{ key, label, color, image }]
  const products = useMemo(
    () => [
      {
        id: 1,
        category: "CHARMS & PENDANTS PERSONALIZED",
        name: "Mini Charm Hoop Earrings",
        material: "18ct Gold Plated Vermeil",
        price: 135,
        originalPrice: 150,
        badge: { type: "sale", text: "Sale 10%" },
        selectOptions: false,
        variants: [
          {
            key: "green",
            label: "Green",
            color: "#6baaa1",
            image:
              "image/Image/hình ảnh Sp/1 tròn 10 - 16 nhuyễn - 2 đĩa/D2-1EN10-16KIN-2CH7-R2.jpg",
          },
          {
            key: "pink",
            label: "Pink",
            color: "#e6cfd1",
            image:
              "image/Image/hình ảnh Sp/1 tròn 10 - 16 nhuyễn - 2 đĩa/D2-1KC10-16KCN-2CH7-R2.jpg",
          },
          {
            key: "white",
            label: "White",
            color: "#f0f0f0",
            image:
              "image/Image/hình ảnh Sp/1 tròn 10 - 16 nhuyễn - 2 đĩa/D2-1CA10-16KFN-2CH7-R2.jpg",
          },
        ],
      },
      {
        id: 2,
        category: "BRACELETS",
        name: "Kyle Chain Ring",
        material: "18ct Gold Plated Vermeil",
        priceText: "$150.00 – $200.00",
        badge: { type: "best", text: "Best Seller" },
        selectOptions: true,
        variants: [
          {
            key: "gold",
            label: "Gold",
            color: "#d7a85c",
            image:
              "image/Image/hình ảnh Sp/13 nhuyễn - 9 bi3-251006/D2-13EEN-9CH3-R20.jpg",
          },
          {
            key: "rose",
            label: "Rose",
            color: "#e6cfd1",
            image:
              "image/Image/hình ảnh Sp/13 nhuyễn - 9 bi3-251006/D5-13KCN-9CH3-R20.jpg",
          },
          {
            key: "silver",
            label: "Silver",
            color: "#f0f0f0",
            image:
              "image/Image/hình ảnh Sp/13 nhuyễn - 9 bi3-251006/D2-13KFN-9CH3-R20.jpg",
          },
        ],
      },
      {
        id: 3,
        category: "NECKLACES",
        name: "Diamond Medallion Necklace",
        material: "White gold",
        price: 420,
        originalPrice: 470,
        badge: { type: "sale", text: "Sale 11%" },
        selectOptions: false,
        variants: [
          {
            key: "default",
            label: "Default",
            color: "#f0f0f0",
            image:
              "image/Image/hình ảnh Sp/14 nhuyễn - 2 đĩa/D2-14KFN-2CH7-R20.jpg",
          },
          {
            key: "alt",
            label: "Alt",
            color: "#e6cfd1",
            image:
              "image/Image/hình ảnh Sp/14 nhuyễn - 2 đĩa/D2-14KCN-2CH7-R20.jpg",
          },
        ],
      },
      {
        id: 4,
        category: "SETS",
        name: "Shell and Pearl Necklace Set",
        material: "18ct Gold Plated Vermeil",
        price: 295,
        selectOptions: false,
        variants: [
          {
            key: "default",
            label: "Default",
            color: "#f0f0f0",
            image: "image/Image/hình ảnh Sp/DA THO/D7-1KFT-R2.jpg",
          },
          {
            key: "alt",
            label: "Alt",
            color: "#d7a85c",
            image: "image/Image/hình ảnh Sp/DA THO/D2-1FGT-R2.jpg",
          },
        ],
      },
    ],
    []
  );

  // ===== Selected variant per product =====
  const [selectedVariant, setSelectedVariant] = useState(() => {
    const map = {};
    for (const p of products) {
      map[p.id] = p.variants?.[0]?.key ?? "default";
    }
    return map;
  });

  const setVariant = (productId, key) => {
    setSelectedVariant((prev) => ({ ...prev, [productId]: key }));
  };

  const getActiveImage = (p) => {
    const key = selectedVariant[p.id];
    const v = p.variants?.find((x) => x.key === key) ?? p.variants?.[0];
    return v?.image ?? p.image;
  };

  // Use shared cart from context
  const {
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
  } = useCart();

  return (
    <div className="customer-page">
      {/* HEADER COMPONENT */}
      <Header 
        cartCount={cartCount}
        onCartClick={() => setCartOpen(true)}
        searchValue=""
        onSearchChange={() => {}}
      />

      {/* HERO */}
      <section className="hero-split">
        <div className="hero-container">
          <div className="hero-content">
            <h1>
              Handcrafted <br />
              <em>bracelets</em>
            </h1>
            <p>
              Elegant handmade bracelets inspired by minimal luxury — signature
              ruby red theme.
            </p>
            <button className="btn-primary">Explore collection</button>
          </div>

          <div className="hero-image">
            <div className="hero-circle" />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
  <div className="features-grid">
    <div className="feature-item">
      <div className="feature-icon">🚚</div>
      <h3>Delivery</h3>
      <p>Free delivery for orders over $100.</p>
    </div>

    <div className="feature-item">
      <div className="feature-icon">💬</div>
      <h3>Customer Care</h3>
      <p>Support 24/7 via email & chat.</p>
    </div>

    <div className="feature-item">
      <div className="feature-icon">🔒</div>
      <h3>Secure Payment</h3>
      <p>100% secure payment. Pay later.</p>
    </div>

    <div className="feature-item">
      <div className="feature-icon">♻️</div>
      <h3>Second Life</h3>
      <p>Lifelong warranty & repair service.</p>
    </div>
  </div>
</section>


      {/* EDITORIAL (layout giống ảnh bạn gửi) */}
      <section className="editorial">
        <div className="editorial-wrap">
          <div className="editorial-images">
            <div className="editorial-img small">
              <img
                src="\image\Image\Vòng tay evil eye\all0.jpg"
                alt="Editorial 1"
              />
            </div>

            <div className="editorial-img big">
              <img
                src="\image\Image\hình ảnh Sp\TUIHANG.jpg"
                alt="Editorial 2"
              />
            </div>
          </div>

          <div className="editorial-content">
            <h2>
              Shop our limited <br />
              edition collaborations
            </h2>

            <p>
              Through original imagery and editorial perspectives, we bring you
              unique point-of-views, the untold stories, and a look into the
              minds and workshops of some of the most creative people we know.
              We go above and beyond to bring you the latest and greatest in
              jewellery-making to make sure you are always at the forefront of
              industry trends.
            </p>

            <button className="editorial-btn" onClick={() => window.location.href = '/about'}>More about us</button>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="products">
        <h2>New Arrivals</h2>

        <div className="product-grid product-grid--4">
          {products.map((p) => {
            const activeKey = selectedVariant[p.id];
            const activeImage = getActiveImage(p);

            return (
              <div key={p.id} className="p-card">
                <div className="p-media">
                  {p.badge && (
                    <span className={`p-badge ${p.badge.type}`}>
                      {p.badge.text}
                    </span>
                  )}

                  <img className="p-img" src={activeImage} alt={p.name} />
                </div>

                <div className="p-info">
                  <div className="p-cat">{p.category}</div>
                  <div className="p-name">{p.name}</div>

                  {/* Swatches click -> đổi ảnh */}
                  {p.variants?.length ? (
                    <div className="p-swatches" aria-label="Color options">
                      {p.variants.map((v) => (
                        <button
                          key={v.key}
                          type="button"
                          className={`p-swatch ${
                            v.key === activeKey ? "is-active" : ""
                          }`}
                          style={{ background: v.color }}
                          title={v.label}
                          onClick={() => setVariant(p.id, v.key)}
                        />
                      ))}
                    </div>
                  ) : null}

                  <div className="p-material">{p.material}</div>

                  <div className="p-price">
                    {p.priceText ? (
                      <span className="p-new">{p.priceText}</span>
                    ) : p.originalPrice ? (
                      <>
                        <span className="p-old">
                          ${Number(p.originalPrice).toFixed(2)}
                        </span>
                        <span className="p-new">
                          ${Number(p.price).toFixed(2)}
                        </span>
                      </>
                    ) : (
                      <span className="p-new">
                        ${Number(p.price).toFixed(2)}
                      </span>
                    )}
                  </div>

                  <button
                    className="btn-add"
                    onClick={() =>
                      addToCart(p, {
                        variantKey: selectedVariant[p.id],
                        image: getActiveImage(p),
                      })
                    }
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      {/* JOURNAL SECTION (like reference) */}
<section className="journal">
  <div className="journal-wrap">
    <h2 className="journal-title">Selected from our Journal</h2>

    <div className="journal-grid">
      <article className="journal-card">
        <div className="journal-media">
          <img
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1400"
            alt="Journal 1"
          />
        </div>

        <div className="journal-meta">Tips — April 7, 2022</div>
        <h3 className="journal-h3">
          Best Thoughtful Gift Ideas Your Girlfriend Will Actually Love
        </h3>
        <p className="journal-desc">
          Surprise your gift recipient with a gold, sterling silver, or rose
          gold bracelet with words on it written in yours or a loved-one’s
          handwriting.
        </p>
        <a className="journal-link" href="#">Read more</a>
      </article>

      <article className="journal-card">
        <div className="journal-media">
          <img
            src="https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=1400"
            alt="Journal 2"
          />
        </div>

        <div className="journal-meta">Style Guide — March 30, 2022</div>
        <h3 className="journal-h3">
          The size guide: a little help to avoid mistakes
        </h3>
        <p className="journal-desc">
          To be sure not to go wrong when you want to buy a ring online, the
          Jewellery team has prepared a small size guide with several options
          available to you.
        </p>
        <a className="journal-link" href="#">Read more</a>
      </article>

      <article className="journal-card">
        <div className="journal-media">
          <img
            src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=1400"
            alt="Journal 3"
          />
          <div className="journal-play" aria-hidden="true">▶</div>
        </div>

        <div className="journal-meta">News — March 30, 2022</div>
        <h3 className="journal-h3">
          Unique first anniversary gift ideas for couple
        </h3>
        <p className="journal-desc">
          Looking for first anniversary gifts they’ll love? Read on for
          traditional, modern, and thoughtful gifts to buy your spouse or the
          happy couple.
        </p>
        <a className="journal-link" href="#">Read more</a>
      </article>
    </div>
  </div>
</section>

      {/* Cart drawer moved to global component */}

      {/* FOOTER COMPONENT */}
      <Footer />
    </div>
  );
}
