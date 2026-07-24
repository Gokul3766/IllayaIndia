import React from "react";
import "./Projects.css";
import illayaLogo from "../../assets/illaya-logo.png";
import projectsHeroBg from "../../assets/projects_hero_bg.png";
import projectEducation from "../../assets/project_education.png";
import projectYouth from "../../assets/project_youth.png";
import heroFarmer from "../../assets/hero-farmer.png";
import projectWomen from "../../assets/project_women.png";
import portraitLabour from "../../assets/portrait-labour.png";
import projectWater from "../../assets/project_water.png";
import promise3Solve from "../../assets/promise_3_solve.png";
import promise4Action from "../../assets/promise_4_action.png";
import projectGreen from "../../assets/project_green.png";
import portraitDriver from "../../assets/portrait-driver.png";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaTelegramPlane,
} from "react-icons/fa";

import {
  Users,
  MapPin,
  Calendar,
  Heart,
  GraduationCap,
  Laptop,
  Sprout,
  UserCheck,
  Droplet,
  Stethoscope,
  Sparkles,
  Trees,
  Shield,
  ArrowRight,
  Handshake,
  CheckCircle2,
  Building2,
  Lightbulb,
  HeartHandshake,
  BookOpen,
  Car,
  Home,
  Search,
  Megaphone,
} from "lucide-react";

