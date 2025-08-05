import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { SpeedBackground } from "@/components/SpeedBackground";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Wind, Star } from "lucide-react";
import heroImage from "@/assets/hero-gifty-bike.jpg";

export const Home = () => {
  return (
    <PageTransition>
      <SpeedBackground />
      <div className="relative min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Hero Background Image */}
          <div className="absolute inset-0 z-0">
            <div 
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${heroImage})` }}
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Main Heading */}
              <motion.h1
                className="text-5xl md:text-7xl font-bold text-glow"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="text-primary neon-pulse">GIFTY</span>
                <br />
                <span className="text-foreground">Speed Demon</span>
              </motion.h1>

              {/* Tagline */}
              <motion.p
                className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Racing Through Life, One Ride at a Time
              </motion.p>

              {/* Stats */}
              <motion.div
                className="flex flex-wrap justify-center gap-8 mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {[
                  { icon: Zap, label: "Max Speed", value: "300 KM/H" },
                  { icon: Wind, label: "Years Riding", value: "8+" },
                  { icon: Star, label: "Adventures", value: "1000+" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="flex flex-col items-center p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-primary/20 hover-glow"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    <stat.icon className="w-8 h-8 text-primary mb-2" />
                    <span className="text-2xl font-bold text-primary">{stat.value}</span>
                    <span className="text-muted-foreground text-sm">{stat.label}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 rounded-full neon-glow hover:scale-105 speed-transition"
                >
                  Explore My Journey
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary/50 text-primary hover:bg-primary/10 font-semibold px-8 py-4 rounded-full hover:border-primary speed-transition"
                >
                  Watch Videos
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
              <motion.div
                className="w-1 h-3 bg-primary rounded-full mt-2"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </section>

        {/* Quick About Section */}
        <section className="relative py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Welcome to My World
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm Gifty, a passionate speed bike enthusiast who lives for the thrill of the ride. 
                From the roar of the engine to the wind rushing past, every journey is an adventure 
                waiting to unfold. Join me as I share my experiences, tips, and the pure joy of 
                speed biking.
              </p>
              <Button 
                variant="outline" 
                className="border-secondary text-secondary hover:bg-secondary/10 mt-6"
              >
                Learn More About Me
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};