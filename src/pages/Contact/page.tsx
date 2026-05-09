import { useState } from 'react';
import { useEffect } from 'react';

function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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

  const submitContact = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent! We'll reply within 2 hours ✓");
    (e.target as HTMLFormElement).reset();
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const showToast = (message: string) => {
    alert(message);
  };

  const faqs = [
    {
      question: 'Do you offer installment plans?',
      answer:
        'Yes! We offer 0% installment plans via HBL, UBL, and Meezan Bank on purchases above Rs. 50,000. Apply at checkout.',
    },
    {
      question: 'How long does delivery take?',
      answer:
        'Islamabad/Rawalpindi: Same day. Lahore/Karachi: 1–2 business days. Other cities: 2–3 business days.',
    },
    {
      question: 'What is your return policy?',
      answer:
        '7-day hassle-free returns on all products in original sealed condition. Manufacturing defects covered for full warranty period.',
    },
    {
      question: 'Are products genuine / warranty sealed?',
      answer:
        '100% yes. Every product comes manufacturer-sealed with official Pakistan warranty. We do not stock grey-market items.',
    },
    {
      question: 'Do you offer bulk / corporate pricing?',
      answer:
        'Yes! For orders of 5+ units, contact our corporate sales team at corporate@lapelite.pk for special pricing and dedicated support.',
    },
  ];

  return (
    <div className="page">
      <div className="section-header contact-header">
        <span className="badge">📬 Get in Touch</span>
        <h1>
          We'd Love to <span className="text-gradient">Hear</span> From You
        </h1>
        <p>
          Whether you need product advice, support, or have a business inquiry — our team is
          ready.
        </p>
      </div>

      {/* Info Cards */}
      <div className="card-container contact-cards">
        <div className="card contact-info">
          <div className="icon-circle">📞</div>
          <div className="card-body">
            <h3>Phone</h3>
            <p>+92 51 123 4567</p>
            <p>Mon–Sat, 9am–8pm</p>
          </div>
        </div>
        <div className="card contact-info">
          <div className="icon-circle">✉️</div>
          <div className="card-body">
            <h3>Email</h3>
            <p>support@lapelite.pk</p>
            <p>Reply within 2 hours</p>
          </div>
        </div>
        <div className="card contact-info">
          <div className="icon-circle">📍</div>
          <div className="card-body">
            <h3>Showroom</h3>
            <p>Blue Area, Jinnah Ave</p>
            <p>Islamabad, Pakistan</p>
          </div>
        </div>
        <div className="card contact-info">
          <div className="icon-circle">💬</div>
          <div className="card-body">
            <h3>Live Chat</h3>
            <p>Available 24/7</p>
            <button className="sm-button" onClick={() => showToast('Chat started! 💬')}>
              Start Chat
            </button>
          </div>
        </div>
      </div>

      {/* Form + FAQ Layout */}
      <div className="contact-body">
        {/* Contact Form */}
        <div>
          <h2>Send Us a Message</h2>
          <div className="form-container">
            <form id="contactForm" onSubmit={submitContact}>
              <div className="form-row">
                <div>
                  <label htmlFor="contactName">Full Name</label>
                  <input type="text" id="contactName" placeholder="Ahmed Khan" required />
                </div>
                <div>
                  <label htmlFor="contactPhone">Phone</label>
                  <input type="tel" id="contactPhone" placeholder="+92 300 0000000" />
                </div>
              </div>
              <div>
                <label htmlFor="contactEmail">Email Address</label>
                <input
                  type="email"
                  id="contactEmail"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="contactSubject">Subject</label>
                <div className="select-container">
                  <select id="contactSubject">
                    <option>Product Inquiry</option>
                    <option>Order Support</option>
                    <option>Repair & Service</option>
                    <option>Warranty Claim</option>
                    <option>Business / Bulk Order</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="contactMsg">Message</label>
                <textarea
                  id="contactMsg"
                  placeholder="Tell us how we can help…"
                  required
                ></textarea>
              </div>
              <div className="form-submit">
                <button type="submit">Send Message →</button>
              </div>
            </form>
          </div>
        </div>

        {/* FAQ */}
        <div>
          <h2>Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div className="card faq-item" key={index}>
                <h4 onClick={() => toggleFaq(index)}>
                  {faq.question} ▾
                </h4>
                <p style={{ display: openFaq === index ? 'block' : 'none' }}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
