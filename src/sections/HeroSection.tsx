import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, when: "beforeChildren" },
  },
};

const fade = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 1, ease: "easeInOut" as const },
  },
};

const slide = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: "easeInOut" as const },
  },
};

function HeroSection() {
  return (
    <motion.section
      className="p-10 pb-0"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.p className="text-secondary" variants={fade}>
        Hello, I'm <span className="text-accent">Lead Data Scientist</span>
      </motion.p>
      <motion.h1
        className="mt-4 text-5xl md:text-6xl font-extrabold leading-tight"
        variants={slide}
      >
        Senior Data Engineer and
        <span className="mx-2 inline-block rounded-full bg-accent px-3 py-1 text-accent-secondary">
          Data Scientist
        </span>
        Based in
      </motion.h1>
      <motion.h2
        className="text-5xl md:text-6xl font-extrabold"
        variants={slide}
      >
        California, Los Angeles.
      </motion.h2>

      <motion.p className="mt-6 max-w-2xl text-tertiary" variants={slide}>
        Have worked in a variety of positions, including key developer, solution
        designer, and data architect. Strong engineering background combined
        with closely working with business customers.
      </motion.p>
    </motion.section>
  );
}

export default HeroSection;
