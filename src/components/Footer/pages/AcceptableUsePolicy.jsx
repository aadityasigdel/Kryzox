import React from "react";

const AcceptableUsePolicy = () => {
  return (
    <div className="bg-[#1B1233] text-white px-6 md:px-16 lg:px-32 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
          Acceptable Use Policy
        </h1>
        <p className="text-sm text-center text-gray-400 mb-12">
          Last Updated: [Insert Update Date]
        </p>

        {/* Content */}
        <section className="space-y-8">
          <div>
            <p className="text-gray-300 leading-relaxed">
              You may not use Kryzox to:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
              <li>Commit illegal activities.</li>
              <li>Upload harmful, offensive, or misleading content.</li>
              <li>Distribute spam, viruses, or phishing links.</li>
              <li>Attempt to gain unauthorized access to Kryzox servers.</li>
            </ul>
          </div>

          <div>
            <p className="text-gray-300 mt-2 leading-relaxed">
              Violation may result in removal of content, suspension, or permanent ban.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AcceptableUsePolicy;
