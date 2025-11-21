"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { Education as EducationType } from "@/lib/types";

interface EducationProps {
  education: EducationType[];
}

export const Education = ({ education }: EducationProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { year: "numeric", month: "short" });
  };

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 orbitron gradient-text">
            Education
          </h2>
          <p className="text-muted-foreground text-lg">
            Academic background and qualifications
          </p>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card rounded-xl p-6 md:p-8 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {edu.degree}
                      </h3>
                      <p className="text-lg text-primary font-semibold">
                        {edu.field}
                      </p>
                    </div>
                  </div>
                  
                  <div className="ml-14 space-y-2">
                    <p className="text-xl font-semibold text-foreground">
                      {edu.school}
                    </p>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>
                          {formatDate(edu.startDate)} -{" "}
                          {edu.current ? "Present" : formatDate(edu.endDate)}
                        </span>
                      </div>
                    </div>

                    {edu.gpa && (
                      <div className="text-sm">
                        <span className="text-muted-foreground">GPA: </span>
                        <span className="text-primary font-semibold">{edu.gpa}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {edu.description && (
                <div className="ml-14 mt-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              )}

              <div className="ml-14 mt-4 h-1 w-0 group-hover:w-full bg-gradient-to-r from-primary via-secondary to-accent rounded-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
    </section>
  );
};
