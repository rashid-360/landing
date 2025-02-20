import { motion } from 'framer-motion';
import { Linkedin, Twitter, Github, Instagram } from 'lucide-react';
import { fadeIn, stagger } from '../utils/animations';
import Logo from "../assets/trpd.svg";

export function Footer() {
  const socialLinks = [
    { icon: <Twitter className="w-4 h-4 md:w-5 md:h-5" />, href: "https://x.com/trawayl" },
    { icon: <Instagram className="w-4 h-4 md:w-5 md:h-5" />, href: "https://instagram.com/trawayl" },
    { icon: <Linkedin className="w-4 h-4 md:w-5 md:h-5" />, href: "https://linkedin.com/company/trawayl" },
    { icon: <Github className="w-4 h-4 md:w-5 md:h-5" />, href: "#" },
  ];

  return (
    <footer className="py-8 md:py-12 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start">
        {/* Logo Section */}
        <motion.div 
          className="mb-6 md:mb-0 flex flex-col items-center md:items-start"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <img src={Logo} alt="Trawayl Logo" className="w-16 h-16 md:w-20 md:h-20" />
          <p className="text-xs text-[#ffffff]/60 md:text-sm mt-1 max-w-xs">
            Trawayl - Your gateway to unforgettable journeys. Explore, book, and travel with ease.
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-col items-center mt-6 md:items-end"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
        >
          {/* Social Links */}
          <motion.div 
            className="flex gap-4 md:gap-6 mb-6 md:mb-10"
            variants={fadeIn}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className="text-[#fdfff5]/90 hover:text-[#37E5A5] transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright Text */}
          <motion.p 
            className="text-xs text-[#ffffff]/60 md:text-sm text-center md:text-right"
            variants={fadeIn}
          >
            © {new Date().getFullYear()} Trawayl. All rights reserved.<br />
            Connecting adventurous souls with extraordinary experiences.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}