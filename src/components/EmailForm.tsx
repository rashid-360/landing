import { motion } from "framer-motion";
import { useState } from "react";
import { fadeIn } from "../utils/animations";
import { Toast } from "./Toast";

export function EmailForm() {
  const [email, setEmail] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);

    try {
      const response = await fetch(
        "https://cloudflare-worker.trexhowl404.workers.dev",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      if (response.ok) {
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
        setEmail("");
      } else {
        console.error("Failed to save email:", await response.text());
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
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
            required
          />
          <button
            type="submit"
            className="btn-primary text-sm md:text-sm px-4 md:px-5 py-2 md:py-2.5"
            disabled={loading}
          >
            {loading ? "Saving..." : "Get Early Access"}
          </button>
        </div>
      </motion.form>
      <Toast
        show={showToast}
        message="Thanks for your interest! We'll be in touch soon."
      />
    </>
  );
}
