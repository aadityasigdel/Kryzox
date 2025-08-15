import React from "react";

const CookiePolicy = () => {
  return (
    <div className="bg-[#1B1233] text-white px-6 md:px-16 lg:px-32 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
          Cookie Policy
        </h1>
        <p className="text-sm text-center text-gray-400 mb-12">
          Last Updated: [Insert Update Date]
        </p>

        {/* Content */}
        <section className="space-y-8">
          <div>
            <p className="text-gray-300 leading-relaxed">
              Cookies are small files that our server sends to your device to identify you and enhance
              your experience while using Kryzox. This policy explains how we use cookies and your
              options regarding them.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-purple-300">Types of Cookies We Use</h2>
            <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
              <li>
                <strong>Essential Cookies:</strong> Necessary for core functionality of the website and
                application.
              </li>
              <li>
                <strong>Performance Cookies:</strong> Track user behavior for analytics to improve our
                services.
              </li>
              <li>
                <strong>Preference Cookies:</strong> Store your preferences and user choices for a
                personalized experience.
              </li>
              <li>
                <strong>Advertising Cookies:</strong> Used for targeted marketing, where applicable, to
                show relevant ads.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-purple-300">Managing Cookies</h2>
            <p className="text-gray-300 mt-2 leading-relaxed">
              You can disable cookies at any time through your browser settings or opt-out mechanisms,
              especially if you are located in a region covered by the General Data Protection
              Regulation (GDPR). However, disabling certain cookies may affect your ability to use
              some features of the Service.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CookiePolicy;
