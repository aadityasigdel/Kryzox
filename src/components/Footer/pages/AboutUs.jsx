import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-[#1B1233] text-white px-6 md:px-16 lg:px-32 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
          About Us
        </h1>
        <p className="text-sm text-center text-gray-400 mb-12">
          Last Updated: [Insert Update Date]
        </p>

        {/* Content */}
        <section className="space-y-8">
          <div>
            <p className="text-gray-300 leading-relaxed text-base">
              <strong>Kryzox</strong> is a cutting-edge digital platform built
              for global gamers and vibrant social communities. We provide a
              seamless space where players can connect, compete, and collaborate
              in exciting ways.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-purple-300">
              Our Platform Offers:
            </h2>
            <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2 text-base">
              <li>
                <strong>Custom Rooms:</strong> Create private matches with your
                own rules.
              </li>
              <li>
                <strong>1v1 Challenges:</strong> Compete head-to-head and
                showcase your skills.
              </li>
              <li>
                <strong>Tournaments & Rankings:</strong> Climb the leaderboards
                and earn recognition.
              </li>
              <li>
                <strong>In-App Social Interactions:</strong> Chat, share, and
                engage with fellow players.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-purple-300">
              Our Vision:
            </h2>
            <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2 text-base">
              <li>
                Deliver an <strong>accessible, fair, and competitive</strong>{" "}
                digital arena for all.
              </li>
              <li>
                Safeguard <strong>user privacy</strong> and maintain strong{" "}
                <strong>data security</strong> measures.
              </li>
              <li>
                <strong>Empower gaming communities</strong> with innovative,
                robust tools.
              </li>
              <li>
                Continuously <strong>evolve and improve</strong> based on
                community feedback.
              </li>
            </ul>
          </div>

          <div className="border-t border-gray-700 pt-6 space-y-2 text-base text-gray-300">
            <p>
              <strong>Headquarters:</strong> [Insert Country]
            </p>
            <p>
              <strong>Contact Email:</strong>{" "}
              <a
                href="mailto:kryzox@gmail.com"
                className="text-purple-400 hover:underline"
              >
                kryzox@gmail.com
              </a>
            </p>
            <p>
              <strong>Website:</strong>{" "}
              <a
                href="http://www.kryzox.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:underline"
              >
                www.kryzox.com
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
