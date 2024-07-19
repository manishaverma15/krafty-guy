"use client";
import { useState } from 'react';
import { faqData } from '@/constants/faq-data';

const FAQ = () => {
  const [selected, setSelected] = useState(null);

  const toggleAnswer = (id) => {
    setSelected(selected === id ? null : id);
  };

  return (
    <section className="bg-white dark:bg-gray-900 py-12">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqData.map((item) => (
            <div key={item.id}>
              <button
                onClick={() => toggleAnswer(item.id)}
                className="flex justify-between items-center w-full py-4 text-left text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700"
              >
                <span>{item.question}</span>
                <svg
                  className={`w-6 h-6 transform transition-transform duration-200 ${selected === item.id ? 'rotate-180' : ''}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              <div className={`mt-2 text-gray-500 dark:text-gray-400 ${selected === item.id ? '' : 'hidden'}`}>
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
