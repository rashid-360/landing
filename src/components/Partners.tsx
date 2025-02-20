import { MountainSnow, Bus, Tent, ChevronRight } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMountainSun, faBus, faTents } from '@fortawesome/free-solid-svg-icons';
import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { PartnerModal } from './PartnerModal';

export function Partners() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  const containerVariants = {
    hidden: { 
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.43, 0.13, 0.23, 0.96],
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      x: -20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    }
  };

  const providerItems = [
    { icon: <FontAwesomeIcon icon={faMountainSun} className="w-5 h-5 md:w-8 md:h-8 text-[#FF6B6B]" />, text: "Tour Package Providers" },
    { icon: <FontAwesomeIcon icon={faBus} className="w-5 h-5 md:w-8 md:h-8 text-[#4ECDC4]" />, text: "Tourist Vehicle Providers" },
    { icon: <FontAwesomeIcon icon={faTents} className="w-5 h-5 md:w-8 md:h-8 text-[#FFD93D]" />, text: "Strangers Camp Providers" },
  ];

  return (
    <section ref={containerRef} className="section py-8 md:py-20 px-4 md:px-6">
      <motion.div 
        className="container bg-[#37e5a5]/90 p-5 md:p-20 rounded-3xl"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">
          <motion.div 
            className="w-full md:w-1/2"
            variants={itemVariants}
          >
            <motion.h2 
              className="text-2xl text-black md:text-4xl font-bold mb-3 md:mb-6 gradient-text"
              variants={itemVariants}
            >
              Own a Travel Business?<br />Let's Grow Together
            </motion.h2>
            <motion.p 
              className="text-sm md:text-xl text-[#000000]/70 mb-4 md:mb-8"
              variants={itemVariants}
            >
              Join Trawayl's network of verified tours and travel providers and connect with travelers
              seeking authentic adventures. Zero marketing hassle, more bookings.
            </motion.p>
            <motion.button 
              className="btn-primary bg-black flex items-center gap-2 text-sm md:text-base text-white/90 px-4 py-2 rounded-full"
              onClick={() => setIsModalOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              Early Partner with Us
              <ChevronRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2 mt-6 md:mt-0"
            variants={itemVariants}
          >
            <div className="grid grid-cols-1 gap-4 max-w-[280px] md:max-w-[320px] mx-auto">
              {providerItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 md:gap-4 bg-black/80 p-3 md:p-4 rounded-full hover:bg-black/90 transition-colors"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.icon}
                  <span className="text-sm md:text-lg text-white/80">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      <PartnerModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}