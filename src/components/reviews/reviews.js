"use client";

import React, { useState, useEffect } from "react";

const Reviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const reviews = [
    [
      {
        name: "Helene Engels",
        avatar: "/images/user-one.jpg",
        title: "Secure Packaging",
        text: "I am extremely pleased with the quality of the products I bought. They surpassed my expectations, and the customer service was exceptional."
      },
      {
        name: "Lana Byrd",
        avatar: "/images/user-two.jpg",
        title: "Highly Recommended",
        text: "The team went the extra mile to make sure my order was flawless. They were prompt, polite, and incredibly supportive throughout the entire process."
      },
      {
        name: "Neil Sims",
        avatar: "/images/user-three.jpg",
        title: "Exceeded Expectations",
        text: "My order arrived much faster than I anticipated. The packaging was secure, and the items matched the description perfectly. I highly recommend this shop!"
      }
    ],
    [
      {
        name: "Alice Brown",
        avatar: "/images/user-four.jpg",
        title: "User-Friendly Website",
        text: "Navigating the website was a breeze. I found what I was looking for quickly and the checkout process was smooth."
      },
      {
        name: "Bob Johnson",
        avatar: "/images/user-five.jpg",
        title: "Wide Selection",
        text: "I was impressed by the wide selection of products available. There was something for everyone."
      },
      {
        name: "Charlie Davis",
        avatar: "/images/user-six.jpg",
        title: "Affordable Prices",
        text: "The prices were very reasonable, and I got a great deal on my purchase. I will definitely be a returning customer."
      }
    ],
    [
      {
        name: "Daisy Evans",
        avatar: "/images/user-seven.jpg",
        title: "Secure Payments",
        text: "I felt very secure making my payment on this site. There were plenty of options, and everything went smoothly."
      },
      {
        name: "Ethan Ford",
        avatar: "/images/user-three.jpg",
        title: "Great Support",
        text: "The customer support was fantastic. They were quick to respond and resolved my issue in no time."
      },
      {
        name: "Fiona Green",
        avatar: "/images/user-five.jpg",
        title: "Highly Recommend",
        text: "I highly recommend this store to anyone looking for quality products and excellent service."
      }
    ]
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [reviews.length]);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div id="animation-carousel" className="relative w-full">
      <div className="relative overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)`, padding: 4 }}
        >
          {reviews.map((reviewSet, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full grid grid-cols-1 md:grid-cols-3 gap-4 p-4"
            >
              {reviewSet.map((review, reviewIndex) => (
                <div key={reviewIndex} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-7"
                  style={{ backgroundColor: 'rgb(249, 250, 251)' }}>
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">{review.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">"{review.text}"</p>
                  <div className="flex items-center">
                    <img className="w-10 h-10 rounded-full mr-5" src={review.avatar} alt={`Profile picture of ${review.name}`} />
                    <div className="text-sm">
                      <p className="text-gray-900 dark:text-white font-bold">{review.name}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="absolute z-30 flex -translate-x-1/2 bottom-1 left-1/2 space-x-3 rtl:space-x-reverse mb-3">
          {reviews.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full ${index === activeIndex ? 'bg-gray-800' : 'bg-gray-400'}`}
              aria-current={index === activeIndex}
              aria-label={`Slide ${index + 1}`}
              onClick={() => setActiveIndex(index)}
            ></button>
          ))}
        </div>

        {/* Slider controls */}
        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={handlePrev}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1L1 5l4 4" />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={handleNext}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Reviews;