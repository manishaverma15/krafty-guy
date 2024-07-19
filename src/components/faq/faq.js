"use client"
import { useState } from 'react';

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
          {/* Question 1 */}
          <div>
            <button
              onClick={() => toggleAnswer(1)}
              className="flex justify-between items-center w-full py-4 text-left text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700"
            >
              <span>How do I place an order on KraftyGuy?</span>
              <svg
                className={`w-6 h-6 transform transition-transform duration-200 ${selected === 1 ? 'rotate-180' : ''}`}
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
            <div className={`mt-2 text-gray-500 dark:text-gray-400 ${selected === 1 ? '' : 'hidden'}`}>
              Placing an order on KraftyGuy is simple. Just browse through our collection, add the items you want to your cart, and proceed to checkout. You will need to provide your shipping details and payment information to complete the order.
            </div>
          </div>
          
          {/* Question 2 */}
          <div>
            <button
              onClick={() => toggleAnswer(2)}
              className="flex justify-between items-center w-full py-4 text-left text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700"
            >
              <span>What payment methods do you accept?</span>
              <svg
                className={`w-6 h-6 transform transition-transform duration-200 ${selected === 2 ? 'rotate-180' : ''}`}
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
            <div className={`mt-2 text-gray-500 dark:text-gray-400 ${selected === 2 ? '' : 'hidden'}`}>
              We accept a variety of payment methods including credit/debit cards, PayPal, and other secure online payment options.
            </div>
          </div>
          
          {/* Question 3 */}
          <div>
            <button
              onClick={() => toggleAnswer(3)}
              className="flex justify-between items-center w-full py-4 text-left text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700"
            >
              <span>Can I track my order?</span>
              <svg
                className={`w-6 h-6 transform transition-transform duration-200 ${selected === 3 ? 'rotate-180' : ''}`}
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
            <div className={`mt-2 text-gray-500 dark:text-gray-400 ${selected === 3 ? '' : 'hidden'}`}>
              Yes, you can track your order. Once your order has been shipped, you will receive an email with the tracking information.
            </div>
          </div>
          
          {/* Question 4 */}
          <div>
            <button
              onClick={() => toggleAnswer(4)}
              className="flex justify-between items-center w-full py-4 text-left text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700"
            >
              <span>What is your return policy?</span>
              <svg
                className={`w-6 h-6 transform transition-transform duration-200 ${selected === 4 ? 'rotate-180' : ''}`}
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
            <div className={`mt-2 text-gray-500 dark:text-gray-400 ${selected === 4 ? '' : 'hidden'}`}>
              We offer a 30-day return policy. If you are not satisfied with your purchase, you can return it within 30 days of delivery for a full refund or exchange. Please refer to our return policy page for more details.
            </div>
          </div>
          
          {/* Question 5 */}
          <div>
            <button
              onClick={() => toggleAnswer(5)}
              className="flex justify-between items-center w-full py-4 text-left text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700"
            >
              <span>How do I contact customer support?</span>
              <svg
                className={`w-6 h-6 transform transition-transform duration-200 ${selected === 5 ? 'rotate-180' : ''}`}
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
            <div className={`mt-2 text-gray-500 dark:text-gray-400 ${selected === 5 ? '' : 'hidden'}`}>
              You can contact our customer support team by emailing us at support@kraftyguy.com or by filling out the contact form on our website.
            </div>
          </div>
          
          {/* Question 6 */}
          <div>
            <button
              onClick={() => toggleAnswer(6)}
              className="flex justify-between items-center w-full py-4 text-left text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700"
            >
              <span>Can I customize my order?</span>
              <svg
                className={`w-6 h-6 transform transition-transform duration-200 ${selected === 6 ? 'rotate-180' : ''}`}
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
            <div className={`mt-2 text-gray-500 dark:text-gray-400 ${selected === 6 ? '' : 'hidden'}`}>
              Yes, you can customize your order. We offer a range of customization options to make your purchase unique. Please visit our customization page for more details.
            </div>
          </div>
          
          {/* Question 7 */}
          <div>
            <button
              onClick={() => toggleAnswer(7)}
              className="flex justify-between items-center w-full py-4 text-left text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700"
            >
              <span>Do you offer international shipping?</span>
              <svg
                className={`w-6 h-6 transform transition-transform duration-200 ${selected === 7 ? 'rotate-180' : ''}`}
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
            <div className={`mt-2 text-gray-500 dark:text-gray-400 ${selected === 7 ? '' : 'hidden'}`}>
              Yes, we offer international shipping to many countries. Shipping costs and delivery times may vary depending on your location. Please refer to our shipping policy page for more details.
            </div>
          </div>
          
          {/* Question 8 */}
          <div>
            <button
              onClick={() => toggleAnswer(8)}
              className="flex justify-between items-center w-full py-4 text-left text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700"
            >
              <span>What materials are used in your products?</span>
              <svg
                className={`w-6 h-6 transform transition-transform duration-200 ${selected === 8 ? 'rotate-180' : ''}`}
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
            <div className={`mt-2 text-gray-500 dark:text-gray-400 ${selected === 8 ? '' : 'hidden'}`}>
              We use high-quality materials in all of our products to ensure durability and customer satisfaction. Detailed information about the materials used can be found on each product page.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;