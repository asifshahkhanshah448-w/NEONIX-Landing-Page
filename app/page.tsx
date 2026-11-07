'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  Code,
  Zap,
  ArrowRight,
  ArrowUpRight,
  Check,
  Layers,
  Smartphone,
  Mail,
  MapPin,
  Clock,
  Send,
  Github,
  Linkedin,
  Twitter,
  Codepen,
  ArrowUp,
  Menu,
  X,
  CheckCircle2,
  Box,
} from 'lucide-react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Handle header background styling on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Active section observer
  useEffect(() => {
    const sections = ['home', 'about', 'services', 'contact'];
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { threshold: 0.3 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      return;
    }
    setFormSubmitted(true);
  };

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="landing-page-wrapper">
      {/* ==================================================================
          1. Header & Navigation (Transparent Dark with Neon Green Accents)
          ================================================================== */}
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`} id="header">
        <div className="container header-container">
          {/* Zone 1: NEONIX Custom Brand Wordmark */}
          <a href="#home" className="brand" aria-label="NEONIX Homepage">
            <div className="brand-icon" aria-hidden="true">
              <Zap size={18} strokeWidth={2.5} />
            </div>
            <span className="brand-text">
              NEON<span className="brand-highlight">IX</span>
            </span>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav
            className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`}
            id="nav-menu"
            aria-label="Primary Navigation"
          >
            <a
              href="#home"
              className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#services"
              className={`nav-link ${activeSection === 'services' ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#contact"
              className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            <a
              href="#contact"
              className="btn btn-primary btn-sm nav-mobile-cta"
              onClick={() => setMobileMenuOpen(false)}
              style={{ display: mobileMenuOpen ? 'flex' : 'none' }}
            >
              Get Started
            </a>
          </nav>

          {/* Zone 3: Header Actions */}
          <div className="header-actions">
            <a href="#contact" className="btn btn-primary btn-sm nav-cta">
              Get Started
            </a>

            {/* Mobile Toggle Button */}
            <button
              className="mobile-toggle"
              id="mobile-toggle"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="nav-menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* ==================================================================
          Main Content Container
          ================================================================== */}
      <main>
        {/* ================================================================
            2. Hero Section
            ================================================================ */}
        <section className="section hero-section" id="home" aria-labelledby="hero-heading">
          <div className="container">
            <div className="hero-grid">
              {/* Left Column: Copy & Actions */}
              <div className="hero-content">
                <div className="hero-badge">
                  <span className="hero-badge-dot" aria-hidden="true"></span>
                  <span>NEXT GENERATION DIGITAL STUDIO</span>
                </div>

                <h1 className="hero-headline" id="hero-heading">
                  Build Your <span className="text-neon">Digital Future</span> With{' '}
                  <span className="text-neon">NEONIX</span>.
                </h1>

                <p className="hero-description">
                  We engineer cutting-edge digital platforms, high-velocity web applications, and intuitive user experiences powered by modern web architecture, clean code standards, and forward-thinking design.
                </p>

                <div className="hero-ctas">
                  <a href="#services" className="btn btn-secondary">
                    Explore More
                    <ArrowUpRight size={16} strokeWidth={2.5} aria-hidden="true" />
                  </a>
                  <a href="#contact" className="btn btn-primary">
                    Get Started
                    <ArrowRight size={16} strokeWidth={2.5} aria-hidden="true" />
                  </a>
                </div>

                {/* Adjacent Quantitative Proof */}
                <div className="hero-proof">
                  <div className="proof-item">
                    <span className="proof-number">
                      99.9<span className="text-neon">%</span>
                    </span>
                    <span className="proof-label">System Reliability</span>
                  </div>
                  <div className="proof-item">
                    <span className="proof-number">
                      100<span className="text-neon">/100</span>
                    </span>
                    <span className="proof-label">Performance Score</span>
                  </div>
                  <div className="proof-item">
                    <span className="proof-number">
                      &lt;100<span className="text-neon">ms</span>
                    </span>
                    <span className="proof-label">Fluid Latency</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Visual Showcase */}
              <div className="hero-visual">
                <div className="hero-image-wrapper">
                  <Image
                    src="/assets/images/neonix_hero.jpg"
                    alt="NEONIX 3D futuristic technology illustration with glowing neon green wireframe structures against a deep black background"
                    className="hero-image"
                    width={800}
                    height={500}
                    priority
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Floating Architectural Badge */}
                <div className="hero-floating-card">
                  <div className="floating-icon" aria-hidden="true">
                    <Box size={20} strokeWidth={2} />
                  </div>
                  <div>
                    <div className="floating-text-primary">Next-Gen Architecture</div>
                    <div className="floating-text-sub">Innovation Starts Here.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================
            3. About Section
            ================================================================ */}
        <section
          className="section section-alt about-section"
          id="about"
          aria-labelledby="about-heading"
        >
          <div className="container">
            <div className="about-grid">
              {/* Visual Column */}
              <div className="about-visual">
                <div className="about-image-wrapper">
                  <Image
                    src="/assets/images/neonix_about.jpg"
                    alt="NEONIX modern digital laboratory with engineers and designers collaborating around high-tech holographic interface tables"
                    className="about-image"
                    width={640}
                    height={480}
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="about-experience-badge">
                  <span className="badge-number">2026</span>
                  <span className="badge-label">Design Standards</span>
                </div>
              </div>

              {/* Content Column */}
              <div className="about-content">
                <span className="about-kicker">01 // ABOUT NEONIX</span>
                <h2 className="about-headline" id="about-heading">
                  Shaping Tomorrow&apos;s Web Through <span className="text-neon">Precision Engineering</span>
                </h2>

                <p className="about-text">
                  At <strong>NEONIX</strong>, we believe that true digital innovation begins with foundational mastery. As a modern digital technology agency, we merge futuristic visual aesthetics with rock-solid technical discipline—delivering performant, accessible, and scalable digital solutions that elevate forward-thinking brands.
                </p>

                <p className="about-text">
                  Our engineering team crafts lightweight front-end ecosystems built on semantic HTML5, modern CSS3 Flexbox and 2D Grid layouts, and fluid responsive design principles with zero bloated dependencies.
                </p>

                {/* Three Pillars */}
                <div className="about-pillars">
                  <div className="pillar-item">
                    <div className="pillar-bullet" aria-hidden="true">
                      <Check size={14} strokeWidth={2.5} />
                    </div>
                    <div>
                      <h3 className="pillar-title">High-Velocity Engineering</h3>
                      <p className="pillar-desc">
                        Sub-second load times, modular CSS token architecture, and hardware-accelerated animations.
                      </p>
                    </div>
                  </div>

                  <div className="pillar-item">
                    <div className="pillar-bullet" aria-hidden="true">
                      <Check size={14} strokeWidth={2.5} />
                    </div>
                    <div>
                      <h3 className="pillar-title">Futuristic &amp; Human-Centric UI</h3>
                      <p className="pillar-desc">
                        High-contrast visual hierarchy designed for WCAG AA compliance and effortless interaction.
                      </p>
                    </div>
                  </div>

                  <div className="pillar-item">
                    <div className="pillar-bullet" aria-hidden="true">
                      <Check size={14} strokeWidth={2.5} />
                    </div>
                    <div>
                      <h3 className="pillar-title">Multi-Platform Fluidity</h3>
                      <p className="pillar-desc">
                        Flawless adaptability across smartphones, tablets, and 4K ultra-wide monitors without horizontal scroll.
                      </p>
                    </div>
                  </div>
                </div>

                <a
                  href="#services"
                  className="btn btn-secondary"
                  style={{ alignSelf: 'flex-start' }}
                >
                  Explore Services
                  <ArrowRight size={16} strokeWidth={2.5} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================
            4. Services Section (Web Development, UI/UX Design, Responsive Web Design)
            ================================================================ */}
        <section
          className="section services-section"
          id="services"
          aria-labelledby="services-heading"
        >
          <div className="container">
            <div className="section-header">
              <span className="section-kicker">02 // AGENCY CAPABILITIES</span>
              <h2 className="section-title" id="services-heading">
                Specialized <span className="text-neon">Technology Solutions</span>
              </h2>
              <p className="section-description">
                Three core disciplines executed with precision, clean structure, and cross-browser reliability to power your next digital leap.
              </p>
            </div>

            <div className="services-grid">
              {/* Card 1: Web Development */}
              <article className="service-card">
                <span className="service-card-number">01 / DEV</span>

                <div className="service-icon-box" aria-hidden="true">
                  <Code size={26} strokeWidth={2} />
                </div>

                <h3 className="service-title">Web Development</h3>

                <p className="service-description">
                  Constructing robust, high-performance web applications using standard-compliant HTML5 semantic structure, clean JavaScript logic, and modular CSS architecture for maximum stability and speed.
                </p>

                <div className="service-features">
                  <div className="feature-line">
                    <Check size={14} strokeWidth={2.5} />
                    <span>Semantic HTML5 document hierarchies</span>
                  </div>
                  <div className="feature-line">
                    <Check size={14} strokeWidth={2.5} />
                    <span>Zero-bloat vanilla JavaScript modules</span>
                  </div>
                  <div className="feature-line">
                    <Check size={14} strokeWidth={2.5} />
                    <span>SEO, OpenGraph, and web accessibility standards</span>
                  </div>
                </div>
              </article>

              {/* Card 2: UI/UX Design */}
              <article className="service-card">
                <span className="service-card-number">02 / DESIGN</span>

                <div className="service-icon-box" aria-hidden="true">
                  <Layers size={26} strokeWidth={2} />
                </div>

                <h3 className="service-title">UI/UX Design</h3>

                <p className="service-description">
                  Crafting immersive, futuristic user interfaces with meticulous attention to typographic hierarchy, dark-mode contrast ratios, glowing micro-interactions, and frictionless user journeys.
                </p>

                <div className="service-features">
                  <div className="feature-line">
                    <Check size={14} strokeWidth={2.5} />
                    <span>Dark neon aesthetic with 60-30-10 discipline</span>
                  </div>
                  <div className="feature-line">
                    <Check size={14} strokeWidth={2.5} />
                    <span>Design system tokens and reusable UI components</span>
                  </div>
                  <div className="feature-line">
                    <Check size={14} strokeWidth={2.5} />
                    <span>Hardware-accelerated transitions and smooth hover states</span>
                  </div>
                </div>
              </article>

              {/* Card 3: Responsive Web Design */}
              <article className="service-card">
                <span className="service-card-number">03 / RESPONSIVE</span>

                <div className="service-icon-box" aria-hidden="true">
                  <Smartphone size={26} strokeWidth={2} />
                </div>

                <h3 className="service-title">Responsive Web Design</h3>

                <p className="service-description">
                  Engineering fluid layouts using CSS Grid and Flexbox that dynamically conform across viewports from 320px compact mobile phones to expansive 4K desktop screens without horizontal overflow.
                </p>

                <div className="service-features">
                  <div className="feature-line">
                    <Check size={14} strokeWidth={2.5} />
                    <span>Fluid clamp-based responsive typography</span>
                  </div>
                  <div className="feature-line">
                    <Check size={14} strokeWidth={2.5} />
                    <span>Precision media queries for all devices</span>
                  </div>
                  <div className="feature-line">
                    <Check size={14} strokeWidth={2.5} />
                    <span>Touch-friendly hit targets (&ge;48px) and mobile navigation</span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ================================================================
            5. Contact Section
            ================================================================ */}
        <section
          className="section section-alt contact-section"
          id="contact"
          aria-labelledby="contact-heading"
        >
          <div className="container">
            <div className="section-header">
              <span className="section-kicker">03 // INITIATE TRANSMISSION</span>
              <h2 className="section-title" id="contact-heading">
                Connect With <span className="text-neon">NEONIX</span>
              </h2>
              <p className="section-description">
                Ready to build your digital future? Submit your project details below and our technical leads will connect with you within 24 hours.
              </p>
            </div>

            <div className="contact-grid">
              {/* Contact Details / Info Cards */}
              <div className="contact-info">
                <div className="contact-card">
                  <div className="contact-card-icon" aria-hidden="true">
                    <Mail size={20} strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="contact-card-title">Direct Inquiries</h3>
                    <div className="contact-card-value">
                      <a href="mailto:hello@neonix.tech">hello@neonix.tech</a>
                    </div>
                  </div>
                </div>

                <div className="contact-card">
                  <div className="contact-card-icon" aria-hidden="true">
                    <MapPin size={20} strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="contact-card-title">Studio Headquarters</h3>
                    <div className="contact-card-value">
                      NEONIX Digital Labs
                      <br />
                      Tech Innovation District, CA
                    </div>
                  </div>
                </div>

                <div className="contact-card">
                  <div className="contact-card-icon" aria-hidden="true">
                    <Clock size={20} strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="contact-card-title">Response Window</h3>
                    <div className="contact-card-value">
                      Active response within 24 business hours
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form Wrapper */}
              <div className="contact-form-wrapper">
                <h3 className="form-title">Send a Direct Message</h3>
                <p className="form-subtitle">
                  Fill in the fields below to test interactive form handling and validation.
                </p>

                <form id="contact-form" onSubmit={handleFormSubmit} noValidate>
                  <div className="form-grid">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="e.g. Jordan Vane"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email" className="form-label">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="jordan@enterprise.com"
                        required
                      />
                    </div>

                    <div className="form-group full-width">
                      <label htmlFor="subject" className="form-label">
                        Project Scope / Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="e.g. Web Application & UI/UX Design"
                        required
                      />
                    </div>

                    <div className="form-group full-width">
                      <label htmlFor="message" className="form-label">
                        Message Details *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="form-textarea"
                        placeholder="Describe your technical requirements, timeline, and vision..."
                        required
                      />
                    </div>
                  </div>

                  <button type="submit" className="btn btn-primary btn-full">
                    <span>Submit Transmission</span>
                    <Send size={16} strokeWidth={2.5} aria-hidden="true" />
                  </button>

                  {formSubmitted && (
                    <div
                      id="form-feedback"
                      className="form-feedback success"
                      role="status"
                      aria-live="polite"
                    >
                      <CheckCircle2 size={18} strokeWidth={2} />
                      <span>
                        Thank you, <strong>{formData.name}</strong>! Your transmission has been received. Our leads will respond within 24 hours.
                      </span>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ==================================================================
          6. Footer (NEONIX Branding & Copyright 2026)
          ================================================================== */}
      <footer className="site-footer">
        <div className="container">
          {/* Top 4-Column Grid */}
          <div className="footer-top">
            {/* Column 1: NEONIX Brand Info */}
            <div className="footer-brand-col">
              <a href="#home" className="footer-brand" aria-label="NEONIX">
                <Zap size={22} strokeWidth={2.5} />
                <span>NEONIX</span>
              </a>
              <p className="footer-tagline">
                Innovation Starts Here. Next-generation digital technology agency specializing in high-performance web development, UI/UX design, and responsive systems.
              </p>
            </div>

            {/* Column 2: Navigation */}
            <div>
              <h4 className="footer-col-title">Navigation</h4>
              <ul className="footer-links">
                <li>
                  <a href="#home" className="footer-link">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="footer-link">
                    About Agency
                  </a>
                </li>
                <li>
                  <a href="#services" className="footer-link">
                    Specialized Services
                  </a>
                </li>
                <li>
                  <a href="#contact" className="footer-link">
                    Contact &amp; Inquiries
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact Info Placeholders */}
            <div>
              <h4 className="footer-col-title">Inquiries</h4>
              <ul className="footer-links">
                <li>
                  <span className="footer-link">hello@neonix.tech</span>
                </li>
                <li>
                  <span className="footer-link">+1 (555) 019-8800</span>
                </li>
                <li>
                  <span className="footer-link">Tech Innovation District, CA</span>
                </li>
                <li>
                  <span className="footer-link">Mon – Fri, 9am – 6pm PST</span>
                </li>
              </ul>
            </div>

            {/* Column 4: Social Media Links */}
            <div>
              <h4 className="footer-col-title">Network</h4>
              <p className="footer-tagline" style={{ marginBottom: '0.75rem' }}>
                Follow development updates and code repositories.
              </p>
              <div className="footer-social-links">
                {/* GitHub */}
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  aria-label="GitHub Profile"
                >
                  <Github size={18} strokeWidth={2} />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={18} strokeWidth={2} />
                </a>

                {/* Twitter / X */}
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  aria-label="Twitter Profile"
                >
                  <Twitter size={18} strokeWidth={2} />
                </a>

                {/* CodePen */}
                <a
                  href="https://codepen.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  aria-label="CodePen Demos"
                >
                  <Codepen size={18} strokeWidth={2} />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Copyright 2026 & Back to Top */}
          <div className="footer-bottom">
            <div>
              &copy; 2026 NEONIX · Innovation Starts Here. All rights reserved. Web Development Internship Task 1.
            </div>
            <a
              href="#home"
              id="back-to-top"
              className="back-to-top"
              aria-label="Scroll back to top"
              onClick={scrollToTop}
            >
              Back to top
              <ArrowUp size={14} strokeWidth={2.5} aria-hidden="true" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
