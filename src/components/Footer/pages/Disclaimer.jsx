import React from "react";

const Disclaimer = () => {
  return (
    <div className="bg-[#1B1233] text-white px-6 md:px-16 lg:px-32 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
          Disclaimer
        </h1>
        <p className="text-sm text-center text-gray-400 mb-12">
          Last Updated: [Insert Update Date]
        </p>

        {/* Content */}
        <section className="space-y-8">
          <div>
            <p className="text-gray-300 leading-relaxed">
              Kryzox provides its services <strong>“as is”</strong> and <strong>“as available.”</strong> We make no warranties, express or implied, about the reliability, accuracy, or availability of the platform.
            </p>
          </div>

          <div>
            <p className="text-gray-300 leading-relaxed">
              Kryzox shall not be held liable for any damages resulting from:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
              <li>System outages.</li>
              <li>Data loss.</li>
              <li>User behavior or third-party content.</li>
              <li>Unauthorized access to your account.</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Disclaimer;
