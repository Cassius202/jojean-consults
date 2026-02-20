import { motion } from "motion/react";
import { solutions } from "../../assets/assets";
import type { Solution } from "../../assets/interfaces";
import SolutionsCard from "./SolutionsCard";

const Solutions = () => {
  return (
    <section id='services' className="w-full max-w-screen pt-25 max-lg:pt-15 px-3 sm:px-5 bg-white dark:bg-neutral-900 md:px-10 lg:px-20 pb-25">
      <div>
        <div className="heading flex flex-col items-center">
          <motion.h1
            className="text-2xl lg:text-3xl text-center dark:text-stone-50 font-bold max-w-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            The Perfect Solution to your Relationship issues
          </motion.h1>
          <motion.p
            className="md-contrast max-w-lg text-center mt-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          >
            Marriage counseling teaches couples to face life's challenges
          </motion.p>
        </div>

        <div className="w-full xl:px-20 flex flex-col md:grid md:grid-cols-3 mt-8 gap-4 xl:gap-6">
          {solutions.map((item: Solution, index) => (
            <SolutionsCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;