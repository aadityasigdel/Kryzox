import React from "react";

const CountryComplianceMatrix = () => {
  const complianceData = [
    { country: "EU", regulations: "GDPR, ePrivacy Directive" },
    { country: "USA (California)", regulations: "CCPA, COPPA, CAN-SPAM" },
    { country: "Canada", regulations: "PIPEDA" },
    { country: "Brazil", regulations: "LGPD" },
    { country: "UK", regulations: "UK GDPR, Online Safety Act" },
    { country: "India", regulations: "IT Act, DPDP Act 2023" },
    { country: "China", regulations: "PIPL, Cybersecurity Law" },
    { country: "Australia", regulations: "Privacy Act 1988, Spam Act" },
    {
      country: "Nepal",
      regulations: "Electronic Transactions Act, Consumer Laws",
    },
    { country: "South Africa", regulations: "POPIA" },
    { country: "UAE", regulations: "Cybercrime Law, Telecom Law" },
    { country: "Singapore", regulations: "PDPA" },
    { country: "Thailand", regulations: "PDPA" },
    {
      country: "Latin America",
      regulations: "Localized digital laws per country",
    },
    {
      country: "Others",
      regulations: "ISO/IEC 27001 standards applied where possible",
    },
  ];

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
            Country-Specific Compliance Matrix
          </span>
        </h1>
        <p className="text-sm text-center text-gray-400 mb-12">
          Last Updated: [Insert Update Date]
        </p>

        {/* Table */}
        <section className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="px-4 py-2 text-gray-300 text-lg font-semibold">
                  Country/Region
                </th>
                <th className="px-4 py-2 text-gray-300 text-lg font-semibold">
                  Applicable Regulations
                </th>
              </tr>
            </thead>
            <tbody>
              {complianceData.map((item, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-[#241B3A]" : "bg-[#1B1233]"}
                >
                  <td className="px-4 py-2 text-gray-300">{item.country}</td>
                  <td className="px-4 py-2 text-gray-300">
                    {item.regulations}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <div className="mt-8">
          <p className="text-gray-300 leading-relaxed">
            Users are advised to check with their local authority or seek legal
            counsel if unsure about compliance.
          </p>
          <p className="text-gray-300 leading-relaxed mt-2">
            For legal or regulatory questions, please contact:{" "}
            <span className="text-purple-300">kryzox@gmail.com</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountryComplianceMatrix;
