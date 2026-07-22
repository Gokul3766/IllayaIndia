
import "./Parliament.css";
import parliamentHero from "../../assets/parliament_hero.png";
import teashopNewspaper from "../../assets/teashop_newspaper.png";
import portraitDriver from "../../assets/portrait-driver.png";
import heroTeaShopkeeper from "../../assets/hero-tea-shopkeeper.png";
import portraitStudent from "../../assets/portrait-student.png";
import portraitFarmer from "../../assets/portrait-farmer.png";
import portraitWoman from "../../assets/portrait-woman.png";
import portraitLabour from "../../assets/portrait-labour.png";
import tnMap from "../../assets/tn_map.png";
import aboutCtaSilhouette from "../../assets/about_cta_silhouette.png";
import illayaLogo from "../../assets/illaya-logo.png";
import { 
  Users, 
  MessageSquareMore, 
  Lightbulb, 
  CheckCircle2, 
  Megaphone, 
  ClipboardCheck, 
  ArrowRight, 
  User,
  Play,
  MapPin,
  Heart,
  Scale
} from "lucide-react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

/* ── Stats Data for Second Section ── */
const statsData = [
  {
    id: 1,
    icon: Users,
    number: "2,45,678+",
    label: "பதிவு செய்த மக்கள்",
  },
  {
    id: 2,
    icon: MessageSquareMore,
    number: "18,543+",
    label: "கேள்விகள்\nகேட்கப்பட்டுள்ளன",
  },
  {
    id: 3,
    icon: Lightbulb,
    number: "7,892+",
    label: "தீர்வுகள்\nபரிந்துரைக்கப்பட்டுள்ளன",
  },
  {
    id: 4,
    icon: CheckCircle2,
    number: "1,256+",
    label: "செயல்படுத்தப்பட்ட\nதீர்வுகள்",
  },
  {
    id: 5,
    icon: Users,
    number: "38",
    label: "மக்கள் நாடாளுமன்ற கூட்டங்கள்\nநடைபெற்றுள்ளது",
  },
];

/* ── Section 4: People's Voice Data ── */
const voicesData = [
  {
    id: 1,
    role: "AUTO DRIVER",
    quote: '"நாங்கள் உழைக்க விரும்புகிறோம், வாய்ப்பு வேண்டும்."',
    duration: "0:45",
    image: portraitDriver,
  },
  {
    id: 2,
    role: "DOMESTIC WORKER",
    quote: '"நாங்கள் செய்யும் வேலைக்கு மரியாதை வேண்டும்."',
    duration: "0:38",
    image: heroTeaShopkeeper,
  },
  {
    id: 3,
    role: "STUDENT",
    quote: '"கல்வி இருக்கிறது, வேலை வாய்ப்பு எங்கே?"',
    duration: "0:40",
    image: portraitStudent,
  },
  {
    id: 4,
    role: "FARMER",
    quote: '"விவசாயிக்கு நியாயமான விலை வேண்டும்."',
    duration: "0:42",
    image: portraitFarmer,
  },
  {
    id: 5,
    role: "WOMAN",
    quote: '"பெண்களுக்கு பாதுகாப்பான சமூகம் வேண்டும்."',
    duration: "0:41",
    image: portraitWoman,
  },
  {
    id: 6,
    role: "LABOUR",
    quote: '"நாங்கள் கட்டும் நாடு எங்களுக்கே இல்லையா?"',
    duration: "0:39",
    image: portraitLabour,
  },
];

