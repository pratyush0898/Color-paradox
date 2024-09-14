import React from "react";
import Logo from '/logo.png'
import Github from '/github.svg'
import Downarro from '/Downarro.svg'
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <div className="sec1">
        <img src={Logo} alt="Realtime Colors" />
        <span>Realtime colors</span>
      </div>
      <div className="sec2">
        <a href="/#" className="Link1">
          <img src={Github} alt="" />
          <span>Source</span>
        </a>
        <a href="/#" className="Link2">
          <span>Docs</span>
        </a>
        <a href="/#" className="Link3">
          <button>
            Templates
            <img src={Downarro} alt="" />
          </button>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
