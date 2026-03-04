export default function About() {
  return (
    <div className="about-page">
      <div className="container">
        <div className="about-hero">
          <h1 className="page-title">Trade</h1>
        </div>

        <div className="about-content-grid">
          <div className="about-image-large">
            <img
              src="https://images.pexels.com/photos/7031591/pexels-photo-7031591.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Artisan at work in Marrakech"
            />
          </div>

          <div className="about-text-block">
            <h2>Trade Program</h2>
            <p>
              MARRAK STUDIO works with interior designers, architects, and
              hospitality projects worldwide. We offer exclusive access to our
              curated collection and bespoke design services.
            </p>
            <p>
              Our trade program includes preferential pricing, custom sizing,
              and priority access to new collections. We can also work with you
              to create unique pieces tailored to your project specifications.
            </p>
          </div>

          <div className="about-text-block">
            <h2>Custom Commissions</h2>
            <p>
              We collaborate with our master weavers to create custom rugs that
              meet your exact requirements. From size and color to pattern and
              materials, every detail can be tailored to your vision.
            </p>
            <p>
              Custom pieces typically require 8-12 weeks from design approval
              to completion. Contact us to discuss your project and receive a
              detailed proposal.
            </p>
          </div>

          <div className="about-image-large">
            <img
              src="https://images.pexels.com/photos/4254159/pexels-photo-4254159.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Traditional weaving loom"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
