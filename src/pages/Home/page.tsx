import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for subscribing!');
  };

  return (
    <>
      {/* HERO */}
      <section>
        <div className="hero">
          <div className="hero-content">
            <span className="badge">✦ New 2026 Collection — Just Arrived</span>
            <h1>
              Laptops Built for <span className="text-gradient">Achievers</span>
            </h1>
            <p>
              Discover Pakistan's finest selection of premium laptops, workstations, and
              accessories. Engineered for speed, built for durability — delivered to your door.
            </p>
            <div className="hero-buttons">
              <button className="lg-button" onClick={() => navigate('/services')}>
                Shop Now →
              </button>
              <button className="lg-button border-button">Compare Models</button>
            </div>
            <div>
              <div>
                <span>✓</span> Free Shipping Over Rs.50,000
              </div>
              <div>
                <span>✓</span> 2-Year Warranty
              </div>
              <div>
                <span>✓</span> 24/7 Support
              </div>
            </div>
          </div>
          <div className="hero-image">
            <img src="/img1.avif" alt="LapElite Premium Laptop" />
          </div>
        </div>
      </section>

      {/* CATEGORY STRIP */}
      <section className="section category-section">
        <div className="section-header">
          <h2>Shop by Category</h2>
          <p>Find the perfect machine for your needs</p>
        </div>

        <div className="card-container">
          <div className="card">
            <img src="/img2.png" alt="Laptops" />
            <div className="card-body">
              <h4>Laptops</h4>
              <p>From Rs.55,000</p>
            </div>
          </div>

          <div className="card">
            <img src="/img3.png" alt="Desktops" />
            <div className="card-body">
              <h4>Desktops</h4>
              <p>From Rs.80,000</p>
            </div>
          </div>

          <div className="card">
            <img src="/img4.png" alt="Workstations" />
            <div className="card-body">
              <h4>Workstations</h4>
              <p>From Rs.150,000</p>
            </div>
          </div>

          <div className="card">
            <img src="/img5.png" alt="Accessories" />
            <div className="card-body">
              <h4>Accessories</h4>
              <p>From Rs.2,500</p>
            </div>
          </div>

          <div className="card">
            <img src="/img6.png" alt="Gaming" />
            <div className="card-body">
              <h4>Gaming</h4>
              <p>From Rs.120,000</p>
            </div>
          </div>

          <div className="card" onClick={() => navigate('/services')}>
            <img src="/img7.png" alt="Support Plans" />
            <div className="card-body">
              <h4>Support Plans</h4>
              <p>From Rs.5,000/yr</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="section featured-section">
        <div className="section-header">
          <h2>Featured Laptops</h2>
          <p>Top-rated machines engineered for excellence</p>
        </div>
        <div className="card-container">
          <div className="card">
            <div className="card-img" data-grad="blue">
              <img src="/img8.png" alt="Dell XPS 15" />
              <span className="chip" data-color="green">
                Bestseller
              </span>
            </div>
            <div className="card-body">
              <h3>Dell XPS 15</h3>
              <p>Intel Core i7-13700H · 16GB RAM · 512GB NVMe SSD</p>
              <div className="card-footer-row">
                <span className="price-tag">Rs. 289,000</span>
                <button className="sm-button">Add to Cart</button>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-img" data-grad="purple">
              <img src="/img9.png" alt="HP Spectre x360" />
              <span className="chip" data-color="purple">
                Pro
              </span>
            </div>
            <div className="card-body">
              <h3>HP Spectre x360</h3>
              <p>Intel Core i9 · 32GB RAM · 1TB NVMe SSD</p>
              <div className="card-footer-row">
                <span className="price-tag">Rs. 349,000</span>
                <button className="sm-button">Add to Cart</button>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-img" data-grad="sky">
              <img src="/img10.png" alt="Lenovo ThinkPad X1" />
              <span className="chip" data-color="sky">
                New
              </span>
            </div>
            <div className="card-body">
              <h3>Lenovo ThinkPad X1</h3>
              <p>AMD Ryzen 9 · 32GB RAM · 1TB SSD · 4K OLED</p>
              <div className="card-footer-row">
                <span className="price-tag">Rs. 420,000</span>
                <button className="sm-button">Add to Cart</button>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-img" data-grad="green">
              <img src="/img11.png" alt="ASUS ROG Zephyrus" />
              <span className="chip" data-color="red">
                Sale
              </span>
            </div>
            <div className="card-body">
              <h3>ASUS ROG Zephyrus</h3>
              <p>AMD Ryzen 9 · RTX 4080 · 32GB RAM · 2TB SSD</p>
              <div className="card-footer-row">
                <span className="price-tag">Rs. 520,000</span>
                <button className="sm-button">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button className="border-button">View All Products →</button>
        </div>
      </section>

      {/* STATS */}
      <section className="section">
        <div className="stats-row">
          <div className="stat-item">
            <h2>80K+</h2>
            <p>Happy Customers</p>
          </div>
          <div className="stat-item">
            <h2>500+</h2>
            <p>Laptop Models</p>
          </div>
          <div className="stat-item">
            <h2>99%</h2>
            <p>Satisfaction Rate</p>
          </div>
          <div className="stat-item">
            <h2>24/7</h2>
            <p>Expert Support</p>
          </div>
          <div className="stat-item">
            <h2>15+</h2>
            <p>Brands Available</p>
          </div>
        </div>
      </section>

      {/* WHY LAPELITE */}
      <section className="section why-section">
        <div className="section-header">
          <h2>Why Choose LapElite?</h2>
          <p>We deliver more than hardware — we deliver confidence</p>
        </div>
        <div className="card-container">
          <div className="card">
            <div className="icon-circle">🚀</div>
            <div></div>
            <h3>Latest Models</h3>
            <p>2025-2026 flagship laptops from every top brand — always in stock.</p>
          </div>
          <div className="card">
            <div className="icon-circle">💎</div>
            <div></div>
            <h3>Genuine Products</h3>
            <p>100% authentic, manufacturer-sealed laptops with official warranty.</p>
          </div>
          <div className="card">
            <div className="icon-circle">🛡️</div>
            <div></div>
            <h3>2-Year Warranty</h3>
            <p>Every product covered with comprehensive warranty and on-site service.</p>
          </div>
          <div className="card">
            <div className="icon-circle">🎧</div>
            <div></div>
            <h3>24/7 Support</h3>
            <p>Expert tech team ready via chat, phone, or walk-in service center.</p>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="section">
        <div className="newsletter-strip">
          <div>
            <h2>Stay Ahead of the Curve</h2>
            <p>Exclusive deals, new arrivals, and tech insights — delivered weekly.</p>
          </div>
          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <input type="email" placeholder="Enter your email address" required />
            <button type="submit">Subscribe →</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Home;
