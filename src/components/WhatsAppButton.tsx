import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const PHONE = "21629261022"; // Tunisia country code + number
const WA_URL = `https://wa.me/${PHONE}?text=${encodeURIComponent(
  "Bonjour WoodFace, je suis intéressé(e) par vos créations.",
)}`;

export function WhatsAppFab() {
  return (
    <motion.a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 200, damping: 18 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[oklch(0.62_0.17_150)] text-white shadow-[0_20px_50px_-10px_oklch(0.62_0.17_150/0.6)] ring-1 ring-white/10"
    >
      <span className="absolute inset-0 rounded-full bg-[oklch(0.62_0.17_150)] opacity-60 motion-safe:animate-ping" />
      <MessageCircle className="relative h-6 w-6" />
    </motion.a>
  );
}

export { WA_URL };
