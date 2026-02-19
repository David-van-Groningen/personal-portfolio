import { Github, Linkedin, Mail, Code2, Gamepad2 } from 'lucide-react';

export default function Portfolio() {
  const traits = [
    "Friendly", "Analytical", "Athletic", "Creative",
    "Strategic", "Loyal", "Patient", "Reliable",
    "Punctual", "Responsible", "Precise", "Reflective",
    "Structured"
  ];

  const games = [
    "Super Smash Bros. Ultimate",
    "Mario Kart World",
    "Disney Illusion Island",
    "Red Dead Redemption 2",
    "Nintendo Switch Sports"
  ];

  return (
    <div className="portfolio">
      <div className="portfolio__noise"></div>

      <div className="portfolio__grid-bg"></div>

      <div className="portfolio__container">

        {/* HERO */}
        <header className="portfolio__hero">
          <div className="portfolio__hero-left">
            <span className="portfolio__label">Portfolio</span>
            <h1 className="portfolio__name">
              <span className="portfolio__name-first">David</span>
              <span className="portfolio__name-last">van Groningen</span>
            </h1>
            <div className="portfolio__role">
              <Code2 size={16} />
              <span>Software Developer in Training</span>
            </div>
          </div>

          <div className="portfolio__hero-right">
            <div className="portfolio__avatar">
              <img
                src="photo.jpg"
                alt="David van Groningen"
                className="portfolio__avatar-img"
              />
              <div className="portfolio__avatar-glow"></div>
            </div>
          </div>
        </header>

        {/* ABOUT */}
        <section className="portfolio__about">
          <div className="portfolio__about-marker">01</div>
          <div className="portfolio__about-body">
            <h2 className="portfolio__section-title">About</h2>
            <p className="portfolio__about-lead">
              I'm an <em>eager Software Developer</em> in training with a passion for building smart,
              scalable and user-friendly applications. Right now I'm focusing on <em>fullstack development</em>.
            </p>
            <p className="portfolio__about-sub">
              I get energy from solving technical challenges, collaborating in a team, and building
              applications that genuinely make a difference for the user. My ambition is to grow in IT —
              from fullstack development to potentially <em>data-driven roles</em>.
            </p>
          </div>
        </section>

        {/* TRAITS */}
        <section className="portfolio__traits-section">
          <div className="portfolio__traits-header">
            <div className="portfolio__about-marker">02</div>
            <h2 className="portfolio__section-title">Traits</h2>
          </div>
          <div className="portfolio__traits">
            {traits.map((trait, index) => (
              <span key={index} className="portfolio__trait">
                {trait}
              </span>
            ))}
          </div>
        </section>

        {/* GAMES + SPORTS */}
        <div className="portfolio__columns">
          <section className="portfolio__games">
            <div className="portfolio__about-marker">03</div>
            <h2 className="portfolio__section-title">
              <Gamepad2 size={22} />
              Favourite Games
            </h2>
            <ul className="portfolio__games-list">
              {games.map((game, index) => (
                <li key={index} className="portfolio__games-item">
                  <span className="portfolio__games-num">0{index + 1}</span>
                  <span>{game}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="portfolio__sports">
            <div className="portfolio__about-marker">04</div>
            <h2 className="portfolio__section-title">Sport &amp; Hobbies</h2>
            <div className="portfolio__sport-card">
              <div className="portfolio__sport-icon">🏸</div>
              <div>
                <h3 className="portfolio__sport-name">Badminton</h3>
                <p className="portfolio__sport-level">Enthusiast</p>
              </div>
            </div>
            <p className="portfolio__sport-desc">
              Badminton gives me energy and keeps me sharp. The speed and strategy of the game
              are great for developing reflexes and perseverance.
            </p>
          </section>
        </div>

        {/* CONTACT */}
        <section className="portfolio__contact">
          <div className="portfolio__contact-left">
            <div className="portfolio__about-marker">05</div>
            <h2 className="portfolio__contact-title">Let's Connect</h2>
            <p className="portfolio__contact-sub">
              Have an interesting project or want to know more about my work?
              I'd love to hear from you.
            </p>
            <a href="mailto:davidvangroningen29@gmail.com" className="portfolio__contact-email">
              <Mail size={16} />
              davidvangroningen29@gmail.com
            </a>
          </div>
          <div className="portfolio__contact-right">
            <a
              href="https://www.linkedin.com/in/david-van-groningen/"
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio__btn portfolio__btn--linkedin"
            >
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/David-van-Groningen"
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio__btn portfolio__btn--github"
            >
              <Github size={18} />
              <span>GitHub</span>
            </a>
          </div>
        </section>

        <footer className="portfolio__footer">
          <span>© 2026 David van Groningen</span>
          <span className="portfolio__footer-sep">·</span>
          <span>Built with React &amp; SASS</span>
        </footer>
      </div>
    </div>
  );
}
