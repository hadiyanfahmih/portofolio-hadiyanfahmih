export const Footer = () => {
  return (
    <footer 
      id="contact"
      className="py-8 text-center text-sm text-gray-500 bg-white border-t"
    >
      <p>© {new Date().getFullYear()} Hadiyan Fahmi Hariyadi. Created with React & Tailwind CSS.</p>
      <p className="mt-2">
        Email: <a href="mailto:hadiyanfahmi.jobs@gmail.com" className="text-blue-500 hover:underline">hadiyanfahmi.jobs@gmail.com</a> | 
        WhatsApp: <a href="https://wa.me/6285821514458" className="text-blue-500 hover:underline" target="_blank" rel="noreferrer">+62 858-2151-4458</a>
      </p>
    </footer>
  );
};
