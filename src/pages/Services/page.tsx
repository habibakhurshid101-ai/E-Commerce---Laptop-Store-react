import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Services() {
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

  const showToast = (message: string) => {
    alert(message);
  };

  return (
    <>
      {/* Hero */}
      <section className="page-hero centered">
        <div>
          <span className="badge">⚙️ Premium Services</span>
          <h1>
            Tech Support You Can <span className="text-gradient">Trust</span>
          </h1>
          <p>
            From warranty coverage to expert repairs and cloud solutions — we keep your tech
            running at its best.
          </p>
          <button className="lg-button" onClick={() => navigate('/contact')}>
            Get a Quote →
          </button>
        </div>
      </section>

      <div className="page">
        {/* Service Cards */}
        <div className="section-header">
          <h2>Our Services</h2>
          <p>Comprehensive tech solutions for every need</p>
        </div>
        <div className="card-container">
          <div className="card service-card">
            <div className="icon-circle">🛡️</div>
            <div className="card-body">
              <h3>Warranty Plans</h3>
              <p>
                Extended 2–4 year warranty plans with on-site service and accidental damage
                coverage.
              </p>
              <div className="service-prices">
                <p>Basic — Rs. 5,000/yr</p>
                <p>Pro — Rs. 12,000/yr</p>
                <p className="highlight">Elite — Rs. 22,000/yr</p>
              </div>
              <button
                className="sm-button"
                onClick={() => showToast('Warranty plan request sent!')}
              >
                Get Plan
              </button>
            </div>
          </div>

          <div className="card service-card">
            <div className="icon-circle">🔧</div>
            <div className="card-body">
              <h3>Repair Services</h3>
              <p>
                Certified technicians for screen replacement, battery, motherboard and liquid
                damage repairs.
              </p>
              <div className="service-prices">
                <p>Screen Replacement from Rs. 8,000</p>
                <p>Battery from Rs. 4,500</p>
                <p>Diagnostics — Free</p>
              </div>
              <button
                className="sm-button"
                onClick={() => showToast('Repair request submitted!')}
              >
                Book Repair
              </button>
            </div>
          </div>

          <div className="card service-card">
            <div className="icon-circle">☁️</div>
            <div className="card-body">
              <h3>Cloud Backup</h3>
              <p>
                Secure cloud backup and recovery solutions. Never lose your data again with
                automated daily backups.
              </p>
              <div className="service-prices">
                <p>100GB — Rs. 2,000/yr</p>
                <p>1TB — Rs. 6,500/yr</p>
                <p className="highlight">5TB — Rs. 14,000/yr</p>
              </div>
              <button
                className="sm-button"
                onClick={() => showToast('Cloud plan activated!')}
              >
                Start Backup
              </button>
            </div>
          </div>

          <div className="card service-card">
            <div className="icon-circle">💻</div>
            <div className="card-body">
              <h3>IT Consulting</h3>
              <p>
                Expert guidance for business IT infrastructure, hardware procurement, and network
                setup.
              </p>
              <div className="service-prices">
                <p>1-hr session — Rs. 3,500</p>
                <p>Monthly retainer from Rs. 25,000</p>
              </div>
              <button
                className="sm-button"
                onClick={() => showToast('Consultation request sent!')}
              >
                Book Session
              </button>
            </div>
          </div>

          <div className="card service-card">
            <div className="icon-circle">🚀</div>
            <div className="card-body">
              <h3>Setup & Configuration</h3>
              <p>
                Professional OS installation, driver setup, software configuration and data
                migration services.
              </p>
              <div className="service-prices">
                <p>Basic setup — Rs. 2,000</p>
                <p>Data migration — Rs. 3,500</p>
              </div>
              <button
                className="sm-button"
                onClick={() => showToast('Setup request submitted!')}
              >
                Book Now
              </button>
            </div>
          </div>

          <div className="card service-card">
            <div className="icon-circle">🎧</div>
            <div className="card-body">
              <h3>24/7 Remote Support</h3>
              <p>
                Round-the-clock remote assistance via phone, chat or remote desktop for all
                technical issues.
              </p>
              <div className="service-prices">
                <p>Per incident — Rs. 1,500</p>
                <p className="highlight">Annual pass — Rs. 8,000/yr</p>
              </div>
              <button
                className="sm-button"
                onClick={() => showToast('Support plan activated!')}
              >
                Get Support
              </button>
            </div>
          </div>
        </div>

        {/* Support Plans Table */}
        <div className="section plans-section">
          <div className="section-header">
            <h2>Support Plan Comparison</h2>
            <p>Choose the right level of coverage for you</p>
          </div>
          <div className="table-container">
            <table id="plansTable" className="table-bordered">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Basic</th>
                  <th>Pro</th>
                  <th>Elite</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Warranty Period</td>
                  <td>1 Year</td>
                  <td>2 Years</td>
                  <td>4 Years</td>
                </tr>
                <tr>
                  <td>On-Site Service</td>
                  <td>—</td>
                  <td>✓</td>
                  <td>✓</td>
                </tr>
                <tr>
                  <td>Accidental Damage</td>
                  <td>—</td>
                  <td>—</td>
                  <td>✓</td>
                </tr>
                <tr>
                  <td>Remote Support</td>
                  <td>Business hrs</td>
                  <td>Business hrs</td>
                  <td>24/7</td>
                </tr>
                <tr>
                  <td>Response Time</td>
                  <td>5 days</td>
                  <td>2 days</td>
                  <td>Next day</td>
                </tr>
                <tr>
                  <td>Price / Year</td>
                  <td>Rs. 5,000</td>
                  <td>Rs. 12,000</td>
                  <td>Rs. 22,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA */}
        <div className="section cta-section">
          <div className="newsletter-strip">
            <div>
              <h2>Need a Custom Solution?</h2>
              <p>Our enterprise team is ready to design a package for your business.</p>
            </div>
            <div>
              <button className="lg-button" onClick={() => navigate('/contact')}>
                Contact Us →
              </button>
              <button
                className="lg-button border-button"
                onClick={() => showToast('Calling +92 51 1234567...')}
              >
                📞 Call Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
