import React from 'react';

function InfoBox({ steps = [] }) {
  return (
    <div className="info-box">
      <h2>How Realtime Colors Works</h2>
      <ol>
        {steps.length > 0 ? (
          steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))
        ) : (
          <p>No steps available</p>
        )}
      </ol>
    </div>
  );
}

export default InfoBox;
