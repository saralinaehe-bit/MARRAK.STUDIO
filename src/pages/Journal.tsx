export default function Journal() {
  return (
    <div className="journal-page">
      <div className="container">
        <h1 className="page-title">Our Story</h1>
        <p className="page-subtitle">The journey of MARRAK STUDIO</p>

        <div className="about-content-grid">
          <div className="about-image-large">
            <img
              src="https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Marrakech medina"
            />
          </div>

          <div className="about-text-block">
            <h2>Our Beginning</h2>
            <p>
              MARRAK STUDIO was founded in the heart of Marrakech's medina,
              where centuries of weaving tradition meet contemporary design
              sensibility. We began with a simple vision: to create rugs that
              honor Berber craftsmanship while speaking to modern aesthetics.
            </p>
            <p>
              Working closely with master weavers who have inherited their
              skills through generations, we bridge the gap between artisan
              tradition and architectural minimalism.
            </p>
          </div>

          <div className="about-text-block">
            <h2>Our Philosophy</h2>
            <p>
              We believe in the beauty of natural materials, neutral tones, and
              the subtle variations that make each handwoven rug unique. Our
              aesthetic is minimal yet warm, architectural yet inviting.
            </p>
            <p>
              Each piece tells a story of patient craftsmanship, sustainable
              materials, and the timeless appeal of Moroccan weaving traditions
              reimagined for contemporary spaces.
            </p>
          </div>

          <div className="about-image-large">
            <img
              src="https://images.pexels.com/photos/6207842/pexels-photo-6207842.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Handwoven rug detail"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
