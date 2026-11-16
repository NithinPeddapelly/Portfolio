import { useState } from "react";
import emailjs from "@emailjs/browser";
import resumePDF from "../assets/Nithin_Peddapelly_Resume.pdf";
import { Linkedin, Github, Send, MapPin, FileText } from "lucide-react";
import { Zone, Float } from "./ui/Zone";
import { profile } from "../data/profile";

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
        "Thanks for reaching out! You’ll receive an acknowledgment shortly. Please check your inbox (and spam) - I reply to every message."
      );
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      alert("Failed to send message. Please try again later.");
      console.error("EmailJS error:", error);
    }
  };

  const field = "mt-1 w-full rounded-md border border-white/20 bg-black px-3 py-2 text-sm text-ink outline-none focus:border-acid";
  return (
    <Zone id="contact" height="max(860px, 100vh)">
      <Float speed={0.5}><h2 className="font-display text-5xl font-extrabold md:text-7xl">Contact<span className="text-acid">.</span></h2></Float>
      <Float calm sticky className="w-full md:w-96">
        <form onSubmit={handleSubmit} className="float-card space-y-3">
          <p className="font-mono text-xs text-acid">// send a signal</p>
          <label className="block text-sm">Name<input name="name" value={formData.name} onChange={handleChange} required className={field} /></label>
          <label className="block text-sm">Email<input name="email" type="email" value={formData.email} onChange={handleChange} required className={field} /></label>
          <label className="block text-sm">Message<textarea name="message" rows={4} value={formData.message} onChange={handleChange} required className={field} /></label>
          <button type="submit" className="float-pill flex items-center gap-2"><Send size={16} />Send</button>
        </form>
      </Float>
      <Float><a href={profile.github} target="_blank" rel="noopener noreferrer" className="float-pill ghost flex items-center gap-2"><Github size={16} />GitHub</a></Float>
      <Float><a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="float-pill ghost flex items-center gap-2"><Linkedin size={16} />LinkedIn</a></Float>
      <Float><a href={resumePDF} download="Nithin_Peddapelly_Resume.pdf" className="float-pill flex items-center gap-2"><FileText size={16} />Resume</a></Float>
      <Float><div className="float-card flex items-center gap-2 text-sm"><MapPin size={16} className="text-acid" />{profile.location}</div></Float>
    </Zone>
  );
}

export default Contact;
