import { useState } from 'react';

const FrequentlyAskedQuestions = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className="faq-item">
      <button
        className="faq-question"
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span>{question}</span>
        <span className="faq-icon" aria-hidden="true">
          {isOpen ? '×' : '+'}
        </span>
      </button>

      {isOpen && (
        <div className="faq-answer">
          <p>{answer}</p>
        </div>
      )}
    </article>
  );
};

export default FrequentlyAskedQuestions;
