import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const images = [
  '/certificate/cer1.jpg',
  '/certificate/cer2.jpg',
  '/certificate/cer3.jpg',
  '/certificate/cer4.jpg',
  '/certificate/cer5.jpg',
  '/certificate/cer6.jpg',
  '/certificate/cer7.jpg',
].map((path) => `${process.env.PUBLIC_URL}${path}`);

export const About = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [current]);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <motion.section
      id="about"
      className="py-16 px-6 max-w-6xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <h3 className="text-2xl font-bold mb-8 text-center text-blue-600">
        About Me
      </h3>
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="md:w-1/2 text-justify">
          <p className="text-gray-700 leading-relaxed">
          A fresh graduate with a Bachelor's degree in Computer Science from Tanjungpura University. I have a strong interest in Web Development, Data Analyst and Social Activities. Passionate MERN Stack Web Developer with a flair for creating seamless, user-centric web applications. Committed to delivering innovative solutions and staying abreast of the latest industry trends. I am proficient in computer operations and can work effectively both independently and as part of a team. I am eager to apply my skills and knowledge to contribute to a dynamic work environment.
          </p>
        </div>
        <div className="md:w-1/2 rounded-xl overflow-hidden shadow-lg relative">
          <motion.img
            key={images[current]}
            src={images[current]}
            alt={`Certificate ${current + 1}`}
            className="w-full h-64 object-cover rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          />
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 text-blue-600 font-bold py-1 px-2 rounded shadow"
          >
            ⬅
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 text-blue-600 font-bold py-1 px-2 rounded shadow"
          >
            ➡
          </button>
        </div>
      </div>
    </motion.section>
  );
};
