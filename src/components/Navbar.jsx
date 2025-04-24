import { motion } from 'framer-motion';

export const Navbar = () => {
  return (
    <motion.nav 
      className="p-4 md:px-8 flex justify-between items-center shadow-md sticky top-0 bg-white z-50"
      initial={{ y: -20, opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Kiri: Foto + Nama */}
      <div className="flex items-center gap-3">
        <img 
          src="/profile2.jpg" 
          alt="Hadiyan" 
          className="w-8 h-8 rounded-full object-cover border border-blue-500 shadow"
        />
        <h1 className="text-xl font-bold text-blue-600">Hadiyan FH</h1>
      </div>

      {/* Kanan: Menu navigasi */}
      <div className="space-x-4 hidden md:block">
        <a href="#about" className="hover:text-blue-500 font-medium">About</a>
        <a href="#projects" className="hover:text-blue-500 font-medium">Experiences</a>
        <a href="#skills" className="hover:text-blue-500 font-medium">Skills</a>
        <a href="#contact" className="hover:text-blue-500 font-medium">Contacts</a>
      </div>
    </motion.nav>
  );
};
