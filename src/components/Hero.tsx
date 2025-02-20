import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";
import { useRef } from "react";
import { EmailForm } from "./EmailForm";
import { HeroFeatures } from "./HeroFeatures";
import { SparklesText } from "@/components/ui/sparkles-text";
import { BackgroundLines } from "@/components/ui/background-lines";

export function Hero() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  const containerVariants = {
    hidden: { 
      opacity: 0 
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    }
  };

  const titleVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    }
  };

  const subtitleVariants = {
    hidden: { 
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.1,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    }
  };

  const descriptionVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.2,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    }
  };

  return (
    <section ref={containerRef} className="section pt-0 md:pt-0 overflow-hidden">
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
        <motion.div
          className="container relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto px-4">
            <motion.div 
              className="relative mb-6 md:mb-8"
              variants={itemVariants}
            >
              <motion.div 
                className="flex items-center gap-2 md:gap-4 px-4 md:px-6 py-2 rounded-full bg-black border border-[#37E5A5]/10"
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <Star className="w-3 h-3 md:w-4 md:h-4 text-[#37E5A5]" />
                </motion.div>
                <span className="text-xs md:text-sm">
                  Revolutionizing Travel Planning
                </span>
              </motion.div>
            </motion.div>

            <motion.div 
              className="space-y-4 mb-8"
              variants={titleVariants}
            >
              <motion.div
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                <h1>
                  <SparklesText
                    className="text-6xl md:text-6xl lg:text-8xl font-bold text-[#fdfff5]"
                    text="Trawayl"
                  />
                </h1>
              </motion.div>

              <motion.p 
                className="text-xl md:text-2xl lg:text-3xl text-[#fdfff5]/80"
                variants={subtitleVariants}
              >
                The Finest Way To Travel.
              </motion.p>
            </motion.div>

            <motion.p
              className="text-base md:text-l text-[#ffffff]/60 mb-8 md:mb-12"
              variants={descriptionVariants}
            >
              "Trawayl connects adventure seekers with expert tour providers,
              vehicle providers, unique experiences, strangers' camps, and
              fellow explorers, redefining the way you discover the world."
            </motion.p>

            <motion.div 
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <EmailForm />
            </motion.div>

            <motion.div 
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <HeroFeatures />
            </motion.div>
          </div>
        </motion.div>
      </BackgroundLines>
    </section>
  );
}