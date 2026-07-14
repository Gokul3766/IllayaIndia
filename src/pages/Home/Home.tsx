import { useState, useEffect, useCallback, useRef } from "react";
import heroBanner from "../../assets/hero-banner.png";
import heroAutoDriver from "../../assets/hero-auto-driver.png";
import heroFarmer from "../../assets/hero-farmer.png";
import heroStudent from "../../assets/hero-student.png";
import heroTeaShopkeeper from "../../assets/hero-tea-shopkeeper.png";
import illayaLogo from "../../assets/illaya-logo.png";
import teaShopImg from "../../assets/tea-shop.png";
import portraitDriver from "../../assets/portrait-driver.png";
import portraitFarmer from "../../assets/portrait-farmer.png";
import portraitStudent from "../../assets/portrait-student.png";
import portraitWoman from "../../assets/portrait-woman.png";
import portraitLabour from "../../assets/portrait-labour.png";
import waterCrisisBg from "../../assets/water_crisis_bg.png";
import whyIllayaBg from "../../assets/why_illaya_bg.png";
import tnMap from "../../assets/tn_map.png";
import tapIcon from "../../assets/tap_icon.png";

const HERO_SLIDES = [
  { src: heroBanner, alt: "Diverse people of India" },
  { src: heroAutoDriver, alt: "Auto rickshaw driver" },
  { src: heroFarmer, alt: "Indian farmer" },
  { src: heroStudent, alt: "Students" },
  { src: heroTeaShopkeeper, alt: "Tea shopkeeper" },
];

const AUTOPLAY_INTERVAL = 5000;

