import "./Vision.css";
import visionHeroBg from "../../assets/vision_hero_bg.png";
import visionWheel from "../../assets/vision_wheel.png";
import promise1Img from "../../assets/promise_1_listen.png";
import promise2Img from "../../assets/promise_2_record.png";
import promise3Img from "../../assets/promise_3_solve.png";
import promise4Img from "../../assets/promise_4_action.png";
import promise5Img from "../../assets/promise_5_sustain.png";
import visionCtaBg from "../../assets/vision_cta_bg.png";
import { 
  HeartHandshake, 
  Scale, 
  Users, 
  Landmark, 
  Map, 
  GraduationCap, 
  Briefcase, 
  ShieldCheck, 
  Leaf, 
  UserCheck,
  FileText,
  Lightbulb,
  Settings,
  Target,
  ArrowRight
} from "lucide-react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaWhatsapp, FaTelegramPlane } from "react-icons/fa";

const Vision = () => {
  const visionCards = [
    {
      icon: <HeartHandshake size={45} strokeWidth={1.5} />,
      tamil: "மனிதம்",
      tamilSub: "மதிக்கப்படும்",
    },
    {
      icon: <Scale size={45} strokeWidth={1.5} />,
      tamil: "சமத்துவம்",
      tamilSub: "நிலவும்",
    },
    {
      icon: <Users size={45} strokeWidth={1.5} />,
      tamil: "இளையோர்",
      tamilSub: "முன்னேறும்",
    },
    {
      icon: <Landmark size={45} strokeWidth={1.5} />,
      tamil: "தமிழ் பெருமையுடன்",
      tamilSub: "தழைக்கும்",
    },
    {
      icon: <Map size={45} strokeWidth={1.5} />,
      tamil: "இந்தியா ஒற்றுமையுடன்",
      tamilSub: "வளரும்",
    },
  ];

  const pillarsList = [
    {
      icon: <Users size={20} strokeWidth={2} />,
      text: "சாதி, மதம், மொழி என்ற பிரிவுகள் இல்லாத சமூகம்",
    },
    {
      icon: <GraduationCap size={20} strokeWidth={2} />,
      text: "தரமான கல்வி மற்றும் திறன் வளர்ச்சி",
    },
    {
      icon: <Briefcase size={20} strokeWidth={2} />,
      text: "வேலைவாய்ப்பு நிறைந்த வளர்ச்சி பொருளாதாரம்",
    },
    {
      icon: <ShieldCheck size={20} strokeWidth={2} />,
      text: "பாதுகாப்பான பெண்கள் மரியாதைக்குரிய சமூகம்",
    },
    {
      icon: <Leaf size={20} strokeWidth={2} />,
      text: "சுற்றுச்சூழலை காக்கும் நிலையான வளர்ச்சி",
    },
    {
      icon: <UserCheck size={20} strokeWidth={2} />,
      text: "மக்கள் ஆட்சி, மக்களால், மக்களுக்காக",
    },
  ];

  const promiseCards = [
    {
      img: promise1Img,
      icon: <HeartHandshake size={22} strokeWidth={1.5} />,
      title: "மக்களை கேட்போம்",
      desc: "ஒவ்வொரு குரலும் முக்கியம்.",
    },
    {
      img: promise2Img,
      icon: <FileText size={22} strokeWidth={1.5} />,
      title: "பிரச்சினையை பதிவு செய்வோம்",
      desc: "ஒவ்வொரு பிரச்சனையும் பதிவாகும்.",
    },
    {
      img: promise3Img,
      icon: <Lightbulb size={22} strokeWidth={1.5} />,
      title: "தீர்வை உருவாக்குவோம்",
      desc: "மக்களுடன் சேர்ந்து தீர்வுகளை காண்போம்.",
    },
    {
      img: promise4Img,
      icon: <Settings size={22} strokeWidth={1.5} />,
      title: "செயல்படுத்துவோம்",
      desc: "செயலாக்கம் தான் மாற்றத்தின் தொடக்கம்.",
    },
    {
      img: promise5Img,
      icon: <Target size={22} strokeWidth={1.5} />,
      title: "மாற்றத்தை நிலைநிறுத்துவோம்",
      desc: "இன்று விதைத்தால் நாளை பலன் உண்டாகும்.",
    },
  ];

  return (
    <div className="vision-page">
      {/* Hero Section */}
      <section className="vision-hero-section">
        {/* Background Image Wrapper */}
        <div className="vision-hero-bg-wrapper">
          <img
            src={visionHeroBg}
            alt="People and Indian flag at sunset"
            className="vision-hero-bg-img"
          />
          <div className="vision-hero-overlay"></div>
        </div>

        {/* Content Area */}
        <div className="container vision-hero-container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-8 text-start vision-hero-text-col">
              <div className="vision-tag-wrapper">
                <span className="vision-tag">OUR VISION</span>
                <div className="vision-tag-underline"></div>
              </div>

              <h1 className="vision-hero-title">
                நாம் காணும் <br />
                <span className="highlight-gold">புதிய இந்தியா</span>
              </h1>

              <p className="vision-hero-subtitle">
                மனிதம் மதிக்கப்படும், சமத்துவம் நிலவும், இளைஞர்கள் முன்னேறும், தமிழ் பெருமையுடன் தழைக்கும், இந்தியா ஒற்றுமையுடன் வளரும் ஒரு நாடு.
              </p>
            </div>
          </div>

          {/* Bottom Values Grid (Responsive CSS Grid) */}
          <div className="vision-values-container">
            <div className="vision-values-grid">
              {visionCards.map((card, index) => (
                <div key={index} className="vision-value-card-wrapper">
                  <div className="vision-value-card">
                    <div className="vision-value-icon-wrapper">
                      {card.icon}
                    </div>
                    <div className="vision-value-text-wrapper">
                      <span className="vision-value-tamil">{card.tamil}</span>
                      <span className="vision-value-tamil-sub">{card.tamilSub}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Second Section: Detailed Vision Infographic */}
      <section className="vision-details-section">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Column: Mission statement & quote */}
            <div className="col-12 col-lg-3 text-start mb-5 mb-lg-0">
              <h2 className="vision-left-title">எங்கள் பார்வை</h2>
              <span className="vision-left-subtitle">(OUR VISION)</span>

              <div className="vision-left-quote-wrapper">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="vision-left-quote-svg">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="vision-left-desc">
                  2025க்குப் பிறகு இந்தியா உலகின் முன்னணி நாடாக மாறும். அந்த இந்தியாவின் இதயம் மனிதநேயம் கொண்ட சமூகமாக இருக்கும்.
                </p>
                <p className="vision-left-desc-gold">
                  அந்த இதயத்தை உருவாக்குவதே இளைய இந்தியாவின் பார்வை.
                </p>
              </div>
            </div>

            {/* Center Column: Infographic Wheel image */}
            <div className="col-12 col-lg-5 text-center mb-5 mb-lg-0 d-flex justify-content-center">
              <div className="vision-wheel-wrapper">
                <img
                  src={visionWheel}
                  alt="மனிதம் ஒன்றே போதும் Infographic Wheel"
                  className="vision-wheel-img"
                />
              </div>
            </div>

            {/* Right Column: Key Pillars list */}
            <div className="col-12 col-lg-4 text-start">
              <div className="vision-right-title-wrapper">
                <h3 className="vision-right-title-top">நாம் உருவாக்க விரும்பும்</h3>
                <span className="vision-right-title-bottom">இந்தியா</span>
              </div>

              <div className="vision-right-list">
                {pillarsList.map((item, index) => (
                  <div key={index} className="vision-right-item">
                    <div className="vision-right-icon-wrapper">
                      {item.icon}
                    </div>
                    <span className="vision-right-text">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Third Section: Our Promise */}
      <section className="vision-promise-section">
        <div className="container">
          <div className="text-center vision-promise-header">
            <h2 className="vision-promise-title">
              <span className="text-white">எங்கள் உறுதி</span>{" "}
              <span className="text-gold">(OUR PROMISE)</span>
            </h2>
          </div>
          <div className="vision-promise-grid">
            {promiseCards.map((card, index) => (
              <div key={index} className="vision-promise-card">
                <div className="vision-promise-img-wrapper">
                  <img src={card.img} alt={card.title} className="vision-promise-img" />
                  <div className="vision-promise-icon">
                    {card.icon}
                  </div>
                </div>
                <div className="vision-promise-content">
                  <h4 className="vision-promise-card-title">{card.title}</h4>
                  <p className="vision-promise-card-desc">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fourth Section: Call to Action Banner */}
      <section className="vision-cta-section">
        <div className="vision-cta-bg-wrapper">
          <img src={visionCtaBg} alt="Illaya India Sunrise" className="vision-cta-bg-img" />
          <div className="vision-cta-overlay"></div>
        </div>
        <div className="container vision-cta-container">
          <div className="row align-items-center h-100">
            <div className="col-12 col-lg-7 text-start mb-4 mb-lg-0">
              <h2 className="vision-cta-title">
                <span className="text-white">ஒரு கனவு அல்ல...</span><br/>
                <span className="text-gold">ஒரு பொறுப்பு!</span>
              </h2>
              <p className="vision-cta-subtitle">
                அந்த பொறுப்பை ஏற்று புதிய இந்தியாவை<br className="d-none d-md-block" /> நாம் ஒன்றாக உருவாக்குவோம்.
              </p>
            </div>
            <div className="col-12 col-lg-5 text-start text-lg-start vision-cta-right-col">
              <p className="vision-cta-right-text">
                நீங்களும் இந்த பார்வையின்<br/>ஒரு பகுதியாகுங்கள்!
              </p>
              <button className="vision-cta-btn">
                JOIN THE MOVEMENT <ArrowRight size={18} className="ms-2" />
              </button>
              <div className="vision-cta-social">
                <span className="vision-cta-social-text">FOLLOW US</span>
                <div className="vision-cta-social-icons">
                  <a href="#" className="social-icon fb"><FaFacebookF size={16} /></a>
                  <a href="#" className="social-icon tw"><FaTwitter size={16} /></a>
                  <a href="#" className="social-icon ig"><FaInstagram size={16} /></a>
                  <a href="#" className="social-icon yt"><FaYoutube size={16} /></a>
                  <a href="#" className="social-icon wa"><FaWhatsapp size={16} /></a>
                  <a href="#" className="social-icon tg"><FaTelegramPlane size={16} /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vision;
