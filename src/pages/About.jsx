import React from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import "../styles/About.css";
import "../styles/Footer.css";

export default function About() {
  return (
    <div className="about-page">
      {/* HEADER COMPONENT */}
      <Header 
        cartCount={0}
        onCartClick={null}
        searchValue=""
        onSearchChange={() => {}}
      />

      {/* HERO */}
      <section className="about-hero">
        <div className="about-wrap about-hero-grid">
          <div className="about-hero-left">
            <div className="about-kicker">About Cat Bracelet</div>
            <h1 className="about-h1">
              Minimal luxury.
              <br />
              Handmade with <em>ruby red</em> spirit.
            </h1>
            <p className="about-lead">
              We craft natural-stone bracelets with a clean editorial aesthetic.
              Designed to be worn daily — refined, personal, and made to last.
            </p>

            <div className="about-hero-actions">
              <button className="ab-btn ab-btn-primary">Discover our story</button>
              <button className="ab-btn ab-btn-ghost">Explore collection</button>
            </div>

            <div className="about-metrics">
              <div className="metric">
                <div className="metric-num">100%</div>
                <div className="metric-label">Handcrafted</div>
              </div>
              <div className="metric">
                <div className="metric-num">7+</div>
                <div className="metric-label">Natural stones</div>
              </div>
              <div className="metric">
                <div className="metric-num">24/7</div>
                <div className="metric-label">Support</div>
              </div>
            </div>
          </div>

          <div className="about-hero-right">
            <div className="hero-photo">
              <img
                src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1800"
                alt="About hero"
              />
            </div>

            <div className="hero-badge">
              <div className="hero-badge-title">Signature</div>
              <div className="hero-badge-text">
                Natural stones
                <br />
                Personalized design
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="about-values">
        <div className="about-wrap">
          <div className="section-head">
            <h2 className="ab-h2">What we stand for</h2>
            <p className="ab-sub">
              Inspired by editorial design: clean typography, generous spacing,
              and premium finishing details.
            </p>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">◆</div>
              <h3>Natural stones</h3>
              <p>We select stones for clarity, texture, and character.</p>
            </div>

            <div className="value-card">
              <div className="value-icon">✦</div>
              <h3>Personalized</h3>
              <p>Custom sizing, meaningful charms, crafted for your story.</p>
            </div>

            <div className="value-card">
              <div className="value-icon">⌁</div>
              <h3>Timeless</h3>
              <p>Minimal shapes. Balanced details. A piece you’ll keep.</p>
            </div>

            <div className="value-card">
              <div className="value-icon">⟡</div>
              <h3>Second life</h3>
              <p>Warranty & repair — we help your jewelry last longer.</p>
            </div>
          </div>
        </div>
      </section>

      {/* EDITORIAL */}
      <section className="about-editorial">
        <div className="about-wrap editorial-grid">
          <div className="editorial-images">
            <div className="ed-img small">
              <img
                src="https://images.unsplash.com/photo-1515526192717-7baf0c6d1f5a?w=1600"
                alt="Editorial small"
              />
            </div>
            <div className="ed-img big">
              <img
                src="https://images.unsplash.com/photo-1520975916090-3105956dac38?w=1600"
                alt="Editorial big"
              />
            </div>
          </div>

          <div className="editorial-content">
            <h2 className="ab-h2 ab-h2-xl">
              Designed for everyday
              <br />
              elegance
            </h2>
            <p className="ab-sub ab-sub-wide">
              Through original imagery and an editorial perspective, we create
              pieces that feel refined — never loud. Every bracelet is balanced
              in proportion, built for comfort, and finished with a clean,
              premium touch.
            </p>

            <div className="ed-actions">
              <button className="ab-btn ab-btn-primary">More about us</button>
              <button className="ab-btn ab-btn-outline">Materials guide</button>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="about-process">
        <div className="about-wrap">
          <div className="section-head">
            <h2 className="ab-h2">How it’s made</h2>
            <p className="ab-sub">
              A small process, done carefully — from stone selection to final
              polish.
            </p>
          </div>

          <div className="process-grid">
            <div className="step">
              <div className="step-num">01</div>
              <div className="step-body">
                <div className="step-title">Select stones</div>
                <div className="step-text">
                  We pick stones by tone, clarity, and harmony.
                </div>
              </div>
            </div>

            <div className="step">
              <div className="step-num">02</div>
              <div className="step-body">
                <div className="step-title">Design & sizing</div>
                <div className="step-text">
                  We match spacing, bead size, and fit for comfort.
                </div>
              </div>
            </div>

            <div className="step">
              <div className="step-num">03</div>
              <div className="step-body">
                <div className="step-title">Hand assembly</div>
                <div className="step-text">
                  Each piece is assembled with tension balance and clean finishing.
                </div>
              </div>
            </div>

            <div className="step">
              <div className="step-num">04</div>
              <div className="step-body">
                <div className="step-title">Quality check</div>
                <div className="step-text">
                  We inspect durability and packaging — ready to gift.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JOURNAL */}
      <section className="about-journal">
        <div className="about-wrap">
          <h2 className="journal-title">Selected from our Journal</h2>

          <div className="journal-grid">
            <article className="journal-card">
              <div className="journal-media">
                <img
                  src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1600"
                  alt="Journal 1"
                />
              </div>
              <div className="journal-meta">Tips — April 7, 2022</div>
              <h3 className="journal-h3">
                Best thoughtful gift ideas your partner will actually love
              </h3>
              <p className="journal-desc">
                Simple rules for gifting jewelry that feels personal, refined,
                and wearable every day.
              </p>
              <a className="journal-link" href="#">
                Read more
              </a>
            </article>

            <article className="journal-card">
              <div className="journal-media">
                <img
                  src="https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=1600"
                  alt="Journal 2"
                />
              </div>
              <div className="journal-meta">Style Guide — March 30, 2022</div>
              <h3 className="journal-h3">
                Size guide: a little help to avoid mistakes
              </h3>
              <p className="journal-desc">
                How to measure your wrist, choose bead sizes, and get the best fit.
              </p>
              <a className="journal-link" href="#">
                Read more
              </a>
            </article>

            <article className="journal-card">
              <div className="journal-media">
                <img
                  src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=1600"
                  alt="Journal 3"
                />
                <div className="journal-play" aria-hidden="true">
                  ▶
                </div>
              </div>
              <div className="journal-meta">News — March 30, 2022</div>
              <h3 className="journal-h3">Our latest limited collaboration drop</h3>
              <p className="journal-desc">
                An editorial look at the inspiration behind this season’s materials.
              </p>
              <a className="journal-link" href="#">
                Read more
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="about-wrap cta-box">
          <div className="cta-left">
            <div className="cta-kicker">Ready to find your fit?</div>
            <div className="cta-title">Let us recommend your bracelet size.</div>
            <div className="cta-sub">
              Tell us your wrist circumference — we’ll suggest S/M/L or custom.
            </div>
          </div>

          <div className="cta-right">
            <button className="ab-btn ab-btn-primary ab-btn-lg">
              Get recommendation
            </button>
            <button className="ab-btn ab-btn-outline ab-btn-lg">Contact us</button>
          </div>
        </div>
      </section>

      {/* FOOTER COMPONENT */}
      <Footer />
    </div>
  );
}
