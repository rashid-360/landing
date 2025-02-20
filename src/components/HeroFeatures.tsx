import { motion } from 'framer-motion';
import { Award, Heart, Users, ChevronDown } from 'lucide-react';
import { fadeIn } from '../utils/animations';

export function HeroFeatures() {
  const features = [
    { icon: <Award className="w-3 h-3 md:w-4 md:h-4 text-[#37E5A5]" />, text: "Verified Tour Providers" },
    { icon: <Heart className="w-3 h-3 md:w-4 md:h-4 text-[#37E5A5]" />, text: "Curated Experiences" },
    { icon: <Users className="w-3 h-3 md:w-4 md:h-4 text-[#37E5A5]" />, text: "Group Adventures" }
  ];

  return (
    <motion.div 
      className="flex flex-wrap justify-center gap-4 md:gap-8 text-xs md:text-sm  px-4"
      variants={fadeIn}
    >
      {features.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          {item.icon}
          <span>{item.text}</span>
        </div>
        
      ))}
      
    </motion.div>
    
  );
}