"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Trash2, Plus } from "lucide-react";
import { Experience } from "@/lib/types";

interface ExperienceEditorProps {
  experiences: Experience[];
  onChange: (experiences: Experience[]) => void;
}

export function ExperienceEditor({ experiences, onChange }: ExperienceEditorProps) {
  const addExperience = () => {
    const newExperience: Experience = {
      id: Date.now().toString(),
      title: "Job Title",
      company: "Company Name",
      location: "Location",
      startDate: new Date().toISOString().slice(0, 7),
      endDate: "",
      current: true,
      description: "Job description...",
      technologies: [],
    };
    onChange([...experiences, newExperience]);
  };

  const updateExperience = (id: string, field: keyof Experience, value: string | boolean | string[]) => {
    onChange(
      experiences.map((exp) => (exp.id === id ? { ...exp, [field]: value } : exp))
    );
  };

  const deleteExperience = (id: string) => {
    onChange(experiences.filter((exp) => exp.id !== id));
  };

  const updateTechnologies = (id: string, value: string) => {
    const technologies = value.split(",").map((t) => t.trim()).filter(Boolean);
    updateExperience(id, "technologies", technologies);
  };

  return (
    <Card className="glass-card border-primary/20">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Experience Management</CardTitle>
        <Button onClick={addExperience} className="bg-gradient-to-r from-purple-600 to-blue-600">
          <Plus className="w-4 h-4 mr-2" />
          Add Experience
        </Button>
      </CardHeader>
      <CardContent className="space-y-6">
        {experiences.map((exp) => (
          <div key={exp.id} className="p-4 rounded-lg glass-card space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Experience #{exp.id}</h3>
              <Button variant="destructive" size="sm" onClick={() => deleteExperience(exp.id)}>
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Job Title</Label>
                <Input
                  value={exp.title}
                  onChange={(e) => updateExperience(exp.id, "title", e.target.value)}
                  className="glass-card"
                />
              </div>
              <div className="space-y-2">
                <Label>Company</Label>
                <Input
                  value={exp.company}
                  onChange={(e) => updateExperience(exp.id, "company", e.target.value)}
                  className="glass-card"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Location</Label>
              <Input
                value={exp.location}
                onChange={(e) => updateExperience(exp.id, "location", e.target.value)}
                className="glass-card"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Start Date</Label>
                <Input
                  type="month"
                  value={exp.startDate}
                  onChange={(e) => updateExperience(exp.id, "startDate", e.target.value)}
                  className="glass-card"
                />
              </div>
              <div className="space-y-2">
                <Label>End Date</Label>
                <Input
                  type="month"
                  value={exp.endDate}
                  onChange={(e) => updateExperience(exp.id, "endDate", e.target.value)}
                  disabled={exp.current}
                  className="glass-card"
                />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id={`current-${exp.id}`}
                checked={exp.current}
                onCheckedChange={(checked) => updateExperience(exp.id, "current", checked as boolean)}
              />
              <Label htmlFor={`current-${exp.id}`}>Current Position</Label>
            </div>
            <div className="space-y-2">
              <Label>Description</Label>
              <Textarea
                value={exp.description}
                onChange={(e) => updateExperience(exp.id, "description", e.target.value)}
                rows={3}
                className="glass-card"
              />
            </div>
            <div className="space-y-2">
              <Label>Technologies (comma-separated)</Label>
              <Input
                value={exp.technologies.join(", ")}
                onChange={(e) => updateTechnologies(exp.id, e.target.value)}
                placeholder="React, Node.js, TypeScript"
                className="glass-card"
              />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
