import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-[#1B1233] text-white px-6 md:px-16 lg:px-32 py-12">
      <div className="max-w-5xl">
        {/* Page Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-2 relative">
          <span
            className="text-transparent bg-clip-text"
            style={{
              background: "linear-gradient(45deg, #c84de5, #79a5d5)",
              WebkitBackgroundClip: "text",
            }}
          >
            Privacy Policy
          </span>
        </h1>
        <p className="text-sm text-center text-gray-400 mb-12">
          Effective Date: [Insert Launch Date] | Last Updated: [Insert Update
          Date]
        </p>

        {/* Section */}
        <section className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-purple-300">
              1. Introduction
            </h2>
            <p className="text-gray-300 mt-2 leading-relaxed">
              Your privacy is important to us. This Privacy Policy describes how
              Kryzox collects, uses, stores, and discloses your information when
              you use our Service.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-purple-300">
              2. Information We Collect
            </h2>
            <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
              <li>
                <strong>Personal Information:</strong> Full name, email address,
                phone number (optional), date of birth, account ID, and location
                data.
              </li>
              <li>
                <strong>Device and Technical Data:</strong> IP address, browser
                type, operating system, and usage data (app interactions,
                session durations, etc.).
              </li>
              <li>
                <strong>Content Data:</strong> Any text, images, audio, or video
                you upload or share.
              </li>
              <li>
                <strong>Third-Party Data:</strong> Information obtained through
                linked accounts (e.g., Google, Facebook), if applicable.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-purple-300">
              3. Why We Collect Your Data
            </h2>
            <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
              <li>Provide and improve the services offered on Kryzox.</li>
              <li>Deliver personalized content and experiences.</li>
              <li>Ensure compliance with legal obligations.</li>
              <li>Prevent fraud and ensure platform security.</li>
              <li>Send important notifications and updates.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-purple-300">
              4. Data Sharing and Third Parties
            </h2>
            <p className="text-gray-300 mt-2">
              We do not sell your personal information. We may share your data
              with:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
              <li>Trusted third-party service providers.</li>
              <li>
                Law enforcement agencies or regulators when legally required.
              </li>
              <li>Payment processors (only if monetary features are used).</li>
            </ul>
            <p className="text-gray-400 mt-2">
              All data shared is subject to strict confidentiality agreements.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-purple-300">
              5. International Data Transfers
            </h2>
            <p className="text-gray-300 mt-2 leading-relaxed">
              Your data may be processed and stored in data centers located
              outside your country. We ensure adequate safeguards, such as
              Standard Contractual Clauses (SCCs), are in place for
              international data transfers.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-purple-300">
              6. Your Rights
            </h2>
            <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
              <li>Access your data.</li>
              <li>Correct or update personal information.</li>
              <li>Request deletion of your data.</li>
              <li>Withdraw consent.</li>
              <li>File complaints with data protection authorities.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-purple-300">
              7. Data Retention
            </h2>
            <p className="text-gray-300 mt-2">
              We retain your data only as long as necessary for legitimate
              business and legal purposes. Inactive accounts may be deleted
              after a prolonged period of inactivity.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-purple-300">
              8. Security Measures
            </h2>
            <p className="text-gray-300 mt-2">
              We implement robust security protocols including encryption,
              firewalls, and two-factor authentication to protect your data.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-purple-300">
              9. Children’s Privacy
            </h2>
            <p className="text-gray-300 mt-2">
              Children under the minimum required age may not use Kryzox. We do
              not knowingly collect data from minors. Parents or guardians
              should contact us for data removal requests.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
