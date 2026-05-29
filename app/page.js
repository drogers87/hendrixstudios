export default function Home() {
  return (
    <div className="wrap">
      <nav>
        <div className="brand"><span className="dot"></span> Hendrix Studios</div>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">Studio</a>
          <a href="/privacy">Privacy</a>
          <a href="mailto:support@hendrixstudios.com">Contact</a>
        </div>
      </nav>

      <header>
        <div className="eyebrow">Hendrix &amp; Co. LLC</div>
        <h1>Independent <em>software</em> studio.</h1>
        <p className="lede">We build focused, contemplative apps — small, intentional tools that respect your attention and do one thing well.</p>
      </header>

      <section className="work" id="work">
        <div className="section-label">Our Work</div>
        <div className="cards">
          <div className="card">
            <div className="card-icon pax">P</div>
            <h3>Pax <span className="status live">Live</span></h3>
            <p>Real-time, voice-activated support for the hardest moments of compulsive-behavior recovery. Built with clinicians, designed for the moment it matters most.</p>
            <a className="visit" href="https://projectpax.app" target="_blank" rel="noopener">projectpax.app →</a>
          </div>

          <div className="card">
            <div className="card-icon wise">W</div>
            <h3>Wise Alarm <span className="status soon">Coming soon</span></h3>
            <p>An alarm clock paired with daily readings from the book of Proverbs. The chapter you wake to each morning matches the day of the month.</p>
            <span className="soon-note">In development</span>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="section-label">The Studio</div>
        <div className="about-grid">
          <div className="about-meta">
            <strong>Hendrix &amp; Co. LLC</strong><br />
            Temecula, California<br /><br />
            Founded 2025<br />
            <a href="mailto:support@hendrixstudios.com">support@hendrixstudios.com</a>
          </div>
          <div>
            <p>Hendrix is a small studio with a simple belief: software should be calm, careful, and worth the time it asks for.</p>
          </div>
        </div>
      </section>

      <footer>
        <div className="foot-grid">
          <div>
            <div className="foot-brand">Hendrix Studios</div>
          </div>
          <div className="foot-meta">
            © 2026 Hendrix &amp; Co. LLC · Temecula, California<br />
            <a href="mailto:support@hendrixstudios.com">support@hendrixstudios.com</a> · <a href="/privacy">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
