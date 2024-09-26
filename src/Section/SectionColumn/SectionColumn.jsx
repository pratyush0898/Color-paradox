import React from 'react';

function SectionColumn({ title, content }) {
  return (
    <div className="section-column">
      <h2>{title}</h2>
      <ul>
        {content.map((item, index) => (
          <li key={index}>{typeof item === 'string' ? item : item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default SectionColumn;
