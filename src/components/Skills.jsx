import { motion } from 'framer-motion';

export const Skills = () => {
  return (
    <motion.section 
      id="skills"
      className="py-16 px-6 max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 30 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.7 }}
    >
      <h3 className="text-2xl font-bold mb-6 text-center text-blue-600">Skills</h3>
      
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-lg font-semibold mb-2 text-gray-800">Hard Skills</h4>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>React.js, JavaScript, HTML, CSS, Tailwind CSS</li>
            <li>Node.js, Express.js, MongoDB, MySQL, API</li>
            <li>Git, MS Word, Excel, PowerPoint</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2 text-gray-800">Soft Skills</h4>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Leadership</li>
            <li>Problem Solving</li>
            <li>Public Speaking</li>
            <li>Team Work</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2 text-gray-800">Languages</h4>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Bahasa Indonesia</li>
            <li>English – TOEFL ITP Score: 440</li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
};
