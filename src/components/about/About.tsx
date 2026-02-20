import { motion } from "motion/react"
import { assets } from "../../assets/assets"
import Stats from "./Stats"

const About = () => {
  return (
    <section id='about' className="w-full bg-white dark:bg-gray-900/40 max-w-screen pt-25 max-lg:pt-15 pt-50 px-3 sm:px-5 md:px-10 lg:px-20 pb-15">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

        {/* Image side */}
        <div
          className="relative w-full lg:w-1/2 shrink-0"
        >
          <div className="rounded-2xl overflow-hidden">
            <img
              src={assets.ceoImage}
              alt="JoJean - Marital Coach"
              className="w-full h-130 lg:h-130 object-cover"
            />
          </div>

          {/* Floating badge */}
          <motion.div
            className="absolute -bottom-5 -right-4 sm:right-6 bg-white dark:bg-neutral-800 rounded-xl px-5 py-4 shadow-lg border border-neutral-100 dark:border-neutral-700"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          >
            <p className="text-2xl font-bold text-green-500">12+</p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">Years of<br />Experience</p>
          </motion.div>
        </div>

        {/* Text side */}
        <div className="w-full lg:w-1/2 flex flex-col gap-5">
          <motion.p
            className="text-green-500 text-sm font-semibold uppercase tracking-widest"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            About JoJean
          </motion.p>

          <motion.h2
            className="text-2xl lg:text-3xl font-bold text-neutral-800 dark:text-stone-50 max-w-md leading-snug"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            A Dedicated Guide to Healing and Strengthening Marriages
          </motion.h2>

          <motion.p
            className="text-sm leading-relaxed text-neutral-500 dark:text-neutral-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          >
            JoJean is a certified marital coach and relationship therapist with over a decade of experience helping couples navigate the most difficult seasons of their marriages. Her approach is warm, non-judgmental, and deeply rooted in empathy — creating a safe space where both partners can speak freely and be truly heard.
          </motion.p>

          <motion.p
            className="text-sm leading-relaxed text-neutral-500 dark:text-neutral-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          >
            Whether you're facing communication breakdowns, trust issues, emotional distance, or simply want to build a stronger foundation, JoJean equips couples with practical tools and renewed perspectives that last far beyond the session room.
          </motion.p>

          {/* Divider */}
          <motion.div
            className="w-12 h-1 rounded-full bg-green-500 mt-1"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.35, ease: "easeOut" }}
            style={{ originX: 0 }}
          />

          {/* stats part  */}
          <Stats />
          {/* CTA */}
          <motion.div
            className="flex items-center gap-4 mt-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
          >
            <button className="bg-green-500 hover:bg-green-600 active:scale-95 transition-all duration-200 text-white text-sm font-semibold px-6 py-3 rounded-lg">
              Book a Session
            </button>
            <button className="text-sm font-semibold text-neutral-600 dark:text-neutral-300 hover:text-green-500 dark:hover:text-green-400 transition-colors duration-200 underline underline-offset-4">
              Learn More
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About