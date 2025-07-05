const Feature3 = () => {
  return (
    <div
      className="relative w-full text-center py-20 bg-[#07060a] overflow-hidden border-b"
      style={{ borderColor: "rgba(200, 77, 229, 0.3)" }}
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(200, 77, 229, 0.2), rgba(121, 165, 213, 0.2), rgba(132, 20, 124, 0.2))",
          }}
        ></div>
        <div
          className="absolute top-0 left-1/4 h-60 w-60 md:w-96 md:h-96 rounded-full blur-3xl animate-pulse"
          style={{ backgroundColor: "rgba(200, 77, 229, 0.1)" }}
        ></div>
        <div
          className="absolute bottom-0 right-1/4 h-60 w-60 md:w-96 md:h-96 rounded-full blur-3xl animate-pulse"
          style={{
            backgroundColor: "rgba(121, 165, 213, 0.1)",
            animationDelay: "1s",
          }}
        ></div>
      </div>

      <section className="max-w-[600px]  m-auto mb-5">
        <h1 className="text-4xl  font-semibold text-[#BA5CE2] pb-5  md:text-6xl lg:text-6xl md:text-left">
          <span
            className="text-transparent bg-clip-text"
            style={{
              background: "linear-gradient(45deg, #c84de5, #79a5d5, #5e41a1)",
              WebkitBackgroundClip: "text",
            }}
          >
            Ready to Dominate?
          </span>
        </h1>
        <p className=" text-[18px] inline text-[#d9cbcb] md:text-[25px]">
          Join millions of gamers and experience the future of competitive
          gaming with KRYZOX.
        </p>
      </section>
      {/* buttons */}
      <section className="flex flex-wrap gap-5 text-lg pt-8 justify-center items-center font-semibold ">
        <button
          className="group relative px-12 py-4 rounded-xl font-bold text-xl transition-all duration-300 hover:scale-110 hover:shadow-xl"
          style={{
            background: "linear-gradient(to right, #c84de5, #79a5d5, #5e41a1)",
            boxShadow: "0 0 30px rgba(200, 77, 229, 0.3)",
          }}
        >
          <span className="relative z-10 text-white">Join KRYZOX</span>
          <div
            className="absolute inset-0 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background:
                "linear-gradient(to right, #c84de5, #79a5d5, #5e41a1)",
            }}
          ></div>
        </button>
        <button
          className="group relative px-12 py-4 border-2 rounded-xl font-bold text-xl transition-all duration-300 hover:scale-110 hover:shadow-xl"
          style={{
            borderColor: "#c84de5",
            color: "#c84de5",
          }}
        >
          <span className="group-hover:text-white transition-colors duration-300">
            Download Free
          </span>
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
            style={{ backgroundColor: "rgba(200, 77, 229, 0.1)" }}
          ></div>
        </button>
      </section>
      {/* detail section */}
      <section className=" max-w-4xl mx-auto grid grid-cols-2 text-[#c4bfbf] mt-10 leading-8 md:grid-cols-4 gap-y-5 text-center">
        <div>
          <div
            className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text mb-2"
            style={{
              background: "linear-gradient(to right, #79a5d5, #c84de5)",
              WebkitBackgroundClip: "text",
            }}
          >
            50M+
          </div>
          <div className="text-gray-400">Active Players</div>
        </div>
        <div>
          <div
            className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text mb-2"
            style={{
              background: "linear-gradient(to right, #c84de5, #84147c)",
              WebkitBackgroundClip: "text",
            }}
          >
            1000+
          </div>
          <div className="text-gray-400">Pro Teams</div>
        </div>
        <div>
          <div
            className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text mb-2"
            style={{
              background: "linear-gradient(to right, #5e41a1, #4b1670)",
              WebkitBackgroundClip: "text",
            }}
          >
            24/7
          </div>
          <div className="text-gray-400">Support</div>
        </div>
        <div>
          <div
            className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text mb-2"
            style={{
              background: "linear-gradient(to right, #c84de5, #79a5d5)",
              WebkitBackgroundClip: "text",
            }}
          >
            99.9%
          </div>
          <div className="text-gray-400">Uptime</div>
        </div>
      </section>
    </div>
  );
};

export default Feature3;
