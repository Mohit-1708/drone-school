import React, { useState, useEffect } from "react";
import "./styles.css";

const App = () => {
  useRevealEffect();
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CoursesSection />
      <AboutSection />
      <ShopWithUs />
      <NewsSection />
      <WhatWeTeach />
      <Footer />
    </div>
  );
};

// Navbar
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <h1 className="logo">Drone School</h1>
      <div className="nav-items">
        <input type="text" placeholder="Search" className="search-bar" />
        <button className="buy-btn">Buy</button>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        {menuOpen && (
          <div className="dropdown-menu">
            <a href="#home">Home</a>
            <a href="#pages">Pages</a>
            <a href="#shop">Shop</a>
            <a href="#contact">Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
};

// Hero Section
const HeroSection = () => {
  return (
    <div className="hero-section reveal">
      <video autoPlay loop muted className="background-video">
        <source src="/drone-video.mp4" type="video/mp4" />
      </video>
      <div className="hero-content">
        <h1>Welcome to Drone School</h1>
        <p>Master the art of flying with our expert courses.</p>
        <div className="hero-buttons">
          <button className="get-started-btn">Get Started</button>
          <button className="learn-more-btn">Learn More</button>
        </div>
      </div>
    </div>
  );
};

// Courses Section
const CoursesSection = () => {
  const [activeTab, setActiveTab] = useState("DronePilot");

  const courses = {
    DronePilot: { name: "Drone Pilot", text: "Learn basic drone controls.", image: "/assets/remote.jpg" },
    Intermediate: { name: "Photography", text: "Enhance flying skills.", image: "/assets/photography.jpg" },
    Advanced: { name: "Programming", text: "Master drone programming.", image: "/assets/automation.jpg" },
    Higher: { name: "Maintenance", text: "Fix drone components.", image: "/assets/maintenance.jpg" }
  };

  return (
    <div className="courses-section reveal">
      <h2>Our Modern Courses</h2>
      <div className="tabs">
        {Object.keys(courses).map((tab) => (
          <div key={tab} className="tab-container">
            <button
              onClick={() => setActiveTab(tab)}
              className={`tab-btn ${activeTab === tab ? "active-tab" : ""}`}
              style={{ backgroundImage: `url(${courses[tab].image})` }}
            />
            <p className="tab-text">{courses[tab].name}</p>
          </div>
        ))}
      </div>
      <div className="course-content">
        <p>{courses[activeTab].text}</p>
      </div>
    </div>
  );
};

// About Section
const AboutSection = () => {
  return (
    <div className="about-section reveal">
      <div className="about-text">
        <h2>About Us</h2>
        <p className="typing-text">
          Drone School provides the best training programs for drone enthusiasts, offering hands-on experience and certification.
        </p>
        <div className="about-buttons">
          <button className="learn-more-btn">Learn More</button>
          <button className="about-us-btn">About Us</button>
        </div>
      </div>
      <img src="/aboutimg.jpg" alt="Drone Training" className="about-img reveal" />
    </div>
  );
};

// Shop With Us Section
const ShopWithUs = () => {
  const products = [
    { id: 1, name: "Basic Drone", price: "$199", image: "/assets/shopDrone.jpg" },
    { id: 2, name: "Advanced Drone", price: "$499", image: "/assets/ShopDrone2.jpg" },
    { id: 3, name: "Drone Battery", price: "$49", image: "/assets/battery.jpg" },
    { id: 4, name: "Propeller Set", price: "$29", image: "/assets/propeller.jpg" },
    { id: 5, name: "VR Goggles", price: "$129", image: "/assets/vr.jpg" }
  ];

  return (
    <div className="shop-section reveal">
      <h2>Shop With Us</h2>
      <div className="shop-slider-wrapper">
        <div className="shop-slider">
          {products.map((product, index) => (
            <div key={index} className="shop-item">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <button className="buy-now-btn">Buy Now</button>
            </div>
          ))}
        </div>
      </div>
    </div>)
};

// News Section
const NewsSection = () => {
  const news = [
    { id: 1, title: "Drone Regulations Updated", desc: "New rules for flying drones safely." },
    { id: 2, title: "New Drone Launched", desc: "A powerful new drone model is now available." },
    { id: 3, title: "AI in Drone Tech", desc: "How AI is revolutionizing drone technology." }
  ];

  return (
    <div className="news-section reveal">
    <h2>Latest News</h2>
    <div className="news-slider-wrapper">
      <div className="news-slider">
        {news.map((item, index) => (
          <div key={index} className="news-item">
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

// What We Teach Section
const WhatWeTeach = () => {
  return (
    <div className="what-we-teach reveal">
      <h2>What We Teach</h2>
      <div className="teach-cards">
        <div className="teach-card">
          <h3>Basic Drone Flying</h3>
          <p>Learn how to operate drones safely.</p>
        </div>
        <div className="teach-card">
          <h3>Aerial Photography</h3>
          <p>Master drone photography and videography.</p>
        </div>
        <div className="teach-card">
          <h3>Drone Programming</h3>
          <p>Get hands-on with drone automation.</p>
        </div>
      </div>
    </div>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="footer">
      <p>Contact us: support@droneschool.com<br />9898XXXXX</p>
      <p>&copy; 2025 Drone School. All rights reserved.</p> 
      <p>A prototype by MOHIT JOSHI:8387862558</p>
    </footer>
  );
};

// Reveal Animations
const useRevealEffect = () => {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

    const revealOnScroll = () => {
      reveals.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 50) {
          section.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);
};

export default App;
