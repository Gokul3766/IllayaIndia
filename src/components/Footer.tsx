import illayaLogo from "../assets/illaya-logo.png";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container-fluid px-4">
        <div
          className="footer-content mx-auto"
          style={{ maxWidth: "1400px" }}
        >
          <div className="footer-quotes">
            <p className="footer-quote-tamil">
              <span className="footer-quote-white">
                "நாங்கள் ஆட்சி செய்ய வரவில்லை...
              </span>
              <br />
              <span className="footer-quote-gold">
                மக்களுடன் சேர்ந்து ஒரு புதிய இந்தியாவை உருவாக்க வருகிறோம்."
              </span>
            </p>
            <p className="footer-quote-english">
              WE ARE NOT HERE TO RULE, WE ARE HERE TO BUILD A NEW INDIA WITH
              PEOPLE.
            </p>
          </div>

          <div className="footer-branding">
            <img
              src={illayaLogo}
              alt="Illaya India Logo"
              className="footer-logo-img"
            />
            <div className="footer-brand-text">
              <h2 className="footer-brand-title">ILLAYA INDIA</h2>
              <p className="footer-brand-subtitle">மனிதம் ஒன்றே போதும்</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
