import React from "react";

const WhyUs = () => {
  return (
    <>
      <div className="bg-white dark:bg-gray-800 py-12">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Why Flowbite Shop?</h2>
          <p className="text-gray dark:text-gray" style={{ fontSize: '1.25rem' }}>
            Simplify the entire ordering process from search to fulfillment, all in one platform.
          </p>
        </div>
        <div className="max-w-screen-xl mx-auto mt-8 grid gap-6 md:grid-cols-3">
          {/* Card 1 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden text-center">
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Enjoy secure payments</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Pay for your order in over 20 currencies via 20+ secure payment methods, including flexible payment terms.
              </p>
              <a href="#" className="text-blue-500 hover:underline flex items-center justify-center">
                How to make the payments
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 ml-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a.75.75 0 01.75.75v10.5a.75.75 0 01-1.5 0V3.75A.75.75 0 0110 3zm1.22 5.97a.75.75 0 00-1.06-1.06L7.78 9.47a.75.75 0 000 1.06l2.36 2.36a.75.75 0 101.06-1.06L9.06 10l1.16-1.16zM4.75 16.25a.75.75 0 011.5 0v.75h8.5v-.75a.75.75 0 011.5 0v.75a1.75 1.75 0 01-1.75 1.75H6.25a1.75 1.75 0 01-1.75-1.75v-.75zM4 4.25C4 3.01 5.01 2 6.25 2h7.5C14.99 2 16 3.01 16 4.25V5h-1.5V4.25c0-.414-.336-.75-.75-.75h-7.5c-.414 0-.75.336-.75.75V5H4v-.75z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden text-center">
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Fast worldwide shipping</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Get your products delivered worldwide quickly and efficiently with our reliable shipping partners.
              </p>
              <a href="#" className="text-blue-500 hover:underline flex items-center justify-center">
                How to track your order
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 ml-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a.75.75 0 01.75.75v10.5a.75.75 0 01-1.5 0V3.75A.75.75 0 0110 3zm1.22 5.97a.75.75 0 00-1.06-1.06L7.78 9.47a.75.75 0 000 1.06l2.36 2.36a.75.75 0 101.06-1.06L9.06 10l1.16-1.16zM4.75 16.25a.75.75 0 011.5 0v.75h8.5v-.75a.75.75 0 011.5 0v.75a1.75 1.75 0 01-1.75 1.75H6.25a1.75 1.75 0 01-1.75-1.75v-.75zM4 4.25C4 3.01 5.01 2 6.25 2h7.5C14.99 2 16 3.01 16 4.25V5h-1.5V4.25c0-.414-.336-.75-.75-.75h-7.5c-.414 0-.75.336-.75.75V5H4v-.75z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden text-center">
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">24/7 Customer Support</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Our dedicated support team is available round the clock to assist you with any queries or issues you may have.
              </p>
              <a href="#" className="text-blue-500 hover:underline flex items-center justify-center">
                Contact customer support
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 ml-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a.75.75 0 01.75.75v10.5a.75.75 0 01-1.5 0V3.75A.75.75 0 0110 3zm1.22 5.97a.75.75 0 00-1.06-1.06L7.78 9.47a.75.75 0 000 1.06l2.36 2.36a.75.75 0 101.06-1.06L9.06 10l1.16-1.16zM4.75 16.25a.75.75 0 011.5 0v.75h8.5v-.75a.75.75 0 011.5 0v.75a1.75 1.75 0 01-1.75 1.75H6.25a1.75 1.75 0 01-1.75-1.75v-.75zM4 4.25C4 3.01 5.01 2 6.25 2h7.5C14.99 2 16 3.01 16 4.25V5h-1.5V4.25c0-.414-.336-.75-.75-.75h-7.5c-.414 0-.75.336-.75.75V5H4v-.75z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default WhyUs;