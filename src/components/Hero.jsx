import { motion } from 'framer-motion';
import heroImage from "../assets/heroImage.jpg"; // adjust if needed

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-4 pt-32 bg-white dark:bg-gray-900"
    >
      {/* Image container - top on mobile, right on desktop */}
      <motion.div
        className="flex justify-center mb-8 md:mb-0 md:order-2 md:ml-16" // Order and margin for desktop
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <img
          src={heroImage}
          alt="Sathi"
          className="rounded-full w-64 h-64 object-cover border-4 border-blue-600 shadow-lg"
        />
      </motion.div>

      {/* Text content container - below image on mobile, left on desktop */}
      <motion.div
        className="text-center md:text-left md:w-1/2 space-y-4"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
          Hello, I'm Sathi 👋
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          A passionate Frontend Developer crafting modern, responsive websites with React & Tailwind CSS.
        </p>
        <a
          href="#projects"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
        >
          View My Work
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;