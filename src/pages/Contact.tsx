import { useState } from "react";
import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { SpeedBackground } from "@/components/SpeedBackground";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { 
  Mail, 
  MessageSquare, 
  Instagram, 
  Youtube, 
  Twitter, 
  Send,
  MapPin,
  Phone,
  Clock
} from "lucide-react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast.success("Message sent successfully! I'll get back to you soon.");
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      href: "#",
      color: "text-pink-500",
      followers: "25K"
    },
    {
      name: "YouTube",
      icon: Youtube,
      href: "#",
      color: "text-red-500",
      followers: "15K"
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "#",
      color: "text-blue-500",
      followers: "10K"
    }
  ];

  const contactInfo = [
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567"
    },
    {
      icon: Clock,
      label: "Response Time",
      value: "Within 24 hours"
    }
  ];

  return (
    <PageTransition>
      <SpeedBackground />
      <div className="relative min-h-screen pt-20 pb-12">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-primary neon-pulse">Get In</span>{" "}
              <span className="text-foreground">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have a question about speed biking? Want to collaborate? Or just want to chat about bikes? 
              I'd love to hear from you!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20">
                <div className="flex items-center gap-3 mb-6">
                  <MessageSquare className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold text-primary">Send Message</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Your Name
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your name"
                        required
                        className="bg-dark-surface border-primary/30 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Email Address
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        required
                        className="bg-dark-surface border-primary/30 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Subject
                    </label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      required
                      className="bg-dark-surface border-primary/30 focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Message
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me what's on your mind..."
                      required
                      rows={6}
                      className="bg-dark-surface border-primary/30 focus:border-primary resize-none"
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 neon-glow"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Contact Info & Social */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Contact Information */}
              <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20">
                <div className="flex items-center gap-3 mb-6">
                  <Mail className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold text-primary">Contact Info</h2>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="flex items-center gap-4"
                    >
                      <div className="p-3 rounded-full bg-primary/20 text-primary">
                        <info.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <p className="font-medium text-foreground">{info.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>

              {/* Social Media */}
              <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20">
                <h2 className="text-2xl font-bold text-primary mb-6">Follow My Journey</h2>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      className="flex items-center justify-between p-4 rounded-lg bg-dark-surface hover:bg-dark-surface/80 speed-transition group"
                    >
                      <div className="flex items-center gap-3">
                        <social.icon className={`w-6 h-6 ${social.color}`} />
                        <div>
                          <p className="font-medium text-foreground group-hover:text-primary speed-transition">
                            {social.name}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {social.followers} followers
                          </p>
                        </div>
                      </div>
                      <div className="text-muted-foreground group-hover:text-primary speed-transition">
                        →
                      </div>
                    </motion.a>
                  ))}
                </div>
              </Card>

              {/* Quick Response Promise */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
                className="p-6 rounded-lg bg-speed-gradient text-center"
              >
                <h3 className="font-bold text-lg mb-2 text-white">Quick Response Guarantee</h3>
                <p className="text-white/90 text-sm">
                  I personally read and respond to every message within 24 hours. 
                  Your thoughts and questions matter to me!
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Blueprint Background Effect */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-5">
            <svg width="100%" height="100%" className="absolute inset-0">
              <defs>
                <pattern
                  id="blueprint"
                  width="100"
                  height="100"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 100 0 L 0 0 0 100"
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="1"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="20"
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#blueprint)" />
            </svg>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};