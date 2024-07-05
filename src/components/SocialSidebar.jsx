import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaFacebook, FaDev } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { motion } from 'framer-motion';

const socialLinks = [
  { icon: <FaGithub />, name: 'GitHub', url: 'https://github.com/yourusername' },
  { icon: <FaLinkedin />, name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername' },
  { icon: <FaXTwitter />, name: 'X', url: 'https://twitter.com/yourusername' },
  { icon: <FaDev />, name: 'Dev', url: 'https://dev.to/yourusername' },
  { icon: <FaFacebook />, name: 'Facebook', url: 'https://facebook.com/yourusername' },
  { icon: <FaEnvelope />, name: 'Email', url: 'mailto:your-email@example.com' },
];

const SocialSidebar = () => {
  return (
    <div className="fixed top-[56%] right-0 transform -translate-y-1/2 p-4 text-neutral rounded-l-lg shadow-lg text-[15px] font-mono">
      {socialLinks.map((link, index) => (
        <motion.div
          key={index}
          className="mb-4 flex flex-col items-end"
          initial="hidden"
          whileHover="visible"
        >
          <motion.a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row items-center space-x-2 p-2 rounded-lg transition-colors duration-300 ease-in-out hover:text-accent"
          >
            <motion.span
              className="mr-2"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
              }}
            >
              {link.name}
            </motion.span>
            <motion.div
              className="flex items-center justify-center"
              variants={{
                hidden: { opacity: 1 },
                visible: { opacity: 1 },
              }}
            >
              {link.icon}
            </motion.div>
          </motion.a>
        </motion.div>
      ))}
    </div>
  );
};

export default SocialSidebar;
