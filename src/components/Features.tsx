import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMountainSun, 
  faBus, 
  faPeopleGroup, 
  faTents, 
  faPanorama, 
  faPersonHiking 
} from '@fortawesome/free-solid-svg-icons';

export function Features() {
  const features = [
    {
      icon: <FontAwesomeIcon icon={faMountainSun} className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 text-[#FF6B6B]" />,
      title: "Curated Travel Packages",
      description: "Handpicked experiences from verified tour package providers"
    },
    {
      icon: <FontAwesomeIcon icon={faBus} className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 text-[#4ECDC4]" />,
      title: "Seamless Transportation",
      description: "Book Tourist vehicles instantly with trusted tourist vehicle providers"
    },
    {
      icon: <FontAwesomeIcon icon={faPeopleGroup} className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 text-[#FFD93D]" />,
      title: "Group Adventures",
      description: "Join like-minded travelers on exciting journeys"
    },
    {
      icon: <FontAwesomeIcon icon={faTents} className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 text-[#95A5FF]" />,
      title: "Camp Experiences",
      description: "Connect with verified strangers camp providers"
    },
    {
      icon: <FontAwesomeIcon icon={faPanorama} className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 text-[#FF8F8F]" />,
      title: "Photo-worthy Moments",
      description: "Discover Instagram-worthy destinations"
    },
    {
      icon: <FontAwesomeIcon icon={faPersonHiking} className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 text-[#98FB98]" />,
      title: "Unique Experiences",
      description: "Access exclusive local activities and events"
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="section py-8 mb-8 sm:py-12 md:py-20" id="features">
      <motion.div 
        className="container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div 
          className="text-center mb-8 sm:mb-12 md:mb-16 px-4"
          variants={itemVariants}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-4xl font-bold text-[#fdfff5] mb-3 sm:mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Experience Travel Like Never Before
          </motion.h2>
          <motion.p 
            className="text-sm sm:text-base text-[#ffffff]/60 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Discover a new way to explore the world with our innovative features designed
            for modern travelers.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12 px-4"
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="flex flex-col items-center text-center p-4 sm:p-6 relative group"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className="mb-2 sm:mb-2 p-4 sm:p-4 rounded-full bg-[#000000] backdrop-blur-sm relative z-10
                         transform transition-transform duration-300 group-hover:scale-110"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {feature.icon}
              </motion.div>
              <motion.h3 
                className="text-xl sm:text-lg md:text-xl text-[#fdfff5] font-semibold mb-2 sm:mb-3"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
              >
                {feature.title}
              </motion.h3>
              <motion.p 
                className="text-m sm:text-base text-[#ffffff]/60"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
              >
                {feature.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}