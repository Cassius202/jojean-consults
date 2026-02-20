import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "motion/react";

const stats = [
  { value: 500, suffix: "+", label: "Couples Helped" },
  { value: 12, suffix: "+", label: "Years Experience" },
  { value: 98, suffix: "%", label: "Success Rate" },
  { value: 50, suffix: "+", label: "Workshops Held" },
];

const StatCard = ({ value, suffix, label }: { value: number; suffix: string; label: string }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div
      ref={ref}
      className="bg-neutral-100 dark:bg-neutral-800 rounded-xl p-4 border border-neutral-200 dark:border-neutral-700 flex flex-col gap-1"
    >
      <p className="text-xl font-bold text-green-500">
        {inView ? <CountUp end={value} duration={2} suffix={suffix} /> : `0${suffix}`}
      </p>
      <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-tight">
        {label}
      </p>
    </div>
  );
};

const Stats = () => {
  return (
    <motion.div
      className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mt-2"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
    >
      {stats.map((stat) => (
        <StatCard key={stat.label} {...stat} />
      ))}
    </motion.div>
  );
};

export default Stats;