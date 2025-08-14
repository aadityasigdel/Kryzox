import NavBar from "../../Navbar/NavBar";
import Footer from "../Footer";

export const LegalCompliance = () => {
  const addendums = [
    {
      flag: "🇪🇺",
      country: "European Union (EU)",
      laws: "GDPR, ePrivacy Directive, Digital Services Act",
      points: [
        "Data transfers must use Standard Contractual Clauses (SCCs) when outside the EU.",
        "Cookie usage requires opt-in consent via a compliant banner.",
        "Age of digital consent varies (13–16), default is 16.",
        "Users have rights to access, rectify, delete, restrict processing, and object to profiling.",
      ],
    },
    {
      flag: "🇺🇸",
      country: "United States",
      laws: "CCPA (California), COPPA, CAN-SPAM Act",
      points: [
        "California residents can opt out of the sale/sharing of personal data.",
        "COPPA restricts data collection from children under 13.",
        "Users can access collected data upon request.",
        "Kryzox honors browser Do Not Track (DNT) settings.",
      ],
    },
    {
      flag: "🇮🇳",
      country: "India",
      laws: "IT Act 2000, Digital Personal Data Protection Act (DPDP) 2023",
      points: [
        "Consent must be informed, specific, and freely given.",
        "Sensitive personal data may require local storage.",
        "Grievance Officer required (contact: kryzox@gmail.com).",
        "Breaches must be reported to CERT-In within 6 hours.",
      ],
    },
    {
      flag: "🇨🇦",
      country: "Canada",
      laws: "PIPEDA",
      points: [
        "Users must be informed about purposes for data use.",
        "Must allow access, correction, and deletion of personal information.",
        "Data retention limited to the original purpose.",
      ],
    },
    {
      flag: "🇧🇷",
      country: "Brazil",
      laws: "LGPD",
      points: [
        "Requires legal bases (e.g., consent, contract) for data processing.",
        "Rights include access, correction, deletion, and anonymization.",
        "Local DPO or representative may be needed.",
      ],
    },
    {
      flag: "🇬🇧",
      country: "United Kingdom",
      laws: "UK GDPR, Data Protection Act 2018, Online Safety Act",
      points: [
        "Must ensure data safety for users under 18.",
        "Must document and prove GDPR compliance.",
        "Cookie consent and data rights mirror the EU model.",
      ],
    },
    {
      flag: "🇳🇵",
      country: "Nepal",
      laws: "Electronic Transactions Act, Consumer Protection Act",
      points: [
        "Users must be 18+ for financial features.",
        "Users must be notified how their data is collected and stored.",
        "Breaches must be reported to Nepal Police Cyber Bureau.",
      ],
    },
    {
      flag: "🇿🇦",
      country: "South Africa",
      laws: "POPIA",
      points: [
        "Consent is required for collecting personal data.",
        "Users have the right to be informed about the collection and purpose of their data.",
        "An Information Officer must be designated.",
      ],
    },
    {
      flag: "🇸🇬",
      country: "Singapore",
      laws: "PDPA",
      points: [
        "Consent is the main basis, but exceptions include legitimate interests.",
        "Users can request data portability to other providers.",
      ],
    },
    {
      flag: "🇦🇺",
      country: "Australia",
      laws: "Privacy Act 1988, Spam Act",
      points: [
        "Privacy notices must disclose the nature and use of data collection.",
        "Eligible data breaches must be reported to the Office of the Australian Information Commissioner (OAIC).",
      ],
    },
    {
      flag: "🇷🇺",
      country: "Russia",
      laws: "Federal Law on Personal Data",
      points: [
        "All personal data of Russian citizens must be stored on servers located in Russia.",
        "Cross-border data transfers require user consent and regulator approval.",
      ],
    },
    {
      flag: "🇦🇪",
      country: "United Arab Emirates",
      laws: "Federal Data Protection Law (2021), Cybercrime Law",
      points: [
        "Explicit consent required for processing data.",
        "Content must not violate local religious or cultural sensitivities.",
        "Prohibited to host, promote, or share content deemed immoral or blasphemous.",
      ],
    },
    {
      flag: "🇹🇭",
      country: "Thailand",
      laws: "Personal Data Protection Act (PDPA)",
      points: [
        "Users must be informed before data is collected.",
        "Consent must be freely given, specific, informed, and unambiguous.",
        "Users have rights to access, delete, and correct personal data.",
      ],
    },
    {
      flag: "🌎",
      country: "Other Jurisdictions",
      laws: "",
      points: [
        "Kryzox applies global best practices in data protection and digital law compliance.",
        "Where national laws exist, they will be honored.",
        "Where absent, we defer to GDPR-equivalent standards.",
        "For questions about your country’s compliance details, email kryzox@gmail.com.",
      ],
    },
  ];

  return (
    <div className="h-auto w-auto flex flex-col">
      <NavBar />
      
      <div className="h-full bg-[#241B3A] md:pt-[80px] flex-1">
      <section
      className="bg-[#1B1230] border border-purple-500/30 rounded-xl  p-5 mx-auto my-10 text-gray-500"
        style={{
          maxWidth: 900,
        }}
      >
        <h1 className="text-4xl font-semibold text-[#BA5CE2] pt-14 md:pt-0 pb-10 md:text-left">
          <span
            className="text-transparent bg-clip-text"
            style={{
              background: "linear-gradient(45deg, #c84de5, #79a5d5, #5e41a1)",
              WebkitBackgroundClip: "text",
            }}
          >
            🌐 Country-Specific Legal Addendums
          </span>
          </h1>
        <p
          style={{
            fontSize: "1.1rem",
            lineHeight: 1.6,
            marginBottom: "2rem",
            color: "#c0b7f2",
          }}
        >
          These addendums supplement our global Terms and Privacy Policy by
          addressing specific laws and regulations in the countries and regions
          where Kryzox operates or is accessed. We are committed to maintaining
          the highest standards of legal compliance worldwide.
        </p>

        {addendums.map(({ flag, country, laws, points }) => (
          <article
            key={country}
            style={{
              marginBottom: "2.5rem",
              borderBottom: "1px solid #3b2c70",
              paddingBottom: "1.5rem",
            }}
          >
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "600",
                color: "#d1c4e9",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <span>{flag}</span> {country}
            </h3>
            {laws && (
              <p
                style={{
                  fontSize: "1rem",
                  fontStyle: "italic",
                  color: "#a296c7",
                  marginBottom: "0.8rem",
                }}
              >
                Applicable Laws: {laws}
              </p>
            )}
            <ul
              style={{
                listStyleType: "disc",
                paddingLeft: "1.5rem",
                color: "#e6e1f5",
                lineHeight: 1.5,
              }}
            >
              {points.map((point, i) => (
                <li key={i} style={{ marginBottom: "0.5rem" }}>
                  {point}
                </li>
              ))}
            </ul>
          </article>
        ))}

        <footer
          style={{
            marginTop: "3rem",
            fontSize: "0.9rem",
            color: "#8a7bc9",
          }}
        >
          For any country-specific legal inquiries or compliance questions,
          please contact us at{" "}
          <a
            href="mailto:kryzox@gmail.com"
            style={{ color: "#c299ff", textDecoration: "underline" }}
          >
            kryzox@gmail.com
          </a>
          .
        </footer>
      </section>
      </div>
      <Footer />
    </div>
  );
};
export default LegalCompliance;
