import React from "react";
import NavBar from "./Components/NavBar/NavBar.jsx";
import Hero from "./Section/Hero/Hero.jsx";
import SectionColumn from "./Section/SectionColumn/SectionColumn.jsx";
import Part6Bento from "./Section/Part6Bento/Part6Bento.jsx";
import InfoBox from "./Section/InfoBox/InfoBox.jsx";
import Pricing from "./Section/Pricing/Pricing.jsx";
import FaqSection from "./Section/FaqSection/FaqSection.jsx";
import FeaturedPost from "./Section/FeaturedPost/FeaturedPost.jsx";
import LastCTA from "./Section/LastCTA/LastCTA.jsx";
import Footer from "./Components/Footer/Footer.jsx";

function App() {
  // Sample content data for each section
  const whyContent = {
    title: "Why Realtime Colors?",
    description:
      "Here's why you should choose Realtime Colors for your design projects...",
    items: [
      "Easy to use",
      "Versatile and flexible",
      "Real-time palette updates",
    ],
  };

  const testimonialsContent = {
    title: "Testimonials",
    description: "What people are saying about Realtime Colors...",
    items: [
      "Amazing tool for designers!",
      "My go-to app for palette creation.",
      "Has improved my workflow tremendously.",
    ],
  };

  const featuredPosts = [
    {
      title: "5 Color Palettes You Should Know",
      description: "These palettes are must-haves for modern design...",
    },
    {
      title: "Using Realtime Colors with Figma",
      description: "Step-by-step guide to integrating the tool with Figma.",
    },
  ];

  return (
    <div>
      <NavBar />
      <main data-astro-cid="j7pv25f6" className="flex">
        <div className="hero" data-astro-cid="j7pv25f6">
          <Hero />
        </div>
        <div className="section column" id="why" data-astro-cid="j7pv25f6">
          <SectionColumn title="Why Us?" content={["Reason 1", "Reason 2", "Reason 3"]} />
        </div>
        <div className="part6 bento" id="bento" data-astro-cid="j7pv25f6">
          <Part6Bento />
        </div>
        <div className="info-box" id="how" data-astro-cid="j7pv25f6">
          <InfoBox />
        </div>
        <div className="pricing" id="sub" data-astro-cid="j7pv25f6">
          <Pricing />
        </div>
        <div className="section column" id="testimonials" data-astro-cid="j7pv25f6">
          <SectionColumn title="Testimonials" content={["Testimonial 1", "Testimonial 2", "Testimonial 3"]} />
        </div>
        <div className="faq-section" id="faq" data-astro-cid="j7pv25f6">
          <FaqSection />
        </div>
        <div className="section column" id="featured-posts" data-astro-cid="j7pv25f6">
          <FeaturedPost posts={[{ title: "Post 1", description: "Desc 1" }, { title: "Post 2", description: "Desc 2" }]} />
        </div>
        <div className="last-cta" id="end" data-astro-cid="j7pv25f6">
          <LastCTA text="Ready to start?" buttonText="Get Started" buttonLink="#" />
        </div>
        <div className="footer" id="footer" data-astro-cid="sz7xmlte">
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default App;
