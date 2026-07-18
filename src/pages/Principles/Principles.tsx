import "./Principles.css";
import visionHeroBg from "../../assets/vision_hero_bg.png";
import { 
  Users, 
  Handshake, 
  Target, 
  ShieldCheck, 
  Heart, 
  Scale, 
  Globe, 
  GraduationCap, 
  Leaf 
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
    </div>
  );
};

export default Principles;
