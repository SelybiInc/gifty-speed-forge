import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { SpeedBackground } from "@/components/SpeedBackground";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Zap, Target, Award } from "lucide-react";
import giftyPortrait from "@/assets/gifty-portrait.jpg";
import bikerHelmet from "@/assets/biker-helmet-hud.jpg";

export const About = () => {
  const sections = [
    {
      title: "My First Ride",
      icon: Heart,
      content: "It all started when I was 16. The moment I first sat on a bike, I knew this was my calling. The vibration of the engine, the potential energy waiting to be unleashed - it was pure magic.",
      color: "primary"
    },
    {
      title: "Why I Ride Fast",
      icon: Zap,
      content: "Speed isn't just about going fast - it's about focus, precision, and living in the moment. When you're pushing the limits, there's no room for anything but pure concentration and skill.",
      color: "secondary"
    },
    {
      title: "My Dream Bike",
      icon: Target,
      content: "The Kawasaki Ninja H2R - 310hp of pure adrenaline. It's not just a bike, it's a statement. One day, I'll have one in my garage, and we'll paint the highways with our legacy.",
      color: "accent"
    }
  ];

  const achievements = [
    { label: "Years of Experience", value: "8+" },
    { label: "Bikes Owned", value: "12" },
    { label: "Track Days", value: "200+" },
    { label: "Miles Traveled", value: "100K+" },
    { label: "Top Speed", value: "300 KM/H" },
    { label: "Racing Wins", value: "25" }
  ];

  return (
    <PageTransition>
      <SpeedBackground />
      <div className="relative min-h-screen pt-20 pb-12">
        <div className="max-w-6xl mx-auto px-6">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-primary neon-pulse">About</span>{" "}
              <span className="text-foreground">Gifty</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Speed is not just about velocity - it's about passion, precision, and the pursuit of perfection.
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Left Column - Image and Bio */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="relative">
                <motion.img
                  src={giftyPortrait}
                  alt="Gifty with her bike"
                  className="w-full rounded-2xl object-cover aspect-[4/5] neon-glow"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold">Gifty</h3>
                  <p className="text-primary">Speed Enthusiast</p>
                </div>
              </div>

              <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20">
                <h3 className="text-xl font-bold mb-4 text-primary">Quick Facts</h3>
                <div className="grid grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={achievement.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="text-center p-3 bg-dark-surface rounded-lg"
                    >
                      <div className="text-lg font-bold text-primary">{achievement.value}</div>
                      <div className="text-sm text-muted-foreground">{achievement.label}</div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Right Column - Story Sections */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              {sections.map((section, index) => {
                const Icon = section.icon;
                return (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.2 }}
                  >
                    <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover-glow speed-transition">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-full bg-${section.color}/20 text-${section.color}`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-3 text-primary">{section.title}</h3>
                          <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Skills & Expertise */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-center mb-8 text-primary">Skills & Expertise</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "High-Speed Racing", "Track Navigation", "Bike Mechanics", "Safety Protocols",
                "Cornering Techniques", "Wheelie Control", "Stunt Riding", "Bike Modifications",
                "Racing Strategy", "Weather Riding", "Group Riding", "Track Safety"
              ].map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Badge 
                    variant="outline" 
                    className="px-4 py-2 text-sm border-primary/50 text-primary hover:bg-primary/10 speed-transition"
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Helmet Tech Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl font-bold mb-6">
                <span className="text-secondary">Tech</span>{" "}
                <span className="text-foreground">Meets</span>{" "}
                <span className="text-accent">Speed</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Modern speed biking isn't just about raw power - it's about integrating cutting-edge 
                technology with traditional riding skills. From HUD helmets to advanced traction 
                control systems, technology enhances both safety and performance.
              </p>
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  <span className="text-sm">Safety First</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-secondary" />
                  <span className="text-sm">Peak Performance</span>
                </div>
              </div>
            </div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={bikerHelmet}
                alt="Futuristic biker helmet with HUD"
                className="w-full rounded-2xl object-cover neon-glow-secondary"
              />
            </motion.div>
          </motion.section>
        </div>
      </div>
    </PageTransition>
  );
};