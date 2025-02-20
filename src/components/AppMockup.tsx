import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPeace, faMap, faCertificate } from '@fortawesome/free-solid-svg-icons';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export function AppMockup() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  const containerVariants = {
    hidden: { 
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: [0.43, 0.13, 0.23, 0.96],
        staggerChildren: 0.6
      }
    }
  };

  const textVariants = {
    hidden: { 
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    }
  };

  const featureVariants = {
    hidden: { 
      opacity: 0,
      x: -50,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 1.4,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    }
  };

  const imageVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      y: 50
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 2,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    }
  };

  const features = [
    {
      icon: <FontAwesomeIcon icon={faHandPeace} className="w-8 h-8 md:w-12 md:h-12 text-[#4ECDC4]" />,
      title: "Easy to Use",
      description: "Book trips without hassle, hidden fees, or endless confirmations."
    },
    {
      icon: <FontAwesomeIcon icon={faMap} className="w-8 h-8 md:w-12 md:h-12 text-[#FFD93D]" />,
      title: "Discover Adventures",
      description: "Find and join exciting trips with just a few taps."
    },
    {
      icon: <FontAwesomeIcon icon={faCertificate} className="w-8 h-8 md:w-12 md:h-12 text-[#FF8F8F]" />,
      title: "Travel Like Never Before",
      description: "Experience authentic local adventures and create memories."
    }
  ];

  return (
    <section ref={containerRef} className="section py-12 mb-8 md:py-20 bg-black overflow-hidden">
      <motion.div 
        className="container"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16 px-4">
          {/* Left side - App features */}
          <motion.div 
            className="w-full lg:w-1/2 space-y-8 md:space-y-12"
            variants={textVariants}
          >
            <motion.h2 
              className="text-2xl md:text-4xl font-bold mb-6 md:mb-8 gradient-text"
              variants={textVariants}
            >
              Travel Smarter with<br />Our Mobile App
            </motion.h2>
            
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 md:gap-6"
                variants={featureVariants}
                custom={index}
              >
                <motion.div 
                  className="p-2 md:p-3 rounded-full bg-[#000000]"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.4 }
                  }}
                >
                  {feature.icon}
                </motion.div>
                <div>
                  <h3 className="text-xl md:text-xl text-[#fdfff5] font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-m md:text-base text-[#ffffff]/60">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right side - Real Mockup Image */}
          <motion.div 
            className="w-full lg:w-1/2 flex justify-center"
            variants={imageVariants}
          >
            <motion.img 
              src="https://i.ibb.co/nN39kH0C/iphone.png"
              alt="Trawayl App Mockup" 
              className="w-[280px] md:w-[320px] rounded-[40px] shadow-2xl"
              whileHover={{ 
                scale: 1.05,
                rotate: -2,
                transition: { 
                  duration: 0.8,
                  ease: [0.43, 0.13, 0.23, 0.96]
                }
              }}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}