const Projects: React.FC = () => {
  const statsData = [
    {
      id: 1,
      icon: Users,
      number: "125+",
      line1: "மக்கள் நல",
      line2: "திட்டங்கள்",
    },
    {
      id: 2,
      icon: MapPin,
      number: "250+",
      line1: "ஊர்களில்",
      line2: "செயல்பாடு",
    },
    {
      id: 3,
      icon: Users,
      number: "2.5 Lakh+",
      line1: "மக்கள் நேரடியாக",
      line2: "பயன்பெற்றுள்ளனர்",
    },
    {
      id: 4,
      icon: Calendar,
      number: "500+",
      line1: "நிகழ்ச்சிகள்",
      line2: "நடைபெற்றுள்ளன",
    },
  ];

  const majorProjectsData = [
    {
      id: 1,
      number: "01",
      image: projectEducation,
      icon: GraduationCap,
      title: "கல்வி உயர்வு திட்டம்",
      description:
        "ஏழை மற்றும் கிராமப்புற மாணவர்களுக்கு தரமான கல்வி, உதவித்தொகை, நூல்கள், டிஜிட்டல் கல்வி வசதிகள்.",
      metric: "45,000+ மாணவர்கள்",
    },
    {
      id: 2,
      number: "02",
      image: projectYouth,
      icon: Laptop,
      title: "இளைஞர் திறன் வளர்ச்சி",
      description:
        "திறன் பயிற்சி, வேலை வாய்ப்பு வழிகாட்டுதல், ஸ்டார்ட்அப் உதவி, தொழில் முனைவோர் பயிற்சி.",
      metric: "18,500+ இளைஞர்கள்",
    },
    {
      id: 3,
      number: "03",
      image: heroFarmer,
      icon: Sprout,
      title: "விவசாய முன்னேற்றம்",
      description:
        "நவீன விவசாய பயிற்சி, இயற்கை விவசாய ஆதரவு, சந்தை இணைப்பு, நீர் மேலாண்மை திட்டங்கள்.",
      metric: "32,000+ விவசாயிகள்",
    },
    {
      id: 4,
      number: "04",
      image: projectWomen,
      icon: UserCheck,
      title: "பெண்கள் வலிமை திட்டம்",
      description:
        "பெண்கள் சுயஉதவி குழுக்கள், திறன் பயிற்சி, தொழில் தொடங்க ஆதரவு, சட்ட உதவி, பாதுகாப்பு விழிப்புணர்வு.",
      metric: "26,000+ பெண்கள்",
    },
    {
      id: 5,
      number: "05",
      image: portraitLabour,
      icon: Heart,
      title: "முதியோர் ஆதரவு",
      description:
        "முதியவர்களுக்கு மருத்துவ உதவி, மாதாந்திர உதவி, தங்கும் வசதி, நலவாழ்வு முகாம்கள்.",
      metric: "8,500+ முதியோர்",
    },
    {
      id: 6,
      number: "06",
      image: projectWater,
      icon: Droplet,
      title: "தண்ணீர் பாதுகாப்பு",
      description:
        "குடிநீர் திட்டங்கள், குளம் புதுப்பிப்பு, மழைநீர் சேகரிப்பு, நீர் மேலாண்மை விழிப்புணர்வு.",
      metric: "120+ நீர் திட்டங்கள்",
    },
    {
      id: 7,
      number: "07",
      image: promise3Solve,
      icon: Stethoscope,
      title: "மக்கள் நலம் திட்டம்",
      description:
        "மருத்துவ முகாம்கள், இலவச சிகிச்சை, இரத்த தானம், சுகாதார விழிப்புணர்வு, ஆரோக்கிய பரிசோதனைகள்.",
      metric: "75+ மருத்துவ முகாம்கள்",
    },
    {
      id: 8,
      number: "08",
      image: promise4Action,
      icon: Sparkles,
      title: "சுத்தம் எங்கள் பொறுப்பு",
      description:
        "தெரு சுத்தம், பிளாஸ்டிக் ஒழிப்பு, சுகாதார விழிப்புணர்வு, குப்பை மேலாண்மை திட்டங்கள்.",
      metric: "300+ சுத்தம் இயக்கங்கள்",
    },
    {
      id: 9,
      number: "09",
      image: projectGreen,
      icon: Trees,
      title: "பசுமை இந்தியா",
      description:
        "மரக்கன்றுகள் நடுதல், பசுமை பாதுகாப்பு, காடு வளர்ப்பு, சுற்றுச்சூழல் விழிப்புணர்வு.",
      metric: "1,50,000+ மரக்கன்றுகள்",
    },
    {
      id: 10,
      number: "10",
      image: portraitDriver,
      icon: Shield,
      title: "பாதுகாப்பான சமூகம்",
      description:
        "சாலை பாதுகாப்பு, விபத்து விழிப்புணர்வு, இளைஞர் பாதுகாப்பு பயிற்சி, பேரிடர் முன்னெச்சரிக்கை பயிற்சி.",
      metric: "200+ விழிப்புணர்வு நிகழ்வுகள்",
    },
  ];

  /* Section 4 Data */
  const impactPoints = [
    "கல்வியை தொடரும் மாணவர்கள் அதிகரித்துள்ளனர்",
    "இளைஞர்கள் வேலைவாய்ப்பில் முன்னேறியுள்ளனர்",
    "விவசாயிகள் வருமானம் உயர்ந்துள்ளனர்",
    "பெண்கள் சுயநிறைவு அடைந்துள்ளனர்",
    "குடிநீர் மற்றும் சுகாதார நிலை மேம்பட்டுள்ளது",
    "மக்கள் நலத்தில் நம்பிக்கை உருவாகியுள்ளது",
  ];

  const galleryPhotos = [
    projectEducation,
    projectGreen,
    promise3Solve,
    projectYouth,
    projectWomen,
    promise4Action,
  ];

  const upcomingProjects = [
    { icon: Building2, text: "மாணவர் விடுதி திட்டம்" },
    { icon: Lightbulb, text: "இளைஞர் இன்க்ஷுபேஷன் மையங்கள்" },
    { icon: HeartHandshake, text: "மாதர் & குழந்தைகள் நலம் மையம்" },
    { icon: BookOpen, text: "மக்கள் நூலகம் அமைத்தல்" },
    { icon: Car, text: "மின்சார வாகனம் விழிப்புணர்வு" },
    { icon: Home, text: "வீடு இல்லாதவர்களுக்கு வீடு திட்டம்" },
  ];

  return (
    <div className="projects-page">
      {/* SECTION 1: HERO SECTION */}
      <section className="projects-hero-section">
        {/* Background Image Container with Overlay Gradient */}
        <div className="projects-hero-bg-wrapper">
          <img
            src={projectsHeroBg}
            alt="Illaya India Projects Hero"
            className="projects-hero-bg-img"
          />
          <div className="projects-hero-overlay"></div>
        </div>

        <div className="container-fluid px-4 px-lg-5 projects-hero-container">
          <div className="projects-hero-content-wrapper">
            {/* Tag / Category */}
            <span className="projects-hero-tag">OUR PROJECTS</span>

            {/* Main Headline */}
            <h1 className="projects-hero-title">
              சொல்வதல்ல,
              <br className="hero-br-desktop" />
              செய்வதில்தான்
              <br className="hero-br-desktop" />
              <span className="title-highlight">எங்கள் நம்பிக்கை!</span>
            </h1>

            {/* Subtitle / Description */}
            <p className="projects-hero-description">
              மக்களின் உண்மையான பிரச்சினைகளுக்கான
              <br className="hero-br-desktop" />
              நிலையான தீர்வுகளை உருவாக்குவதற்காக,
              <br className="hero-br-desktop" />
              எங்கள் திட்டங்கள் மக்களுடன் இணைந்து செயல்படுகின்றன.
            </p>

            {/* Bottom Row Stats Counter Cards */}
            <div className="projects-hero-stats">
              {statsData.map((stat) => {
                const IconComponent = stat.icon;
                return (
                  <div key={stat.id} className="projects-stat-card">
                    <div className="stat-icon-wrapper">
                      <IconComponent className="stat-icon" />
                    </div>
                    <div className="stat-info">
                      <span className="stat-number">{stat.number}</span>
                      <span className="stat-label">
                        {stat.line1}
                        <br />
                        {stat.line2}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Right Yellow Brush CTA Badge */}
          <div className="projects-hero-brush-badge">
            <div className="brush-badge-content">
              <div className="badge-heart-circle">
                <Heart className="badge-heart-icon" size={20} fill="#000000" />
              </div>
              <div className="badge-text">
                <span className="badge-subtext">மக்களுடன் சேர்ந்து</span>
                <span className="badge-maintext">மாற்றத்தை உருவாக்குவோம்!</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: MAJOR PROJECTS GRID */}
      <section className="projects-major-section">
        <div className="container-fluid px-4 px-lg-5">
          {/* Header Title with Ornamental Lines */}
          <div className="projects-section-header">
            <div className="ornamental-line"></div>
            <div className="ornamental-diamond">◆</div>
            <h2 className="projects-section-title">எங்கள் முக்கிய திட்டங்கள்</h2>
            <div className="ornamental-diamond">◆</div>
            <div className="ornamental-line"></div>
          </div>

          {/* 10 Projects Grid */}
          <div className="projects-grid">
            {majorProjectsData.map((project) => {
              const IconComp = project.icon;
              return (
                <div key={project.id} className="project-card">
                  {/* Top Left Number Badge */}
                  <div className="project-number-badge">{project.number}</div>

                  {/* Card Image Area */}
                  <div className="project-image-wrapper">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-card-img"
                    />
                    <div className="project-image-gradient"></div>
                  </div>

                  {/* Floating Center Icon */}
                  <div className="project-icon-badge">
                    <IconComp size={20} className="project-icon" />
                  </div>

                  {/* Content Body */}
                  <div className="project-card-body">
                    <h3 className="project-card-title">{project.title}</h3>
                    <p className="project-card-desc">{project.description}</p>
                  </div>

                  {/* Footer Metric Bar */}
                  <div className="project-card-footer">
                    <div className="project-metric-info">
                      <Users size={16} className="metric-users-icon" />
                      <span>{project.metric}</span>
                    </div>
                    <div className="project-action-arrow">
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3: IMPACT BANNER */}
      <section className="projects-impact-section">
        <div className="container-fluid px-4 px-lg-5">
          <div className="impact-banner-card">
            {/* Banner Title */}
            <h2 className="impact-banner-title">
              நமது பயணம்... மக்களின் நம்பிக்கை!
            </h2>

            {/* Horizontal Divider Line */}
            <div className="impact-banner-divider"></div>

            {/* 6 Metrics Grid Row */}
            <div className="impact-metrics-row">
              {/* Metric 1 */}
              <div className="impact-metric-item">
                <div className="impact-icon-wrapper">
                  <Users className="impact-icon" size={28} />
                </div>
                <div className="impact-info">
                  <span className="impact-number">125+</span>
                  <span className="impact-label">மக்கள் நல திட்டங்கள்</span>
                </div>
              </div>

              {/* Metric 2 */}
              <div className="impact-metric-item">
                <div className="impact-icon-wrapper">
                  <MapPin className="impact-icon" size={28} />
                </div>
                <div className="impact-info">
                  <span className="impact-number">250+</span>
                  <span className="impact-label">ஊர்களில் செயல்பாடு</span>
                </div>
              </div>

              {/* Metric 3 */}
              <div className="impact-metric-item">
                <div className="impact-icon-wrapper">
                  <Users className="impact-icon" size={28} />
                </div>
                <div className="impact-info">
                  <span className="impact-number">2.5 Lakh+</span>
                  <span className="impact-label">மக்கள் பயன்பெற்றுள்ளனர்</span>
                </div>
              </div>

              {/* Metric 4 */}
              <div className="impact-metric-item">
                <div className="impact-icon-wrapper">
                  <Handshake className="impact-icon" size={28} />
                </div>
                <div className="impact-info">
                  <span className="impact-number">1000+</span>
                  <span className="impact-label">தன்னார்வலர்கள்</span>
                </div>
              </div>

              {/* Metric 5 */}
              <div className="impact-metric-item">
                <div className="impact-icon-wrapper">
                  <Calendar className="impact-icon" size={28} />
                </div>
                <div className="impact-info">
                  <span className="impact-number">5+</span>
                  <span className="impact-label">
                    ஆண்டுகள்
                    <br />
                    சேவை
                  </span>
                </div>
              </div>

              {/* Metric 6 */}
              <div className="impact-metric-item">
                <div className="impact-icon-wrapper">
                  <Heart
                    className="impact-icon impact-icon-filled"
                    size={26}
                    fill="#E8A838"
                  />
                </div>
                <div className="impact-info">
                  <span className="impact-number">1</span>
                  <span className="impact-label">
                    மனிதம் ஒன்றே
                    <br />
                    தன் நோக்கம்
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: THREE COLUMNS DETAILS */}
      <section className="projects-details-section">
        <div className="container-fluid px-4 px-lg-5">
          <div className="projects-details-grid">
            {/* Column 1: Impact List */}
            <div className="details-card">
              <div className="details-card-header">
                <h3 className="details-card-title">சில திட்டங்களின் தாக்கம்</h3>
              </div>
              <ul className="impact-list">
                {impactPoints.map((point, index) => (
                  <li key={index} className="impact-list-item">
                    <div className="impact-check-icon">
                      <CheckCircle2 size={18} className="check-icon-gold" />
                    </div>
                    <span className="impact-list-text">{point}</span>
                  </li>
                ))}
              </ul>
              <button className="details-card-btn">
                <span>அனைத்து திட்டங்களையும் பார்க்க</span>
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Column 2: Gallery Grid */}
            <div className="details-card">
              <div className="details-card-header">
                <h3 className="details-card-title">திட்ட செயல்பாடுகள்</h3>
              </div>
              <div className="photo-grid-wrapper">
                <div className="photo-grid">
                  {galleryPhotos.map((imgSrc, index) => (
                    <div key={index} className="photo-thumb-container">
                      <img
                        src={imgSrc}
                        alt={`Project Activity ${index + 1}`}
                        className="photo-thumb-img"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <button className="details-card-btn">
                <span>அனைத்து புகைப்படங்களும்</span>
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Column 3: Upcoming Projects */}
            <div className="details-card">
              <div className="details-card-header">
                <h3 className="details-card-title">விரைவில் வரும் திட்டங்கள்</h3>
              </div>
              <ul className="upcoming-list">
                {upcomingProjects.map((item, index) => {
                  const ItemIcon = item.icon;
                  return (
                    <li key={index} className="upcoming-list-item">
                      <div className="upcoming-icon-wrapper">
                        <ItemIcon size={18} className="upcoming-icon-gold" />
                      </div>
                      <span className="upcoming-list-text">{item.text}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CTA BANNER & CUSTOM FOOTER */}
      <section className="projects-cta-section">
        <div className="container-fluid px-4 px-lg-5">
          <div className="cta-banner-wrapper">
            {/* Left Side Text */}
            <div className="cta-text-group">
              <h2 className="cta-title">
                இந்த மாற்றப் பயணத்தில்
                <br className="hero-br-desktop" />
                நீங்களும் இணைவீர்களா?
              </h2>
              <p className="cta-subtitle">
                மக்களுடன் சேர்ந்து ஒரு புதிய இந்தியாவை உருவாக்குவோம்!
              </p>
            </div>

            {/* Right Side 3 Action Buttons */}
            <div className="cta-buttons-group">
              {/* Button 1: Solid Yellow */}
              <button className="cta-btn cta-btn-primary">
                <div className="btn-icon-circle">
                  <UserCheck size={16} />
                </div>
                <div className="btn-text-wrapper">
                  <span>தன்னார்வலராக</span>
                  <span>இணையுங்கள்</span>
                </div>
              </button>

              {/* Button 2: Outline */}
              <button className="cta-btn cta-btn-outline">
                <Search size={16} className="btn-icon-gold" />
                <span>நன்கொடை வழங்குங்கள்</span>
              </button>

              {/* Button 3: Outline */}
              <button className="cta-btn cta-btn-outline">
                <Megaphone size={16} className="btn-icon-gold" />
                <div className="btn-text-wrapper">
                  <span>உங்கள் பகுதியின் திட்டத்தை</span>
                  <span>பரிந்துரைக்கவும்</span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Custom Footer Bar */}
        <div className="projects-custom-footer">
          <div className="container-fluid px-4 px-lg-5">
            <div className="footer-bar-inner">
              {/* Brand Logo & Subtitle */}
              <div className="footer-brand">
                <img
                  src={illayaLogo}
                  alt="Illaya India Logo"
                  className="footer-logo-img"
                />
                <div className="footer-brand-text">
                  <span className="footer-brand-title">ILLAYA INDIA</span>
                  <span className="footer-brand-subtitle">
                    மனிதம் ஒன்றே போதும்
                  </span>
                </div>
              </div>

              {/* Follow Us & Social Icons */}
              <div className="footer-social-wrapper">
                <span className="follow-us-label">FOLLOW US</span>
                <div className="footer-social-icons">
                  <a
                    href="#"
                    className="social-circle social-facebook"
                    aria-label="Facebook"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="#"
                    className="social-circle social-twitter"
                    aria-label="Twitter"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href="#"
                    className="social-circle social-instagram"
                    aria-label="Instagram"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="#"
                    className="social-circle social-youtube"
                    aria-label="YouTube"
                  >
                    <FaYoutube />
                  </a>
                  <a
                    href="#"
                    className="social-circle social-whatsapp"
                    aria-label="WhatsApp"
                  >
                    <FaWhatsapp />
                  </a>
                  <a
                    href="#"
                    className="social-circle social-telegram"
                    aria-label="Telegram"
                  >
                    <FaTelegramPlane />
                  </a>
                </div>
              </div>

              {/* Tagline */}
              <div className="footer-tagline">
                HUMANITY <span className="tagline-highlight">BEFORE</span> EVERYTHING
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
