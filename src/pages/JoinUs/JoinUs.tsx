import React from "react";
import "./JoinUs.css";
import joinUsHeroBg from "../../assets/join_us_hero_bg.png";
import portraitStudent from "../../assets/portrait-student.png";
import projectYouth from "../../assets/project_youth.png";
import portraitWoman from "../../assets/portrait-woman.png";
import portraitFarmer from "../../assets/portrait-farmer.png";
import portraitLabour from "../../assets/portrait-labour.png";
import portraitDriver from "../../assets/portrait-driver.png";
import heroTeaShopkeeper from "../../assets/hero-tea-shopkeeper.png";

// Section 4 Benefit Images
import benefitMegaphone from "../../assets/benefit_1_megaphone.png";
import benefitTraining from "../../assets/benefit_2_training.png";
import benefitCertificate from "../../assets/benefit_3_certificate.png";
import benefitEvents from "../../assets/benefit_4_events.png";
import benefitSocialService from "../../assets/benefit_5_social_service.png";
import benefitNetworking from "../../assets/benefit_6_networking.png";

// Section 5 CTA Background & Logo
import joinusCtaBg from "../../assets/joinus_cta_bg.png";
import illayaLogo from "../../assets/illaya-logo.png";

import {
  UserPlus,
  ArrowRight,
  Handshake,
  Users,
  Lightbulb,
  Heart,
  TrendingUp,
  Smartphone,
  ClipboardCheck,
  Megaphone,
  Award,
  HeartHandshake,
  MapPin,
  Clock,
  Star,
  MessageCircle,
  Send,
} from "lucide-react";

