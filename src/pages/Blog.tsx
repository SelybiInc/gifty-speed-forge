import { useState } from "react";
import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { SpeedBackground } from "@/components/SpeedBackground";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, Filter } from "lucide-react";
import speedTrail from "@/assets/speed-trail.jpg";

const blogPosts = [
  {
    id: 1,
    title: "Mastering the Art of Cornering at High Speeds",
    excerpt: "Learn the essential techniques for taking corners like a pro while maintaining maximum speed and safety.",
    category: "Techniques",
    date: "2024-01-15",
    readTime: "5 min read",
    image: speedTrail,
    featured: true
  },
  {
    id: 2,
    title: "My First Track Day Experience",
    excerpt: "Discover what it's really like to push your limits on a professional racing track for the first time.",
    category: "Experiences",
    date: "2024-01-10",
    readTime: "8 min read",
    image: speedTrail,
    featured: false
  },
  {
    id: 3,
    title: "Top 5 Speed Bikes for Beginners",
    excerpt: "A comprehensive guide to choosing your first speed bike, focusing on safety, performance, and value.",
    category: "Reviews",
    date: "2024-01-05",
    readTime: "6 min read",
    image: speedTrail,
    featured: false
  },
  {
    id: 4,
    title: "Safety Gear That Saved My Life",
    excerpt: "Why investing in quality safety equipment is the most important decision any rider can make.",
    category: "Safety",
    date: "2024-01-01",
    readTime: "4 min read",
    image: speedTrail,
    featured: false
  },
  {
    id: 5,
    title: "Night Riding: Beauty and Dangers",
    excerpt: "The unique challenges and incredible experiences of riding through the night on empty highways.",
    category: "Experiences",
    date: "2023-12-28",
    readTime: "7 min read",
    image: speedTrail,
    featured: false
  },
  {
    id: 6,
    title: "Bike Maintenance for Speed Enthusiasts",
    excerpt: "Essential maintenance tips to keep your speed bike performing at its peak for years to come.",
    category: "Maintenance",
    date: "2023-12-25",
    readTime: "10 min read",
    image: speedTrail,
    featured: false
  }
];

const categories = ["All", "Techniques", "Experiences", "Reviews", "Safety", "Maintenance"];

export const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

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
              <span className="text-primary neon-pulse">Speed</span>{" "}
              <span className="text-foreground">Chronicles</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stories from the road, technical insights, and everything about the world of speed biking.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-primary">Latest Posts</h2>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
                className="border-primary/50 text-primary hover:bg-primary/10"
              >
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>

            {(showFilters || window.innerWidth >= 768) && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="flex flex-wrap gap-3"
              >
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={`${
                      selectedCategory === category
                        ? "bg-primary text-primary-foreground"
                        : "border-primary/50 text-primary hover:bg-primary/10"
                    } speed-transition`}
                  >
                    {category}
                  </Button>
                ))}
              </motion.div>
            )}
          </motion.div>

          {/* Featured Post */}
          {featuredPost && selectedCategory === "All" && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-16"
            >
              <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20 hover-glow speed-transition">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-64 lg:h-full object-cover hover:scale-105 speed-transition"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <Badge variant="outline" className="w-fit mb-4 border-secondary text-secondary">
                      {featuredPost.category}
                    </Badge>
                    <h3 className="text-2xl font-bold mb-4 text-primary">{featuredPost.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(featuredPost.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    <Button className="w-fit bg-primary hover:bg-primary/90 text-primary-foreground">
                      Read Article
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          )}

          {/* Blog Posts Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {regularPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20 hover-glow speed-transition group cursor-pointer">
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 speed-transition"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="outline" className="bg-card/80 backdrop-blur-sm border-accent text-accent">
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-3 text-primary group-hover:text-primary/80 speed-transition">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Load More Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <Button 
              variant="outline" 
              size="lg"
              className="border-secondary text-secondary hover:bg-secondary/10 px-8"
            >
              Load More Posts
            </Button>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};