import Link from "next/link";

const About = () => {
  return (
    <>
      <section className="about-section" id="about-section">
        <div className="about-header">
          <h3 className="h-color">Why Vois Records?</h3>
        </div>
        <div className="about-container">
          <div className="about-card">
            <div>
              <h4 className="h-color">📤 Upload Songs</h4>
              <p className="p-color">
                Your songs are carefully examined by our team. We upload/distribute to all platforms.
              </p>
              <hr />
            </div>
            <div>
              <h4 className="h-color">✉️ 24/7 Support</h4>
              <p className="p-color">
                Our commitment to our artists doesn’t stop after signing. Vois Records offers 24/7 support, providing you with assistance and guidance whenever you need it. We’re here for you, day or night, ensuring your music journey is seamless.
              </p>
              <hr />
            </div>
            <div>
              <h4 className="h-color">🚀 Promotion</h4>
              <p className="p-color">
                We offer you extraordinary possibilities to promote your songs.
              </p>
              <hr />
            </div>
          </div>
        </div>
        <p>
          <Link href="/services" className="h-color no-decoration">
            Our Services &rarr;
          </Link>
        </p>

        <section className="about-stats">
          <div className="about-stats-card">
            <h4 className="h-color">15+</h4>
            <p className="p-color">Artist</p>
          </div>
          <div className="about-stats-card">
            <h4 className="h-color">25M+</h4>
            <p className="p-color">Stream</p>
          </div>
          <div className="about-stats-card">
            <h4 className="h-color">20+</h4>
            <p className="p-color">Songs</p>
          </div>
        </section>
      </section>
    </>
  );
};

export default About;
