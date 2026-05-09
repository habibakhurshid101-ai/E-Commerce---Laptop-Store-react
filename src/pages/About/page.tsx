import { useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div>
          <div>
            <span className="badge">🏢 Our Story</span>
            <h1>
              Pakistan's Most <span className="text-gradient">Trusted</span> Laptop Store
            </h1>
            <p>
              Founded in 2019 in Islamabad, LapElite was born from a simple belief — every
              Pakistani deserves access to world-class technology at fair prices, backed by
              genuine support.
            </p>
            <div>
              <button className="lg-button" onClick={() => navigate('/products')}>
                Shop Now
              </button>
              <button className="lg-button border-button" onClick={() => navigate('/contact')}>
                Contact Us
              </button>
            </div>
          </div>
          <div>
            <div>
              <img src="/img1.avif" alt="LapElite Store" />
            </div>
          </div>
        </div>
      </section>

      <div className="page">
        {/* Stats */}
        <div className="stats-row about-stats">
          <div className="stat-item">
            <h2>2019</h2>
            <p>Year Founded</p>
          </div>
          <div className="stat-item">
            <h2>80K+</h2>
            <p>Happy Customers</p>
          </div>
          <div className="stat-item">
            <h2>500+</h2>
            <p>Products</p>
          </div>
          <div className="stat-item">
            <h2>15+</h2>
            <p>Brands</p>
          </div>
          <div className="stat-item">
            <h2>6</h2>
            <p>Cities</p>
          </div>
        </div>

        {/* Mission & Values */}
        <div className="section-header">
          <h2>Our Values</h2>
          <p>The principles that guide everything we do</p>
        </div>
        <div className="card-container">
          <div className="card values-card">
            <div className="icon-circle">💎</div>
            <div className="card-body">
              <h3>Authenticity</h3>
              <p>
                Every product is 100% genuine with official manufacturer warranty. No grey-market
                items ever.
              </p>
            </div>
          </div>
          <div className="card values-card">
            <div className="icon-circle">🤝</div>
            <div className="card-body">
              <h3>Transparency</h3>
              <p>
                Clear pricing, no hidden fees, honest specs. We say what we mean and stand behind
                our products.
              </p>
            </div>
          </div>
          <div className="card values-card">
            <div className="icon-circle">🚀</div>
            <div className="card-body">
              <h3>Innovation</h3>
              <p>
                Always stocking the latest models, continuously improving our platform and
                services.
              </p>
            </div>
          </div>
          <div className="card values-card">
            <div className="icon-circle">❤️</div>
            <div className="card-body">
              <h3>Customer First</h3>
              <p>
                Our support team is trained to solve problems fast. Your satisfaction is our
                success metric.
              </p>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="section-header team-header">
          <h2>Meet the Team</h2>
          <p>The people behind LapElite</p>
        </div>
        <div className="card-container">
          <div className="card team-card" data-color="blue">
            <div>👨‍💼</div>
            <div className="card-body">
              <h3>Usman Tariq</h3>
              <p>Founder & CEO</p>
              <p>10+ yrs in tech retail. Former Dell Pakistan country manager.</p>
            </div>
          </div>
          <div className="card team-card" data-color="purple">
            <div>👩‍💻</div>
            <div className="card-body">
              <h3>Sana Malik</h3>
              <p>Head of Technology</p>
              <p>Full-stack engineer with expertise in e-commerce infrastructure.</p>
            </div>
          </div>
          <div className="card team-card" data-color="sky">
            <div>👨‍🔧</div>
            <div className="card-body">
              <h3>Ali Raza</h3>
              <p>Service Manager</p>
              <p>Certified technician with 8 years of laptop repair experience.</p>
            </div>
          </div>
          <div className="card team-card" data-color="green">
            <div>👩‍🎨</div>
            <div className="card-body">
              <h3>Hira Baig</h3>
              <p>Marketing Lead</p>
              <p>Brand strategist who grew LapElite's social presence to 200K+.</p>
            </div>
          </div>
        </div>

        {/* Join CTA */}
        <div className="section cta-section">
          <div className="newsletter-strip">
            <div>
              <h2>Join the LapElite Family</h2>
              <p>Shop smarter, get exclusive member deals, and expert support — always.</p>
            </div>
            <div>
              <button className="lg-button" onClick={() => navigate('/signup')}>
                Create Account →
              </button>
              <button className="lg-button border-button" onClick={() => navigate('/products')}>
                Browse Products
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
