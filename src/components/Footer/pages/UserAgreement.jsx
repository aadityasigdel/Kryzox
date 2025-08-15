import React from "react";

const UserAgreement = () => {
  return (
    <div className="bg-[#1B1233] text-white px-6 md:px-16 lg:px-32 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Page Title */}
         <h1 className="text-4xl md:text-5xl font-bold text-center mb-2 relative">
          <span
            className="text-transparent bg-clip-text"
            style={{
              background: "linear-gradient(45deg, #c84de5, #79a5d5)",
              WebkitBackgroundClip: "text",
            }}
          >
          User Agreement
          </span>
        </h1>
        <p className="text-sm text-center text-gray-400 mb-12">
          Last Updated: [Insert Update Date]
        </p>

        {/* Content */}
        <section className="space-y-8">
          <div>
            <p className="text-gray-300 leading-relaxed">
              By using Kryzox, you:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
              <li>Confirm that you meet the age and legal requirements.</li>
              <li>Agree to these Terms, Privacy Policy, and all other applicable rules.</li>
              <li>Consent to the collection and use of your data as outlined herein.</li>
              <li>Accept that Kryzox has the right to update policies as needed.</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default UserAgreement;
