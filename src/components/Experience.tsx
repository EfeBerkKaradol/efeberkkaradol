"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Briefcase } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Experience as ExperienceType } from "@/lib/types";

interface ExperienceProps {
  experiences: ExperienceType[];
}

export function Experience({ experiences }: ExperienceProps) {
  const formatDate = (date: string) => {
    if (!date) return 'Present';
    const d = new Date(date);
    return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 orbitron gradient-text">Work Experience</h2>
          <p className="text-muted-foreground text-lg">My professional journey and accomplishments</p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-[1.02]">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <CardTitle className="text-2xl flex items-center gap-2">
                        <Briefcase className="w-5 h-5 text-primary" />
                        {exp.title}
                      </CardTitle>
                      <CardDescription className="text-base">
                        <span className="text-foreground font-semibold">{exp.company}</span>
                      </CardDescription>
                    </div>
                    {exp.current && (
                      <Badge className="bg-gradient-to-r from-purple-600 to-blue-600">Current</Badge>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground pt-2">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(exp.startDate)} - {exp.current ? 'Present' : formatDate(exp.endDate)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="border-primary/30">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
