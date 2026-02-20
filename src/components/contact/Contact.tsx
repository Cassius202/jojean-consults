import { motion } from "framer-motion";
import { assets } from "../../assets/assets";
import { Calendar, Check, Phone, Send, User, Mail, MessageSquare, Instagram, Contact2 } from "lucide-react";
import { useState } from "react";
import NdaCheckbox from "./NdaCheckbox";
import { useThemeStore } from "../../stores/useThemeStore";
import toast from "react-hot-toast";

const Contact = () => {
  const { isDark } = useThemeStore();
  const [focused, setFocused] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const perks = [
    "NDA? No problem",
    "Response within 24 hours",
    "Free initial consultation",
  ];

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Toast Implementation
    toast.success("Thank you for contacting us", {
      duration: 4000,
      position: "bottom-right",
      // Managing theme based on useThemeStore
      style: {
        borderRadius: "12px",
        background: isDark ? "#1c1917" : "#fff", // stone-900 or white
        color: isDark ? "#fafaf9" : "#171717",   // stone-50 or neutral-900
        border: isDark ? "1px solid #292524" : "1px solid #bbb",
        fontSize: "14px",
        fontWeight: "500",
      },
      iconTheme: {
        primary: "#22c55e", // green-500 tick color
        secondary: isDark ? "#1c1917" : "#fff",
      },
    });

    setTimeout(() => setSubmitted(false), 3000);
  };

  // Base input: Colorful green-tint in light mode, stone/neutral in dark
  const inputBase =
    "w-full bg-green-50/50 dark:bg-stone-900/40 border rounded-xl px-4 py-3 pl-11 text-sm outline-none transition-all duration-200 text-neutral-800 dark:text-stone-50 placeholder:text-neutral-400 dark:placeholder:text-stone-500";
  
  // Focus: Green glow in light mode, neutral stone border in dark mode
  const inputFocused = (name: string) =>
    focused === name
      ? "border-green-500 ring-2 ring-green-500/10 dark:border-stone-500 dark:ring-stone-500/20"
      : "border-neutral-200 dark:border-stone-800 hover:border-green-300 dark:hover:border-stone-700";

  return (
    <section className="review w-full max-w-screen pt-25 max-lg:pt-15 px-3 sm:px-5 md:px-10 bg-white dark:bg-neutral-900 lg:px-20 pb-20 md:grid grid-cols-[45%_50%] gap-[5%]">
      <div className="heading flex flex-col md:items-start mb-10">
        <motion.h1
          className="text-3xl lg:text-4xl xl:text-5xl text-left max-md:text-center text-neutral-900 dark:text-stone-50 font-bold max-w-md tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          We are here to help
        </motion.h1>
        <motion.p
          className="max-w-lg text-left max-md:text-center mt-3 text-neutral-500 dark:text-stone-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        >
          Reach out via the form or through our direct channels.
        </motion.p>

        <menu className="mt-8 mb-8 flex flex-col gap-3 p-0 list-none">
          {perks.map((perk, i) => (
            <motion.li
              key={i}
              className="flex items-center gap-3 text-sm text-neutral-600 dark:text-stone-400"
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
            >
              <div className="flex-shrink-0 size-8 rounded-full bg-green-100 dark:bg-transparent flex items-center justify-center">
                <Check size={14} className="text-green-600 dark:text-stone-500" strokeWidth={3} />
              </div>
              {perk}
            </motion.li>
          ))}
        </menu>

        <motion.div
          className="bg-neutral-50 min-w-full dark:bg-stone-800/40 grid grid-cols-[40%_60%] max-sm:grid-cols-[50%_50%] p-5 rounded-2xl border border-neutral-200 dark:border-stone-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="flex flex-col max-md:flex-row max-sm:flex-col items-start max-md:items-center gap-3">
            <div className="image size-16 overflow-hidden rounded-full ring-2 ring-green-100 dark:ring-stone-700">
              <img src={assets.ceoImage} alt="Jojean" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-sm font-semibold text-neutral-900 dark:text-stone-50 leading-tight">Jojean</p>
              <p className="text-[11px] mt-1 text-green-600 dark:text-stone-500 uppercase tracking-wider font-bold dark:font-medium">Consultant</p>
            </div>
          </div>
          <div className="grid grid-rows-2 gap-y-3">
            <button className="bg-green-600 dark:bg-stone-50 text-white dark:text-neutral-900 rounded-xl px-4 py-2 flex items-center gap-3 text-sm font-semibold justify-between hover:opacity-90 transition-all">
              Call us
              <Phone size={16} />
            </button>
            <button className="bg-white dark:bg-stone-700 text-green-600 dark:text-white rounded-xl px-4 py-2 flex items-center gap-3 text-sm font-semibold justify-between hover:bg-neutral-100 dark:hover:bg-stone-600 transition-colors border border-green-200 dark:border-transparent">
              Schedule
              <Calendar size={16} />
            </button>
          </div>
        </motion.div>

        {/* Instagram: Colorful Gradient in Light, Neutral in Dark */}
        <motion.div 
          className="mt-10 w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 rounded-xl border border-neutral-200 dark:border-stone-800 hover:border-pink-300 dark:hover:bg-stone-800/30 transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className="size-10 flex items-center justify-center rounded-lg bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 dark:from-stone-800 dark:to-stone-800 text-white dark:text-stone-300 group-hover:scale-110 transition-transform">
                <Instagram size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-neutral-900 dark:text-stone-50 group-hover:text-pink-600 dark:group-hover:text-stone-50 transition-colors">Instagram</span>
                <span className="text-sm text-neutral-500 tracking-tighter">@jojean_consultings</span>
              </div>
            </div>
            <Send size={14} className="text-neutral-300 dark:text-stone-700 group-hover:text-pink-500 dark:group-hover:text-stone-50" />
          </a>
        </motion.div>
      </div>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 bg-white dark:bg-stone-950 border border-neutral-100 dark:border-stone-900 rounded-3xl p-8 shadow-xl shadow-green-900/5 dark:shadow-none self-start"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
      >
        <div className="mb-2">
          <h2 className="text-xl font-bold text-neutral-900 dark:text-stone-50">Send a message</h2>
          <p className="text-sm text-neutral-500 mt-1">We typically respond within 24 hours.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="relative">
            <User size={16} className={`absolute left-3.5 top-1/2 -translate-y-1/2 transition-colors ${focused === "name" ? "text-green-600 dark:text-white" : "text-neutral-400"}`} />
            <input
              type="text"
              name="name"
              placeholder="Full name"
              required
              className={`${inputBase} ${inputFocused("name")}`}
              onFocus={() => setFocused("name")}
              onBlur={() => setFocused(null)}
            />
          </div>
          <div className="relative">
            <Mail size={16} className={`absolute left-3.5 top-1/2 -translate-y-1/2 transition-colors ${focused === "email" ? "text-green-600 dark:text-white" : "text-neutral-400"}`} />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className={`${inputBase} ${inputFocused("email")}`}
              onFocus={() => setFocused("email")}
              onBlur={() => setFocused(null)}
            />
          </div>
        </div>

        <div className="relative">
          <Contact2 size={16} className={`absolute left-3.5 top-1/2 -translate-y-1/2 transition-colors ${focused === "subject" ? "text-green-600 dark:text-white" : "text-neutral-400"}`} />
          <input
            type="text"
            name="subject"
            placeholder="Topic of discussion"
            className={`${inputBase} ${inputFocused("subject")}`}
            onFocus={() => setFocused("subject")}
            onBlur={() => setFocused(null)}
          />
        </div>

        <div className="relative">
          <MessageSquare size={16} className={`absolute left-3.5 top-3.5 transition-colors ${focused === "message" ? "text-green-600 dark:text-white" : "text-neutral-400"}`} />
          <textarea
            name="message"
            placeholder="How can we help?"
            required
            rows={5}
            className={`${inputBase} pt-3 pb-3 resize-none ${inputFocused("message")}`}
            onFocus={() => setFocused("message")}
            onBlur={() => setFocused(null)}
          />
        </div>

        <div className="py-1">
          <NdaCheckbox />
        </div>

        <motion.button
          type="submit"
          whileTap={{ scale: 0.98 }}
          className={`mt-2 w-full flex items-center justify-center gap-2 rounded-xl py-4 px-6 font-bold text-white transition-all duration-300 ${
            submitted
              ? "bg-green-700 dark:bg-stone-600"
              : "bg-green-600 hover:bg-green-700 shadow-lg shadow-green-200 dark:bg-stone-50 dark:text-neutral-900 dark:hover:bg-white dark:shadow-none"
          }`}
        >
          {submitted ? (
            <><Check size={18} /> Message Sent</>
          ) : (
            <><Send size={16} /> Send Message</>
          )}
        </motion.button>

        <p className="text-center text-[11px] text-neutral-500 dark:text-neutral-400 uppercase tracking-widest mt-2">
          Secure & Confidential
        </p>
      </motion.form>
    </section>
  );
};

export default Contact;