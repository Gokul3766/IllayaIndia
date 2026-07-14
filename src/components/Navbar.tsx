import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import illayaLogo from "../assets/illaya-logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Vision", href: "/#vision" },
    { label: "Our Principles", href: "/#principles" },
    { label: "People's Parliament", href: "/#parliament" },
    { label: "Projects", href: "/#projects" },
    { label: "Media", href: "/#media" },
    { label: "Join Us", href: "/#join" },
  ];

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  const isActive = (href: string) => {
    if (href === "/" && location.pathname === "/") {
      return !location.hash; // Active only if no hash is present on home
    }
    if (href.startsWith("/#") && location.pathname === "/") {
      return location.hash === href.substring(1);
    }
    return location.pathname === href;
  };

  return (
    <>
      <nav
        className={`illaya-navbar ${isScrolled ? "scrolled" : ""}`}
        id="main-navbar"
      >
        <div className="container-fluid px-4">
          <div className="navbar-inner">
            {/* Logo */}
            <Link to="/" className="navbar-logo-wrapper">
              <img
                src={illayaLogo}
                alt="Illaya India Logo"
                className="navbar-logo-img"
              />
              <div className="navbar-logo-text">
                <span className="navbar-logo-title">ILLAYA INDIA</span>
                <span className="navbar-logo-subtitle">
                  மனிதம் ஒன்றே போதும்
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="navbar-desktop-menu">
              <ul className="navbar-nav-links">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className={isActive(link.href) ? "active" : ""}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <button className="navbar-donate-btn" id="donate-btn">
                Donate
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              className={`navbar-hamburger ${isMobileMenuOpen ? "open" : ""}`}
              aria-label="Toggle menu"
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu-overlay ${isMobileMenuOpen ? "active" : ""}`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>

      {/* Mobile Drawer */}
      <div
        className={`mobile-menu-drawer ${isMobileMenuOpen ? "open" : ""}`}
        id="mobile-menu-drawer"
      >
        <div className="mobile-drawer-header">
          <Link to="/" className="navbar-logo-wrapper" onClick={handleNavClick}>
            <img
              src={illayaLogo}
              alt="Illaya India Logo"
              className="navbar-logo-img"
            />
            <div className="navbar-logo-text">
              <span className="navbar-logo-title">ILLAYA INDIA</span>
              <span className="navbar-logo-subtitle">
                மனிதம் ஒன்றே போதும்
              </span>
            </div>
          </Link>
          <button
            className="mobile-drawer-close"
            aria-label="Close menu"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <i className="bi bi-x-lg"></i>
          </button>
        </div>

        <ul className="mobile-nav-links">
          {navLinks.map((link, index) => (
            <li
              key={link.label}
              style={{ animationDelay: `${index * 0.05}s` }}
              className={isMobileMenuOpen ? "animate-in" : ""}
            >
              <Link
                to={link.href}
                className={isActive(link.href) ? "active" : ""}
                onClick={handleNavClick}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mobile-drawer-footer">
          <button
            className="mobile-donate-btn"
            id="mobile-donate-btn"
            onClick={handleNavClick}
          >
            Donate Now
          </button>
          <div className="mobile-social-links">
            <a href="#" aria-label="Facebook">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#" aria-label="Twitter">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="#" aria-label="YouTube">
              <i className="bi bi-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
