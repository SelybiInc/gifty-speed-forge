import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { SpeedBackground } from "@/components/SpeedBackground";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap, Wind, Star, Trophy, Users, Play, Calendar, Clock, MapPin } from "lucide-react";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import heroImage from "@/assets/hero-gifty-bike.jpg";
import speedTrail from "@/assets/speed-trail.jpg";
import giftyPortrait from "@/assets/gifty-portrait.jpg";

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
                <span className="text-foreground">Adventurer & Healer</span>
              </motion.h1>

              {/* Tagline */}
              <motion.p
                className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Nursing Student by Day, Speed Enthusiast by Heart, Adventure Seeker Always
              </motion.p>

              {/* Stats */}
              <motion.div
                className="flex flex-wrap justify-center gap-8 mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {[
                  { icon: Zap, label: "Max Speed", value: 300, suffix: " KM/H" },
                  { icon: Wind, label: "Years Riding", value: 8, suffix: "+" },
                  { icon: Star, label: "Adventures", value: 500, suffix: "+" },
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
                    <span className="text-2xl font-bold text-primary">
                      <AnimatedCounter 
                        end={stat.value} 
                        suffix={stat.suffix} 
                        duration={2500}
                        startOnView={false}
                      />
                    </span>
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

        {/* About Section */}
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
                I'm Gifty, a nursing student with a passion for speed, adventure, and helping others heal. 
                When I'm not studying anatomy or caring for patients, you'll find me pushing limits on two wheels, 
                exploring mountain trails, or spending precious time with my family. Life is about balance - 
                between the adrenaline rush of speed and the gentle touch of healing.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="p-4 bg-card/50 rounded-lg">
                  <h3 className="font-semibold text-primary mb-2">🏥 Future Nurse</h3>
                  <p className="text-sm text-muted-foreground">Dedicated to healing and caring for others</p>
                </div>
                <div className="p-4 bg-card/50 rounded-lg">
                  <h3 className="font-semibold text-secondary mb-2">🏍️ Speed Enthusiast</h3>
                  <p className="text-sm text-muted-foreground">Living for the thrill of the ride</p>
                </div>
                <div className="p-4 bg-card/50 rounded-lg">
                  <h3 className="font-semibold text-accent mb-2">👨‍👩‍👧‍👦 Family First</h3>
                  <p className="text-sm text-muted-foreground">Cherishing moments with loved ones</p>
                </div>
              </div>
              <Button 
                variant="outline" 
                className="border-secondary text-secondary hover:bg-secondary/10 mt-6"
              >
                Learn More About Me
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Latest Adventures Section */}
        <section className="relative py-20 px-6 bg-dark-surface/30">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-secondary">Latest</span>{" "}
                <span className="text-foreground">Adventures</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Follow my journey through the latest rides, racing experiences, and speed challenges.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Night Study & Ride Session",
                  description: "Balancing nursing textbooks and midnight rides - finding peace in both worlds",
                  image: speedTrail,
                  category: "Life Balance",
                  date: "2 days ago",
                  duration: "4 hours"
                },
                {
                  title: "Family Weekend Adventure",
                  description: "Took my little sister on her first mountain hiking trip - she loved it!",
                  image: speedTrail,
                  category: "Family Time",
                  date: "1 week ago",
                  duration: "Full Day"
                },
                {
                  title: "Hospital Clinical & Track Day",
                  description: "From saving lives in the morning to living life at 250km/h in the evening",
                  image: speedTrail,
                  category: "Adventure",
                  date: "2 weeks ago",
                  duration: "12 hours"
                }
              ].map((adventure, index) => (
                <motion.div
                  key={adventure.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20 hover-glow speed-transition group cursor-pointer">
                    <div className="relative overflow-hidden">
                      <img
                        src={adventure.image}
                        alt={adventure.title}
                        className="w-full h-48 object-cover group-hover:scale-105 speed-transition"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-primary/80 text-white">
                          {adventure.category}
                        </Badge>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 text-white">
                        <div className="flex items-center gap-2 text-sm opacity-90">
                          <Calendar className="w-4 h-4" />
                          {adventure.date}
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold mb-2 text-primary group-hover:text-primary/80 speed-transition">
                        {adventure.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {adventure.description}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {adventure.duration}
                        </div>
                        <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                          Read More
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Video Section */}
        <section className="relative py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-accent">Watch Me</span>{" "}
                <span className="text-foreground">Ride</span>
              </h2>
              <p className="text-muted-foreground">
                Experience the thrill of speed through my latest riding videos and track footage.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card className="overflow-hidden bg-card/30 backdrop-blur-sm border-primary/20">
                <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <img
                    src={speedTrail}
                    alt="Featured video thumbnail"
                    className="absolute inset-0 w-full h-full object-cover opacity-50"
                  />
                  <div className="relative z-10 text-center">
                    <motion.div
                      className="w-20 h-20 rounded-full bg-primary/80 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-primary speed-transition mb-4 mx-auto"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Play className="w-8 h-8 text-white ml-1" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-white mb-2">300KM/H on the Autobahn</h3>
                    <p className="text-white/80">Watch me push the limits on Germany's famous highway</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Achievement Stats */}
        <section className="relative py-20 px-6 bg-dark-surface/30">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-primary">By The</span>{" "}
                <span className="text-foreground">Numbers</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: Trophy, label: "Clinical Hours", value: 500, suffix: "+", color: "primary" },
                { icon: Users, label: "Lives Touched", value: 200, suffix: "+", color: "secondary" },
                { icon: Star, label: "Adventures", value: 150, suffix: "+", color: "accent" },
                { icon: MapPin, label: "Miles Ridden", value: 25, suffix: "K+", color: "primary" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className={`w-16 h-16 rounded-full bg-${stat.color}/20 text-${stat.color} flex items-center justify-center mx-auto mb-4`}>
                    <stat.icon className="w-8 h-8" />
                  </div>
                  <div className={`text-3xl font-bold text-${stat.color} mb-2`}>
                    <AnimatedCounter 
                      end={stat.value} 
                      suffix={stat.suffix || ""} 
                      duration={2000}
                      startOnView={true}
                    />
                  </div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section className="relative py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="text-secondary">Join My</span>{" "}
                <span className="text-foreground">Journey</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Follow along as I navigate nursing school, chase adventures, and share the ups and downs 
                of balancing passion with purpose. Whether you're into healthcare, speed, adventure, or just 
                living life fully - there's something here for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="speed" 
                  size="lg"
                  className="px-8 py-4 rounded-full"
                >
                  Follow My Story
                  <Users className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-accent text-accent hover:bg-accent/10 px-8 py-4 rounded-full"
                >
                  Read My Blog
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};