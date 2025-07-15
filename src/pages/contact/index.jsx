import { useForm, ValidationError } from "@formspree/react";
import { useEffect, useState } from "react";

export default function ContactMe() {
  const [state, handleSubmit, reset] = useForm("xldlegpy");
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setShowSuccess(true);
      const timeout = setTimeout(() => {
        setShowSuccess(false);
        reset(); // Reset Formspree form state
      }, 4000); // 4 seconds

      return () => clearTimeout(timeout);
    }
  }, [state.succeeded, reset]);

  return (
    <div className="w-full min-h-screen bg-primary dark:bg-secondary text-black dark:text-white">
      {/* Header */}
      <div
        data-aos="fade-down"
        className="flex flex-col justify-center items-center gap-2 pt-32 pb-16"
      >
        <h1 className="font-sans text-4xl md:text-6xl font-bold mb-1">
          Contact Me.
        </h1>
        <span className="border-2 border-secondary dark:border-red rounded-3xl px-4 py-2 flex items-center gap-4">
          <a href="/">Home.</a>
          <span className="w-[2px] h-4 bg-secondary dark:bg-red"></span>
          <a href="#">Contact Me.</a>
        </span>
      </div>

      {/* Let's Work */}
      <div
        data-aos="fade-up"
        className="text-center mt-10 w-full px-6 md:max-w-[70%] mx-auto"
      >
        <h3 className="relative font-light text-3xl md:text-4xl inline-block">
          Let's Work
          <span className="absolute bg-red w-20 h-[2px] -bottom-3 left-1/2 -translate-x-1/2"></span>
        </h3>
        <p className="mt-6">
          I’m always open to collaborations. Feel free to reach out!
        </p>
        <p className="mt-8">Please send a message.</p>
      </div>

      {/* Form + Illustration */}
      <div className="flex flex-col md:flex-row items-start justify-between gap-8 px-6 md:px-20 mt-20 pb-20">
        <div data-aos="slide-right" className="relative w-full md:w-1/2">
          <img
            src="/illustrator.png"
            alt="Contact Illustration"
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="w-full md:w-1/2">
          {showSuccess ? (
            <div className="fixed inset-0 bg-secondary bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white text-black dark:bg-primary dark:text-black px-8 py-10 rounded-lg shadow-lg text-center max-w-md w-full">
                <h2 className="text-2xl font-semibold mb-4">Message Sent ✅</h2>
                <p>Thanks for your message! I’ll get back to you soon.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your Name"
                className="w-full px-4 py-3 md:border-l-4 md:border-red bg-white text-secondary placeholder:text-secondary focus:outline-none focus:ring-1 focus:ring-red"
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />

              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Your Email"
                className="w-full px-4 py-3 md:border-l-4 md:border-red bg-white text-secondary placeholder:text-secondary focus:outline-none focus:ring-1 focus:ring-red"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />

              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 md:border-l-4 md:border-red bg-white text-secondary placeholder:text-secondary focus:outline-none focus:ring-1 focus:ring-red"
              />
              <ValidationError
                prefix="Subject"
                field="subject"
                errors={state.errors}
              />

              <textarea
                id="message"
                name="message"
                required
                rows="6"
                placeholder="Message"
                className="w-full px-4 py-3 md:border-l-4 md:border-red bg-white text-secondary placeholder:text-secondary focus:outline-none focus:ring-1 focus:ring-red"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />

              <button
                type="submit"
                disabled={state.submitting}
                className="bg-red text-white px-6 py-4 rounded-lg hover:bg-opacity-90 transition-all w-full self-end"
              >
                {state.submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
