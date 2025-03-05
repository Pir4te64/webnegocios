import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactUs: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("Sending...");

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_5nd8ff7", // Service ID
        "template_dvmfovi", // Template ID
        formRef.current, // Form Reference
        "OnFxjh96VY04mSzI3" // Public Key (User ID)
      )
      .then(
        () => {
          setFormStatus("Message sent successfully.");
          formRef.current?.reset();
        },
        (error) => {
          console.error("Email sending error:", error);
          setFormStatus("Error sending message. Try again.");
        }
      );
  };

  return (
    <section
      className="relative w-full h-screen flex items-center justify-center py-4"
      style={{
        backgroundImage: "url('/Contact.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 max-w-md w-full mx-auto px-2 space-y-4">
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center shadow-sm">
          <h2
            className="text-xl font-bold text-white mb-1"
            style={{ textShadow: "0 0 8px rgba(255,255,255,0.8)" }}
          >
            Partner with Alta Group Miami
          </h2>
          <p className="text-xs text-white">
            Join a trusted investment group with a proven track record in securing high-value global opportunities.
          </p>
          <h3 className="text-lg font-bold text-white mt-2">
            Contact Us Today
          </h3>
          <p className="text-xs text-white">
            Secure your next investment with the strength of U.S. compliance and global expertise.
          </p>
        </div>

        <div id="contact-form" className="bg-white/20 backdrop-blur-sm rounded-lg p-4 shadow-sm">
          <h2 className="text-xl font-bold text-white text-center mb-2">
            Contact Us
          </h2>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-2">
            <div>
              <label htmlFor="name" className="block text-white text-xs font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-1 rounded bg-white/50 text-black focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-white text-xs font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-1 rounded bg-white/50 text-black focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-white text-xs font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={2}
                className="w-full p-1 rounded bg-white/50 text-black focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
            <button
              type="submit"
              className="w-full py-1 bg-white text-black font-semibold rounded transition-transform transform hover:scale-105"
            >
              Send
            </button>
          </form>
          {formStatus && (
            <p className="mt-1 text-center text-white text-xs">{formStatus}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
