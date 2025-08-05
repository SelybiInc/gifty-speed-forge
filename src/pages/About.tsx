import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { SpeedBackground } from "@/components/SpeedBackground";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Zap, Target, Award, Clock, MapPin, Wrench, Shield, Flame, Trophy, Users, Star } from "lucide-react";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import giftyPortrait from "@/assets/gifty-portrait.jpg";
import bikerHelmet from "@/assets/biker-helmet-hud.jpg";
import speedTrail from "@/assets/speed-trail.jpg";

export const About = () => {
  const sections = [
    {
      title: "My Healthcare Calling",
      icon: Heart,
      content: "Growing up, I always wanted to help people heal. Now as a nursing student, I'm learning that caring for others is just as thrilling as any ride - it's about saving lives and making a difference every single day.",
      color: "primary"
    },
    {
      title: "Why Speed Heals My Soul",
      icon: Zap,
      content: "After long days in clinical rotations or studying for exams, nothing clears my mind like the open road. Speed isn't just about going fast - it's my meditation, my escape, my way of feeling truly alive.",
      color: "secondary"
    },
    {
      title: "Family Adventures",
      icon: Target,
      content: "My family thinks I'm crazy for loving speed, but they support my dreams anyway. Whether it's family hikes, beach trips, or teaching my little sister to be fearless, they're my anchor and my inspiration.",
      color: "accent"
    }
  ];

  const achievements = [
    { label: "Nursing GPA", value: 3.8, suffix: "/4.0" },
    { label: "Clinical Hours", value: 800, suffix: "+" },
    { label: "Patients Cared For", value: 150, suffix: "+" },
    { label: "Miles Ridden", value: 50, suffix: "K+" },
    { label: "Top Speed", value: 280, suffix: " KM/H" },
    { label: "Adventures", value: 200, suffix: "+" }
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
              Nursing student, adventure seeker, speed enthusiast, and family-first person living life to the fullest.
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
                  <p className="text-primary">Nursing Student & Adventure Seeker</p>
                </div>
              </div>

              <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20">
                <h3 className="text-xl font-bold mb-4 text-primary">Life Highlights</h3>
                <div className="grid grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={achievement.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="text-center p-3 bg-dark-surface rounded-lg"
                    >
                      <div className="text-lg font-bold text-primary">
                        <AnimatedCounter 
                          end={achievement.value} 
                          suffix={achievement.suffix} 
                          duration={1500}
                          startOnView={true}
                        />
                      </div>
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
            <h2 className="text-3xl font-bold text-center mb-8 text-primary">My Passions & Skills</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Nursing Care", "Patient Advocacy", "Emergency Response", "IV Therapy",
                "High-Speed Riding", "Track Navigation", "Bike Maintenance", "Safety Protocols",
                "Mountain Hiking", "Photography", "Family Adventures", "Mentoring Students",
                "Community Service", "Health Education", "Crisis Management", "Team Leadership"
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
            className="grid lg:grid-cols-2 gap-12 items-center mb-20"
          >
            <div>
              <h2 className="text-3xl font-bold mb-6">
                <span className="text-secondary">Life</span>{" "}
                <span className="text-foreground">Balance</span>{" "}
                <span className="text-accent">Journey</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Balancing nursing school, family time, and my passion for speed isn't always easy, 
                but it's taught me that life is about finding harmony between caring for others and 
                caring for yourself. Every clinical rotation teaches me compassion, every family 
                gathering reminds me what truly matters, and every ride clears my mind for whatever comes next.
              </p>
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  <span className="text-sm">Academic Excellence</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-secondary" />
                  <span className="text-sm">Adventure Spirit</span>
                </div>
              </div>
            </div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={bikerHelmet}
                alt="Life balance - nursing and adventure"
                className="w-full rounded-2xl object-cover neon-glow-secondary"
              />
            </motion.div>
          </motion.section>

          {/* Racing Philosophy Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 text-primary">My Life Philosophy</h2>
              <p className="text-lg text-muted-foreground">
                Life is about balance, growth, and making a positive impact while staying true to who you are.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Compassionate Care",
                  description: "Every patient deserves dignity, respect, and the best care possible. Nursing has taught me that healing is both science and art.",
                  color: "primary"
                },
                {
                  icon: Flame,
                  title: "Passionate Living",
                  description: "Whether it's acing an exam or hitting 250km/h, I believe in giving everything your all and living without regrets.",
                  color: "secondary"
                },
                {
                  icon: Target,
                  title: "Goal-Oriented",
                  description: "From graduating nursing school to conquering new riding challenges, I set ambitious goals and work relentlessly to achieve them.",
                  color: "accent"
                },
                {
                  icon: Users,
                  title: "Family Values",
                  description: "My family is my foundation. They remind me what's truly important and keep me grounded through all of life's adventures.",
                  color: "primary"
                },
                {
                  icon: Wrench,
                  title: "Continuous Learning",
                  description: "From mastering new medical procedures to understanding bike mechanics, I'm always eager to learn and grow.",
                  color: "secondary"
                },
                {
                  icon: Trophy,
                  title: "Excellence in All",
                  description: "Whether caring for patients or perfecting my riding technique, I strive for excellence in everything I do.",
                  color: "accent"
                }
              ].map((philosophy, index) => (
                <motion.div
                  key={philosophy.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 h-full bg-card/50 backdrop-blur-sm border-primary/20 hover-glow speed-transition">
                    <div className={`w-12 h-12 rounded-full bg-${philosophy.color}/20 text-${philosophy.color} flex items-center justify-center mb-4`}>
                      <philosophy.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold mb-3 text-primary">{philosophy.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{philosophy.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Bike Collection Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">
                <span className="text-accent">My</span>{" "}
                <span className="text-foreground">Garage</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Each bike in my collection tells a story and serves a purpose. From track beasts to touring companions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  name: "Kawasaki Ninja ZX-10R",
                  type: "Track Beast",
                  specs: "998cc • 200hp • 0-100 in 2.8s",
                  description: "My go-to machine for track days. Pure adrenaline wrapped in carbon fiber.",
                  image: speedTrail,
                  status: "Current"
                },
                {
                  name: "Yamaha R1M",
                  type: "Racing Machine",
                  specs: "998cc • 200hp • Electronics Package",
                  description: "State-of-the-art electronics meet raw power. Perfect for competitive racing.",
                  image: speedTrail,
                  status: "Current"
                },
                {
                  name: "Ducati Panigale V4",
                  type: "Italian Stallion",
                  specs: "1103cc • 214hp • Pure Emotion",
                  description: "When you want to feel the passion of Italian engineering in every twist.",
                  image: speedTrail,
                  status: "Dream"
                },
                {
                  name: "BMW S1000RR",
                  type: "Precision Tool",
                  specs: "999cc • 207hp • German Engineering",
                  description: "Clinical precision meets explosive performance. The thinking rider's choice.",
                  image: speedTrail,
                  status: "Previous"
                }
              ].map((bike, index) => (
                <motion.div
                  key={bike.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20 hover-glow speed-transition">
                    <div className="relative">
                      <img
                        src={bike.image}
                        alt={bike.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge 
                          variant="outline" 
                          className={`${
                            bike.status === 'Current' ? 'bg-primary/80 text-white border-primary' :
                            bike.status === 'Dream' ? 'bg-accent/80 text-white border-accent' :
                            'bg-secondary/80 text-white border-secondary'
                          }`}
                        >
                          {bike.status}
                        </Badge>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-lg font-bold">{bike.name}</h3>
                        <p className="text-sm opacity-90">{bike.type}</p>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-primary font-mono text-sm mb-3">{bike.specs}</p>
                      <p className="text-muted-foreground text-sm">{bike.description}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Journey Timeline */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 text-primary">My Journey</h2>
              <p className="text-muted-foreground">The milestones that shaped my passion for speed</p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-accent opacity-30"></div>

              {[
                {
                  year: "2016",
                  title: "First Ride",
                  description: "Got my first bike - a Ninja 300. The moment I felt that power, I knew this was my calling.",
                  icon: Heart,
                  side: "left"
                },
                {
                  year: "2018",
                  title: "First Track Day",
                  description: "Took my skills to the track. Learning proper racing lines and safety protocols.",
                  icon: Target,
                  side: "right"
                },
                {
                  year: "2020",
                  title: "Racing License",
                  description: "Earned my racing license and started competing in amateur championships.",
                  icon: Award,
                  side: "left"
                },
                {
                  year: "2022",
                  title: "First Win",
                  description: "Won my first regional championship race. The adrenaline was indescribable.",
                  icon: Trophy,
                  side: "right"
                },
                {
                  year: "2024",
                  title: "Speed Influencer",
                  description: "Started sharing my passion online, building a community of fellow speed enthusiasts.",
                  icon: Users,
                  side: "left"
                }
              ].map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: milestone.side === 'left' ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center mb-12 ${
                    milestone.side === 'left' ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div className={`w-1/2 ${milestone.side === 'left' ? 'pr-8' : 'pl-8'}`}>
                    <Card className={`p-6 bg-card/50 backdrop-blur-sm border-primary/20 ${
                      milestone.side === 'left' ? 'ml-0' : 'mr-0'
                    }`}>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                          <milestone.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-primary font-bold text-lg">{milestone.year}</div>
                          <div className="text-sm text-muted-foreground">{milestone.title}</div>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm">{milestone.description}</p>
                    </Card>
                  </div>
                  
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"></div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Call to Action */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="p-12 bg-speed-gradient">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Join the Ride?</h2>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                Whether you're a beginner looking to learn or an experienced rider wanting to connect, 
                I'm here to share the passion for speed and the open road.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
                >
                  Follow My Journey
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
                >
                  Get Riding Tips
                </Button>
              </div>
            </Card>
          </motion.section>
        </div>
      </div>
    </PageTransition>
  );
};