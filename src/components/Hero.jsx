import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <motion.section 
      className="relative h-[80vh] flex items-center justify-center text-center bg-cover bg-[center_25%] bg-no-repeat"
      // style={{ backgroundImage: `url('/profile.jpg')` }}
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/profile.jpg)` }}
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />
      <div className="relative z-10 text-white px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Hadiyan Fahmi Hariyadi</h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          <br />
          Fresh Graduate in Computer Science | MERN Stack Developer
        </p>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
           Web, Data & Social Enthusiast
        </p>
      </div>
    </motion.section>
  );
};
