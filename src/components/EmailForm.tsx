import { motion } from 'framer-motion';
import { useState } from 'react';
import { fadeIn } from '../utils/animations';
import { Toast } from './Toast';

export function EmailForm() {
  const [email, setEmail] = useState('');
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
    setEmail('');
  };

  return (
    <>
      <motion.form 
        onSubmit={handleSubmit} 
        className="w-full max-w-md mb-8 md:mb-12 px-4"
        variants={fadeIn}
      >
        <div className="flex flex-col sm:flex-row gap-4">
  <input
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    placeholder="Enter your email"
    className="flex-1 px-4 md:px-5 py-2 md:py-2.5 rounded-full bg-black border-2 border-white/20
               text-foreground placeholder-white/50 focus:outline-none focus:border-[#37E5A5]/60 
                transition-all text-sm md:text-sm"
  />
  <button
    type="submit"
    className="btn-primary text-sm md:text-sm px-4 md:px-5 py-2 md:py-2.5"
  >
    Get Early Access
  </button>
</div>


      </motion.form>
      <Toast show={showToast} message="Thanks for your interest! We'll be in touch soon." />
    </>
  );
}