const Home = () => {
  const [selectedPoll, setSelectedPoll] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(0);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoplay = useCallback(() => {
    stopAutoplay();
    autoplayRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, AUTOPLAY_INTERVAL);
  }, []);

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [startAutoplay, stopAutoplay]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    startAutoplay();
  };

  const goPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
    startAutoplay();
  };

  const goNext = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    startAutoplay();
  };

  const heroTags = ["மனிதம்", "சமத்துவம்", "இளைஞர்கள்", "தமிழ்", "இந்தியா"];

  const pollOptions = [
    { icon: "bi-droplet", label: "குடிநீர்", percent: 27 },
    { icon: "bi-briefcase", label: "வேலைவாய்ப்பு", percent: 33 },
    { icon: "bi-book", label: "கல்வி", percent: 18 },
    { icon: "bi-file-medical", label: "மருத்துவம்", percent: 12 },
    { icon: "bi-graph-up-arrow", label: "விலைவாசி", percent: 10 },
  ];

  const peopleVoice = [
    { img: portraitDriver, role: "DRIVER", duration: "0:28" },
    { img: portraitFarmer, role: "FARMER", duration: "0:30" },
    { img: portraitStudent, role: "STUDENT", duration: "0:26" },
    { img: portraitWoman, role: "WOMAN", duration: "0:27" },
    { img: portraitLabour, role: "LABOUR", duration: "0:29" },
  ];

  return (
    <>
      <section className="hero-section" id="hero-section">
        <div className="hero-bg-wrapper">
          {HERO_SLIDES.map((slide, index) => (
            <img
              key={index}
              src={slide.src}
              alt={slide.alt}
              className={`hero-bg-image hero-carousel-slide ${index === currentSlide ? "active" : ""}`}
            />
          ))}
          <div className="hero-bg-overlay"></div>

          <button
            className="hero-carousel-arrow hero-carousel-arrow-left"
            onClick={goPrev}
            aria-label="Previous slide"
            id="hero-prev-btn"
          >
            <i className="bi bi-chevron-left"></i>
          </button>
          <button
            className="hero-carousel-arrow hero-carousel-arrow-right"
            onClick={goNext}
            aria-label="Next slide"
            id="hero-next-btn"
          >
            <i className="bi bi-chevron-right"></i>
          </button>

          <div className="hero-carousel-dots">
            {HERO_SLIDES.map((_, index) => (
              <button
                key={index}
                className={`hero-carousel-dot ${index === currentSlide ? "active" : ""}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                id={`hero-dot-${index}`}
              />
            ))}
          </div>
        </div>

        <div className="hero-content">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-10">
                <div className="hero-logo-container">
                  <img
                    src={illayaLogo}
                    alt="Illaya India"
                    className="hero-logo-icon"
                  />
                  <h1 className="hero-title">
                    <span className="hero-title-illaya">ILLAYA </span>
                    <span className="hero-title-india">INDIA</span>
                  </h1>
                </div>

                <p className="hero-tamil-title">மனிதம் ஒன்றே போதும்</p>

                <div className="hero-tags">
                  {heroTags.map((tag, index) => (
                    <span className="hero-tag" key={index}>
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="hero-subtitle">
                  A PEOPLE MOVEMENT FOR A NEW INDIA
                </p>

                <div className="hero-buttons">
                  <button className="btn-join" id="join-movement-btn">
                    JOIN THE MOVEMENT
                  </button>
                  <button className="btn-watch" id="watch-video-btn">
                    <span className="btn-watch-icon">
                      <i className="bi bi-play-fill"></i>
                    </span>
                    WATCH OUR VIDEO
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="poll-section" id="poll-section">
          <div className="container-fluid px-4">
            <div
              className="row g-0 poll-card mx-auto"
              style={{ maxWidth: "1400px" }}
            >
              <div className="col-12 col-md-12 col-xl-2 poll-label-col">
                <div className="poll-label-wrapper">
                  <h3 className="poll-label-tamil">
                    இன்று{" "}
                    <br />
                    மக்களின்{" "}
                    <br />
                    கேள்வி
                  </h3>
                  <p className="poll-label-english">TODAY'S PUBLIC QUESTION</p>
                </div>
              </div>

              <div className="col-12 col-md-12 col-xl-10 poll-content-col">
                <div className="row align-items-center mb-3">
                  <div className="col">
                    <h2 className="poll-question-tamil">
                      தமிழ்நாட்டில் முதலில் எந்த பிரச்சினை தீர்க்கப்பட வேண்டும்?
                    </h2>
                    <p className="poll-question-english">
                      WHICH IS THE FIRST ISSUE THAT SHOULD BE SOLVED IN TAMIL
                      NADU?
                    </p>
                  </div>
                  <div className="col-auto">
                    <button className="poll-results-btn" id="view-results-btn">
                      VIEW RESULTS
                    </button>
                  </div>
                </div>

                <div className="row g-2 g-md-3">
                  {pollOptions.map((option, index) => (
                    <div className="col" key={index}>
                      <button
                        className={`poll-option ${selectedPoll === index ? "active" : ""}`}
                        onClick={() => setSelectedPoll(index)}
                        id={`poll-option-${index}`}
                      >
                        <div className="poll-option-content">
                          <i
                            className={`bi ${option.icon} poll-option-icon`}
                          ></i>
                          <div className="poll-option-text">
                            <span className="poll-option-label">
                              {option.label}
                            </span>
                            <span className="poll-option-percent">
                              {option.percent}%
                            </span>
                          </div>
                        </div>
                        <div className="poll-option-progress-bar">
                          <div
                            className="poll-option-progress-fill"
                            style={{ width: `${option.percent}%` }}
                          ></div>
                        </div>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="voices-section" id="voices-section">
        <div className="container-fluid px-4">
          <div className="row g-3 mx-auto" style={{ maxWidth: "1400px" }}>
            <div className="col-12 col-lg-6">
              <div className="tea-shop-card">
                <div className="tea-shop-bg">
                  <img
                    src={teaShopImg}
                    alt="Tea Shop"
                    className="tea-shop-img"
                  />
                  <div className="tea-shop-overlay"></div>
                </div>
                <div className="tea-shop-content">
                  <h2 className="tea-shop-title">
                    <span className="tea-shop-title-top">TEA SHOP</span>
                    <span className="tea-shop-title-bottom">ASSEMBLY</span>
                  </h2>
                  <p className="tea-shop-desc">
                    ஒவ்வொரு டீக்கடையிலும் ஒரு சிறிய சட்டசபை
                    <br />
                    ஒவ்வொரு குடிமகளும் ஒரு உறுப்பினர்
                  </p>
                  <button className="tea-shop-btn" id="tea-shop-btn">
                    <span>
                      உங்கள் TEA SHOP ASSEMBLY
                      <br />
                      தொடங்குங்கள்
                    </span>
                    <i className="bi bi-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="peoples-voice-card">
                <div className="pv-header">
                  <div>
                    <h2 className="pv-title-tamil">மக்கள் குரல்</h2>
                    <p className="pv-title-english">PEOPLE'S VOICE</p>
                  </div>
                  <button className="pv-view-all-btn" id="pv-view-all-btn">
                    VIEW ALL
                  </button>
                </div>

                <div className="row g-2 pv-grid">
                  {peopleVoice.map((person, index) => (
                    <div className="col" key={index}>
                      <div className="pv-video-card" id={`pv-video-${index}`}>
                        <div className="pv-thumb-wrapper">
                          <img
                            src={person.img}
                            alt={person.role}
                            className="pv-thumb-img"
                          />
                          <div className="pv-play-overlay">
                            <div className="pv-play-btn">
                              <i className="bi bi-play-fill"></i>
                            </div>
                          </div>
                        </div>
                        <div className="pv-video-info">
                          <span className="pv-role">{person.role}</span>
                          <span className="pv-duration">{person.duration}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pv-footer">
                  <p className="pv-footer-tamil">
                    இங்கே தலைவர்கள் பேசுவதில்லை. மக்கள் பேசுகிறார்கள்.
                  </p>
                  <p className="pv-footer-english">
                    Here Leaders Don't Speak. People Speak.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="issue-why-section" id="issue-why-section">
        <div className="container-fluid px-4">
          <div className="row g-3 mx-auto" style={{ maxWidth: "1400px" }}>
            <div className="col-12 col-lg-6">
              <div className="issue-solution-card">
                <div className="is-bg-wrapper">
                  <img
                    src={waterCrisisBg}
                    alt="Water Crisis"
                    className="is-bg-img"
                  />
                  <div className="is-bg-overlay"></div> 
                </div>

                <div className="is-header">
                  <div>
                    <h2 className="is-title-tamil">
                      ஒரு பிரச்சினை - ஒரு தீர்வு
                    </h2>
                    <p className="is-title-english">ONE ISSUE - ONE SOLUTION</p>
                  </div>
                  <button className="is-view-all-btn" id="is-view-all-btn">
                    VIEW ALL
                  </button>
                </div>

                <div className="is-content-area">
                  <div className="is-content-inner">
                    <div style={{ display: "flex", alignItems: "start", gap: "10px" }}>
                      <div className="is-icon-box">
                        <img
                          src={tapIcon}
                          alt="Water Crisis"
                          className="tap-icon-img"
                        />
                      </div>
                      <div className="is-text-content">
                        <div className="is-topic-text">
                          <h3 className="is-topic-tamil">குடிநீர் பிரச்சினை</h3>
                          <p className="is-topic-english">WATER CRISIS</p>
                        </div>

                        <div className="is-description">
                          <p className="is-desc-tamil">
                            உங்கள் தீர்வுகளை படையுங்கள்.
                            <br />
                            சிறந்த தீர்வுக்கு எங்கள் ஆதரவு.
                          </p>
                          <p className="is-desc-english">
                            Share your solutions.
                            <br />
                            Best solutions will be implemented.
                          </p>
                        </div>
                      </div>
                    </div>

                    <button className="is-action-btn" id="is-action-btn">
                      <span>உங்கள் தீர்வை பகிருங்கள்</span>
                      <i className="bi bi-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="why-illaya-card">
                <div className="why-bg-wrapper">
                  <img
                    src={whyIllayaBg}
                    alt="Why Illaya India"
                    className="why-bg-img"
                  />
                  <div className="why-bg-overlay"></div>
                </div>

                <div className="why-content">
                  <h2 className="why-title">
                    WHY{" "}
                    <span className="why-title-highlight">ILLAYA INDIA?</span>
                  </h2>

                  <div className="why-features-list">
                    <div className="why-feature-item">
                      <div className="why-icon-box">
                        <i className="bi bi-person-badge"></i>
                      </div>
                      <div className="why-feature-text">
                        <h4 className="why-feature-tamil">தமிழ் வேர்</h4>
                        <p className="why-feature-english">Tamil Roots</p>
                      </div>
                    </div>

                    <div className="why-feature-item">
                      <div className="why-icon-box">
                        <i className="bi bi-people-fill"></i>
                      </div>
                      <div className="why-feature-text">
                        <h4 className="why-feature-tamil">திராவிட சமத்துவம்</h4>
                        <p className="why-feature-english">
                          Dravidian Equality
                        </p>
                      </div>
                    </div>

                    <div className="why-feature-item">
                      <div className="why-icon-box">
                        <i className="bi bi-globe-central-south-asia"></i>
                      </div>
                      <div className="why-feature-text">
                        <h4 className="why-feature-tamil">இந்திய ஒற்றுமை</h4>
                        <p className="why-feature-english">Indian Unity</p>
                      </div>
                    </div>

                    <div className="why-feature-item">
                      <div className="why-icon-box">
                        <i className="bi bi-heart-pulse"></i>
                      </div>
                      <div className="why-feature-text">
                        <h4 className="why-feature-tamil">மனிதம் அடித்தளம்</h4>
                        <p className="why-feature-english">
                          Humanity Foundation
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="why-watermark">
                  <span className="why-watermark-top">HUMANITY</span>
                  <br />
                  <span className="why-watermark-mid">BEFORE</span>
                  <br />
                  <span className="why-watermark-bottom">EVERYTHING</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="map-join-section" id="map-join-section">
        <div className="container-fluid px-4">
          <div className="row g-3 mx-auto" style={{ maxWidth: "1400px" }}>
            <div className="col-12 col-lg-6">
              <div className="problem-map-card">
                <div className="pm-header">
                  <div>
                    <h2 className="pm-title-tamil">மக்கள் பிரச்சினை வரைபடம்</h2>
                    <p className="pm-title-english">PEOPLE'S PROBLEM MAP</p>
                  </div>
                  <button className="pm-view-map-btn" id="pm-view-map-btn">
                    VIEW MAP
                  </button>
                </div>

                <div className="pm-content">
                  <div className="pm-map-container">
                    <img
                      src={tnMap}
                      alt="Tamil Nadu Map"
                      className="pm-map-img"
                    />
                    <div
                      className="pm-map-pin"
                      style={{ top: "15%", right: "25%" }}
                    >
                      <i className="bi bi-geo-alt-fill"></i>
                    </div>
                    <div
                      className="pm-map-pin"
                      style={{ top: "35%", left: "45%" }}
                    >
                      <i className="bi bi-geo-alt-fill"></i>
                    </div>
                    <div
                      className="pm-map-pin"
                      style={{ top: "55%", left: "20%" }}
                    >
                      <i className="bi bi-geo-alt-fill"></i>
                    </div>
                    <div
                      className="pm-map-pin"
                      style={{ top: "75%", left: "40%" }}
                    >
                      <i className="bi bi-geo-alt-fill"></i>
                    </div>
                  </div>

                  <div className="pm-stats-list">
                    <div className="pm-stat-item">
                      <div className="pm-stat-city">
                        சென்னை <span className="pm-city-eng">Chennai</span>
                      </div>
                      <div className="pm-stat-count">
                        1243{" "}
                        <span className="pm-stat-label">
                          பிரச்சினைகள்
                          <br />
                          problems
                        </span>
                      </div>
                    </div>
                    <div className="pm-stat-item">
                      <div className="pm-stat-city">
                        மதுரை <span className="pm-city-eng">Madurai</span>
                      </div>
                      <div className="pm-stat-count">
                        987{" "}
                        <span className="pm-stat-label">
                          பிரச்சினைகள்
                          <br />
                          problems
                        </span>
                      </div>
                    </div>
                    <div className="pm-stat-item">
                      <div className="pm-stat-city">
                        கோயம்புத்தூர்{" "}
                        <span className="pm-city-eng">Coimbatore</span>
                      </div>
                      <div className="pm-stat-count">
                        876{" "}
                        <span className="pm-stat-label">
                          பிரச்சினைகள்
                          <br />
                          problems
                        </span>
                      </div>
                    </div>
                    <div className="pm-stat-item">
                      <div className="pm-stat-city">
                        சேலம் <span className="pm-city-eng">Salem</span>
                      </div>
                      <div className="pm-stat-count">
                        654{" "}
                        <span className="pm-stat-label">
                          பிரச்சினைகள்
                          <br />
                          problems
                        </span>
                      </div>
                    </div>
                    <div className="pm-stat-item">
                      <div className="pm-stat-city">
                        திருநெல்வேலி{" "}
                        <span className="pm-city-eng">Tirunelveli</span>
                      </div>
                      <div className="pm-stat-count">
                        543{" "}
                        <span className="pm-stat-label">
                          பிரச்சினைகள்
                          <br />
                          problems
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pm-footer">
                  <span className="pm-footer-text">
                    உங்கள் பகுதியின் பிரச்சினையை பதிவு செய்யுங்கள்
                  </span>
                  <i className="bi bi-arrow-right pm-footer-icon"></i>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="join-movement-card">
                <div className="jm-header">
                  <h2 className="jm-title-tamil">இயக்கத்தில் இணையுங்கள்</h2>
                  <p className="jm-title-english">JOIN THE MOVEMENT</p>
                </div>

                <div className="jm-cards-container">
                  <div className="jm-action-card">
                    <div className="jm-action-icon">
                      <i className="bi bi-person-plus-fill"></i>
                    </div>
                    <h3 className="jm-action-tamil">
                      உறுப்பினராக
                      <br />
                      இணையுங்கள்
                    </h3>
                    <p className="jm-action-english">BECOME A MEMBER</p>
                  </div>

                  <div className="jm-action-card">
                    <div className="jm-action-icon">
                      <i className="bi bi-heart-fill"></i>
                      <i className="bi bi-hand-index-thumb jm-sub-icon"></i>
                    </div>
                    <h3 className="jm-action-tamil">
                      தன்னார்வலராக
                      <br />
                      இணையுங்கள்
                    </h3>
                    <p className="jm-action-english">BECOME A VOLUNTEER</p>
                  </div>

                  <div className="jm-action-card">
                    <div className="jm-action-icon">
                      <i className="bi bi-people-fill"></i>
                    </div>
                    <h3 className="jm-action-tamil">
                      உங்கள் பகுதியின்
                      <br />
                      குரலாக மாறுங்கள்
                    </h3>
                    <p className="jm-action-english">BE THE VOICE</p>
                  </div>
                </div>

                <div className="jm-footer">
                  <span className="jm-social-text">FOLLOW US</span>
                  <div className="jm-social-icons">
                    <a href="#" className="jm-social-icon facebook">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="#" className="jm-social-icon twitter">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="#" className="jm-social-icon instagram">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="#" className="jm-social-icon youtube">
                      <i className="bi bi-youtube"></i>
                    </a>
                    <a href="#" className="jm-social-icon whatsapp">
                      <i className="bi bi-whatsapp"></i>
                    </a>
                    <a href="#" className="jm-social-icon telegram">
                      <i className="bi bi-telegram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
