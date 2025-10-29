import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import heroImage from "../assets/heroImage.jpeg";

const Hero = () => {
  const [ageString, setAgeString] = useState('');

  useEffect(() => {
    const birthDate = new Date("2002-08-22T00:00:00");

    const updateAge = () => {
      const now = new Date();
      let diff = now - birthDate;

      const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
      const ageAtLastBirthday = new Date(
        birthDate.getFullYear() + years,
        birthDate.getMonth(),
        birthDate.getDate()
      );

      let msSinceBirthday = now - ageAtLastBirthday;

      const days = Math.floor(msSinceBirthday / (1000 * 60 * 60 * 24));
      msSinceBirthday %= (1000 * 60 * 60 * 24);

      const hours = Math.floor(msSinceBirthday / (1000 * 60 * 60));
      msSinceBirthday %= (1000 * 60 * 60);

      const minutes = Math.floor(msSinceBirthday / (1000 * 60));
      msSinceBirthday %= (1000 * 60);

      const seconds = Math.floor(msSinceBirthday / 1000);
      const milliseconds = msSinceBirthday % 1000;

      const fakeNanoseconds = Math.floor(Math.random() * 1000); // 000–999

      setAgeString(
        `${years} ${days} ${hours} ${minutes} ${seconds} ${milliseconds} ${fakeNanoseconds}`
      );
    };

    updateAge();
    const interval = setInterval(updateAge, 50); // update every 50ms

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-4 pt-32 bg-white dark:bg-gray-900"
    >
      {/* Image container */}
      <motion.div
        className="flex justify-center mb-8 md:mb-0 md:order-2 md:ml-16"
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

      {/* Text content container */}
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

        {/* Button and live age */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
          <a
            href="#projects"
            className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
          >
            View My Work
          </a>
          <span className="text-sm text-blue-700 dark:text-blue-300 font-medium">
            🎂My Age: {ageString}
          </span>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
