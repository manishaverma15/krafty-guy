import React from "react";

const ContactUs = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-center justify-center">Contact Us</h2>
            <p className="text-center justify-center mb-6">We use an agile approach to test assumptions and connect with the needs of your audience early and often.</p>
            <form action="#" method="POST" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">First Name</label>
                  <input type="text" name="first-name" id="first-name" placeholder="Bonnie" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Last Name</label>
                  <input type="text" name="last-name" id="last-name" placeholder="Green" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your email</label>
                <input type="email" name="email" id="email" placeholder="name@flowbite.com" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input type="tel" name="phone" id="phone" placeholder="+12 345 6789" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your message</label>
                <textarea name="message" id="message" rows="4" placeholder="Leave a comment..." className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
              </div>
              <div>
                <p className="text-gray-400 text-sm">
                  By submitting this form you agree to our <a className="text-sm text-blue-500"> terms and conditions </a>
                  and our <a className="text-sm text-blue-500"> privacy policy </a> which explains how we may collect, use and disclose your personal information including to third parties.
                </p>
              </div>
              <div>
                <button type="submit" className="min-w-150 block py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Send</button>
              </div>
            </form>
          </div>
          <div className="space-y-20">
            <div className="flex items-center space-x-6">
              <div className="flex-shrink-0">
                <svg className="h-8 w-8 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M9 16h6m2 4H7a2 2 0 01-2-2V7a2 2 0 012-2h10a2 2 0 012 2v11a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900 mb-3">Company information:</h3>
                <p className="text-sm text-gray-500">Themesberg LLC</p>
                <p className="text-sm text-gray-500">Tax id: USXXXXXX</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex-shrink-0">
                <svg className="h-8 w-8 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path fill="currentColor" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900 mb-3">Address:</h3>
                <p className="text-sm text-gray-500">SILVER LAKE, United States 1941 Late Avenue</p>
                <p className="text-sm text-gray-500">Zip Code/Postal code: 03875</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex-shrink-0">
                <svg className="h-8 w-8 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900 mb-3">Call us:</h3>
                <p className="text-sm text-gray-500">Call us to speak to a member of our team. We are always happy to help.</p>
                <p className="text-sm text-blue-500">+91 7027860053</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default ContactUs;