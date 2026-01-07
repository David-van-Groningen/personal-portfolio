import { Github, Linkedin, Mail, Code2, Gamepad2, Target } from 'lucide-react';

export default function Portfolio() {
  const traits = [
    "Vriendelijk", "Analytisch", "Sportief", "Creatief",
    "Strategisch", "Loyaal", "Geduldig", "Betrouwbaar",
    "Punctueel", "Verantwoordelijk", "Nauwkeurig", "Reflectief",
    "Gestructureerd"
  ];

  const games = [
    "Super Smash Bros. Ultimate",
    "Mario Kart World",
    "Disney Illusion Island",
    "Red Dead Redemption 2",
    "Nintendo Switch Sports"
  ];

  const sports = [
    { name: "Badminton", icon: "🏸", level: "Enthousiast" }
  ];

  return (
    <div className="portfolio">
      <div className="portfolio__background">
        <div className="portfolio__orb portfolio__orb--1"></div>
        <div className="portfolio__orb portfolio__orb--2"></div>
        <div className="portfolio__orb portfolio__orb--3"></div>
      </div>

      <div className="portfolio__container">
        <div className="portfolio__card">
          <div className="portfolio__header">
            <div className="portfolio__avatar-wrapper">
              <div className="portfolio__avatar">
                <img 
                  src="/profilepicture.jpg"
                  alt="David van Groningen" 
                  className="portfolio__avatar-img"
                />
                <div className="portfolio__avatar-ring"></div>
              </div>
            </div>
            
            <div className="portfolio__header-content">
              <div className="portfolio__name-wrapper">
                <h1 className="portfolio__name">David van Groningen</h1>
                <div className="portfolio__title-badge">
                  <Code2 size={20} className="portfolio__title-icon" />
                  <span>Software Developer in Opleiding</span>
                </div>
              </div>
              
              <div className="portfolio__buttons">
                <a
                  href="https://www.linkedin.com/in/david-van-groningen/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portfolio__button portfolio__button--linkedin"
                >
                  <Linkedin size={20} />
                  <span>LinkedIn</span>
                </a>
                
                <a
                  href="https://github.com/David-van-Groningen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portfolio__button portfolio__button--github"
                >
                  <Github size={20} />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>

          <section className="portfolio__section portfolio__section--about">
            <div className="portfolio__section-header">
              <Target size={28} className="portfolio__section-icon" />
              <h2 className="portfolio__section-title">Over Mij</h2>
            </div>
            <div className="portfolio__section-content">
              <p className="portfolio__intro">
                Ik ben een <strong>leergierige Software Developer</strong> in opleiding met een passie voor het bouwen van slimme, 
                schaalbare en gebruiksvriendelijke applicaties. Op dit moment richt ik me vooral op <strong>fullstack development</strong>.
              </p>
              <p>
                Ik krijg energie van het oplossen van technische vraagstukken, samenwerken in een team en het bouwen 
                van toepassingen die écht iets betekenen voor de gebruiker. Mijn ambitie is om te groeien in de IT – 
                van fullstack development tot mogelijk ook <strong>datagedreven rollen</strong>.
              </p>
            </div>
          </section>

          <section className="portfolio__section">
            <div className="portfolio__section-header">
              <h2 className="portfolio__section-title">Eigenschappen</h2>
            </div>
            <div className="portfolio__traits">
              {traits.map((trait, index) => (
                <span key={index} className="portfolio__trait-badge">
                  {trait}
                </span>
              ))}
            </div>
          </section>

          <div className="portfolio__grid">
            <div className="portfolio__section portfolio__section--games">
              <div className="portfolio__section-header">
                <Gamepad2 size={28} className="portfolio__section-icon" />
                <h2 className="portfolio__section-title">Favoriete Games</h2>
              </div>
              <ul className="portfolio__list">
                {games.map((game, index) => (
                  <li key={index} className="portfolio__list-item">
                    <span className="portfolio__list-icon">🎮</span>
                    <span>{game}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="portfolio__section portfolio__section--sports">
              <div className="portfolio__section-header">
                <h2 className="portfolio__section-title">Sport &amp; Hobby&apos;s</h2>
              </div>
              <div className="portfolio__sports-grid">
                {sports.map((sport, index) => (
                  <div key={index} className="portfolio__sport-card">
                    <div className="portfolio__sport-icon">{sport.icon}</div>
                    <div className="portfolio__sport-info">
                      <h3 className="portfolio__sport-name">{sport.name}</h3>
                      <p className="portfolio__sport-level">{sport.level}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="portfolio__sports-description">
                Badminton geeft mij energie en helpt me om scherp te blijven. De snelheid en strategie van het spel 
                vind ik geweldig – perfect voor het ontwikkelen van reactievermogen en doorzettingsvermogen.
              </p>
            </div>
          </div>

          <section className="portfolio__section portfolio__section--contact">
            <div className="portfolio__section-header">
              <Mail size={28} className="portfolio__section-icon" />
              <h2 className="portfolio__section-title">Neem Contact Op</h2>
            </div>
            <div className="portfolio__contact-wrapper">
              <p className="portfolio__contact-text">
                Heb je een interessant project of wil je meer weten over mijn werk? 
                Ik hoor graag van je!
              </p>
              <a
                href="mailto:davidvangroningen29@gmail.com"
                className="portfolio__contact-link"
              >
                <Mail size={20} className="portfolio__contact-icon" />
                <span className="portfolio__contact-email">davidvangroningen29@gmail.com</span>
              </a>
            </div>
          </section>
        </div>

        <footer className="portfolio__footer">
          <p>&copy; 2026 David van Groningen. Built with React &amp; SASS</p>
        </footer>
      </div>
    </div>
  );
}