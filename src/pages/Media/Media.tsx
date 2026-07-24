import React from "react";
import "./Media.css";
import mediaHeroBg from "../../assets/media_hero_bg.png";
import mediaNewsFeatured from "../../assets/media_news_featured.png";
import mediaNews1 from "../../assets/media_news_1.png";
import mediaNews2 from "../../assets/media_news_2.png";
import mediaNews3 from "../../assets/media_news_3.png";

import mediaVideoLive from "../../assets/media_video_live.png";
import mediaPhotoMain from "../../assets/media_photo_main.png";
import mediaPhotoExtra from "../../assets/media_photo_extra.png";
import mediaVideo1 from "../../assets/media_video_1.png";
import mediaVideo2 from "../../assets/media_video_2.png";
import mediaVideo3 from "../../assets/media_video_3.png";
import illayaLogo from "../../assets/illaya-logo.png";

// News Channel Logos
import hinduLogo from "../../assets/hindu.png";
import toiLogo from "../../assets/The_Times_of_India_Logo_full.png";
import dinamalarLogo from "../../assets/dinamalar.jpg";
import thanthiLogo from "../../assets/thinathanthi.png";
import puthiyaLogo from "../../assets/puthiya thalai.jpg";
import news18Logo from "../../assets/18.jpg";
import polimerLogo from "../../assets/polimer news.jpg";
import sunNewsLogo from "../../assets/sun news.jpg";

import {
  Newspaper,
  Mic,
  Video,
  Image as ImageIcon,
  Podcast,
  PlayCircle,
  Radio,
  ArrowRight,
  Clock,
  Download,
  Play,
  Camera,
  FileText,
  Phone,
  Mail,
} from "lucide-react";

