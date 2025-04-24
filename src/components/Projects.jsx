import { motion } from 'framer-motion';

const projects = [
  {
    title: "Front End Developer – PT Abbauf Tech",
    duration: "Aug 2022 – Dec 2022",
    description: `Developed WebGIS using JavaScript. Conducted testing, documented UAT (User Acceptance Testing), 
      and ensured responsive design and cross-browser compatibility. Participated in daily scrum and 
      contributed to system deployment.`,
    technologies: "JavaScript, WebGIS, Scrum, UAT, Responsive Design",
  },
  {
    title: "Staff of Cadre Division – Himpunan Rekayasa Sistem Komputer",
    duration: "2020 – 2021",
    description: `Facilitated student character development and leadership training. Organized orientation 
      events and social responsibility programs. Collaborated with other divisions to foster teamwork 
      and student growth.`,
    technologies: "Leadership, Event Management, Teamwork, Public Speaking",
  },
];

export const Projects = () => {
  return (
    <motion.section 
      id="projects"
      className="py-16 px-6 bg-gray-100"
      initial={{ opacity: 0, y: 30 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.7 }}
    >
      <h3 className="text-2xl font-bold mb-8 text-center text-blue-600">Experiences</h3>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((proj, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow-md">
            <h4 className="text-xl font-semibold mb-1">{proj.title}</h4>
            <p className="text-sm text-gray-500 mb-2">{proj.duration}</p>
            <p className="text-gray-700 mb-2">{proj.description}</p>
            <p className="text-sm text-gray-500 italic">Tech/Skills: {proj.technologies}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
};