/* ── Main Component ── */
const Parliament = () => {
  return (
    <div className="parliament-page">
      {/* ─── HERO SECTION ─── */}
      <section className="parliament-hero-section" id="parliament-hero">
        <div className="parliament-hero-container">
          {/* Left – Text content */}
          <div className="parliament-hero-left">
            <div className="parliament-hero-left-content">
              <span className="parliament-tag">People's Parliament</span>
              <h1 className="parliament-hero-title">
                மக்களின் குரல் தான்
                <span className="parliament-hero-title-highlight">
                  எங்கள் வழிகாட்டி!
                </span>
              </h1>
              <p className="parliament-hero-description">
                இந்த நாடு மக்களால்தான் உருவானது.
                <br />
                இந்த நாட்டின் எதிர்காலத்தை தீர்மானிப்பதும்{" "}
                மக்களாகிய நீங்கள்தான்.
                <br />
                எங்கள் People's Parliament – உங்கள் குரலுக்கு ஒரு மேடை,
                <br />
                உங்கள் பிரச்சினைக்கு ஒரு தீர்வு, உங்கள் கனவுக்கு ஒரு திட்டம்.
              </p>
            </div>
          </div>

          {/* Right – Hero image */}
          <div className="parliament-hero-right">
            <img
              src={parliamentHero}
              alt="People's Parliament – Leader addressing the crowd"
              className="parliament-hero-image"
            />

            {/* Tea-shop newspaper badge */}
            <div className="parliament-teashop-badge">
              <img
                src={teashopNewspaper}
                alt="Tea Shop Assembly Today Tamil Nadu"
              />
            </div>

            {/* Quote bubble */}
            <div className="parliament-quote-bubble">
              <p className="parliament-quote-text">
                நாங்கள் பேசமாட்டோம்
                <br />
                நாங்கள் கேட்போம்!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 2: STATS COUNTER BAR ─── */}
      <section className="parliament-stats-section" id="parliament-stats">
        <div className="parliament-stats-card">
          {statsData.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={stat.id} className="parliament-stat-item">
                <div className="parliament-stat-icon-wrapper">
                  <IconComponent className="parliament-stat-icon-svg" />
                </div>
                <div className="parliament-stat-info">
                  <span className="parliament-stat-number">{stat.number}</span>
                  <span className="parliament-stat-label">{stat.label}</span>
                </div>
                {index < statsData.length - 1 && (
                  <div className="parliament-stat-divider" />
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── SECTION 3: HOW IT WORKS & LIVE POLL ─── */}
      <section className="parliament-interactive-section" id="parliament-interactive">
        <div className="parliament-interactive-container">
          
          {/* Left Card: How People's Parliament Works */}
          <div className="parliament-card parliament-workflow-card">
            <h2 className="parliament-card-title">
              மக்கள் நாடாளுமன்றம் எப்படி செயல்படுகிறது?
            </h2>

            <div className="parliament-workflow-steps">
              {/* Step 1 */}
              <div className="parliament-workflow-step">
                <div className="parliament-step-icon-circle">
                  <Megaphone className="parliament-step-icon" />
                </div>
                <h3 className="parliament-step-title">கேளுங்கள்</h3>
                <p className="parliament-step-desc">
                  உங்கள் பிரச்சினைகளை<br />பதிவு செய்யுங்கள்
                </p>
              </div>

              <div className="parliament-step-arrow">
                <ArrowRight className="parliament-arrow-icon" />
              </div>

              {/* Step 2 */}
              <div className="parliament-workflow-step">
                <div className="parliament-step-icon-circle">
                  <Users className="parliament-step-icon" />
                </div>
                <h3 className="parliament-step-title">பகிருங்கள்</h3>
                <p className="parliament-step-desc">
                  மக்களுடன் பகிர்ந்து<br />ஆதரவு பெறுங்கள்
                </p>
              </div>

              <div className="parliament-step-arrow">
                <ArrowRight className="parliament-arrow-icon" />
              </div>

              {/* Step 3 */}
              <div className="parliament-workflow-step">
                <div className="parliament-step-icon-circle">
                  <Lightbulb className="parliament-step-icon" />
                </div>
                <h3 className="parliament-step-title">தீர்வு காணுங்கள்</h3>
                <p className="parliament-step-desc">
                  மக்கள் இணைந்து<br />தீர்வுகளை பரிந்துரையுங்கள்
                </p>
              </div>

              <div className="parliament-step-arrow">
                <ArrowRight className="parliament-arrow-icon" />
              </div>

              {/* Step 4 */}
              <div className="parliament-workflow-step">
                <div className="parliament-step-icon-circle">
                  <ClipboardCheck className="parliament-step-icon" />
                </div>
                <h3 className="parliament-step-title">செயல்படுத்துங்கள்</h3>
                <p className="parliament-step-desc">
                  சிறந்த தீர்வுகள்<br />செயல்படுத்தப்படும்
                </p>
              </div>
            </div>
          </div>

          {/* Right Card: Today's People Question / Live Poll */}
          <div className="parliament-card parliament-poll-card">
            <div className="parliament-poll-header">
              <span className="parliament-poll-subtitle">இன்றைய மக்கள் கேள்வி</span>
              <span className="parliament-live-badge">
                <span className="parliament-live-dot" /> LIVE
              </span>
            </div>

            <h2 className="parliament-poll-question">
              தமிழ்நாட்டில் முதலில் எந்த பிரச்சினை தீர்க்கப்பட வேண்டும்?
            </h2>

            <div className="parliament-poll-options">
              {/* Option 1 */}
              <div className="parliament-poll-item">
                <span className="parliament-poll-label">வேலைவாய்ப்பு</span>
                <div className="parliament-poll-bar-wrapper">
                  <div className="parliament-poll-bar-fill" style={{ width: "38%" }} />
                </div>
                <span className="parliament-poll-percent">38%</span>
              </div>

              {/* Option 2 */}
              <div className="parliament-poll-item">
                <span className="parliament-poll-label">கல்வி</span>
                <div className="parliament-poll-bar-wrapper">
                  <div className="parliament-poll-bar-fill" style={{ width: "25%" }} />
                </div>
                <span className="parliament-poll-percent">25%</span>
              </div>

              {/* Option 3 */}
              <div className="parliament-poll-item">
                <span className="parliament-poll-label">விலைவாசி / வாழ்வாதாரம்</span>
                <div className="parliament-poll-bar-wrapper">
                  <div className="parliament-poll-bar-fill" style={{ width: "20%" }} />
                </div>
                <span className="parliament-poll-percent">20%</span>
              </div>

              {/* Option 4 */}
              <div className="parliament-poll-item">
                <span className="parliament-poll-label">சுகாதாரம்</span>
                <div className="parliament-poll-bar-wrapper">
                  <div className="parliament-poll-bar-fill" style={{ width: "10%" }} />
                </div>
                <span className="parliament-poll-percent">10%</span>
              </div>

              {/* Option 5 */}
              <div className="parliament-poll-item">
                <span className="parliament-poll-label">மற்றவை</span>
                <div className="parliament-poll-bar-wrapper">
                  <div className="parliament-poll-bar-fill" style={{ width: "7%" }} />
                </div>
                <span className="parliament-poll-percent">7%</span>
              </div>
            </div>

            <div className="parliament-poll-footer">
              <div className="parliament-poll-voters">
                <User className="parliament-voter-icon" />
                <span>27,654 பேர் வாக்களித்துள்ளனர்</span>
              </div>
              <button className="parliament-vote-btn">வாக்களிக்க</button>
            </div>
          </div>

        </div>
      </section>

      {/* ─── SECTION 4: PEOPLE'S VOICE ─── */}
      <section className="parliament-voice-section" id="parliament-voice">
        <div className="parliament-voice-container">
          {/* Section Outer Card Wrapper */}
          <div className="parliament-voice-card-wrapper">
            {/* Section Header */}
            <div className="parliament-voice-header">
              <h2 className="parliament-voice-title">
                மக்களின் குரல்{" "}
                <span className="parliament-voice-title-en">(PEOPLE'S VOICE)</span>
              </h2>
              <a href="#all-voices" className="parliament-voice-see-all">
                அனைத்தையும் பார்க்க <ArrowRight className="parliament-see-all-icon" />
              </a>
            </div>

            {/* Cards Grid */}
            <div className="parliament-voice-grid">
              {voicesData.map((item) => (
                <div key={item.id} className="parliament-voice-card">
                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.role}
                    className="parliament-voice-img"
                  />

                  {/* Overlay gradient */}
                  <div className="parliament-voice-overlay" />

                  {/* Play Button */}
                  <button
                    className="parliament-voice-play-btn"
                    aria-label={`Play ${item.role} video`}
                  >
                    <Play className="parliament-play-icon" />
                  </button>

                  {/* Text Content */}
                  <div className="parliament-voice-info">
                    <span className="parliament-voice-role">{item.role}</span>
                    <p className="parliament-voice-quote">{item.quote}</p>
                    <span className="parliament-voice-duration">
                      {item.duration}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 5: PEOPLE'S AGENDA & LIVE MAP ─── */}
      <section className="parliament-agenda-section" id="parliament-agenda">
        <div className="parliament-agenda-container">
          
          {/* Left Card: People's Agenda */}
          <div className="parliament-card parliament-agenda-card">
            <h2 className="parliament-card-title">
              மக்கள் முன்னுரிமை பட்டியல்{" "}
              <span className="parliament-card-title-en">(PEOPLE'S AGENDA)</span>
            </h2>

            <div className="parliament-agenda-body">
              {/* Left Column: Top 5 Priorities */}
              <div className="parliament-agenda-list-col">
                <div className="parliament-agenda-items">
                  <div className="parliament-agenda-item">
                    <span className="parliament-agenda-badge">1</span>
                    <span className="parliament-agenda-label">வேலைவாய்ப்பு உருவாக்கம்</span>
                    <span className="parliament-agenda-count">12,356 ஆதரவு</span>
                  </div>
                  <div className="parliament-agenda-item">
                    <span className="parliament-agenda-badge">2</span>
                    <span className="parliament-agenda-label">தரமான அரசு பள்ளிகள்</span>
                    <span className="parliament-agenda-count">9,856 ஆதரவு</span>
                  </div>
                  <div className="parliament-agenda-item">
                    <span className="parliament-agenda-badge">3</span>
                    <span className="parliament-agenda-label">மருத்துவ வசதிகள் மேம்பாடு</span>
                    <span className="parliament-agenda-count">8,743 ஆதரவு</span>
                  </div>
                  <div className="parliament-agenda-item">
                    <span className="parliament-agenda-badge">4</span>
                    <span className="parliament-agenda-label">விவசாய கடன் தள்ளுபடி</span>
                    <span className="parliament-agenda-count">7,654 ஆதரவு</span>
                  </div>
                  <div className="parliament-agenda-item">
                    <span className="parliament-agenda-badge">5</span>
                    <span className="parliament-agenda-label">விலைவாசி கட்டுப்பாடு</span>
                    <span className="parliament-agenda-count">6,432 ஆதரவு</span>
                  </div>
                </div>

                <button className="parliament-agenda-btn">
                  உங்கள் முன்னுரிமையை சேர்க்கவும்
                </button>
              </div>

              {/* Right Column: Crowd Banner */}
              <div className="parliament-center-banner">
                <img
                  src={parliamentHero}
                  alt="Your voice turns into tomorrow's plan"
                  className="parliament-center-banner-img"
                />
                <div className="parliament-center-banner-overlay" />
                <div className="parliament-center-banner-text">
                  <p className="parliament-center-line1">உங்கள் குரல்</p>
                  <p className="parliament-center-line2">நாளைய திட்டமாக</p>
                  <p className="parliament-center-line3">மாற்றும்!</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Card: Live Map */}
          <div className="parliament-card parliament-map-card">
            <h2 className="parliament-card-title">
              மக்கள் பிரச்சினை வரைபடம்{" "}
              <span className="parliament-card-title-en">(LIVE MAP)</span>
            </h2>

            <div className="parliament-map-body">
              <div className="parliament-map-visual-col">
                <div className="parliament-map-wrapper">
                  <img
                    src={tnMap}
                    alt="Tamil Nadu Live Issues Map"
                    className="parliament-map-img"
                  />
                  <div className="parliament-map-pin pin-chennai">
                    <MapPin className="parliament-pin-icon red" />
                    <span className="parliament-pin-pulse red" />
                  </div>
                  <div className="parliament-map-pin pin-madurai">
                    <MapPin className="parliament-pin-icon gold" />
                    <span className="parliament-pin-pulse gold" />
                  </div>
                  <div className="parliament-map-pin pin-coimbatore">
                    <MapPin className="parliament-pin-icon red" />
                    <span className="parliament-pin-pulse red" />
                  </div>
                  <div className="parliament-map-pin pin-salem">
                    <MapPin className="parliament-pin-icon gold" />
                    <span className="parliament-pin-pulse gold" />
                  </div>
                  <div className="parliament-map-pin pin-tirunelveli">
                    <MapPin className="parliament-pin-icon green" />
                    <span className="parliament-pin-pulse green" />
                  </div>
                </div>
              </div>

              <div className="parliament-map-stats-col">
                <div className="parliament-city-rows">
                  <div className="parliament-city-row">
                    <span className="parliament-city-name">சென்னை</span>
                    <span className="parliament-city-count">1,243 பிரச்சினைகள்</span>
                  </div>
                  <div className="parliament-city-row">
                    <span className="parliament-city-name">மதுரை</span>
                    <span className="parliament-city-count">987 பிரச்சினைகள்</span>
                  </div>
                  <div className="parliament-city-row">
                    <span className="parliament-city-name">கோயம்புத்தூர்</span>
                    <span className="parliament-city-count">876 பிரச்சினைகள்</span>
                  </div>
                  <div className="parliament-city-row">
                    <span className="parliament-city-name">சேலம்</span>
                    <span className="parliament-city-count">654 பிரச்சினைகள்</span>
                  </div>
                  <div className="parliament-city-row">
                    <span className="parliament-city-name">திருநெல்வேலி</span>
                    <span className="parliament-city-count">543 பிரச்சினைகள்</span>
                  </div>
                </div>

                <button className="parliament-map-btn">
                  உங்கள் பகுதி பிரச்சினையை பதிவு செய்யுங்கள்{" "}
                  <ArrowRight className="parliament-btn-arrow" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ─── SECTION 6: CTA + FOOTER BAR ─── */}
      <section className="parliament-cta-section" id="parliament-cta">
          {/* Single Unified Banner Card */}
          <div className="parliament-cta-card">
            <img
              src={aboutCtaSilhouette}
              alt="People raising hands silhouette"
              className="parliament-cta-bg-img"
            />
            <div className="parliament-cta-bg-overlay" />

            <div className="parliament-cta-inner">
              {/* Left: Quote + Values */}
              <div className="parliament-cta-left-content">
                <h2 className="parliament-cta-quote">
                  மக்களை மாற்ற வரவில்லை...
                </h2>
                <p className="parliament-cta-subquote">
                  "மக்களுடன் சேர்ந்து மாற்றத்தை உருவாக்க வருகிறோம்!"
                </p>

                <div className="parliament-cta-values">
                  <div className="parliament-cta-value">
                    <div className="parliament-cta-value-circle">
                      <Heart className="parliament-cta-value-icon" />
                    </div>
                    <span className="parliament-cta-value-label">மனிதம்</span>
                  </div>
                  <div className="parliament-cta-value">
                    <div className="parliament-cta-value-circle">
                      <Scale className="parliament-cta-value-icon" />
                    </div>
                    <span className="parliament-cta-value-label">சமத்துவம்</span>
                  </div>
                  <div className="parliament-cta-value">
                    <div className="parliament-cta-value-circle">
                      <Users className="parliament-cta-value-icon" />
                    </div>
                    <span className="parliament-cta-value-label">இளைஞர்கள்</span>
                  </div>
                  <div className="parliament-cta-value">
                    <div className="parliament-cta-value-circle parliament-cta-value-circle-tamil">
                      <span className="parliament-cta-tamil-letter">அ</span>
                    </div>
                    <span className="parliament-cta-value-label">தமிழ்</span>
                  </div>
                  <div className="parliament-cta-value">
                    <div className="parliament-cta-value-circle parliament-cta-value-circle-india">
                      <span className="parliament-cta-india-flag">🇮🇳</span>
                    </div>
                    <span className="parliament-cta-value-label">இந்தியா</span>
                  </div>
                </div>
              </div>

              {/* Right: Join CTA */}
              <div className="parliament-cta-right-content">
                <p className="parliament-cta-right-text">
                  நீங்களும் இந்த<br />
                  மாற்றத்தின் ஒரு பகுதியானுங்கள்!
                </p>
                <button className="parliament-cta-join-btn">
                  JOIN THE MOVEMENT <ArrowRight className="parliament-cta-join-arrow" />
                </button>
              </div>
            </div>
          </div>
      </section>

      {/* ─── FOOTER BAR ─── */}
      <div className="parliament-footer-bar">
        <div className="parliament-footer-bar-inner">
          {/* Left: Logo */}
          <div className="parliament-footer-brand">
            <img src={illayaLogo} alt="Illaya India" className="parliament-footer-logo" />
            <div className="parliament-footer-brand-text">
              <span className="parliament-footer-brand-name">ILLAYA INDIA</span>
              <span className="parliament-footer-brand-tagline">மனிதம் ஒன்றே போதும்</span>
            </div>
          </div>

          {/* Center: Social */}
          <div className="parliament-footer-social">
            <span className="parliament-footer-social-label">FOLLOW US</span>
            <div className="parliament-footer-social-icons">
              <a href="#" className="parliament-footer-social-icon fb" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#" className="parliament-footer-social-icon tw" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" className="parliament-footer-social-icon ig" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" className="parliament-footer-social-icon yt" aria-label="YouTube"><FaYoutube /></a>
              <a href="#" className="parliament-footer-social-icon wa" aria-label="WhatsApp">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
              <a href="#" className="parliament-footer-social-icon tg" aria-label="Telegram">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
              </a>
            </div>
          </div>

          {/* Right: Tagline */}
          <div className="parliament-footer-tagline">
            <span>HUMANITY <em>BEFORE EVERYTHING</em></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parliament;