const Media: React.FC = () => {
  const quickNavCards = [
    {
      id: 1,
      icon: Newspaper,
      labelLine1: "LATEST",
      labelLine2: "NEWS",
    },
    {
      id: 2,
      icon: Mic,
      labelLine1: "PRESS",
      labelLine2: "RELEASES",
    },
    {
      id: 3,
      icon: Video,
      labelLine1: "VIDEOS &",
      labelLine2: "LIVE EVENTS",
    },
    {
      id: 4,
      icon: ImageIcon,
      labelLine1: "PHOTOS &",
      labelLine2: "GALLERIES",
    },
    {
      id: 5,
      icon: Podcast,
      labelLine1: "PODCASTS &",
      labelLine2: "INTERVIEWS",
    },
  ];

  const statsData = [
    {
      id: 1,
      icon: Newspaper,
      number: "250+",
      label: "செய்திகள்",
      isLive: false,
    },
    {
      id: 2,
      icon: Mic,
      number: "100+",
      label: "பத்திரிக்கை சந்திப்புகள்",
      isLive: false,
    },
    {
      id: 3,
      icon: PlayCircle,
      number: "500+",
      label: "வீடியோக்கள்",
      isLive: false,
    },
    {
      id: 4,
      icon: ImageIcon,
      number: "10,000+",
      label: "புகைப்படங்கள்",
      isLive: false,
    },
    {
      id: 5,
      icon: Radio,
      number: "LIVE",
      label: "நேரலை ஒளிபரப்புகள்",
      isLive: true,
    },
  ];

  const pressReleases = [
    {
      id: 1,
      title: "இளைய இந்தியா – புதிய சமூக அரசியல் பயணத்தை தொடங்குகிறோம்!",
      date: "19 May 2024",
    },
    {
      id: 2,
      title: "விலைவாசி உயர்வு – உடனடி நடவடிக்கை தேவை: இளைய இந்தியா அறிக்கை",
      date: "17 May 2024",
    },
    {
      id: 3,
      title: "இளைஞர்களுக்கான வேலைவாய்ப்பு – எங்கள் 10 அம்ச திட்டம்",
      date: "15 May 2024",
    },
  ];

  return (
    <div className="media-page">
      {/* SECTION 1: HERO SECTION */}
      <section className="media-hero-section">
        {/* Background Image Container with Overlay Gradient */}
        <div className="media-hero-bg-wrapper">
          <img
            src={mediaHeroBg}
            alt="Illaya India Media Center Hero"
            className="media-hero-bg-img"
          />
          <div className="media-hero-overlay"></div>
        </div>

        <div className="container-fluid px-4 px-lg-5 media-hero-container">
          <div className="media-hero-content">
            {/* Tag / Category */}
            <span className="media-hero-tag">MEDIA CENTER</span>

            {/* Main Headline */}
            <h1 className="media-hero-title">
              THE VOICE OF PEOPLE,
              <br />
              <span className="media-title-highlight">THE POWER OF TRUTH.</span>
            </h1>

            {/* Subtitle in Tamil */}
            <h2 className="media-hero-subtitle">
              மக்களின் குரல் – மாற்றத்தின் ஒலி
            </h2>

            {/* Paragraph in Tamil */}
            <p className="media-hero-description">
              இளைய இந்தியாவின் செய்திகள், நிகழ்வுகள், உரைகள், மக்கள் குரல்கள்
              மற்றும் ஊடக தகவல்களை இங்கே பெறுங்கள்.
            </p>

            {/* Quick Navigation Category Cards */}
            <div className="media-quick-nav-grid">
              {quickNavCards.map((card) => {
                const IconComp = card.icon;
                return (
                  <div key={card.id} className="media-nav-card">
                    <div className="nav-card-icon-wrapper">
                      <IconComp size={32} className="nav-card-icon" />
                    </div>
                    <div className="nav-card-label">
                      <span>{card.labelLine1}</span>
                      <span>{card.labelLine2}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side Yellow Brush Callout Badge */}
          <div className="media-hero-quote-badge">
            <div className="quote-badge-content">
              <span className="quote-mark quote-start">66</span>
              <p className="quote-text">
                நாங்கள் பேசுவது
                <br />
                செய்தி அல்ல,
                <br />
                மக்களின் உண்மை!
              </p>
              <span className="quote-mark quote-end">99</span>
            </div>
          </div>

          {/* Bottom Row Stats Counter Cards Bar */}
          <div className="media-hero-stats-bar">
            {statsData.map((stat) => {
              const IconComponent = stat.icon;
              return (
                <div key={stat.id} className="media-stat-item">
                  <div className="stat-icon-box">
                    <IconComponent className="stat-icon" size={26} />
                  </div>
                  <div className="stat-text-box">
                    {stat.isLive ? (
                      <span className="stat-live-badge">LIVE</span>
                    ) : (
                      <span className="stat-number">{stat.number}</span>
                    )}
                    <span className="stat-label">{stat.label}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 2: LATEST NEWS & PRESS RELEASES */}
      <section className="media-section-2">
        <div className="container-fluid px-4 px-lg-5">
          <div className="media-sec2-grid">
            {/* LEFT CONTAINER: LATEST NEWS */}
            <div className="media-box media-news-box">
              {/* Box Header */}
              <div className="media-box-header">
                <h2 className="media-box-title">LATEST NEWS</h2>
                <a href="#all-news" className="media-view-all">
                  <span>VIEW ALL</span>
                  <ArrowRight size={14} />
                </a>
              </div>

              {/* Box Content Body */}
              <div className="media-news-content-grid">
                {/* Featured Large News Story */}
                <div className="featured-news-card">
                  <div className="featured-news-img-wrapper">
                    <img
                      src={mediaNewsFeatured}
                      alt="Featured News"
                      className="featured-news-img"
                    />
                  </div>
                  <h3 className="featured-news-title">
                    மக்கள் சந்திப்பு பயணம் – சேலத்தில் வலுவான வரவேற்பு!
                  </h3>
                  <div className="news-date-row">
                    <Clock size={13} className="news-clock-icon" />
                    <span>20 May 2024</span>
                  </div>
                  <p className="featured-news-excerpt">
                    ஆயிரக்கணக்கான மக்கள் பங்கேற்ற மக்கள் சந்திப்பு கூட்டம்...
                  </p>
                </div>

                {/* Right 3 Small News Items Column */}
                <div className="news-list-column">
                  {/* News Item 1 */}
                  <div className="news-list-item">
                    <div className="news-item-img-wrapper">
                      <img
                        src={mediaNews1}
                        alt="News 1"
                        className="news-item-img"
                      />
                    </div>
                    <div className="news-item-info">
                      <h4 className="news-item-title">
                        இளைஞர் உரையாடல் - எதிர்கால இந்தியா குறித்து...
                      </h4>
                      <div className="news-date-row">
                        <Clock size={12} className="news-clock-icon" />
                        <span>18 May 2024</span>
                      </div>
                    </div>
                  </div>

                  {/* News Item 2 */}
                  <div className="news-list-item">
                    <div className="news-item-img-wrapper">
                      <img
                        src={mediaNews2}
                        alt="News 2"
                        className="news-item-img"
                      />
                    </div>
                    <div className="news-item-info">
                      <h4 className="news-item-title">
                        கல்வி உரிமை பயணம் - 1000 மாணவர்களுடன் சந்திப்பு
                      </h4>
                      <div className="news-date-row">
                        <Clock size={12} className="news-clock-icon" />
                        <span>16 May 2024</span>
                      </div>
                    </div>
                  </div>

                  {/* News Item 3 */}
                  <div className="news-list-item">
                    <div className="news-item-img-wrapper">
                      <img
                        src={mediaNews3}
                        alt="News 3"
                        className="news-item-img"
                      />
                    </div>
                    <div className="news-item-info">
                      <h4 className="news-item-title">
                        மக்கள் பிரச்சினைகள் குறித்து ஆலோசனை கூட்டம்
                      </h4>
                      <div className="news-date-row">
                        <Clock size={12} className="news-clock-icon" />
                        <span>14 May 2024</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Box Footer Link */}
              <div className="media-box-footer">
                <a href="#all-news" className="media-footer-link">
                  <span>VIEW ALL NEWS</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>

            {/* RIGHT CONTAINER: PRESS RELEASES */}
            <div className="media-box media-press-box">
              {/* Box Header */}
              <div className="media-box-header">
                <h2 className="media-box-title">PRESS RELEASES</h2>
                <a href="#all-press" className="media-view-all">
                  <span>VIEW ALL</span>
                  <ArrowRight size={14} />
                </a>
              </div>

              {/* Box Content Body */}
              <div className="media-press-list">
                {pressReleases.map((item) => (
                  <div key={item.id} className="press-release-item">
                    {/* PDF Icon Badge */}
                    <div className="pdf-icon-badge">
                      <div className="pdf-badge-inner">
                        <span className="pdf-badge-text">PDF</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="press-item-content">
                      <h4 className="press-item-title">{item.title}</h4>
                      <span className="press-item-date">{item.date}</span>
                    </div>

                    {/* Download Action */}
                    <a href="#download" className="press-download-link">
                      <span>DOWNLOAD</span>
                      <Download size={14} />
                    </a>
                  </div>
                ))}
              </div>

              {/* Box Footer Link */}
              <div className="media-box-footer">
                <a href="#all-press" className="media-footer-link">
                  <span>VIEW ALL PRESS RELEASES</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: VIDEOS & LIVE EVENTS | PHOTO GALLERY | PODCASTS & INTERVIEWS */}
      <section className="media-section-3">
        <div className="container-fluid px-4 px-lg-5">
          <div className="media-sec3-grid">

            {/* COLUMN 1: VIDEOS & LIVE EVENTS */}
            <div className="media-box media-videos-box">
              {/* Box Header */}
              <div className="media-box-header">
                <h2 className="media-box-title">VIDEOS & LIVE EVENTS</h2>
                <a href="#all-videos" className="media-view-all">
                  <span>VIEW ALL</span>
                  <ArrowRight size={14} />
                </a>
              </div>

              {/* Featured Video Player Card */}
              <div className="featured-video-player">
                <img
                  src={mediaVideoLive}
                  alt="Live Event"
                  className="featured-video-img"
                />
                <span className="live-tag">LIVE</span>
                <div className="video-play-center">
                  <div className="play-icon-circle">
                    <Play size={22} fill="#FFFFFF" color="#FFFFFF" className="play-svg" />
                  </div>
                </div>
                <div className="video-bottom-banner">
                  <span className="banner-text">
                    <strong className="banner-live-prefix">LIVE NOW :</strong> மக்கள் கருத்தரங்கம் – சென்னை
                  </span>
                </div>
              </div>

              {/* 3 Small Video List Rows */}
              <div className="video-list-rows">
                {/* Row 1 */}
                <div className="video-row-item">
                  <div className="video-row-thumb">
                    <img src={mediaVideo1} alt="Video 1" />
                    <div className="thumb-play-overlay">
                      <Play size={12} fill="#FFFFFF" color="#FFFFFF" />
                    </div>
                    <span className="video-time-badge">12:45</span>
                  </div>
                  <div className="video-row-info">
                    <h4 className="video-row-title">மக்கள் உரையாடல் – பகுதி 1</h4>
                    <span className="video-row-date">21 May 2024</span>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="video-row-item">
                  <div className="video-row-thumb">
                    <img src={mediaVideo2} alt="Video 2" />
                    <div className="thumb-play-overlay">
                      <Play size={12} fill="#FFFFFF" color="#FFFFFF" />
                    </div>
                    <span className="video-time-badge">08:30</span>
                  </div>
                  <div className="video-row-info">
                    <h4 className="video-row-title">பெண்கள் பாதுகாப்பு – சிறப்பு கலந்துரையாடல்</h4>
                    <span className="video-row-date">19 May 2024</span>
                  </div>
                </div>

                {/* Row 3 */}
                <div className="video-row-item">
                  <div className="video-row-thumb">
                    <img src={mediaVideo3} alt="Video 3" />
                    <div className="thumb-play-overlay">
                      <Play size={12} fill="#FFFFFF" color="#FFFFFF" />
                    </div>
                    <span className="video-time-badge">15:20</span>
                  </div>
                  <div className="video-row-info">
                    <h4 className="video-row-title">விவசாயிகளுடன் நேர்காணல்</h4>
                    <span className="video-row-date">17 May 2024</span>
                  </div>
                </div>
              </div>

              {/* Box Footer Link */}
              <div className="media-box-footer">
                <a href="#all-videos" className="media-footer-link">
                  <span>VIEW ALL VIDEOS</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>

            {/* COLUMN 2: PHOTO GALLERY */}
            <div className="media-box media-gallery-box">
              {/* Box Header */}
              <div className="media-box-header">
                <h2 className="media-box-title">PHOTO GALLERY</h2>
                <a href="#all-photos" className="media-view-all">
                  <span>VIEW ALL</span>
                  <ArrowRight size={14} />
                </a>
              </div>

              {/* Photo Grid Container */}
              <div className="gallery-grid-wrapper">
                {/* Top Featured Large Photo */}
                <div className="gallery-featured-img-wrapper">
                  <img
                    src={mediaPhotoMain}
                    alt="Featured Photo"
                    className="gallery-featured-img"
                  />
                </div>

                {/* 9 Grid Thumbnails (3 columns x 3 rows) */}
                <div className="gallery-thumbs-grid">
                  <div className="gallery-thumb-item">
                    <img src={mediaNews1} alt="Photo 1" />
                  </div>
                  <div className="gallery-thumb-item">
                    <img src={mediaNews2} alt="Photo 2" />
                  </div>
                  <div className="gallery-thumb-item">
                    <img src={mediaNews3} alt="Photo 3" />
                  </div>
                  <div className="gallery-thumb-item">
                    <img src={mediaNewsFeatured} alt="Photo 4" />
                  </div>
                  <div className="gallery-thumb-item">
                    <img src={mediaVideo1} alt="Photo 5" />
                  </div>
                  <div className="gallery-thumb-item">
                    <img src={mediaVideo2} alt="Photo 6" />
                  </div>
                  <div className="gallery-thumb-item">
                    <img src={mediaVideo3} alt="Photo 7" />
                  </div>
                  <div className="gallery-thumb-item">
                    <img src={mediaPhotoExtra} alt="Photo 8" />
                  </div>
                  <div className="gallery-thumb-item gallery-more-item">
                    <img src={mediaPhotoMain} alt="Photo 9" />
                    <div className="gallery-overlay-count">
                      <span>+250</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Box Footer Link */}
              <div className="media-box-footer">
                <a href="#all-photos" className="media-footer-link">
                  <span>VIEW ALL PHOTOS</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>

            {/* COLUMN 3: PODCASTS & INTERVIEWS */}
            <div className="media-box media-podcasts-box">
              {/* Box Header */}
              <div className="media-box-header">
                <h2 className="media-box-title">PODCASTS & INTERVIEWS</h2>
                <a href="#all-podcasts" className="media-view-all">
                  <span>VIEW ALL</span>
                  <ArrowRight size={14} />
                </a>
              </div>

              {/* Podcasts List (4 items) */}
              <div className="podcasts-list">
                {/* Podcast Item 1 */}
                <div className="podcast-card-item">
                  <div className="podcast-mic-icon-wrapper">
                    <Mic size={20} className="podcast-mic-icon" />
                  </div>
                  <div className="podcast-info">
                    <h4 className="podcast-title">மாற்றத்தை உருவாக்கும் இளைஞர்கள்</h4>
                    <div className="podcast-meta">
                      <span>20 May 2024</span>
                      <span className="dot-sep">•</span>
                      <span>25:30</span>
                    </div>
                    <div className="podcast-waveform">
                      <span className="bar bar-tall"></span>
                      <span className="bar bar-mid"></span>
                      <span className="bar bar-short"></span>
                      <span className="bar bar-tall"></span>
                      <span className="bar bar-short"></span>
                      <span className="bar bar-mid"></span>
                      <span className="bar bar-tall"></span>
                      <span className="bar bar-mid"></span>
                      <span className="bar bar-short"></span>
                      <span className="bar bar-tall"></span>
                      <span className="bar bar-mid"></span>
                      <span className="bar bar-short"></span>
                      <span className="bar bar-tall"></span>
                      <span className="bar bar-mid"></span>
                      <span className="bar bar-short"></span>
                      <span className="bar bar-tall"></span>
                      <span className="bar bar-short"></span>
                      <span className="bar bar-mid"></span>
                      <span className="bar bar-tall"></span>
                      <span className="bar bar-mid"></span>
                      <span className="bar bar-short"></span>
                      <span className="bar bar-tall"></span>
                      <span className="bar bar-mid"></span>
                      <span className="bar bar-short"></span>
                      <span className="bar bar-tall"></span>
                    </div>
                  </div>
                  <button className="podcast-play-btn" aria-label="Play Podcast">
                    <Play size={12} fill="#000000" color="#000000" className="podcast-play-svg" />
                  </button>
                </div>

                {/* Podcast Item 2 */}
                <div className="podcast-card-item">
                  <div className="podcast-mic-icon-wrapper">
                    <Mic size={20} className="podcast-mic-icon" />
                  </div>
                  <div className="podcast-info">
                    <h4 className="podcast-title">
                      மக்கள் குரல் – ஒரு நேர்மையான அரசியல் சாத்தியமா?
                    </h4>
                    <div className="podcast-meta">
                      <span>18 May 2024</span>
                      <span className="dot-sep">•</span>
                      <span>32:10</span>
                    </div>
                    <div className="podcast-waveform">
                      <span className="bar bar-mid"></span>
                      <span className="bar bar-tall"></span>
                      <span className="bar bar-short"></span>
                      <span className="bar bar-mid"></span>
                      <span className="bar bar-tall"></span>
                      <span className="bar bar-short"></span>
                      <span className="bar bar-mid"></span>
                      <span className="bar bar-tall"></span>
                      <span className="bar bar-short"></span>
                      <span className="bar bar-mid"></span>
                      <span className="bar bar-short"></span>
                      <span className="bar bar-tall"></span>
                      <span className="bar bar-mid"></span>
                      <span className="bar bar-short"></span>
                      <span className="bar bar-tall"></span>
                      <span className="bar bar-mid"></span>
                      <span className="bar bar-short"></span>
                      <span className="bar bar-tall"></span>
                      <span className="bar bar-mid"></span>
                      <span className="bar bar-short"></span>
                      <span className="bar bar-tall"></span>
                      <span className="bar bar-short"></span>
                      <span className="bar bar-mid"></span>
                      <span className="bar bar-tall"></span>
                      <span className="bar bar-mid"></span>
                    </div>
                  </div>
                  <button className="podcast-play-btn" aria-label="Play Podcast">
                    <Play size={12} fill="#000000" color="#000000" className="podcast-play-svg" />
                  </button>
                </div>

                {/* Podcast Item 3 */}
                <div className="podcast-card-item">
                  <div className="podcast-mic-icon-wrapper">
                    <Mic size={20} className="podcast-mic-icon" />
                  </div>
                  <div className="podcast-info">
                    <h4 className="podcast-title">
                      சமத்துவம், சமூக நீதி மற்றும் எங்கள் நிலைப்பாடு
                    </h4>
                    <div className="podcast-meta">
                      <span>16 May 2024</span>
                      <span className="dot-sep">•</span>
                      <span>28:45</span>
                    </div>
                    <div className="podcast-waveform">
                      <span className="bar bar-short"></span>
                      <span className="bar bar-mid"></span>
                      <span className="bar bar-tall"></span>
                      <span className="bar bar-mid"></span>
                      <span className="bar bar-short"></span>
                      <span className="bar bar-tall"></span>
                      <span className="bar bar-mid"></span>
                      <span className="bar bar-short"></span>
                      <span className="bar bar-tall"></span>
                      <span className="bar bar-mid"></span>
                      <span className="bar bar-short"></span>
                      <span className="bar bar-mid"></span>
                      <span className="bar bar-tall"></span>
                      <span className="bar bar-short"></span>
                      <span className="bar bar-mid"></span>
                      <span className="bar bar-tall"></span>
                      <span className="bar bar-short"></span>
                      <span className="bar bar-mid"></span>
                      <span className="bar bar-tall"></span>
                      <span className="bar bar-mid"></span>
                      <span className="bar bar-short"></span>
                      <span className="bar bar-tall"></span>
                      <span className="bar bar-mid"></span>
                      <span className="bar bar-short"></span>
                      <span className="bar bar-tall"></span>
                    </div>
                  </div>
                  <button className="podcast-play-btn" aria-label="Play Podcast">
                    <Play size={12} fill="#000000" color="#000000" className="podcast-play-svg" />
                  </button>
                </div>

                {/* Podcast Item 4 */}
                <div className="podcast-card-item">
                  <div className="podcast-mic-icon-wrapper">
                    <Mic size={20} className="podcast-mic-icon" />
                  </div>
                  <div className="podcast-info">
                    <h4 className="podcast-title">
                      கல்வி கொள்கை மற்றும் கிராமப்புற வளர்ச்சி
                    </h4>
                    <div className="podcast-meta">
                      <span>14 May 2024</span>
                      <span className="dot-sep">•</span>
                      <span>35:15</span>
                    </div>
                    <div className="podcast-waveform">
                      <span className="bar bar-tall"></span>
                      <span className="bar bar-short"></span>
                      <span className="bar bar-mid"></span>
                      <span className="bar bar-tall"></span>
                      <span className="bar bar-mid"></span>
                      <span className="bar bar-short"></span>
                      <span className="bar bar-tall"></span>
                      <span className="bar bar-short"></span>
                      <span className="bar bar-mid"></span>
                      <span className="bar bar-tall"></span>
                      <span className="bar bar-mid"></span>
                      <span className="bar bar-short"></span>
                      <span className="bar bar-tall"></span>
                      <span className="bar bar-short"></span>
                      <span className="bar bar-mid"></span>
                      <span className="bar bar-tall"></span>
                      <span className="bar bar-short"></span>
                      <span className="bar bar-mid"></span>
                      <span className="bar bar-tall"></span>
                      <span className="bar bar-mid"></span>
                      <span className="bar bar-short"></span>
                      <span className="bar bar-tall"></span>
                      <span className="bar bar-mid"></span>
                      <span className="bar bar-short"></span>
                      <span className="bar bar-tall"></span>
                    </div>
                  </div>
                  <button className="podcast-play-btn" aria-label="Play Podcast">
                    <Play size={12} fill="#000000" color="#000000" className="podcast-play-svg" />
                  </button>
                </div>
              </div>

              {/* Box Footer Link */}
              <div className="media-box-footer">
                <a href="#all-podcasts" className="media-footer-link">
                  <span>VIEW ALL PODCASTS</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: MEDIA COVERAGE, CTA BANNER & MEDIA FOOTER */}
      <section className="media-section-4">
        <div className="container-fluid px-4 px-lg-5">
          {/* 1. MEDIA COVERAGE BRAND LOGOS (USING ASSET IMAGES) */}
          <div className="media-coverage-wrapper">
            <div className="media-coverage-header">
              <h2 className="media-coverage-title">MEDIA COVERAGE</h2>
              <a href="#all-coverage" className="media-view-all">
                <span>VIEW ALL</span>
                <ArrowRight size={14} />
              </a>
            </div>

            <div className="media-logos-grid">
              {/* Logo 1: THE HINDU */}
              <div className="media-logo-card">
                <img src={hinduLogo} alt="The Hindu" className="media-logo-img" />
              </div>

              {/* Logo 2: THE TIMES OF INDIA */}
              <div className="media-logo-card logo-card-red">
                <img src={toiLogo} alt="The Times of India" className="media-logo-img" />
              </div>

              {/* Logo 3: DINAMALAR */}
              <div className="media-logo-card">
                <img src={dinamalarLogo} alt="Dinamalar" className="media-logo-img" />
              </div>

              {/* Logo 4: DAILY THANTHI */}
              <div className="media-logo-card">
                <img src={thanthiLogo} alt="Daily Thanthi" className="media-logo-img" />
              </div>

              {/* Logo 5: PUTHIYA THALAIMURAI */}
              <div className="media-logo-card">
                <img src={puthiyaLogo} alt="Puthiya Thalaimurai" className="media-logo-img" />
              </div>

              {/* Logo 6: NEWS18 TAMILNADU */}
              <div className="media-logo-card">
                <img src={news18Logo} alt="News18 Tamil Nadu" className="media-logo-img" />
              </div>

              {/* Logo 7: POLIMER NEWS */}
              <div className="media-logo-card">
                <img src={polimerLogo} alt="Polimer News" className="media-logo-img" />
              </div>

              {/* Logo 8: SUN NEWS */}
              <div className="media-logo-card">
                <img src={sunNewsLogo} alt="Sun News" className="media-logo-img" />
              </div>
            </div>
          </div>

          {/* 2. MIDDLE CTA BANNER */}
          <div className="media-cta-banner">
            <div className="media-cta-left">
              <h2 className="cta-headline-white">உண்மையை பேசுவோம்!</h2>
              <h2 className="cta-headline-gold">மாற்றத்தை உருவாக்குவோம்!</h2>
              <p className="cta-subtitle">
                நீங்கள் காணும் உண்மை – நாங்கள் கொள்ள செல்லும் குரல்!
              </p>
            </div>

            <div className="media-cta-actions">
              {/* Action 1 */}
              <div className="cta-action-item">
                <div className="cta-action-icon-circle">
                  <Camera size={22} className="cta-action-icon" />
                </div>
                <span className="cta-action-label">செய்தியை பகிருங்கள்</span>
              </div>

              <div className="cta-divider"></div>

              {/* Action 2 */}
              <div className="cta-action-item">
                <div className="cta-action-icon-circle">
                  <Mic size={22} className="cta-action-icon" />
                </div>
                <span className="cta-action-label">உங்கள் குரலை அனுப்புங்கள்</span>
              </div>

              <div className="cta-divider"></div>

              {/* Action 3 */}
              <div className="cta-action-item">
                <div className="cta-action-icon-circle">
                  <FileText size={22} className="cta-action-icon" />
                </div>
                <span className="cta-action-label">
                  மக்கள் பிரச்சினைகளை
                  <br />
                  எங்களுக்கு தெரியப்படுத்துங்கள்
                </span>
              </div>
            </div>

            {/* Right Gold Contact Block */}
            <div className="media-cta-contact-box">
              <span className="contact-title">மீடியா தொடர்புக்கு</span>
              <div className="contact-info-row">
                <Phone size={15} className="contact-icon" />
                <span>+91 12345 67890</span>
              </div>
              <div className="contact-info-row">
                <Mail size={15} className="contact-icon" />
                <span>media@illayaindia.org</span>
              </div>
              <button className="get-in-touch-btn">
                <span>GET IN TOUCH</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* 3. BOTTOM MEDIA FOOTER BAR */}
          <div className="media-footer-bar">
            {/* Left Brand */}
            <div className="media-footer-brand">
              <img
                src={illayaLogo}
                alt="Illaya India Logo"
                className="media-footer-logo"
              />
              <div className="media-footer-brand-text">
                <span className="brand-title">ILLAYA INDIA</span>
                <span className="brand-tamil">மனிதம் ஒன்றே போதும்</span>
              </div>
            </div>

            {/* Center Social Links */}
            <div className="media-footer-social">
              <span className="social-label">FOLLOW US</span>
              <div className="social-icons-wrapper">
                <a href="#" className="social-btn facebook" aria-label="Facebook">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="#" className="social-btn x-twitter" aria-label="X">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a href="#" className="social-btn instagram" aria-label="Instagram">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="#" className="social-btn youtube" aria-label="YouTube">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                <a href="#" className="social-btn whatsapp" aria-label="WhatsApp">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </a>
                <a href="#" className="social-btn telegram" aria-label="Telegram">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.56 8.16l-1.97 9.28c-.15.67-.54.83-1.1.52l-3.04-2.24-1.47 1.41c-.16.16-.3.3-.61.3l.22-3.1 5.64-5.1c.25-.22-.05-.34-.38-.12l-6.97 4.39-3.01-.94c-.65-.2-.67-.65.14-.97l11.78-4.54c.55-.2 1.02.13.81 1.01z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Motto */}
            <div className="media-footer-motto">
              <span>HUMANITY BEFORE EVERYTHING</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Media;
