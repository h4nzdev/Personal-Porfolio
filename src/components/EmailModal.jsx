import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const EmailModal = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const serviceID = "service_50vrouu";
    const templateID = "template_299llvk";
    const publicKey = "MnJJTRsFLVayVbcMf";
    const templateForm = {
      name: form.name,
      email: form.email,
      to_name: "h4nz.dev",
      message: form.message,
    };
    emailjs
      .send(serviceID, templateID, templateForm, publicKey)
      .then(() => {
        Swal.fire({
          title: "Email Sent!",
          icon: "success",
          background: "#1e293b", // Tailwind slate-800 hex
          color: "#ffffff", // white text
          confirmButtonColor: "#3b82f6",
        });
        setForm({ name: "", email: "", message: "" });
        onClose();
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: `Failed to send email. Please try again.\n${
            error.text || error
          }`,
          icon: "error",
          background: "#1e293b", // Tailwind slate-800 hex
          color: "#ffffff", // white text
          confirmButtonColor: "#3b82f6",
        });
      })
      .finally(() => setLoading(false));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-slate-800 rounded-2xl shadow-2xl w-full max-w-md mx-4 relative border border-slate-700/50 backdrop-blur-sm">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors z-10 p-2 rounded-full hover:bg-slate-700/50"
          disabled={loading}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="p-8">
          {/* Header with gradient text */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto mb-4 bg-slate-500 rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-white">Get in Touch</h2>
            <p className="text-slate-400 mt-2">
              Send me a message and I'll get back to you soon
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name input */}
            <div className="relative group">
              <input
                type="text"
                name="name"
                placeholder=" "
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-slate-800 text-white border border-slate-700 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 peer placeholder-transparent backdrop-blur-sm"
                required
                disabled={loading}
              />
              <label className="absolute left-4 -top-2.5 text-sm text-slate-400 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-400 bg-slate-800 px-2">
                Your Name
              </label>
            </div>

            {/* Email input */}
            <div className="relative group">
              <input
                type="email"
                name="email"
                placeholder=" "
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-slate-800 text-white border border-slate-700 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 peer placeholder-transparent backdrop-blur-sm"
                required
                disabled={loading}
              />
              <label className="absolute left-4 -top-2.5 text-sm text-slate-400 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-sm bg-slate-800 peer-focus:text-blue-400 px-2">
                Email Address
              </label>
            </div>

            {/* Message textarea */}
            <div className="relative group">
              <textarea
                name="message"
                placeholder=" "
                value={form.message}
                onChange={handleChange}
                className="w-full px-4 py-3 resize-none rounded-xl bg-slate-800 text-white border border-slate-700 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 peer placeholder-transparent backdrop-blur-sm min-h-[120px]"
                required
                disabled={loading}
              />
              <label className="absolute left-4 -top-2.5 text-sm text-slate-400 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-400 bg-slate-800 px-2">
                Your Message
              </label>
            </div>

            {/* Action buttons */}
            <div className="flex gap-4 mt-8">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-6 py-3 rounded-xl bg-slate-700/50 text-slate-300 hover:bg-slate-600/50 hover:text-white transition-all duration-300 border border-slate-600 backdrop-blur-sm font-medium"
                disabled={loading}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 px-6 py-3 rounded-xl bg-blue-800 text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-blue-500/25 transform hover:scale-[1.02] disabled:transform-none disabled:hover:shadow-lg font-medium"
                disabled={loading}
              >
                {loading ? (
                  <span className="flex items-center">Sending...</span>
                ) : (
                  <span className="flex items-center">Send Message</span>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmailModal;
