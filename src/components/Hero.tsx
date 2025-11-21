"use client";

import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  name: string;
  title: string;
  bio: string;
  location: string;
  github?: string;
  linkedin?: string;
  email?: string;
}

export function Hero({ name, title, bio, location, github, linkedin, email }: HeroProps) {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-purple-600/30 rounded-full blur-3xl -top-48 -left-48 animate-pulse" />
        <div className="absolute w-96 h-96 bg-blue-600/30 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-4 orbitron"
          >
            <span className="gradient-text">{name}</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-3xl text-muted-foreground mb-6"
          >
            {title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6"
          >
            {bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm">{location}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center justify-center gap-4 mb-12"
          >
            {github && (
              <Button variant="outline" size="lg" className="glass-card group" asChild>
                <a href={github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2 group-hover:text-primary transition-colors" />
                  GitHub
                </a>
              </Button>
            )}
            {linkedin && (
              <Button variant="outline" size="lg" className="glass-card group" asChild>
                <a href={linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 mr-2 group-hover:text-primary transition-colors" />
                  LinkedIn
                </a>
              </Button>
            )}
            {email && (
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700" asChild>
                <a href={`mailto:${email}`}>
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Me
                </a>
              </Button>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex justify-center"
          >
            <button
              onClick={() => scrollToSection('skills')}
              className="animate-bounce"
              aria-label="Scroll to skills"
            >
              <ChevronDown className="w-8 h-8 text-primary" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}