export default function About() {
  return (
    <div className="about-page">
      <div className="container">
        <div className="about-hero">
          <h1 className="page-title">About Marrakech</h1>
        </div>

        <div className="about-content-grid">
          <div className="about-image-large">
            <img
              src="https://images.pexels.com/photos/7031591/pexels-photo-7031591.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Artisan at work in Marrakech"
            />
          </div>

          <div className="about-text-block">
            <h2>Craftsmanship & Philosophy</h2>
            <p>
              We work with master weavers in the medina of Marrakech to create
              contemporary rugs that honor centuries-old Berber traditions. Each
              piece is handwoven using natural wool and time-honored techniques.
            </p>
            <p>
              Our aesthetic is minimal, architectural, and refined. We believe
              in the beauty of natural materials, neutral tones, and the subtle
              variations that make each rug unique.
            </p>
          </div>

          <div className="about-text-block">
            <h2>Materials & Process</h2>
            <p>
              We use only the finest natural wool, sourced from local cooperatives.
              Each rug takes weeks to complete, woven entirely by hand on traditional
              wooden looms.
            </p>
            <p>
              The wool is hand-dyed using natural pigments, resulting in rich,
              earthy tones that age beautifully over time. No two rugs are exactly
              alike.
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
