import "./About.css";
import aboutHeroImg from "../../assets/about_hero_speaker.png";
import journeyIconSeed from "../../assets/journey_icon_seed.png";
import journeyIconMovement from "../../assets/journey_icon_movement.png";
import journeyIconYouth from "../../assets/journey_icon_youth.png";
import identityDravidian from "../../assets/identity_dravidian.png";
import identityHumanity from "../../assets/identity_humanity.png";
import identityIndiaUnity from "../../assets/identity_india_unity.png";
import identityPeople from "../../assets/identity_people.png";
import identityTamil from "../../assets/identity_tamil.png";
import illayaLogo from "../../assets/illaya-logo.png";
import aboutCtaBg from "../../assets/about_cta_silhouette.png";


const About = () => {
  const storyQuestions = [
    "உன் அரசியல் மக்களை பிரிக்கிறது?",
    "உன் சாதாரண மனிதர்களின் குரல் கேட்கப்படுவதில்லை?",
    "உன் இளைஞர்கள் பார்வையாளர்களாக மட்டும் இருக்க வேண்டும்?",
  ];

  const journeyMilestones = [
    {
      year: "2008",
      icon: journeyIconSeed,
      title: "ஒரு எண்ணத்தின் விதை",
      description:
        "மக்கள் ஒன்றிணைக்கும், மனிதநேய அரசியலை உருவாக்க வேண்டும் என்ற எண்ணம் உருவானது.",
    },
    {
      year: "2015",
      icon: journeyIconMovement,
      title: "மக்களிட்ட பயணம்",
      description:
        "தேநீர் சந்திப்புகள், தெருமுனை கலந்துரையாடல்கள், தமிழ்நாட்டின் ஒவ்வொரு மக்களை கேட்டு, புரிந்துகொண்டோம்.",
    },
    {
      year: "2024",
      icon: journeyIconYouth,
      title: "இளைய இந்தியா – ஒரு மக்கள் இயக்கம்",
      description:
        "மனிதம், இளையோர் சக்தி, தமிழ் அடையாளம், இந்திய ஒற்றுமை ஆகியவற்றின் புதிய பயணம்.",
    },
  ];

  const identities = [
    {
      img: identityTamil,
      title: "தமிழ் அடையாளம்",
      english: "TAMIL IDENTITY",
      description:
        "மொழி, பண்பாடு, வரலாறு, சாதி ஒழிப்பு, சமூக நீதி, மரபு – எங்கள் பெருமை. மனித மரியாதை – எங்கள் பாதை.",
    },
    {
      img: identityDravidian,
      title: "திராவிட சமத்துவம்",
      english: "DRAVIDIAN EQUALITY",
      description:
        "சாதி ஒழிப்பு, சமூக நீதி, மரபு – எங்கள் பெருமை. மனித மரியாதை – எங்கள் பாதை.",
    },
    {
      img: identityIndiaUnity,
      title: "இந்திய ஒற்றுமை",
      english: "INDIAN UNITY",
      description:
        "பல மொழிகள், பல பண்பாடுகள், ஒரே இந்திய குடும்பம்.",
    },
    {
      img: identityPeople,
      title: "மக்கள் அரசியல்",
      english: "PEOPLE'S POLITICS",
      description:
        "அரசியல் என்பது மக்களின் அதிகாரம் அல்ல, சேவை.",
    },
    {
      img: identityHumanity,
      title: "மனிதம் அடித்தளம்",
      english: "HUMANITY FOUNDATION",
      description:
        "எல்லாவற்றிற்கும் மேலாக மனிதம் – ஆதலிது எங்கள் அடித்தளம்.",
    },
  ];

  const beliefs = [
    "மக்கள் அரசியலின் எஜமானாக இருக்க வேண்டும்.",
    "இளைஞர்கள் மாற்றத்தின் முன்னவர்களாக இருக்க வேண்டும்.",
    "உழைத்தும் மக்களுக்கு மரியாதை கிடைக்க வேண்டும்.",
    "பெண்கள் பாதுகாப்பாகவும் சுதந்திரமாகவும் வாழ வேண்டும்.",
    "கல்வி மற்றும் வாய்ப்புகள் அனைவருக்கும் கிடைக்க வேண்டும்.",
    "அரசாங்க எல்லா அதிகாரத்திற்கான அடிப்படை, வேலையிது இருக்க வேண்டும்.",
  ];

  const comparisons = [
    {
      others: "வாக்கு கேட்க வருகிறார்கள்",
      illaya: "உங்கள் குரலை கேட்க வருகிறோம்",
      othersIcon: "bi-megaphone-fill",
      illayaIcon: "bi-ear-fill",
    },
    {
      others: "வாக்குறுதி கொடுக்கிறார்கள்",
      illaya: "செயலால் நிரூபிக்கிறோம்",
      othersIcon: "bi-chat-square-text-fill",
      illayaIcon: "bi-gear-fill",
    },
    {
      others: "மக்களை பிரிக்கிறார்கள்",
      illaya: "மக்களை இணைக்கிறோம்",
      othersIcon: "bi-people-fill",
      illayaIcon: "bi-people-fill",
    },
    {
      others: "அதிகாரம் இலக்கு",
      illaya: "மக்களின் வாழ்க்கை இலக்கு",
      othersIcon: "bi-bullseye",
      illayaIcon: "bi-heart-fill",
    },
    {
      others: "மேடையில் இருந்து பேசுகிறார்கள்",
      illaya: "உங்களுடன் சேர்ந்து செயல்படுகிறோம்",
      othersIcon: "bi-broadcast-pin",
      illayaIcon: "bi-hand-thumbs-up-fill",
    },
  ];

  return (
    <div className="about-page">
      <section className="about-hero-section">
        <div className="about-hero-container">
                    <div className="about-hero-left">
            <div className="about-hero-left-content">
              <span className="about-us-tag">ABOUT US</span>
              <h1 className="about-hero-title">
                WE ARE<br />
                <span className="highlight-yellow">ILLAYA INDIA</span>
              </h1>
              
              <h2 className="about-hero-subtitle">
                மனிதம் ஒன்றே <span className="highlight-yellow">போதும்.</span>
              </h2>
              
              <p className="about-hero-description">
                இளைய இந்தியா என்பது ஒரு அரசியல் கட்சி மட்டும் அல்ல. 
                இது ஒரு சிந்தனை. இது ஒரு பயணம். இது ஒரு 
                புதிய தலைமுறையின் கனவு.
              </p>
              
              <div className="about-hero-divider"></div>
              
                            <div className="about-features-grid">
                <div className="about-feature-item">
                  <div className="about-feature-icon-wrapper">
                    <i className="bi bi-heart-fill about-feature-icon"></i>
                  </div>
                  <div className="about-feature-text">
                    <span className="about-feature-title">மனிதம்</span>
                    <span className="about-feature-subtitle">எங்கள் அடித்தளம்</span>
                  </div>
                </div>

                <div className="about-feature-item">
                  <div className="about-feature-icon-wrapper">
                    <i className="bi bi-people-fill about-feature-icon"></i>
                  </div>
                  <div className="about-feature-text">
                    <span className="about-feature-title">சமத்துவம்</span>
                    <span className="about-feature-subtitle">எங்கள் பாதை</span>
                  </div>
                </div>

                <div className="about-feature-item">
                  <div className="about-feature-icon-wrapper">
                    <i className="bi bi-hand-index-thumb-fill about-feature-icon"></i>
                  </div>
                  <div className="about-feature-text">
                    <span className="about-feature-title">இளைஞர்கள்</span>
                    <span className="about-feature-subtitle">எங்கள் சக்தி</span>
                  </div>
                </div>
              </div>
            </div>

                        <div className="brush-divider-vertical-wrapper">
              <svg className="brush-divider-vertical" viewBox="0 0 100 1000" preserveAspectRatio="none" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M0,0 L60,0 C65,50 50,100 70,150 C75,200 55,250 68,300 C72,350 50,400 75,450 C80,500 55,550 70,600 C73,650 50,700 77,750 C80,800 58,850 72,900 C75,950 55,1000 60,1000 L0,1000 Z" />
                <path d="M 68,50 Q 72,120 65,180" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4" />
                <path d="M 72,280 Q 78,350 69,420" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.3" />
                <path d="M 75,550 Q 82,620 73,700" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4" />
                <path d="M 77,820 Q 84,890 74,960" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.3" />
                <circle cx="82" cy="120" r="1.5" opacity="0.6" />
                <circle cx="85" cy="220" r="1.2" opacity="0.4" />
                <circle cx="78" cy="380" r="1.8" opacity="0.5" />
                <circle cx="88" cy="490" r="1" opacity="0.3" />
                <circle cx="84" cy="670" r="1.6" opacity="0.6" />
                <circle cx="89" cy="780" r="1.2" opacity="0.4" />
                <circle cx="81" cy="910" r="1.5" opacity="0.5" />
              </svg>
            </div>

                        <div className="brush-divider-horizontal-wrapper">
              <svg className="brush-divider-horizontal" viewBox="0 0 1000 100" preserveAspectRatio="none" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M0,0 L0,60 C50,65 100,50 150,70 C200,75 250,55 300,68 C350,72 400,50 450,75 C500,80 550,55 600,70 C650,73 700,50 750,77 C800,80 850,58 900,72 C950,75 1000,55 1000,60 L1000,0 Z" />
                <path d="M 50,68 Q 120,72 180,65" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4" />
                <path d="M 280,72 Q 350,78 420,69" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.3" />
                <path d="M 550,75 Q 620,82 700,73" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4" />
                <path d="M 820,77 Q 890,84 960,74" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.3" />
                <circle cx="120" cy="82" r="1.5" opacity="0.6" />
                <circle cx="220" cy="85" r="1.2" opacity="0.4" />
                <circle cx="380" cy="78" r="1.8" opacity="0.5" />
                <circle cx="490" cy="88" r="1" opacity="0.3" />
                <circle cx="670" cy="84" r="1.6" opacity="0.6" />
                <circle cx="780" cy="89" r="1.2" opacity="0.4" />
                <circle cx="910" cy="81" r="1.5" opacity="0.5" />
              </svg>
            </div>
          </div>

                    <div className="about-hero-right">
            <img
              src={aboutHeroImg}
              alt="Speaker addressing a crowd"
              className="about-hero-speaker-img"
            />
            <div className="about-hero-image-overlay"></div>
          </div>
        </div>
      </section>

      <section className="about-story-section" id="about-story-section">
        <div className="container-fluid px-4">
          <div className="row g-3 mx-auto" style={{ maxWidth: "1400px" }}>
                        <div className="col-12 col-lg-6">
              <div className="about-story-card">
                <span className="about-section-tag">OUR STORY</span>
                <h2 className="about-story-title">
                  ஒரு கேள்வியிலிருந்து{" "}
                  <br />
                  தொடங்கிய பயணம்
                </h2>

                <div className="about-story-questions">
                  {storyQuestions.map((q, i) => (
                    <div className="about-story-question-item" key={i}>
                      <div className="about-story-q-icon">
                        <i className="bi bi-question-circle-fill"></i>
                      </div>
                      <p className="about-story-q-text">{q}</p>
                    </div>
                  ))}
                </div>

                <div className="about-story-body">
                  <p>
                    இந்த கேள்விகளுக்கான பதிலைத் தேடியே ஒரு எண்ணம் தான்
                    இன்று இளைய இந்தியா ஆக வளர்ந்து வருகிறது. பல ஆண்டுகாலா
                    வாழ்க்கைப் போராட்டங்களும், குடும்பச் சவால்களும் இருந்தபோதிலும்,
                    அந்த எண்ணம் மறையவில்லை. இன்று அது மீண்டும் ஒரு
                    மக்கள் இயக்கமாக எழுந்தது.
                  </p>
                </div>
              </div>
            </div>

                        <div className="col-12 col-lg-6">
              <div className="about-journey-card">
                <span className="about-section-tag">OUR JOURNEY</span>

                <div className="about-journey-timeline">
                  {journeyMilestones.map((milestone, index) => (
                    <div
                      className="about-journey-milestone"
                      key={index}
                    >
                                            {index < journeyMilestones.length - 1 && (
                        <div className="about-journey-connector"></div>
                      )}

                      <div className="about-journey-icon-col">
                        <div className="about-journey-icon-wrapper">
                          <img
                            src={milestone.icon}
                            alt={milestone.title}
                            className="about-journey-icon-img"
                          />
                        </div>
                      </div>

                      <div className="about-journey-content-col">
                        <span className="about-journey-year">
                          {milestone.year}
                        </span>
                        <h3 className="about-journey-milestone-title">
                          {milestone.title}
                        </h3>
                        <p className="about-journey-milestone-desc">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

            <section className="about-identity-section" id="about-identity-section">
        <div className="container-fluid px-4">
          <div className="row g-0 mx-auto" style={{ maxWidth: "1400px" }}>
            <div className="col-12">
              <div className="about-identity-header">
                <span className="about-identity-tag">OUR IDENTITY</span>
              </div>

              <div className="about-identity-grid">
                {identities.map((item, index) => (
                  <div className="about-identity-card" key={index}>
                    <div className="about-identity-img-wrapper">
                      <img
                        src={item.img}
                        alt={item.english}
                        className="about-identity-img"
                      />
                      <div className="about-identity-img-overlay"></div>
                    </div>
                    <div className="about-identity-card-content">
                      <h3 className="about-identity-card-title">{item.title}</h3>
                      <p className="about-identity-card-desc">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

            <section className="about-believe-section" id="about-believe-section">
        <div className="container-fluid px-4">
          <div className="row g-0 mx-auto" style={{ maxWidth: "1400px" }}>
                        <div className="col-12 col-lg-5">
              <div className="about-believe-card">
                <span className="about-section-tag believe-tag">WHAT WE BELIEVE</span>
                <h2 className="about-believe-title">நாங்கள் நம்புவது</h2>

                <div className="about-believe-body">
                  <div className="about-believe-logo-card">
                    <img
                      src={illayaLogo}
                      alt="Illaya India Logo"
                      className="about-believe-logo-img"
                    />
                  </div>

                  <ul className="about-believe-list">
                    {beliefs.map((belief, index) => (
                      <li className="about-believe-list-item" key={index}>
                        <i className="bi bi-check-circle-fill about-believe-check"></i>
                        <span>{belief}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

                        <div className="col-12 col-lg-7">
              <div className="about-different-card">
                <span className="about-section-tag different-tag">WE ARE DIFFERENT</span>
                <h2 className="about-different-title">
                  நாங்கள் வேறுபடுவது எப்படி?
                </h2>

                                <div className="about-diff-table-header">
                  <span className="about-diff-col-label others-label">மற்றவர்கள்</span>
                  <span className="about-diff-col-vs-spacer"></span>
                  <span className="about-diff-col-label illaya-label">இளைய இந்தியா</span>
                </div>

                                <div className="about-diff-table">
                  {comparisons.map((row, index) => (
                    <div className="about-diff-row" key={index}>
                      <div className="about-diff-cell others-cell">
                        <i className={`bi ${row.othersIcon} about-diff-icon others-icon`}></i>
                        <span>{row.others}</span>
                      </div>
                      <div className="about-diff-vs">
                        <span className="about-diff-vs-badge">VS</span>
                      </div>
                      <div className="about-diff-cell illaya-cell">
                        <i className={`bi ${row.illayaIcon} about-diff-icon illaya-icon`}></i>
                        <span>{row.illaya}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

            <footer className="about-footer-banner" id="about-footer">
                <div className="about-footer-bg-layer">
          <img src={aboutCtaBg} alt="People silhouettes" className="about-footer-bg-img" />
          <div className="about-footer-bg-brush">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" fill="currentColor">
              <path d="M100,0 C80,20 90,40 70,60 C85,75 60,90 100,100 L100,0 Z" opacity="0.4" />
              <path d="M100,0 C70,10 85,35 60,55 C80,70 50,90 100,100 L100,0 Z" opacity="0.7" />
              <path d="M100,0 C60,15 75,30 50,50 C70,75 40,85 100,100 L100,0 Z" />
            </svg>
          </div>
        </div>

                <div className="container-fluid px-4 about-footer-content-layer">
          <div className="row mx-auto align-items-center" style={{ maxWidth: "1400px" }}>
                        <div className="col-12 col-lg-3 d-none d-lg-block about-footer-empty-col"></div>

                        <div className="col-12 col-lg-6">
              <div className="about-footer-center-content">
                <p className="about-footer-quote">
                  <span className="quote-line-1">நாங்கள் ஆட்சி செய்ய வரவில்லை...</span>
                  <br />
                  <span className="quote-line-2">
                    மக்களுடன் சேர்ந்து ஒரு புதிய இந்தியாவை
                    <br />
                    உருவாக்க வருகிறோம்.
                  </span>
                </p>

                <div className="about-footer-actions">
                  <button className="about-action-btn">
                    <span className="btn-tamil">உறுப்பினராக இணையுங்கள்</span>
                    <span className="btn-english">JOIN AS MEMBER</span>
                  </button>
                  <button className="about-action-btn">
                    <span className="btn-tamil">தன்னார்வலராக இணையுங்கள்</span>
                    <span className="btn-english">BE A VOLUNTEER</span>
                  </button>
                  <button className="about-action-btn">
                    <span className="btn-tamil">உங்கள் குரலாக மாறுங்கள்</span>
                    <span className="btn-english">BE THE VOICE</span>
                  </button>
                </div>
              </div>
            </div>

                        <div className="col-12 col-lg-3">
              <div className="about-footer-right-content">
                <div className="about-footer-logo-box">
                  <img src={illayaLogo} alt="Illaya India" className="about-footer-logo" />
                  <div className="about-footer-logo-text">
                    <h3>ILLAYA INDIA</h3>
                    <p>மனிதம் ஒன்றே போதும்</p>
                  </div>
                </div>

                <div className="about-footer-social-box">
                  <div className="about-footer-social-icons">
                    <a href="#" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
                    <a href="#" aria-label="Twitter"><i className="bi bi-twitter-x"></i></a>
                    <a href="#" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
                    <a href="#" aria-label="YouTube"><i className="bi bi-youtube"></i></a>
                    <a href="#" aria-label="Telegram"><i className="bi bi-telegram"></i></a>
                    <a href="#" aria-label="WhatsApp"><i className="bi bi-whatsapp"></i></a>
                  </div>
                  <span className="follow-us-text">FOLLOW US</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default About;
