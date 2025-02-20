import { motion, AnimatePresence } from 'framer-motion';

interface ToastProps {
  show: boolean;
  message: string;
}

export function Toast({ show, message }: ToastProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-4 right-4 bg-[#37E5A5]/90  text-black px-4 md:px-6 py-2 md:py-3 rounded-full shadow-lg text-sm md:text-base"
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}