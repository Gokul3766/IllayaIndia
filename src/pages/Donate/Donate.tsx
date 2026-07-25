import React, { useState } from "react";
import "./Donate.css";
import donateHeroImg from "../../assets/donate_hero_distribution.png";
import donateSectorEducation from "../../assets/donate_sector_education.png";
import donateSectorFood from "../../assets/donate_sector_food.png";
import donateSectorMedical from "../../assets/donate_sector_medical.png";
import donateSectorEnvironment from "../../assets/donate_sector_environment.png";
import donateSectorLivelihood from "../../assets/donate_sector_livelihood.png";
import donateTeamVolunteers from "../../assets/donate_team_volunteers.png";

// Section 4 High Resolution Supporter Portraits
import aboutHeroSpeaker from "../../assets/about_hero_speaker.png";
import portraitWoman from "../../assets/portrait-woman.png";
import portraitStudent from "../../assets/portrait-student.png";
import joinusCtaBg from "../../assets/joinus_cta_bg.png";
import illayaLogo from "../../assets/illaya-logo.png";

import {
  ShieldCheck,
  Target,
  Users,
  HeartHandshake,
  Heart,
  Soup,
  GraduationCap,
  Activity,
  Sprout,
  Globe,
  PlusSquare,
  UserCheck,
  Briefcase,
  Pencil,
  QrCode,
  Landmark,
  CreditCard,
  Wallet,
  Receipt,
  FileText,
  Award,
  CheckCircle2,
  FileSpreadsheet,
  MessageCircle,
  Send,
} from "lucide-react";

