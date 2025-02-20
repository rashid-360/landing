import { useState } from "react";
import { motion } from "framer-motion";
import { Instagram, Twitter, Linkedin, Menu, X } from "lucide-react";
import Logo from "../assets/trpd.svg"; // Importing the logo

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed md:relative top-0 left-0 right-0 z-50 bg-black ">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <img src={Logo} alt="Trawayl Logo" className="w-16 md:w-16 h-auto" />
          </motion.div>

          {/* Desktop Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex items-center gap-6"
          >
            <a href="https://instagram.com/trawayl" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-6 h-6  hover:text-[#37E5A5] transition-colors" />
            </a>
            <a href="https://x.com/trawayl" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-6 h-6  hover:text-[#37E5A5] transition-colors" />
            </a>
            <a href="https://linkedin.com/company/trawayl" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6  hover:text-[#37E5A5] transition-colors" />
            </a>
          </motion.div>

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden absolute top-14 left-0 w-full bg-black/90 backdrop-blur-lg p-4 flex flex-col items-center gap-4"
        >
          <a href="https://instagram.com/trawayl" target="_blank" rel="noopener noreferrer" className="text-white text-lg">
            <Instagram className="w-6 h-6 inline-block mr-2" /> Instagram
          </a>
          <a href="https://x.com/trawayl" target="_blank" rel="noopener noreferrer" className="text-white text-lg">
            <Twitter className="w-6 h-6 inline-block mr-2" /> X (Twitter)
          </a>
          <a href="https://linkedin.com/company/trawayl" target="_blank" rel="noopener noreferrer" className="text-white text-lg">
            <Linkedin className="w-6 h-6 inline-block mr-2" /> Linkedin
          </a>
        </motion.div>
      )}
    </nav>
  );
}
