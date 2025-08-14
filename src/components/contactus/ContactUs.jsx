import React, { useRef, useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactUsForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [state, handleSubmit] = useForm("xjkoavnb");
  const formRef = useRef(null);

  // Clear form fields on success
  useEffect(() => {
    if (state.succeeded && formRef.current) {
      formRef.current.reset();
      setIsSuccess(true);
      const timer=setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
      return ()=>clearTimeout(timer);
    }
  }, [state.succeeded]);

  return (
    <div className="w-full bg-[#241B3A] py-16" id="contactUs">
      {/* Heading */}
      <section className="max-w-2xl m-auto px-4">
        <h1 className="text-4xl font-semibold text-[#BA5CE2] pb-5 md:text-6xl lg:text-6xl md:text-left">
          <span
            className="text-transparent bg-clip-text"
            style={{
              background: "linear-gradient(45deg, #c84de5, #79a5d5, #5e41a1)",
              WebkitBackgroundClip: "text",
            }}
          >
            Get in touch
          </span>
        </h1>
        <p className="text-[14px] pt-5 inline text-[#d9cbcb] md:text-[20px]">
          Have a question before joining the battle? Send us a message — our
          team is ready to respond faster than a respawn timer.
        </p>
      </section>

      {/* Success message */}
      {(state.succeeded && isSuccess) && (
        <p className="text-center text-lg font-semibold text-green-400 mt-8">
          ✅ Message sent successfully! We’ll get back to you soon.
        </p>
      )}

      {/* Form */}
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto mt-8 bg-[#241B3A] p-10 rounded-3xl shadow-lg border border-purple-500/20 space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-purple-300">
          Contact Us
        </h2>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-purple-200 mb-2"
          >
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className="w-full px-4 py-3 bg-[#1B1230] border border-purple-500/30 rounded-xl text-white placeholder-purple-400 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all"
            placeholder="you@example.com"
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            className="text-red-400 text-sm mt-1"
          />
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-purple-200 mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            required
            className="w-full px-4 py-3 bg-[#1B1230] border border-purple-500/30 rounded-xl text-white placeholder-purple-400 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all"
            placeholder="Write your message..."
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
            className="text-red-400 text-sm mt-1"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={state.submitting}
          className="w-full py-3 text-white font-semibold rounded-xl shadow-lg transition-all duration-500 bg-[length:200%_100%] hover:bg-[position:100%_0]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #c84de5, #79a5d5, #5e41a1)",
          }}
        >
          {state.submitting ? "Sending..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default ContactUsForm;
