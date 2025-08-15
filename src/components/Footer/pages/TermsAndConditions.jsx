
import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="bg-[#1B1233] text-white px-6 md:px-16 lg:px-32 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
          Terms and Conditions
        </h1>
        <div className="text-sm text-center text-gray-400 mb-12 space-y-1">
          <p>
            <strong>Effective Date:</strong> [Insert Launch Date]
          </p>
          <p>
            <strong>Last Updated:</strong> [Insert Update Date]
          </p>
          <p>
            <strong>Website:</strong> www.kryzox.com
          </p>
          <p>
            <strong>Contact Email:</strong> kryzox@gmail.com
          </p>
        </div>

        {/* Sections */}
        <section className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-purple-300">1. Introduction</h2>
            <p className="text-gray-300 mt-2 leading-relaxed">
              Welcome to Kryzox. These Terms and Conditions (“Terms”) govern your access to and use of
              our mobile and web application, including all associated services, features, tools, and
              content (collectively, the “Service”). By using the Kryzox platform, you agree to be
              legally bound by these Terms. If you do not agree with any part of these Terms, you must
              not use our services.
            </p>
            <p className="text-gray-300 mt-2">
              These Terms apply to all users globally, and specific provisions may apply to users
              depending on their country of residence or legal jurisdiction.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-purple-300">2. Eligibility</h2>
            <p className="text-gray-300 mt-2 leading-relaxed">
              You must be at least 13 years old to use the basic features of Kryzox. For certain
              features such as tournaments, cash-based competitions, and social features, the minimum
              age may be 16 or 18, depending on local law. You are responsible for ensuring that your
              use of Kryzox complies with local laws in your country, including any applicable age
              restrictions.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-purple-300">3. Account Registration</h2>
            <p className="text-gray-300 mt-2 leading-relaxed">
              To access certain features, you must create an account. When creating your account, you
              must provide accurate, complete, and current information. Failure to do so may result in
              suspension or termination of your account. You are solely responsible for maintaining the
              confidentiality of your account credentials and for all activities that occur under your
              account.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-purple-300">4. User Responsibilities</h2>
            <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
              <li>Use the Service only for lawful purposes.</li>
              <li>Abide by all applicable national and international laws.</li>
              <li>
                Do not upload or share content that is defamatory, harassing, threatening,
                pornographic, or illegal in nature.
              </li>
              <li>Do not attempt to hack, reverse-engineer, or disrupt our services or servers.</li>
              <li>Do not impersonate any individual or entity.</li>
              <li>
                Do not use automated software or bots to interact with the Service without prior
                permission.
              </li>
            </ul>
            <p className="text-gray-400 mt-2">
              Violation of these responsibilities may result in account termination and possible legal
              action.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-purple-300">5. Intellectual Property</h2>
            <p className="text-gray-300 mt-2 leading-relaxed">
              All materials and content on Kryzox, including logos, software, graphics, texts, icons,
              and trademarks, are owned by Kryzox or its licensors. You are granted a limited,
              non-exclusive, non-transferable license to access and use the Service solely for
              personal, non-commercial use. You may not reproduce, distribute, or create derivative
              works without explicit written permission from Kryzox.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-purple-300">6. Global Legal Compliance</h2>
            <p className="text-gray-300 mt-2">
              We are committed to complying with data protection, digital rights, and service operation
              laws in all regions we operate, including but not limited to:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
              <li>European Union – General Data Protection Regulation (GDPR)</li>
              <li>United States – California Consumer Privacy Act (CCPA), Children’s Online Privacy Protection Act (COPPA)</li>
              <li>India – Information Technology Act, Digital Personal Data Protection Bill</li>
              <li>Brazil – Lei Geral de Proteção de Dados (LGPD)</li>
              <li>Canada – Personal Information Protection and Electronic Documents Act (PIPEDA)</li>
              <li>China – Personal Information Protection Law (PIPL)</li>
              <li>United Kingdom – UK GDPR, Data Protection Act 2018</li>
              <li>Australia – Privacy Act 1988</li>
              <li>Nepal – Electronic Transactions Act, Consumer Protection Law</li>
              <li>South Africa – Protection of Personal Information Act (POPIA)</li>
              <li>Other Jurisdictions – Relevant local e-commerce, digital content, and privacy regulations</li>
            </ul>
            <p className="text-gray-400 mt-2">
              It is your responsibility as a user to comply with the laws of your country when using
              our Service.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-purple-300">7. Termination</h2>
            <p className="text-gray-300 mt-2 leading-relaxed">
              Kryzox reserves the right to terminate or suspend your account at our discretion without
              prior notice if we believe you have violated any of the Terms, applicable laws, or
              engaged in fraudulent, abusive, or harmful behavior. You may terminate your account at
              any time by contacting kryzox@gmail.com.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-purple-300">8. Dispute Resolution</h2>
            <p className="text-gray-300 mt-2 leading-relaxed">
              Any legal disputes related to these Terms will be resolved based on the governing law of
              your place of residence, unless otherwise agreed upon. If permitted by law, disputes may
              be resolved via arbitration or mediation.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
