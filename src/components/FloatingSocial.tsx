import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Instagram, 
  Youtube, 
  Twitter, 
  Facebook, 
  Linkedin, 
  Share2,
  X,
  Music
} from "lucide-react";

const socialLinks = [
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com/gifty_speedrider",
    color: "hover:text-pink-500",
    bgColor: "hover:bg-pink-500/20"
  },
  {
    name: "YouTube",
    icon: Youtube,
    href: "https://youtube.com/GiftySpeedChannel",
    color: "hover:text-red-500",
    bgColor: "hover:bg-red-500/20"
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://twitter.com/gifty_rides",
    color: "hover:text-blue-400",
    bgColor: "hover:bg-blue-400/20"
  },
  {
    name: "TikTok",
    icon: Music,
    href: "https://tiktok.com/@gifty_speed",
    color: "hover:text-white",
    bgColor: "hover:bg-black/80"
  },
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://facebook.com/giftyspeedrider",
    color: "hover:text-blue-600",
    bgColor: "hover:bg-blue-600/20"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/gifty-speedrider",
    color: "hover:text-blue-700",
    bgColor: "hover:bg-blue-700/20"
  }
];

export const FloatingSocial = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      {/* Social Links */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="absolute bottom-20 right-0 flex flex-col gap-3 mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full bg-card/80 backdrop-blur-sm border border-primary/20 ${social.color} ${social.bgColor} speed-transition flex items-center gap-3 group min-w-[50px] justify-center hover:min-w-[140px]`}
                  initial={{ opacity: 0, x: 20, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 20, scale: 0.8 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  <motion.span
                    className="text-sm font-medium whitespace-nowrap overflow-hidden"
                    initial={{ width: 0, opacity: 0 }}
                    whileHover={{ width: "auto", opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {social.name}
                  </motion.span>
                </motion.a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`w-14 h-14 rounded-full bg-speed-gradient flex items-center justify-center shadow-lg transition-all duration-300 ${
          isExpanded ? "rotate-45" : "hover:scale-110"
        } neon-glow`}
        whileHover={{ scale: isExpanded ? 1 : 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          animate={{ rotate: isExpanded ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isExpanded ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Share2 className="w-6 h-6 text-white" />
          )}
        </motion.div>
      </motion.button>

      {/* Pulse Effect */}
      {!isExpanded && (
        <motion.div
          className="absolute inset-0 rounded-full bg-primary/20"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}

      {/* Floating Particles */}
      {isExpanded && (
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-10, -20, -10],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
};