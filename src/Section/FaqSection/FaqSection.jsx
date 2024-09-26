import React from 'react';

function FaqSection() {
  const faqs = [
    { question: "What is Realtime Colors?", answer: "It is a tool for creating real-time color palettes." },
    { question: "How can I export my palettes?", answer: "Simply click on the export button after creating your palette." }
  ];

  return (
    <div className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <ul>
        {faqs.map((faq, index) => (
          <li key={index}>
            <strong>{faq.question}</strong>: {faq.answer}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FaqSection;
