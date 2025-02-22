import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";

interface ToastProps {
  show: boolean;
  message: string;
}

export function Toast({ show, message }: ToastProps) {
  return createPortal(
    <AnimatePresence>
      {show && (
        <div className="fixed inset-x-0 bottom-0 z-[50] flex items-center justify-center px-6 sm:px-4 pb-4 sm:pb-6 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-[#37E5A5]/90 text-black px-3 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg text-xs sm:text-sm font-medium w-[95%] sm:w-auto sm:min-w-[280px] sm:max-w-md text-center z-[9999] truncate"
          >
            {message}
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}

export default Toast