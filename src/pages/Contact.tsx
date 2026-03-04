export default function Contact() {
  return (
    <div className="contact-page">
      <div className="container">
        <div className="contact-content">
          <h1 className="page-title">Contact</h1>

          <div className="contact-info">
            <div className="contact-block">
              <h3>Email</h3>
              <p>
                <a href="mailto:hello@marrakechrugs.com">hello@marrakechrugs.com</a>
              </p>
            </div>

            <div className="contact-block">
              <h3>Studio</h3>
              <p>
                Marrakech Medina<br />
                Morocco
              </p>
            </div>

            <div className="contact-block">
              <h3>Follow</h3>
              <p>
                <a href="#">Instagram</a><br />
                <a href="#">Pinterest</a>
              </p>
            </div>
          </div>

          <div className="contact-note">
            <p>
              For inquiries about custom pieces, commissions, or trade accounts,
              please reach out via email. We typically respond within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
