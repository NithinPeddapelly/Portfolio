import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import resumePDF from "../assets/Nithin_Peddapelly_2025_new.pdf";
import { Mail, Linkedin, Github, Send, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      };

      console.log("Sending params:", templateParams); // debug log

      await emailjs.send(
        "service_nithin", // Service ID
        "template_myb433e", // Template ID
        templateParams, // Variables for template
        "ZNJRqEfJwnYNEqo6R" // Public Key
      );

      alert(
        "You will receive an acknowledgment shortly — please check your spam folder if not visible!"
      );
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      alert("Failed to send message. Please try again later.");
      console.error("EmailJS error:", error);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Let's Build Something{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">
              Amazing
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it and discuss how we
            can bring your ideas to life.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-6">
              Send me a message{" "}
              <span className="block text-sm font-normal text-slate-400 mt-1">
                (This form actually works — you’ll always get a reply!)
              </span>
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 text-slate-300"
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
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-white placeholder-slate-400 backdrop-blur-sm"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 text-slate-300"
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
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-white placeholder-slate-400 backdrop-blur-sm"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 text-slate-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-white placeholder-slate-400 backdrop-blur-sm resize-none"
                  placeholder="Tell me about your project or just say hi!"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/25 transform hover:-translate-y-1 flex items-center justify-center gap-2 group"
              >
                <Send className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6">Get in touch</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-r from-teal-500 to-blue-600 p-3 rounded-lg">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-slate-300 text-sm">Email</p>
                    <p className="font-medium">nithinpeddapelly@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-3 rounded-lg">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-slate-300 text-sm">Location</p>
                    <p className="font-medium">
                      Hyderabad,Telangana , India | Available for Reallocation &
                      Remote Work{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6">Connect with me</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/NithinPeddapelly"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-slate-800/50 hover:bg-slate-700 p-4 rounded-lg transition-all duration-300 hover:scale-105 group text-center"
                >
                  <Github className="w-8 h-8 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <p className="font-medium">GitHub</p>
                  <p className="text-sm text-slate-400">View my code</p>
                </a>

                <a
                  href="https://www.linkedin.com/in/nithinpeddapelly/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-blue-600/50 hover:bg-blue-600 p-4 rounded-lg transition-all duration-300 hover:scale-105 group text-center"
                >
                  <Linkedin className="w-8 h-8 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <p className="font-medium">LinkedIn</p>
                  <p className="text-sm text-slate-400">Let's connect</p>
                </a>
              </div>
            </div>

            {/* Download Resume Button */}
            <div className="bg-gradient-to-r from-teal-500/20 to-blue-600/20 border border-teal-500/30 rounded-2xl p-6 flex flex-col items-center justify-center">
              <h4 className="font-bold mb-4 flex items-center gap-2 text-lg">
                <span className="animate-pulse"></span> My Resume
              </h4>
              <a
                href={resumePDF}
                download="Nithin_Peddapelly_Resume.pdf"
                className="inline-block bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-teal-500/25 text-lg"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-white/10 mt-20 pt-8">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-slate-400">
              © 2025 Nithin. Built with passion, React, and lots of coffee ☕
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