// Custom Facebook Icon
const FacebookIcon: React.FC<{ size?: number; className?: string }> = ({
  size = 16,
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

// Custom Instagram Icon
const InstagramIcon: React.FC<{ size?: number; className?: string }> = ({
  size = 16,
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

// Custom Youtube Icon
const YoutubeIcon: React.FC<{ size?: number; className?: string }> = ({
  size = 16,
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

// Custom X (Twitter) Icon
const XIcon: React.FC<{ size?: number; className?: string }> = ({
  size = 16,
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// Custom Fist Icon for Step 04 & Volunteer Button
const FistIcon: React.FC<{ size?: number; className?: string }> = ({
  size = 26,
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12 2C11.45 2 11 2.45 11 3V9.25C10.74 9.1 10.39 9 10 9C9.17 9 8.5 9.67 8.5 10.5C8.5 10.74 8.56 10.96 8.66 11.16C8.26 11.35 8 11.77 8 12.25C8 12.87 8.43 13.39 9 13.48V14C9 15.66 10.34 17 12 17H13V21C13 21.55 13.45 22 14 22H16C16.55 22 17 21.55 17 21V15.5C17.9 14.8 18.5 13.72 18.5 12.5V8.5C18.5 7.4 17.6 6.5 16.5 6.5C16.14 6.5 15.8 6.6 15.5 6.77V5.5C15.5 4.4 14.6 3.5 13.5 3.5C13.14 3.5 12.8 3.6 12.5 3.77V3C12.5 2.45 12.05 2 11.5 2H12Z" />
  </svg>
);

const JoinUs: React.FC = () => {
  // Section 2: Why Join Us Data
  const whyJoinData = [
    {
      id: 1,
      icon: Users,
      line1: "உங்கள் குரல்",
      line2: "இயக்கத்தின் சக்தியாகும்",
    },
    {
      id: 2,
      icon: Lightbulb,
      line1: "உங்கள் யோசனை",
      line2: "மாற்றத்திற்கு வழியாகும்",
    },
    {
      id: 3,
      icon: Users,
      line1: "உங்கள் பங்கேற்பு",
      line2: "மக்களின் நம்பிக்கையை அதிகரிக்கும்",
    },
    {
      id: 4,
      icon: Handshake,
      line1: "உங்கள் சேவை",
      line2: "சமுதாயத்தை மாற்றும்",
    },
    {
      id: 5,
      icon: Heart,
      line1: "உங்கள் ஒற்றுமை",
      line2: "நாடு முழுவதும் இணைக்கும்",
    },
    {
      id: 6,
      icon: TrendingUp,
      line1: "உங்கள் தன்னம்பிக்கை",
      line2: "ஒரு புதிய இந்தியாவை உருவாக்கும்",
    },
  ];

  // Section 3 Left: Who Can Join Data
  const whoCanJoinData = [
    { id: 1, image: portraitStudent, label: "மாணவர்கள்" },
    { id: 2, image: projectYouth, label: "இளைஞர்கள்" },
    { id: 3, image: portraitWoman, label: "பெண்கள்" },
    { id: 4, image: portraitFarmer, label: "விவசாயிகள்" },
    { id: 5, image: portraitLabour, label: "தொழிலாளர்கள்" },
    { id: 6, image: portraitDriver, label: "ஓட்டுநர்கள்" },
    { id: 7, image: heroTeaShopkeeper, label: "முதியவர்கள்" },
  ];

  // Section 3 Right: How To Join Steps Data
  const howToJoinSteps = [
    {
      id: 1,
      number: "01",
      icon: UserPlus,
      line1: "பதிவு செய்யுங்கள்",
      line2: "எளிய பதிவு செய்க",
    },
    {
      id: 2,
      number: "02",
      icon: Smartphone,
      line1: "உறுதிப்படுத்துங்கள்",
      line2: "OTP மூலம் உறுதி செய்க",
    },
    {
      id: 3,
      number: "03",
      icon: ClipboardCheck,
      line1: "பங்கேற்பை தேர்வு செய்யுங்கள்",
      line2: "உறுப்பினர் / தன்னார்வலர்",
    },
    {
      id: 4,
      number: "04",
      icon: FistIcon,
      line1: "இயக்கத்தில் இணைந்து மாற்றம்",
      line2: "உருவாக்குங்கள்!",
    },
  ];

  // Section 4: Benefits You Receive Data
  const benefitsData = [
    {
      id: 1,
      image: benefitMegaphone,
      icon: Megaphone,
      line1: "உங்கள் குரலுக்கு",
      line2: "மேடை",
      isGoldLine1: true,
    },
    {
      id: 2,
      image: benefitTraining,
      icon: Lightbulb,
      line1: "பயிற்சிகள் &",
      line2: "வழிகாட்டுதல்",
      isGoldLine1: false,
    },
    {
      id: 3,
      image: benefitCertificate,
      icon: Award,
      line1: "சான்றிதழ் &",
      line2: "அங்கீகாரம்",
      isGoldLine1: false,
    },
    {
      id: 4,
      image: benefitEvents,
      icon: Users,
      line1: "நிகழ்வுகளில்",
      line2: "முன்னுரிமை",
      isGoldLine1: false,
    },
    {
      id: 5,
      image: benefitSocialService,
      icon: HeartHandshake,
      line1: "சமூக சேவையில்",
      line2: "பங்கேற்பு",
      isGoldLine1: false,
    },
    {
      id: 6,
      image: benefitNetworking,
      icon: Handshake,
      line1: "வலையமைப்பு",
      line2: "இணைப்பு",
      isGoldLine1: false,
    },
  ];

  return (
    <div className="joinus-page">
      {/* SECTION 1: HERO SECTION */}
      <section className="joinus-hero-section">
        {/* Hero Background Image with Overlay */}
        <div className="joinus-hero-bg-wrapper">
          <img
            src={joinUsHeroBg}
            alt="Join Us Illaya India"
            className="joinus-hero-bg-img"
          />
          <div className="joinus-hero-overlay"></div>
        </div>

        <div className="container-fluid px-4 px-lg-5 joinus-hero-container">
          <div className="joinus-hero-content">
            {/* Main Big Title: JOIN US */}
            <h1 className="joinus-hero-title">
              JOIN <span className="title-highlight">US</span>
            </h1>

            {/* Sub-headline */}
            <h2 className="joinus-hero-subtitle">
              மாற்றத்தை உருவாக்க
              <br />
              <span className="subtitle-highlight">எங்களுடன் இணையுங்கள்!</span>
            </h2>

            {/* Description Paragraph */}
            <p className="joinus-hero-description">
              இந்த இயக்கம் தலைவர்களுக்காக அல்ல,
              <br />
              மக்களுக்காக. நீங்கள் தான் இந்த மாற்றத்தின்
              <br />
              முக்கிய சக்தி!
            </p>

            {/* Call To Action Buttons */}
            <div className="joinus-hero-buttons">
              {/* Member Button */}
              <button
                className="joinus-btn joinus-btn-primary"
                id="become-member-btn"
              >
                <div className="btn-left-content">
                  <div className="btn-icon-box">
                    <UserPlus size={20} className="btn-icon" />
                  </div>
                  <div className="btn-text-box">
                    <span className="btn-tamil-text">
                      உறுப்பினராக இணையுங்கள்
                    </span>
                    <span className="btn-english-text">BECOME A MEMBER</span>
                  </div>
                </div>
                <ArrowRight size={20} className="btn-arrow" />
              </button>

              {/* Volunteer Button */}
              <button
                className="joinus-btn joinus-btn-secondary"
                id="join-volunteer-btn"
              >
                <div className="btn-left-content">
                  <div className="btn-icon-box">
                    <Handshake size={20} className="btn-icon" />
                  </div>
                  <div className="btn-text-box">
                    <span className="btn-tamil-text">
                      தன்னார்வலராக இணையுங்கள்
                    </span>
                    <span className="btn-english-text">JOIN AS VOLUNTEER</span>
                  </div>
                </div>
                <ArrowRight size={20} className="btn-arrow" />
              </button>
            </div>
          </div>

          {/* Bottom Right Yellow Brush Sticker/Badge */}
          <div className="joinus-hero-brush-badge">
            <div className="brush-badge-inner">
              <span className="brush-badge-text">
                நீங்கள் சேர்ந்தால்
                <br />
                நாளை மாறும்!
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHY JOIN US */}
      <section className="joinus-why-section">
        <div className="container-fluid px-4 px-lg-5">
          {/* Section Title with Ornamental Golden Lines */}
          <div className="joinus-section-header">
            <div className="ornamental-line"></div>
            <div className="ornamental-diamond">◆</div>
            <h2 className="joinus-section-title">
              ஏன் எங்களுடன் இணைய வேண்டும்?
            </h2>
            <div className="ornamental-diamond">◆</div>
            <div className="ornamental-line"></div>
          </div>

          {/* 6 Reasons Card Container */}
          <div className="why-join-card-container">
            <div className="why-join-grid">
              {whyJoinData.map((item, index) => {
                const IconComp = item.icon;
                return (
                  <div key={item.id} className="why-join-item">
                    <div className="why-icon-circle">
                      <IconComp size={28} className="why-icon" />
                    </div>
                    <div className="why-text-box">
                      <h3 className="why-item-title">{item.line1}</h3>
                      <p className="why-item-desc">{item.line2}</p>
                    </div>
                    {index < whyJoinData.length - 1 && (
                      <div className="why-item-divider"></div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHO CAN JOIN & HOW TO JOIN */}
      <section className="joinus-third-section">
        <div className="container-fluid px-4 px-lg-5">
          <div className="joinus-third-grid">
            {/* LEFT BLOCK: WHO CAN JOIN? */}
            <div className="joinus-card-block joinus-who-card">
              <div className="joinus-section-header">
                <div className="ornamental-line"></div>
                <div className="ornamental-diamond">◆</div>
                <h2 className="joinus-section-title">யார் இணையலாம்?</h2>
                <div className="ornamental-diamond">◆</div>
                <div className="ornamental-line"></div>
              </div>

              <div className="who-card-inner">
                {/* 7 Portrait Cards Grid */}
                <div className="who-portraits-grid">
                  {whoCanJoinData.map((person) => (
                    <div key={person.id} className="portrait-card-item">
                      <div className="portrait-image-wrapper">
                        <img
                          src={person.image}
                          alt={person.label}
                          className="portrait-img"
                        />
                        <div className="portrait-overlay"></div>
                        <span className="portrait-label">{person.label}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom Yellow Brush Banner */}
                <div className="who-brush-banner">
                  <div className="who-brush-banner-inner">
                    <span className="who-brush-text">
                      மாற்றம் வேண்டும் என்று நினைக்கும் ஒவ்வொரு மனிதரும்!
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT BLOCK: HOW TO JOIN? */}
            <div className="joinus-card-block joinus-how-card">
              <div className="joinus-section-header">
                <div className="ornamental-line"></div>
                <div className="ornamental-diamond">◆</div>
                <h2 className="joinus-section-title">இணைவது எப்படி?</h2>
                <div className="ornamental-diamond">◆</div>
                <div className="ornamental-line"></div>
              </div>

              <div className="how-card-inner">
                {/* 4 Step Process Flow */}
                <div className="how-steps-row">
                  {howToJoinSteps.map((step, index) => {
                    const StepIcon = step.icon;
                    return (
                      <React.Fragment key={step.id}>
                        <div className="how-step-item">
                          <div className="how-icon-circle">
                            <StepIcon size={26} className="how-icon" />
                          </div>
                          <span className="how-step-number">{step.number}</span>
                          <div className="how-step-text-box">
                            <h3 className="how-step-title">{step.line1}</h3>
                            {step.line2 && (
                              <p className="how-step-subtitle">{step.line2}</p>
                            )}
                          </div>
                        </div>

                        {index < howToJoinSteps.length - 1 && (
                          <div className="how-step-arrow">
                            <ArrowRight size={18} />
                          </div>
                        )}
                      </React.Fragment>
                    );
                  })}
                </div>

                {/* Bottom Slogan Text */}
                <div className="how-slogan-container">
                  <span className="how-slogan-sub">இணைபவர் அல்ல,</span>
                  <h3 className="how-slogan-main">இயக்கத்தின் ஒரு பகுதி!</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: BENEFITS YOU RECEIVE */}
      <section className="joinus-benefits-section">
        <div className="container-fluid px-4 px-lg-5">
          {/* Section Header with Ornamental Golden Lines */}
          <div className="joinus-section-header">
            <div className="ornamental-line"></div>
            <div className="ornamental-diamond">◆</div>
            <h2 className="joinus-section-title">நீங்கள் பெறும் பலன்கள்</h2>
            <div className="ornamental-diamond">◆</div>
            <div className="ornamental-line"></div>
          </div>

          {/* Benefits Grid Card Container */}
          <div className="benefits-card-container">
            <div className="benefits-grid">
              {benefitsData.map((item) => {
                const IconComp = item.icon;
                return (
                  <div key={item.id} className="benefit-card-item">
                    {/* Top Image Box */}
                    <div className="benefit-img-wrapper">
                      <img
                        src={item.image}
                        alt={item.line1}
                        className="benefit-img"
                      />
                      <div className="benefit-img-overlay"></div>
                    </div>

                    {/* Bottom Footer with Gold Icon & Text */}
                    <div className="benefit-card-footer">
                      <div className="benefit-icon-circle">
                        <IconComp size={20} className="benefit-icon" />
                      </div>
                      <div className="benefit-text-box">
                        <span
                          className={`benefit-text-line1 ${
                            item.isGoldLine1 ? "gold-text" : "white-text"
                          }`}
                        >
                          {item.line1}
                        </span>
                        <span className="benefit-text-line2">{item.line2}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CTA BANNER & FOOTER SECTION */}
      <section className="joinus-cta-section">
        <div className="container-fluid px-4 px-lg-5">
          {/* Top 3-Column Banner Grid */}
          <div className="cta-top-grid">
            {/* Left Card: 2,50,000+ Members */}
            <div className="cta-left-card">
              <span className="cta-card-header-title">
                இயக்கத்தில் ஏற்கனவே இணைந்தவர்கள்
              </span>
              <div className="cta-left-content">
                <div className="cta-stats-box">
                  <h3 className="cta-stat-number">2,50,000+</h3>
                  <p className="cta-stat-label">மக்கள் ஏற்கனவே எங்களுடன்!</p>
                  <button className="cta-btn-gold">
                    JOIN THE MOVEMENT <ArrowRight size={16} />
                  </button>
                </div>

                {/* Overlapping Avatar Cluster */}
                <div className="cta-avatars-cluster">
                  <div className="avatar-circle avatar-main">
                    <img src={projectYouth} alt="Member" />
                  </div>
                  <div className="avatar-circle avatar-pos-1">
                    <img src={portraitWoman} alt="Member" />
                  </div>
                  <div className="avatar-circle avatar-pos-2">
                    <img src={portraitStudent} alt="Member" />
                  </div>
                  <div className="avatar-circle avatar-pos-3">
                    <img src={portraitFarmer} alt="Member" />
                  </div>
                  <div className="avatar-circle avatar-pos-4">
                    <img src={portraitLabour} alt="Member" />
                  </div>
                  <div className="avatar-circle avatar-pos-5">
                    <img src={portraitDriver} alt="Member" />
                  </div>
                  <div className="avatar-circle avatar-pos-6">
                    <img src={heroTeaShopkeeper} alt="Member" />
                  </div>
                </div>
              </div>
            </div>

            {/* Center Calligraphy Title */}
            <div className="cta-center-calligraphy">
              <div className="calligraphy-text-wrapper">
                <h2 className="calligraphy-line">மனிதம்</h2>
                <h2 className="calligraphy-line">ஒன்றே</h2>
                <h2 className="calligraphy-line calligraphy-gold">போதும்</h2>
                <div className="calligraphy-underline"></div>
              </div>
            </div>

            {/* Right Card: 4 Features */}
            <div className="cta-right-card">
              <span className="cta-card-header-title">
                இந்த இயக்கம் உங்கள் கையிலும்!
              </span>
              <div className="cta-features-grid">
                <div className="cta-feature-item">
                  <div className="feature-icon-circle">
                    <MapPin size={24} className="feature-icon" />
                  </div>
                  <span className="feature-label">உங்கள் பகுதி</span>
                </div>

                <div className="cta-feature-item">
                  <div className="feature-icon-circle">
                    <Clock size={24} className="feature-icon" />
                  </div>
                  <span className="feature-label">உங்கள் நேரம்</span>
                </div>

                <div className="cta-feature-item">
                  <div className="feature-icon-circle">
                    <Star size={24} className="feature-icon" />
                  </div>
                  <span className="feature-label">உங்கள் திறமை</span>
                </div>

                <div className="cta-feature-item">
                  <div className="feature-icon-circle">
                    <Heart size={24} className="feature-icon" />
                  </div>
                  <span className="feature-label">உங்கள் பங்களிப்பு</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Crowd Background Silhouette Banner */}
        <div className="cta-crowd-banner">
          <img
            src={joinusCtaBg}
            alt="Crowd Silhouette"
            className="crowd-bg-img"
          />
          <div className="crowd-overlay"></div>

          <div className="container-fluid px-4 px-lg-5 crowd-banner-container">
            {/* Left Big Text */}
            <div className="crowd-text-box">
              <span className="crowd-sub-title">இன்று ஒரு முடிவு எடுங்கள்...</span>
              <h2 className="crowd-main-title">நாளை ஒரு மாற்றமாகிருங்கள்!</h2>
            </div>

            {/* Right Action Buttons */}
            <div className="crowd-buttons-box">
              {/* MEMBER Button */}
              <button className="crowd-btn crowd-btn-primary">
                <div className="crowd-btn-icon-bg">
                  <Users size={22} />
                </div>
                <div className="crowd-btn-text">
                  <span className="btn-action-label">MEMBER ஆக</span>
                  <span className="btn-action-sub">JOIN செய்யுங்கள்</span>
                </div>
                <ArrowRight size={20} className="crowd-btn-arrow" />
              </button>

              {/* VOLUNTEER Button */}
              <button className="crowd-btn crowd-btn-secondary">
                <div className="crowd-btn-icon-bg">
                  <FistIcon size={22} />
                </div>
                <div className="crowd-btn-text">
                  <span className="btn-action-label">VOLUNTEER ஆக</span>
                  <span className="btn-action-sub">JOIN செய்யுங்கள்</span>
                </div>
                <ArrowRight size={20} className="crowd-btn-arrow" />
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM SITE FOOTER BAR */}
        <footer className="joinus-footer-bar">
          <div className="container-fluid px-4 px-lg-5 footer-bar-container">
            {/* Left Logo & Name */}
            <div className="footer-left-brand">
              <img src={illayaLogo} alt="Illaya India" className="footer-logo" />
              <div className="footer-brand-text">
                <span className="brand-name">ILLAYA INDIA</span>
                <span className="brand-tagline">மனிதம் ஒன்றே போதும்</span>
              </div>
            </div>

            {/* Center Social Links */}
            <div className="footer-center-social">
              <span className="follow-us-label">FOLLOW US</span>
              <div className="social-icons-row">
                <a href="#facebook" className="social-circle-btn facebook-btn" aria-label="Facebook">
                  <FacebookIcon size={16} />
                </a>
                <a href="#twitter" className="social-circle-btn twitter-btn" aria-label="X">
                  <XIcon size={15} />
                </a>
                <a href="#instagram" className="social-circle-btn instagram-btn" aria-label="Instagram">
                  <InstagramIcon size={16} />
                </a>
                <a href="#youtube" className="social-circle-btn youtube-btn" aria-label="YouTube">
                  <YoutubeIcon size={16} />
                </a>
                <a href="#whatsapp" className="social-circle-btn whatsapp-btn" aria-label="WhatsApp">
                  <MessageCircle size={16} />
                </a>
                <a href="#telegram" className="social-circle-btn telegram-btn" aria-label="Telegram">
                  <Send size={15} />
                </a>
              </div>
            </div>

            {/* Right Tagline */}
            <div className="footer-right-motto">
              <span className="motto-text">HUMANITY BEFORE EVERYTHING</span>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default JoinUs;
