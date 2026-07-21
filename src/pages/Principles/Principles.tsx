import "./Principles.css";
import visionHeroBg from "../../assets/vision_hero_bg.png";
import aboutCtaSilhouette from "../../assets/about_cta_silhouette.png";
import illayaLogo from "../../assets/illaya-logo.png";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
import { 
  Users, 
  Handshake, 
  Target, 
  ShieldCheck, 
  Heart, 
  Scale, 
  Globe, 
  GraduationCap, 
  Leaf,
  Ear,
  ClipboardList,
  Search,
  Settings,
  ArrowRight,
  Check,
  Landmark,
  Sunrise
} from "lucide-react";

import identityHumanity from "../../assets/identity_humanity.png";
import identityDravidian from "../../assets/identity_dravidian.png";
import identityPeople from "../../assets/identity_people.png";
import identityTamil from "../../assets/identity_tamil.png";
import identityIndiaUnity from "../../assets/identity_india_unity.png";
import promise4Img from "../../assets/promise_4_action.png";
import heroFarmer from "../../assets/hero-farmer.png";
import portraitWoman from "../../assets/portrait-woman.png";
import heroStudent from "../../assets/hero-student.png";
import promise5Img from "../../assets/promise_5_sustain.png";

const Principles = () => {
  const processSteps = [
    {
      icon: <Ear size={34} strokeWidth={1.5} />,
      title: "கேட்போம்",
      desc: "மக்களின் பிரச்சினைகளை நேரடியாக கேட்போம்.",
    },
    {
      icon: <ClipboardList size={34} strokeWidth={1.5} />,
      title: "பதிவு செய்வோம்",
      desc: "ஒவ்வொரு பிரச்சினையும் பதிவு செய்யப்படும்.",
    },
    {
      icon: <Search size={34} strokeWidth={1.5} />,
      title: "ஆதார தேடுவோம்",
      desc: "ஆய்வு செய்து சிறந்த தீர்வுகளை உருவாக்குவோம்.",
    },
    {
      icon: <Settings size={34} strokeWidth={1.5} />,
      title: "செயல்படுத்துவோம்",
      desc: "திட்டமிட்டு செய்து காட்டுவோம்.",
    },
    {
      icon: <Users size={34} strokeWidth={1.5} />,
      title: "மீண்டும் மக்களிடம் விளக்கம் அளிப்போம்",
      desc: "மக்கள் அறிந்து மதிப்பிடுவார்கள்.",
    },
  ];

  const principleCards = [
    {
      icon: <Users size={32} strokeWidth={1.5} />,
      text: (
        <>
          மக்களுடன்<br />இணைந்து
        </>
      ),
    },
    {
      icon: <Handshake size={32} strokeWidth={1.5} />,
      text: (
        <>
          மக்களுக்காக<br />செயல்பட்டு
        </>
      ),
    },
    {
      icon: <Target size={32} strokeWidth={1.5} />,
      text: (
        <>
          மக்களின் வாழ்க்கையை<br />மாற்றுவோம்
        </>
      ),
    },
    {
      icon: <ShieldCheck size={32} strokeWidth={1.5} />,
      text: (
        <>
          నేర్மை, வெளிப்படைமை,<br />பொறுப்புடன் செயல்படுவோம்
        </>
      ),
    },
  ];

  const corePrinciples = [
    {
      number: "01",
      img: identityHumanity,
      icon: <Heart size={20} strokeWidth={1.5} />,
      title: "மனிதம் முதலில்",
      desc: "சாதி, மதம், மொழி, பாலினம் எந்த பேதமுமின்றி ஒவ்வொரு மனிதனும் மரியாதையுடன் வாழ வேண்டும்.",
    },
    {
      number: "02",
      img: identityDravidian,
      icon: <Scale size={20} strokeWidth={1.5} />,
      title: "சமத்துவம்",
      desc: "சம வாய்ப்புகள், சமூக நீதி, பிறருக்கு மதிப்பு கொடுக்கும் சமூகத்தை உருவாக்குவோம்.",
    },
    {
      number: "03",
      img: identityPeople,
      icon: <Users size={20} strokeWidth={1.5} />,
      title: "இளையோர் சக்தி",
      desc: "இளைஞர்களை வழிநடத்துவோம், பயிற்றுவிப்போம், பொறுப்பளிப்போம். நாளைய தலைவர்கள் இவர்கள் தான்.",
    },
    {
      number: "04",
      img: identityTamil,
      icon: <span className="tamil-char-icon">அ</span>,
      title: "தமிழ் எங்கள் அடையாளம்",
      desc: "தமிழ் மொழி, பண்பாடு, வரலாறு எங்கள் பெருமை. அதை பாதுகாக்கவும், பெருமையுடன் வளர்க்கவும்.",
    },
    {
      number: "05",
      img: identityIndiaUnity,
      icon: <Globe size={20} strokeWidth={1.5} />,
      title: "இந்திய ஒற்றுமை",
      desc: "பல மொழி, பல கலாசாரம், பல இனங்கள் - ஆனால் நாம் ஒரு இந்திய மக்கள்.",
    },
    {
      number: "06",
      img: promise4Img,
      icon: <Handshake size={20} strokeWidth={1.5} />,
      title: "நேர்மை & வெளிப்படைமை",
      desc: "அரசியலில் நேர்மை, நிதியில் வெளிப்படைமை - இதுவே எங்கள் அடிப்படை உறுதி.",
    },
    {
      number: "07",
      img: heroFarmer,
      icon: <Users size={20} strokeWidth={1.5} />,
      title: "உழவனுக்கும் மக்களுக்கும் மரியாதை",
      desc: "விவசாயிகள், தொழிலாளர்கள், ஓட்டுநர்கள், சிறு வியாபாரிகள் - நாட்டின் முதுகெலும்பு.",
    },
    {
      number: "08",
      img: portraitWoman,
      icon: <Heart size={20} strokeWidth={1.5} />,
      title: "பெண்கள் பாதுகாப்பு & முன்னேற்றம்",
      desc: "பெண்களுக்கு பாதுகாப்பான சமூகமும், சம உரிமைகளும் வாழ்க்கை தரும் உறுதி.",
    },
    {
      number: "09",
      img: heroStudent,
      icon: <GraduationCap size={20} strokeWidth={1.5} />,
      title: "கல்வி, திறமை, வேலைவாய்ப்பு",
      desc: "தரமான கல்வி, வாழ்க்கை திறன், தொழில் பயிற்சி மற்றும் வேலை வாய்ப்பு உருவாக்கம்.",
    },
    {
      number: "10",
      img: promise5Img,
      icon: <Leaf size={20} strokeWidth={1.5} />,
      title: "சுற்றுச்சூழல் பாதுகாப்பு",
      desc: "தண்ணீர், நிலம், காற்று - இவை நம் எதிர்காலம். பாதுகாப்போம், பிழைப்போம்.",
    },
  ];

  return (
    <div className="principles-page">
      {/* Hero Section */}
      <section className="principles-hero-section">
        {/* Background Image Wrapper */}
        <div className="principles-hero-bg-wrapper">
          <img
            src={visionHeroBg}
            alt="People and Indian flag at sunset"
            className="principles-hero-bg-img"
          />
          <div className="principles-hero-overlay"></div>
        </div>

        {/* Content Area */}
        <div className="container principles-hero-container">
          {/* Top Titles */}
          <div className="row text-start">
            <div className="col-12 col-lg-8 principles-hero-text-col">
              <div className="principles-tag-wrapper">
                <span className="principles-tag">OUR PRINCIPLES</span>
                <div className="principles-tag-underline"></div>
              </div>

              <h1 className="principles-hero-title">
                எங்கள் கொள்கைகள் <br />
                <span className="highlight-gold">எங்கள் நடைமுறை</span>
              </h1>

              <p className="principles-hero-subtitle">
                சொல்லுவதல்ல எங்கள் வேலை,<br />
                செய்வதுந்தான் எங்கள் கொள்கை.
              </p>
              
              <div className="principles-title-line"></div>
            </div>
          </div>

          {/* Cards & Quote Area at the bottom */}
          <div className="principles-bottom-wrapper">
            {/* Value Cards Row */}
            <div className="principles-cards-row">
              {principleCards.map((card, index) => (
                <div key={index} className="principles-card-col">
                  {index > 0 && <div className="principles-card-divider"></div>}
                  <div className="principles-card-content">
                    <div className="principles-card-icon-wrapper">
                      {card.icon}
                    </div>
                    <span className="principles-card-text">{card.text}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Quote Banner Box */}
            <div className="principles-quote-container">
              <div className="principles-quote-box">
                <span className="quote-icon open">“</span>
                <span className="quote-text">
                  நாங்கள் அதிகாரத்திற்காக வரவில்லை, பொறுப்பிற்காக வந்துள்ளோம்.
                </span>
                <span className="quote-icon close">”</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section: Our Core Principles */}
      <section className="principles-core-section">
        <div className="container">
          <div className="text-center principles-core-header">
            <h2 className="principles-core-section-title">
              — எங்கள் அடிப்படை கொள்கைகள் —
            </h2>
          </div>

          <div className="principles-core-grid">
            {corePrinciples.map((item, index) => (
              <div key={index} className="principles-core-card">
                {/* Background Image */}
                <div className="principles-card-bg-wrapper">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="principles-card-bg-img"
                  />
                  <div className="principles-card-bg-overlay"></div>
                </div>

                {/* Top-left Indicator: Number + Icon */}
                <div className="principles-card-top-left">
                  <div className="principles-card-number">
                    {item.number}
                  </div>
                  <div className="principles-card-icon">
                    {item.icon}
                  </div>
                </div>

                {/* Card Bottom Body */}
                <div className="principles-card-body">
                  <h3 className="principles-card-title-text">{item.title}</h3>
                  <p className="principles-card-desc-text">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section: எங்கள் செயல்முறை (Below எங்கள் அடிப்படை கொள்கைகள்) */}
      <section className="principles-process-section">
        <div className="container">
          <div className="text-center principles-process-header">
            <h2 className="principles-process-title">
              <span className="process-dot">•</span> எங்கள் செயல்முறை <span className="process-dot">•</span>
            </h2>
          </div>

          <div className="principles-process-grid">
            {processSteps.map((step, index) => (
              <div key={index} className="principles-process-step-wrapper">
                <div className="principles-process-step">
                  <div className="principles-process-icon-circle">
                    {step.icon}
                  </div>
                  <h3 className="principles-process-step-title">{step.title}</h3>
                  <p className="principles-process-step-desc">{step.desc}</p>
                </div>

                {index < processSteps.length - 1 && (
                  <div className="principles-process-arrow-container" aria-hidden="true">
                    <div className="principles-process-arrow-line"></div>
                    <ArrowRight size={18} className="principles-process-arrow-icon" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pledges & Goals Banner Section (எங்கள் 5 உறுதிமொழிகள் | நாங்கள் பேசுவது கொள்கை... | எங்கள் இலக்கு) */}
      <section className="principles-pledges-section">
        <div className="container">
          <div className="pledges-banner-card">
            {/* Subtle Background Crowd Silhouette & Overlay */}
            <div className="pledges-banner-bg-wrapper">
              <img
                src={aboutCtaSilhouette}
                alt="Background crowd silhouette"
                className="pledges-banner-bg-img"
              />
              <div className="pledges-banner-bg-overlay"></div>
            </div>

            <div className="pledges-banner-content">
              {/* Left Column: 5 Pledges */}
              <div className="pledges-col pledges-left-col">
                <h3 className="pledges-col-title">எங்கள் 5 உறுதிமொழிகள்</h3>
                <ul className="pledges-list">
                  <li className="pledges-list-item">
                    <div className="pledges-check-icon">
                      <Check size={13} strokeWidth={3} />
                    </div>
                    <span>மக்களை பிரிக்க மாட்டோம்.</span>
                  </li>
                  <li className="pledges-list-item">
                    <div className="pledges-check-icon">
                      <Check size={13} strokeWidth={3} />
                    </div>
                    <span>பொய்யான வாக்குறுதிகள் கொடுக்க மாட்டோம்.</span>
                  </li>
                  <li className="pledges-list-item">
                    <div className="pledges-check-icon">
                      <Check size={13} strokeWidth={3} />
                    </div>
                    <span>மக்களின் பணத்தை மக்களுக்கு பயன்படுத்துவோம்.</span>
                  </li>
                  <li className="pledges-list-item">
                    <div className="pledges-check-icon">
                      <Check size={13} strokeWidth={3} />
                    </div>
                    <span>ஒவ்வொரு பிரச்சினைக்கும் தீர்வு காண்போம்.</span>
                  </li>
                  <li className="pledges-list-item">
                    <div className="pledges-check-icon">
                      <Check size={13} strokeWidth={3} />
                    </div>
                    <span>மனிதம், சமத்துவம், நேர்மை – இதிலிருந்து விலக மாட்டோம்.</span>
                  </li>
                </ul>
              </div>

              <div className="pledges-col-divider"></div>

              {/* Center Column: Slogan Quote */}
              <div className="pledges-col pledges-center-col">
                <div className="slogan-quote-mark">“</div>
                <div className="slogan-text-box">
                  <p className="slogan-line">நாங்கள் பேசுவது</p>
                  <p className="slogan-line">கொள்கை,</p>
                  <p className="slogan-line">நாங்கள் செய்வது</p>
                  <h2 className="slogan-highlight">மாற்றம்!</h2>
                </div>
              </div>

              <div className="pledges-col-divider"></div>

              {/* Right Column: Our Goals */}
              <div className="pledges-col pledges-right-col">
                <h3 className="pledges-col-title">எங்கள் இலக்கு</h3>
                <ul className="goals-list">
                  <li className="goals-list-item">
                    <div className="goals-badge-icon">
                      <Landmark size={15} strokeWidth={2} />
                    </div>
                    <span>மரியாதையுடன் வாழும் மனிதர்கள்</span>
                  </li>
                  <li className="goals-list-item">
                    <div className="goals-badge-icon">
                      <Users size={15} strokeWidth={2} />
                    </div>
                    <span>அமைதியுடன் வளரும் இளைஞர்கள்</span>
                  </li>
                  <li className="goals-list-item">
                    <div className="goals-badge-icon">
                      <ShieldCheck size={15} strokeWidth={2} />
                    </div>
                    <span>பாதுகாப்பான பெண்கள்</span>
                  </li>
                  <li className="goals-list-item">
                    <div className="goals-badge-icon">
                      <Sunrise size={15} strokeWidth={2} />
                    </div>
                    <span>முன்னேறும் தமிழகம்</span>
                  </li>
                  <li className="goals-list-item">
                    <div className="goals-badge-icon">
                      <Globe size={15} strokeWidth={2} />
                    </div>
                    <span>வலுவான இந்தியா</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Warm Golden Bottom Edge Glow */}
            <div className="pledges-bottom-glow"></div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner Section (நாங்கள் தனியாக இல்லை... | ILLAYA INDIA | இணைவோம்! மாற்றுவோம்!) */}
      <section className="principles-bottom-cta-section">
        <div className="principles-bottom-cta-bg">
          <img
            src={aboutCtaSilhouette}
            alt="People silhouette sunset background"
            className="principles-bottom-cta-bg-img"
          />
          <div className="principles-bottom-cta-overlay"></div>
        </div>

        <div className="container principles-bottom-cta-container">
          <div className="principles-bottom-cta-content">
            {/* Left Block: Slogan Text */}
            <div className="bottom-cta-left">
              <h3 className="bottom-cta-left-main">நாங்கள் தனியாக இல்லை...</h3>
              <p className="bottom-cta-left-sub">
                நம்முடன் நீங்கள் இருந்தால்<br />
                நாம் நிச்சயம் வெல்வோம்!
              </p>
            </div>

            {/* Center Block: Logo + Brand Title */}
            <div className="bottom-cta-center">
              <img src={illayaLogo} alt="ILLAYA INDIA Logo" className="bottom-cta-logo" />
              <div className="bottom-cta-brand-text">
                <h2 className="bottom-cta-brand-title">ILLAYA INDIA</h2>
                <p className="bottom-cta-brand-tagline">மனிதம ஒன்றே போதும்</p>
              </div>
            </div>

            {/* Right Block: Action Button + Social Icons */}
            <div className="bottom-cta-right">
              <h4 className="bottom-cta-right-heading">இணைவோம்! மாற்றுவோம்!</h4>
              <button className="bottom-cta-btn">
                JOIN THE MOVEMENT <ArrowRight size={16} className="ms-1" />
              </button>

              <div className="bottom-cta-social">
                <span className="bottom-cta-social-label">FOLLOW US</span>
                <div className="bottom-cta-social-icons">
                  <a href="#" aria-label="Facebook" className="social-circle fb"><FaFacebookF size={12} /></a>
                  <a href="#" aria-label="Twitter" className="social-circle tw"><FaTwitter size={12} /></a>
                  <a href="#" aria-label="Instagram" className="social-circle ig"><FaInstagram size={12} /></a>
                  <a href="#" aria-label="YouTube" className="social-circle yt"><FaYoutube size={12} /></a>
                  <a href="#" aria-label="WhatsApp" className="social-circle wa"><FaWhatsapp size={12} /></a>
                  <a href="#" aria-label="Telegram" className="social-circle tg"><FaTelegramPlane size={12} /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Principles;
