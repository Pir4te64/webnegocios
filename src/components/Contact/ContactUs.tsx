import React, { useState } from "react";

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("Sending...");
    // Simulación de envío de formulario
    setTimeout(() => {
      setFormStatus("Message sent successfully.");
      setFormData({ name: "", email: "", message: "" });
    }, 2000);
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
      {/* Overlay para mejorar legibilidad */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Contenedor principal: dos cuadros (CTA y Formulario) */}
      <div className="relative z-10 max-w-md w-full mx-auto px-2 space-y-4">
        {/* Cuadro de CTA */}
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center shadow-sm">
          <h2
            className="text-xl font-bold text-white mb-1"
            style={{ textShadow: "0 0 8px rgba(255,255,255,0.8)" }}
          >
            Partner with Alta Group Miami
          </h2>
          <p className="text-xs text-white">
            Join a trusted investment group with a proven track record in securing high-value global opportunities. Whether you are an individual investor or a family office, we provide the expertise and strategic insights needed to navigate today’s complex investment landscape.
          </p>
          <h3 className="text-lg font-bold text-white mt-2">
            Contact Us Today
          </h3>
          <p className="text-xs text-white">
            Secure your next investment with the strength of U.S. compliance and global expertise.
          </p>
          <div className="mt-2">
            
            
          </div>
        </div>

        {/* Cuadro del formulario de contacto */}
        <div
          id="contact-form"
          className="bg-white/20 backdrop-blur-sm rounded-lg p-4 shadow-sm"
        >
          <h2 className="text-xl font-bold text-white text-center mb-2">
            Contact Us
          </h2>
          <form onSubmit={handleSubmit} className="space-y-2">
            <div>
              <label
                htmlFor="name"
                className="block text-white text-xs font-medium mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-1 rounded bg-white/50 text-black focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-white text-xs font-medium mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-1 rounded bg-white/50 text-black focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-white text-xs font-medium mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
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
