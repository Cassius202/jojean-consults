import { assets, services } from "../../assets/assets";
import { BadgeCheck } from "lucide-react";
import RoundedImage from "../hero/RoundedImage";
import { motion } from "framer-motion";

const Service = () => {
  return (
    <section className="w-full mb-15 pt-20 max-lg:pt-14 px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="flex flex-col lg:grid lg:grid-cols-[40%_55%] lg:gap-[5%] items-center">

        {/* Image */}
        <motion.div
          className="w-full mx-auto max-md:hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <RoundedImage src={assets.servicesImg} alt="hero" />
        </motion.div>

        {/* Content block */}
        <div className="w-full flex flex-col gap-6 mt-6 lg:mt-0">
          <div className="flex flex-col sm:flex-col md:grid md:grid-cols-[60%_38%] md:gap-8 items-start mt-5">

            {/* Left: heading + paragraph */}
            <motion.div
              className="flex flex-col gap-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            >
              <h2 className="font-bold text-2xl lg:text-3xl text-neutral-950 dark:text-neutral-50 leading-snug">
                We offer the best services
              </h2>
              <p className="font-medium text-neutral-600 dark:text-neutral-300 lg:text-lg leading-relaxed">
                Marriage counseling teaches couples to face life's challenges
                despite personal and external limitations.
              </p>
            </motion.div>

            {/* Right: service list + button */}
            <motion.div
              className="flex flex-col gap-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <menu className="flex flex-col gap-y-3 dark:text-neutral-200 font-medium p-0 max-md:mt-4">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.08, ease: "easeOut" }}
                  >
                    <BadgeCheck className="text-green-500 shrink-0" size={20} />
                    <span className="text-neutral-800 dark:text-neutral-200">
                      {service}
                    </span>
                  </motion.div>
                ))}
              </menu>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="self-start rounded-2xl bg-gradient-to-br from-green-500 to-green-700 font-semibold text-white px-7 py-4 w-36 dark:shadow-green-900"
              >
                Book Now
              </motion.button>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;