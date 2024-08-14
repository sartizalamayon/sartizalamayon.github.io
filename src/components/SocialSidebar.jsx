import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaFacebook, FaDev } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { motion } from 'framer-motion';

const socialLinks = [
  { icon: <FaGithub />, name: 'GITHUB', url: 'https://github.com/yourusername' },
  { icon: <FaLinkedin />, name: 'LINKEDIN', url: 'https://linkedin.com/in/yourusername' },
  // { icon: <FaXTwitter />, name: 'X', url: 'https://twitter.com/yourusername' },
  // { icon: <FaDev />, name: 'Dev', url: 'https://dev.to/yourusername' },
  // { icon: <FaFacebook />, name: 'Facebook', url: 'https://facebook.com/yourusername' },
  { icon: <FaEnvelope />, name: 'EMAIL', url: 'mailto:your-email@example.com' },
];

const SocialSidebar = () => {
  return (
    <div className='fixed bottom-1 flex gap-10 flex-row justify-center items-center w-full mr-auto'>
      {socialLinks.map((link)=>{
        return (
          <div
            key={link.name}
            href={link.url}
            target='_blank'
            rel='noreferrer'
            className='text-neutral text-sm font-light'
          >
            {link.name}
          </div>
        );
      })}
    </div>
  );
};

export default SocialSidebar;
