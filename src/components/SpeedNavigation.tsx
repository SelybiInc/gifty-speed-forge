import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";
import { Home, User, BookOpen, Mail, Settings } from "lucide-react";

const navigationItems = [
  { name: "Home", path: "/", icon: Home },
  { name: "About", path: "/about", icon: User },
  { name: "Blog", path: "/blog", icon: BookOpen },
  { name: "Contact", path: "/contact", icon: Mail },
];

export const SpeedNavigation = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const location = useLocation();

  const currentIndex = navigationItems.findIndex(item => 
    item.path === "/" ? location.pathname === "/" : location.pathname.startsWith(item.path)
  );

  // Close menu when route changes
  useEffect(() => {
    setIsExpanded(false);
  }, [location.pathname]);

  const handleLinkClick = () => {
    setIsExpanded(false);
  };

  return (
    <motion.div
      className="fixed left-6 top-6 z-50"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      {/* Main Navigation Circle */}
      <div className="relative">
        {/* Progress Ring */}
        <div className="relative w-20 h-20">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
            {/* Background Ring */}
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="hsl(var(--border))"
              strokeWidth="2"
              fill="none"
              opacity="0.3"
            />
            {/* Progress Ring */}
            <motion.circle
              cx="50"
              cy="50"
              r="45"
              stroke="hsl(var(--primary))"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 45}`}
              strokeDashoffset={`${2 * Math.PI * 45 * (1 - (currentIndex + 1) / navigationItems.length)}`}
              className="drop-shadow-lg neon-glow"
              initial={{ strokeDashoffset: 2 * Math.PI * 45 }}
              animate={{ strokeDashoffset: 2 * Math.PI * 45 * (1 - (currentIndex + 1) / navigationItems.length) }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
          </svg>

          {/* Center Button */}
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-card border-2 border-primary/50 flex items-center justify-center hover-glow speed-transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <Settings className="w-5 h-5 text-primary" />
            </motion.div>
          </motion.button>
        </div>

        {/* Navigation Items */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              className="absolute left-24 top-0 flex flex-col gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {navigationItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = item.path === "/" 
                  ? location.pathname === "/" 
                  : location.pathname.startsWith(item.path);

                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <NavLink
                      to={item.path}
                      onClick={handleLinkClick}
                      className={`flex items-center gap-3 px-4 py-2 rounded-full bg-card/95 backdrop-blur-md border transition-all duration-300 group hover:border-primary/50 shadow-lg ${
                        isActive 
                          ? "border-primary neon-glow text-primary bg-card" 
                          : "border-border hover:bg-card/90"
                      }`}
                    >
                      <div className={`p-2 rounded-full transition-all duration-300 ${
                        isActive 
                          ? "bg-primary/20 text-primary" 
                          : "text-muted-foreground group-hover:text-primary"
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className={`font-medium text-sm transition-all duration-300 ${
                        isActive 
                          ? "text-primary" 
                          : "text-foreground group-hover:text-primary"
                      }`}>
                        {item.name}
                      </span>
                    </NavLink>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Compact Navigation Dots */}
        {!isExpanded && (
          <div className="absolute left-24 top-0 flex flex-col gap-2">
            {navigationItems.map((item, index) => {
              const isActive = item.path === "/" 
                ? location.pathname === "/" 
                : location.pathname.startsWith(item.path);

              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={handleLinkClick}
                  className="group"
                >
                  <motion.div
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      isActive 
                        ? "bg-primary neon-glow scale-125" 
                        : "bg-border group-hover:bg-primary/50 group-hover:scale-110"
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                </NavLink>
              );
            })}
          </div>
        )}
      </div>

      {/* Speed Lines Effect */}
      <div className="absolute -left-10 top-10 w-8 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-30 speed-lines" />
    </motion.div>
  );
};