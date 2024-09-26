import React from 'react';

function LastCTA({ text, buttonText, buttonLink }) {
  return (
    <div className="last-cta">
      <h2>{text}</h2>
      <a href={buttonLink} className="cta-button">{buttonText}</a>
    </div>
  );
}

export default LastCTA;
