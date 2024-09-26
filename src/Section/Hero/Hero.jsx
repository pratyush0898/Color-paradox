import React from "react";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1 style={{ fontFamily: "Inter, sans-serif" }}>
          Visualize Your <br />
          <span
            className="color-effect"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Colors
          </span>{" "}
          &amp;
          <span
            className="font-effect"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Fonts
          </span>{" "}
          <br />
          On a Real Site
        </h1>
        <p style={{ fontFamily: "Inter, sans-serif" }}>
          Choosing colors or typography for your website?
          <br />
          Use the Toolbar below to realize your choices.
        </p>
        <div className="hero-cta">
          <a
            href="https://www.realtimecolors.com/?colors=040316-fbfbfe-2f27ce-dddbff-6961ff&fonts=Inter-Inter#toolbar"
            className="primary-button primary-text-contrast highlight-toolbar"
            style={{
              color: "rgb(251, 251, 254)",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Get Started
          </a>
          <a
            href="https://www.realtimecolors.com/?colors=040316-fbfbfe-2f27ce-dddbff-6961ff&fonts=Inter-Inter#how"
            className="secondary-button"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            How does it work?
          </a>
        </div>
        <div className="hero-scroll">
          <svg
            width="23"
            height="33"
            viewBox="0 0 23 33"
            fill="none"
            style={{ height: "70%" }}
          >
            <rect
              x="0.767442"
              y="0.767442"
              width="20.7209"
              height="31.4651"
              rx="10.3605"
              stroke="var(--text)"
              strokeWidth="1.53488"
            />
            <rect x="9" y="8" width="4" height="8" rx="2" fill="var(--text)" />
          </svg>
          <small style={{ fontFamily: "Inter, sans-serif" }}>
            Scroll to see more sections
          </small>
        </div>
      </div>
      <div className="hero-img">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="652"
          height="644"
          viewBox="0 0 652 644"
          fill="none"
          className="mondrian"
        >
          <rect
            opacity="0.05"
            x="1"
            width="163"
            height="60"
            rx="10"
            fill="var(--text)"
          />
          <rect
            x="424"
            width="193"
            height="60"
            rx="10"
            fill="var(--secondary)"
          />
          <rect
            x="424"
            y="68"
            width="193"
            height="175"
            rx="10"
            fill="var(--secondary)"
          />
          <rect
            opacity="0.2"
            x="424"
            y="401"
            width="193"
            height="79"
            rx="10"
            fill="var(--primary)"
          />
          <rect
            x="255"
            y="626"
            width="362"
            height="18"
            rx="9"
            fill="var(--bg)"
          />
          <rect
            x="80"
            y="579"
            width="166"
            height="65"
            rx="10"
            fill="var(--bg)"
          />
          <rect
            x="255"
            y="579"
            width="160"
            height="40"
            rx="10"
            fill="var(--text)"
          />
          <rect
            opacity="0.05"
            x="255"
            y="490"
            width="160"
            height="80"
            rx="10"
            fill="var(--text)"
          />
          <rect
            opacity="0.05"
            x="255"
            y="400"
            width="160"
            height="80"
            rx="10"
            fill="var(--text)"
          />
          <rect
            x="80"
            y="68"
            width="335"
            height="324"
            rx="10"
            fill="var(--primary)"
          />
          <rect
            x="80"
            y="401"
            width="166"
            height="169"
            rx="10"
            fill="var(--text)"
          />
          <rect
            x="424"
            y="490"
            width="193"
            height="129"
            rx="10"
            fill="var(--accent)"
          />
          <rect
            opacity="0.05"
            x="626"
            y="490"
            width="26"
            height="154"
            rx="10"
            fill="var(--text)"
          />
          <rect
            x="424"
            y="252"
            width="91"
            height="140"
            rx="10"
            fill="var(--bg)"
          />
          <rect
            x="524"
            y="252"
            width="93"
            height="140"
            rx="10"
            fill="var(--bg)"
          />
          <rect
            opacity="0.05"
            x="626"
            width="26"
            height="480"
            rx="10"
            fill="var(--text)"
          />
          <rect x="173" width="242" height="60" rx="10" fill="var(--bg)" />
          <rect x="1" y="68" width="70" height="157" rx="10" fill="var(--bg)" />
          <rect
            opacity="0.05"
            x="1"
            y="234"
            width="70"
            height="259"
            rx="10"
            fill="var(--text)"
          />
          <rect
            x="1"
            y="502"
            width="70"
            height="142"
            rx="10"
            fill="var(--secondary)"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
