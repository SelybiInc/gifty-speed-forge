import { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  startOnView?: boolean;
}

export const AnimatedCounter = ({ 
  end, 
  duration = 2000, 
  suffix = "", 
  prefix = "", 
  decimals = 0,
  startOnView = true 
}: CounterProps) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if ((startOnView && isInView && !hasStarted) || (!startOnView && !hasStarted)) {
      setHasStarted(true);
      
      const startTime = Date.now();
      const startValue = 0;
      
      const animateCounter = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = startValue + (end - startValue) * easeOutQuart;
        
        setCount(currentValue);
        
        if (progress < 1) {
          requestAnimationFrame(animateCounter);
        } else {
          setCount(end);
        }
      };
      
      requestAnimationFrame(animateCounter);
    }
  }, [end, duration, isInView, hasStarted, startOnView]);

  const formatNumber = (value: number) => {
    return prefix + value.toFixed(decimals) + suffix;
  };

  return (
    <motion.span
      ref={ref}
      className="tabular-nums"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {formatNumber(count)}
    </motion.span>
  );
};