// Social Icons
const FacebookIcon: React.FC<{ size?: number }> = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon: React.FC<{ size?: number }> = ({ size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const YoutubeIcon: React.FC<{ size?: number }> = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const XIcon: React.FC<{ size?: number }> = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const Donate: React.FC = () => {
  const [selectedAmount, setSelectedAmount] = useState<string>("₹1,000");

  return (
    <div className="donate-page">
      {/* SECTION 1: HERO & IMPACT STATS SECTION */}
      <section className="donate-hero-section">
        {/* HERO FULL BACKGROUND IMAGE & OVERLAY MASK */}
        <div className="donate-hero-bg-wrapper">
          <img
            src={donateHeroImg}
            alt="Illaya India Donation Hero"
            className="donate-hero-bg-img"
          />
          <div className="donate-hero-overlay"></div>
        </div>

        <div className="container-fluid px-3 px-md-4 px-lg-5 donate-hero-container">
          {/* TOP HERO CONTENT GRID (LEFT & RIGHT OVERLAID PANELS) */}
          <div className="donate-hero-content-grid">
            {/* LEFT COLUMN */}
            <div className="donate-hero-left">
              <h1 className="donate-hero-title">
                உங்கள் கொடை<br />
                ஒரு உயிரை இல்லை,<br />
                <span className="text-gold">ஒரு எதிர்காலத்தை</span><br />
                <span className="text-gold">உருவாக்கும்!</span>
              </h1>

              <p className="donate-hero-subtitle">
                இன்று நீங்கள் செய்யும் உதவி,<br />
                நாளை ஆயிரக்கணக்கான வாழ்க்கையை மாற்றும்.
              </p>

              {/* 4 Trust Features Row with Vertical Dividers */}
              <div className="donate-trust-features-row">
                <div className="trust-feature-item">
                  <div className="trust-icon-box">
                    <HeartHandshake size={26} className="trust-icon" />
                  </div>
                  <h4 className="trust-title">நம்பகத்தன்மை</h4>
                  <p className="trust-sub">100% வெளிப்படை</p>
                </div>

                <div className="trust-divider"></div>

                <div className="trust-feature-item">
                  <div className="trust-icon-box">
                    <Target size={26} className="trust-icon" />
                  </div>
                  <h4 className="trust-title">நேரடி தாக்கம்</h4>
                  <p className="trust-sub">
                    உங்கள் கொடை<br />
                    நேரடியாக மக்களுக்கு
                  </p>
                </div>

                <div className="trust-divider"></div>

                <div className="trust-feature-item">
                  <div className="trust-icon-box">
                    <ShieldCheck size={26} className="trust-icon" />
                  </div>
                  <h4 className="trust-title">பாதுகாப்பான அமைப்பு</h4>
                  <p className="trust-sub">
                    பதிவு செய்யப்பட்ட<br />
                    நம்பகமான நிறுவனம்
                  </p>
                </div>

                <div className="trust-divider"></div>

                <div className="trust-feature-item">
                  <div className="trust-icon-box">
                    <Users size={26} className="trust-icon" />
                  </div>
                  <h4 className="trust-title">மக்களுடன் மக்கள்</h4>
                  <p className="trust-sub">
                    மக்களால் உருவான<br />
                    மக்களுக்கான இயக்கம்
                  </p>
                </div>
              </div>

              {/* Yellow Brush Sticker Banner */}
              <div className="donate-hero-brush-banner">
                <div className="brush-banner-inner">
                  <div className="brush-heart-icon">
                    <Heart size={20} fill="#0A0E0A" color="#0A0E0A" />
                  </div>
                  <div className="brush-banner-text">
                    <span className="banner-line">நாம் சேர்ந்து மாற்றுவோம்!</span>
                    <span className="banner-line">நாம் சேர்ந்து உருவாக்குவோம்!</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CENTER SPACER (REVEALS THE CENTER HERO BACKGROUND PHOTO) */}
            <div className="donate-hero-center-spacer"></div>

            {/* RIGHT COLUMN */}
            <div className="donate-hero-right">
              {/* Quote Card */}
              <div className="donate-quote-card">
                <span className="quote-mark open">“</span>
                <h3 className="quote-text">
                  ஒரு சிறிய உதவி,<br />
                  ஒரு பெரிய மாற்றம்! <span className="quote-mark close">”</span>
                </h3>
              </div>

              {/* 5 Cause Items List */}
              <div className="donate-cause-list">
                <div className="cause-item">
                  <div className="cause-icon-circle">
                    <Soup size={18} className="cause-icon" />
                  </div>
                  <span className="cause-label">பசி இல்லா சமூகம்</span>
                </div>

                <div className="cause-item">
                  <div className="cause-icon-circle">
                    <GraduationCap size={18} className="cause-icon" />
                  </div>
                  <span className="cause-label">கல்வி பெறும் குழந்தைகள்</span>
                </div>

                <div className="cause-item">
                  <div className="cause-icon-circle">
                    <Activity size={18} className="cause-icon" />
                  </div>
                  <span className="cause-label">ஆரோக்கியமான வாழ்க்கை</span>
                </div>

                <div className="cause-item">
                  <div className="cause-icon-circle">
                    <Sprout size={18} className="cause-icon" />
                  </div>
                  <span className="cause-label">வளமான எதிர்காலம்</span>
                </div>

                <div className="cause-item">
                  <div className="cause-icon-circle">
                    <Globe size={18} className="cause-icon" />
                  </div>
                  <span className="cause-label">சுற்றுச்சூழல் பாதுகாப்பு</span>
                </div>
              </div>

              {/* Big Gold Donate Box */}
              <div className="donate-hero-cta-card" id="donate-now-cta-box">
                <div className="cta-card-main">
                  <div className="cta-card-icon-box">
                    <HeartHandshake size={32} className="cta-card-icon" />
                  </div>
                  <div className="cta-card-text">
                    <span className="cta-sub-label">இப்போது</span>
                    <h3 className="cta-main-label">நன்கொடை செய்யுங்கள்</h3>
                  </div>
                </div>
                <div className="cta-card-footer">
                  <span>உங்கள் கரம் – அவர்களின் நம்பிக்கை</span>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM IMPACT STATS BAR */}
          <div className="donate-impact-stats-bar">
            <h2 className="impact-stats-title">உங்கள் கொடையின் தாக்கம்</h2>

            <div className="donate-stats-row">
              <div className="stat-item">
                <div className="stat-icon-circle">
                  <Users size={20} className="stat-icon" />
                </div>
                <div className="stat-text-group">
                  <span className="stat-number">2.5 LAKH+</span>
                  <span className="stat-label">மக்கள் பயனடைந்துுள்ளனர்</span>
                </div>
              </div>

              <div className="stat-item">
                <div className="stat-icon-circle">
                  <GraduationCap size={20} className="stat-icon" />
                </div>
                <div className="stat-text-group">
                  <span className="stat-number">25,000+</span>
                  <span className="stat-label">
                    மாணவர்கள்<br />
                    கல்வி பெற்றுள்ளனர்
                  </span>
                </div>
              </div>

              <div className="stat-item">
                <div className="stat-icon-circle">
                  <Soup size={20} className="stat-icon" />
                </div>
                <div className="stat-text-group">
                  <span className="stat-number">10,00,000+</span>
                  <span className="stat-label">
                    உணவுப் பொதிகள்<br />
                    வழங்கப்பட்டுள்ளது
                  </span>
                </div>
              </div>

              <div className="stat-item">
                <div className="stat-icon-circle">
                  <PlusSquare size={20} className="stat-icon" />
                </div>
                <div className="stat-text-group">
                  <span className="stat-number">5,00,000+</span>
                  <span className="stat-label">
                    மருத்துவ உதவிகள்<br />
                    வழங்கப்பட்டுள்ளன
                  </span>
                </div>
              </div>

              <div className="stat-item">
                <div className="stat-icon-circle">
                  <Sprout size={20} className="stat-icon" />
                </div>
                <div className="stat-text-group">
                  <span className="stat-number">1,00,000+</span>
                  <span className="stat-label">
                    மரக்கன்றுகள்<br />
                    நடப்பட்டுள்ளன
                  </span>
                </div>
              </div>

              <div className="stat-item">
                <div className="stat-icon-circle">
                  <UserCheck size={20} className="stat-icon" />
                </div>
                <div className="stat-text-group">
                  <span className="stat-number">5000+</span>
                  <span className="stat-label">
                    தன்னார்வலர்கள்<br />
                    எங்களுடன் செயல்படுகிறார்கள்
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: SECTORS YOU CAN HELP (நீங்கள் உதவக்கூடிய துறைகள்) */}
      <section className="donate-sectors-section">
        <div className="container-fluid px-3 px-md-4 px-lg-5">
          <div className="donate-sectors-outer-box">
            {/* SECTION HEADER */}
            <div className="sectors-header">
              <div className="sectors-header-line"></div>
              <h2 className="sectors-title">நீங்கள் உதவக்கூடிய துறைகள்</h2>
              <div className="sectors-header-line"></div>
            </div>

            {/* 5 CARDS GRID */}
            <div className="donate-sectors-grid">
              {/* CARD 1: EDUCATION */}
              <div className="sector-card border-green">
                <div className="sector-img-wrapper">
                  <img
                    src={donateSectorEducation}
                    alt="கல்வி"
                    className="sector-img"
                  />
                  <div className="sector-icon-badge bg-green">
                    <GraduationCap size={20} color="#ffffff" />
                  </div>
                </div>
                <div className="sector-card-body">
                  <h3 className="sector-card-title text-green">கல்வி</h3>
                  <p className="sector-card-desc">
                    ஏழை மாணவர்களுக்கு தரமான கல்வி மற்றும் பயிற்சி.
                  </p>
                  <div className="sector-card-pricing">
                    <span className="sector-amount">₹1,000</span>
                    <span className="sector-amount-sub">
                      ஒரு குழந்தையின் கல்வி உதவி
                    </span>
                  </div>
                  <button className="sector-donate-btn btn-green">
                    நன்கொடை செய்யுங்கள்
                  </button>
                </div>
              </div>

              {/* CARD 2: FOOD */}
              <div className="sector-card border-orange">
                <div className="sector-img-wrapper">
                  <img
                    src={donateSectorFood}
                    alt="பசி இல்லா சமூகம்"
                    className="sector-img"
                  />
                  <div className="sector-icon-badge bg-orange">
                    <Soup size={20} color="#ffffff" />
                  </div>
                </div>
                <div className="sector-card-body">
                  <h3 className="sector-card-title text-orange">
                    பசி இல்லா சமூகம்
                  </h3>
                  <p className="sector-card-desc">
                    பசியால் தவிக்கும் மக்களுக்கு உணவு மற்றும் ஊட்டச்சத்து.
                  </p>
                  <div className="sector-card-pricing">
                    <span className="sector-amount">₹500</span>
                    <span className="sector-amount-sub">
                      ஒரு உணவு பொதி உதவி
                    </span>
                  </div>
                  <button className="sector-donate-btn btn-orange">
                    நன்கொடை செய்யுங்கள்
                  </button>
                </div>
              </div>

              {/* CARD 3: MEDICAL */}
              <div className="sector-card border-red">
                <div className="sector-img-wrapper">
                  <img
                    src={donateSectorMedical}
                    alt="மருத்துவ உதவி"
                    className="sector-img"
                  />
                  <div className="sector-icon-badge bg-red">
                    <Activity size={20} color="#ffffff" />
                  </div>
                </div>
                <div className="sector-card-body">
                  <h3 className="sector-card-title text-red">மருத்துவ உதவி</h3>
                  <p className="sector-card-desc">
                    இலவச மருத்துவ முகாம், மருந்து மற்றும் சிகிச்சை உதவி.
                  </p>
                  <div className="sector-card-pricing">
                    <span className="sector-amount">₹2,000</span>
                    <span className="sector-amount-sub">
                      ஒரு நோயாளி உதவி
                    </span>
                  </div>
                  <button className="sector-donate-btn btn-red">
                    நன்கொடை செய்யுங்கள்
                  </button>
                </div>
              </div>

              {/* CARD 4: ENVIRONMENT */}
              <div className="sector-card border-forest">
                <div className="sector-img-wrapper">
                  <img
                    src={donateSectorEnvironment}
                    alt="சுற்றுச்சூழல் பாதுகாப்பு"
                    className="sector-img"
                  />
                  <div className="sector-icon-badge bg-forest">
                    <Sprout size={20} color="#ffffff" />
                  </div>
                </div>
                <div className="sector-card-body">
                  <h3 className="sector-card-title text-forest">
                    சுற்றுச்சூழல் பாதுகாப்பு
                  </h3>
                  <p className="sector-card-desc">
                    மரக்கன்றுகள் நடுதல், நீர் பாதுகாப்பு, கழிவு மேலாண்மை.
                  </p>
                  <div className="sector-card-pricing">
                    <span className="sector-amount">₹1,000</span>
                    <span className="sector-amount-sub">
                      ஒரு மரம் நட உதவி
                    </span>
                  </div>
                  <button className="sector-donate-btn btn-forest">
                    நன்கொடை செய்யுங்கள்
                  </button>
                </div>
              </div>

              {/* CARD 5: LIVELIHOOD */}
              <div className="sector-card border-purple">
                <div className="sector-img-wrapper">
                  <img
                    src={donateSectorLivelihood}
                    alt="தொழில் & வாழ்வாதாரம்"
                    className="sector-img"
                  />
                  <div className="sector-icon-badge bg-purple">
                    <Briefcase size={20} color="#ffffff" />
                  </div>
                </div>
                <div className="sector-card-body">
                  <h3 className="sector-card-title text-purple">
                    தொழில் & வாழ்வாதாரம்
                  </h3>
                  <p className="sector-card-desc">
                    தொழில் பயிற்சி மற்றும் சுயதொழில் தொடங்க உதவி.
                  </p>
                  <div className="sector-card-pricing">
                    <span className="sector-amount">₹3,000</span>
                    <span className="sector-amount-sub">
                      ஒரு குடும்பம் வாழ உதவி
                    </span>
                  </div>
                  <button className="sector-donate-btn btn-purple">
                    நன்கொடை செய்யுங்கள்
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: DONATION TIERS, PAYMENT METHODS & TRANSPARENCY BANNER */}
      <section className="donate-tier-methods-section">
        <div className="container-fluid px-3 px-md-4 px-lg-5">
          <div className="donate-tier-methods-outer-box">
            {/* SUB-SECTION 1: PRESET AMOUNTS */}
            <div className="donate-amounts-wrapper">
              <div className="sectors-header">
                <div className="sectors-header-line"></div>
                <h2 className="sectors-title">
                  உங்கள் விருப்பப்படி நன்கொடை செய்யுங்கள்
                </h2>
                <div className="sectors-header-line"></div>
              </div>

              <div className="donate-amounts-grid">
                <div
                  className={`amount-card ${
                    selectedAmount === "₹500" ? "active" : ""
                  }`}
                  onClick={() => setSelectedAmount("₹500")}
                >
                  <h3 className="amount-val">₹500</h3>
                  <span className="amount-sub">ஒரு உணவு பொதி</span>
                </div>

                <div
                  className={`amount-card ${
                    selectedAmount === "₹1,000" ? "active" : ""
                  }`}
                  onClick={() => setSelectedAmount("₹1,000")}
                >
                  <h3 className="amount-val">₹1,000</h3>
                  <span className="amount-sub">ஒரு மாணவர் கல்வி</span>
                </div>

                <div
                  className={`amount-card ${
                    selectedAmount === "₹2,000" ? "active" : ""
                  }`}
                  onClick={() => setSelectedAmount("₹2,000")}
                >
                  <h3 className="amount-val">₹2,000</h3>
                  <span className="amount-sub">ஒரு நோயாளி உதவி</span>
                </div>

                <div
                  className={`amount-card ${
                    selectedAmount === "₹5,000" ? "active" : ""
                  }`}
                  onClick={() => setSelectedAmount("₹5,000")}
                >
                  <h3 className="amount-val">₹5,000</h3>
                  <span className="amount-sub">ஒரு குடும்பம் ஆதரவு</span>
                </div>

                <div
                  className={`amount-card ${
                    selectedAmount === "₹10,000" ? "active" : ""
                  }`}
                  onClick={() => setSelectedAmount("₹10,000")}
                >
                  <h3 className="amount-val">₹10,000</h3>
                  <span className="amount-sub">ஒரு திட்டத்தை ஆதரிக்க</span>
                </div>

                <div
                  className={`amount-card custom-amount-card ${
                    selectedAmount === "custom" ? "active" : ""
                  }`}
                  onClick={() => setSelectedAmount("custom")}
                >
                  <div className="custom-pencil-icon">
                    <Pencil size={16} />
                  </div>
                  <h3 className="amount-val">மற்ற தொகை</h3>
                  <span className="amount-sub">உங்கள் விருப்பப்படி</span>
                </div>
              </div>
            </div>

            {/* SUB-SECTION 2: GOLD PAYMENT METHODS BANNER */}
            <div className="donate-payment-banner">
              <h3 className="payment-banner-title">நன்கொடை செய்யும் வழிகள்</h3>

              <div className="payment-methods-row">
                {/* Method 1 */}
                <div className="payment-method-item">
                  <div className="payment-method-icon">
                    <QrCode size={24} />
                  </div>
                  <div className="payment-method-text">
                    <span className="method-name">UPI / QR CODE</span>
                    <span className="method-sub">வேகமாக & பாதுகாப்பாக</span>
                  </div>
                </div>

                <div className="payment-divider"></div>

                {/* Method 2 */}
                <div className="payment-method-item">
                  <div className="payment-method-icon">
                    <Landmark size={24} />
                  </div>
                  <div className="payment-method-text">
                    <span className="method-name">NET BANKING</span>
                    <span className="method-sub">அனைத்து வங்கிகளிலும்</span>
                  </div>
                </div>

                <div className="payment-divider"></div>

                {/* Method 3 */}
                <div className="payment-method-item">
                  <div className="payment-method-icon">
                    <CreditCard size={24} />
                  </div>
                  <div className="payment-method-text">
                    <span className="method-name">CREDIT / DEBIT CARD</span>
                    <span className="method-sub">Visa, MasterCard, RuPay</span>
                  </div>
                </div>

                <div className="payment-divider"></div>

                {/* Method 4 */}
                <div className="payment-method-item">
                  <div className="payment-method-icon">
                    <Wallet size={24} />
                  </div>
                  <div className="payment-method-text">
                    <span className="method-name">WALLET</span>
                    <span className="method-sub">PhonePe, GPay, Paytm</span>
                  </div>
                </div>

                <div className="payment-divider"></div>

                {/* Method 5 */}
                <div className="payment-method-item">
                  <div className="payment-method-icon">
                    <Receipt size={24} />
                  </div>
                  <div className="payment-method-text">
                    <span className="method-name">NEFT / RTGS</span>
                    <span className="method-sub">வங்கி பரிமாற்றம்</span>
                  </div>
                </div>

                <div className="payment-divider"></div>

                {/* Method 6 */}
                <div className="payment-method-item">
                  <div className="payment-method-icon">
                    <FileText size={24} />
                  </div>
                  <div className="payment-method-text">
                    <span className="method-name">CHEQUE</span>
                    <span className="method-sub">ILLAYA INDIA பெயரில்</span>
                  </div>
                </div>

                <div className="payment-divider"></div>

                {/* Method 7: QR Code Image Box */}
                <div className="payment-qr-thumb">
                  <QrCode size={36} color="#0a0e0a" />
                </div>
              </div>
            </div>

            {/* SUB-SECTION 3: TRUST & TRANSPARENCY BANNER */}
            <div className="donate-trust-banner">
              <div className="trust-banner-content">
                <h3 className="trust-banner-title">
                  நம்பகத்தன்மை – வெளிப்படைமை – பொறுப்புணர்வு
                </h3>

                <div className="trust-badges-row">
                  {/* Badge 1 */}
                  <div className="trust-badge-item">
                    <div className="trust-badge-icon">
                      <Award size={24} color="#e5a93c" />
                    </div>
                    <div className="trust-badge-text">
                      <h4 className="badge-name">80G அங்கீகாரம்</h4>
                      <span className="badge-sub">வரி சலுகை பெறலாம்</span>
                    </div>
                  </div>

                  <div className="trust-divider-line"></div>

                  {/* Badge 2 */}
                  <div className="trust-badge-item">
                    <div className="trust-badge-icon">
                      <Globe size={24} color="#e5a93c" />
                    </div>
                    <div className="trust-badge-text">
                      <h4 className="badge-name">FCRA அங்கீகாரம்</h4>
                      <span className="badge-sub">
                        வெளிநாட்டு நன்கொடைகள்<br />
                        வழங்க அனுமதி
                      </span>
                    </div>
                  </div>

                  <div className="trust-divider-line"></div>

                  {/* Badge 3 */}
                  <div className="trust-badge-item">
                    <div className="trust-badge-icon">
                      <CheckCircle2 size={24} color="#e5a93c" />
                    </div>
                    <div className="trust-badge-text">
                      <h4 className="badge-name">100% வெளிப்படை</h4>
                      <span className="badge-sub">
                        ஒவ்வொரு ரூபாயின்<br />
                        கணக்கும் பொதுமக்களுக்கு
                      </span>
                    </div>
                  </div>

                  <div className="trust-divider-line"></div>

                  {/* Badge 4 */}
                  <div className="trust-badge-item">
                    <div className="trust-badge-icon">
                      <FileSpreadsheet size={24} color="#e5a93c" />
                    </div>
                    <div className="trust-badge-text">
                      <h4 className="badge-name">நிரந்தர செயல்திறன் அறிக்கை</h4>
                      <span className="badge-sub">
                        வருடாந்திர அறிக்கைகள்<br />
                        வெளியிடப்படுகிறது
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side Team Photo */}
              <div className="trust-team-img-wrapper">
                <img
                  src={donateTeamVolunteers}
                  alt="Illaya India Volunteers"
                  className="trust-team-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: SINGLE UNIFIED SECTION (TESTIMONIALS + FINAL CTA WITH COMMON SUNSET BACKGROUND) */}
      <section className="donate-single-unified-section">
        {/* COMMON BACKGROUND IMAGE WRAPPER */}
        <div className="unified-bg-wrapper">
          <img
            src={joinusCtaBg}
            alt="Illaya India Sunset Crowd"
            className="unified-bg-img"
          />
          <div className="unified-bg-overlay"></div>
        </div>

        <div className="container-fluid px-3 px-md-4 px-lg-5 unified-content-container">
          {/* SECTION HEADER */}
          <div className="sectors-header">
            <div className="sectors-header-line"></div>
            <h2 className="sectors-title">எங்களுடன் இணைந்துள்ளவர்கள்</h2>
            <div className="sectors-header-line"></div>
          </div>

          {/* 3 TESTIMONIAL CARDS GRID */}
          <div className="donate-testimonials-grid">
            {/* Card 1: Arun Raja (Entrepreneur, Chennai) */}
            <div className="testimonial-card">
              <div className="testimonial-img-wrapper">
                <img
                  src={aboutHeroSpeaker}
                  alt="அருண் ராஜா"
                  className="testimonial-img speaker-img-crop"
                />
              </div>
              <div className="testimonial-body">
                <p className="testimonial-quote">
                  <span className="quote-mark-sm">“</span> ILLAYA INDIA ஒரு உண்மையான மக்கள் இயக்கம். சமூக மாற்றத்தின் நான் பெருமையுடன் பங்கேற்பதில் மகிழ்ச்சி.
                </p>
                <div className="testimonial-author-group">
                  <h4 className="testimonial-name">- அருண் ராஜா</h4>
                  <span className="testimonial-role">தொழிலதிபர், சென்னை</span>
                </div>
              </div>
            </div>

            {/* Card 2: Lakshmi Priya (Lawyer, Madurai) */}
            <div className="testimonial-card">
              <div className="testimonial-img-wrapper">
                <img
                  src={portraitWoman}
                  alt="லக்ஷ்மி பிரியா"
                  className="testimonial-img woman-img-crop"
                />
              </div>
              <div className="testimonial-body">
                <p className="testimonial-quote">
                  <span className="quote-mark-sm">“</span> சிறிய தொகை தான், ஆனால் இது சரியான இடத்தில் சேர்ந்து பலரின் வாழ்க்கையை மாற்றுகிறது. தொடர்ந்து ஆதரிப்பேன்..
                </p>
                <div className="testimonial-author-group">
                  <h4 className="testimonial-name">- லக்ஷ்மி பிரியா</h4>
                  <span className="testimonial-role">வழக்கறிஞர், மதுரை</span>
                </div>
              </div>
            </div>

            {/* Card 3: Karthik (Volunteer, Coimbatore) */}
            <div className="testimonial-card">
              <div className="testimonial-img-wrapper">
                <img
                  src={portraitStudent}
                  alt="கார்த்திக்"
                  className="testimonial-img student-img-crop"
                />
              </div>
              <div className="testimonial-body">
                <p className="testimonial-quote">
                  <span className="quote-mark-sm">“</span> நான் ஒரு தன்னார்வலராக துவங்கினேன், இன்று இது என் குடும்பத்தின் ஒரு பாகமாகி விட்டது.
                </p>
                <div className="testimonial-author-group">
                  <h4 className="testimonial-name">- கார்த்திக்</h4>
                  <span className="testimonial-role">தன்னார்வலர், கோயம்புத்தூர்</span>
                </div>
              </div>
            </div>
          </div>

          {/* FINAL CTA ROW IN THE SAME UNIFIED BACKGROUND */}
          <div className="unified-final-cta-row">
            <div className="final-cta-text-group">
              <h2 className="final-cta-title-white">
                நாம் கொடுப்பது பணம் அல்ல,
              </h2>
              <h2 className="final-cta-title-gold">
                நாம் கொடுப்பது நம்பிக்கை!
              </h2>
              <p className="final-cta-sub">
                இன்று நீங்கள் கொடையுங்கள் – நாளை பலர் வாழ்வார்கள்!
              </p>
            </div>

            <div className="final-cta-button-box" id="bottom-donate-now-btn">
              <div className="final-cta-icon-circle">
                <Heart size={22} fill="#0a0e0a" color="#0a0e0a" />
              </div>
              <div className="final-cta-btn-text">
                <h3 className="final-cta-btn-main">
                  இப்போது நன்கொடை செய்யுங்கள்
                </h3>
                <span className="final-cta-btn-sub">
                  மாற்றத்தின் ஒரு பாகமாகுங்கள்!
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM FOOTER BAR */}
        <footer className="donate-footer-bar">
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
                <a
                  href="#facebook"
                  className="social-circle-btn facebook-btn"
                  aria-label="Facebook"
                >
                  <FacebookIcon size={16} />
                </a>
                <a
                  href="#twitter"
                  className="social-circle-btn twitter-btn"
                  aria-label="X"
                >
                  <XIcon size={15} />
                </a>
                <a
                  href="#instagram"
                  className="social-circle-btn instagram-btn"
                  aria-label="Instagram"
                >
                  <InstagramIcon size={16} />
                </a>
                <a
                  href="#youtube"
                  className="social-circle-btn youtube-btn"
                  aria-label="YouTube"
                >
                  <YoutubeIcon size={16} />
                </a>
                <a
                  href="#whatsapp"
                  className="social-circle-btn whatsapp-btn"
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={16} />
                </a>
                <a
                  href="#telegram"
                  className="social-circle-btn telegram-btn"
                  aria-label="Telegram"
                >
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

export default Donate;
