"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Trash2, Plus } from "lucide-react";
import { Project } from "@/lib/types";

interface ProjectsEditorProps {
  projects: Project[];
  onChange: (projects: Project[]) => void;
}

export function ProjectsEditor({ projects, onChange }: ProjectsEditorProps) {
  const addProject = () => {
    const newProject: Project = {
      id: Date.now().toString(),
      title: "Project Title",
      description: "Project description...",
      technologies: [],
      featured: false,
    };
    onChange([...projects, newProject]);
  };

  const updateProject = (id: string, field: keyof Project, value: string | boolean | string[]) => {
    onChange(projects.map((proj) => (proj.id === id ? { ...proj, [field]: value } : proj)));
  };

  const deleteProject = (id: string) => {
    onChange(projects.filter((proj) => proj.id !== id));
  };

  const updateTechnologies = (id: string, value: string) => {
    const technologies = value.split(",").map((t) => t.trim()).filter(Boolean);
    updateProject(id, "technologies", technologies);
  };

  return (
    <Card className="glass-card border-primary/20">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Projects Management</CardTitle>
        <Button onClick={addProject} className="bg-gradient-to-r from-purple-600 to-blue-600">
          <Plus className="w-4 h-4 mr-2" />
          Add Project
        </Button>
      </CardHeader>
      <CardContent className="space-y-6">
        {projects.map((project) => (
          <div key={project.id} className="p-4 rounded-lg glass-card space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Project #{project.id}</h3>
              <Button variant="destructive" size="sm" onClick={() => deleteProject(project.id)}>
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
            <div className="space-y-2">
              <Label>Project Title</Label>
              <Input
                value={project.title}
                onChange={(e) => updateProject(project.id, "title", e.target.value)}
                className="glass-card"
              />
            </div>
            <div className="space-y-2">
              <Label>Description</Label>
              <Textarea
                value={project.description}
                onChange={(e) => updateProject(project.id, "description", e.target.value)}
                rows={3}
                className="glass-card"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Live URL (optional)</Label>
                <Input
                  value={project.liveUrl || ""}
                  onChange={(e) => updateProject(project.id, "liveUrl", e.target.value)}
                  placeholder="https://example.com"
                  className="glass-card"
                />
              </div>
              <div className="space-y-2">
                <Label>GitHub URL (optional)</Label>
                <Input
                  value={project.githubUrl || ""}
                  onChange={(e) => updateProject(project.id, "githubUrl", e.target.value)}
                  placeholder="https://github.com/user/repo"
                  className="glass-card"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Technologies (comma-separated)</Label>
              <Input
                value={project.technologies.join(", ")}
                onChange={(e) => updateTechnologies(project.id, e.target.value)}
                placeholder="React, TypeScript, Tailwind CSS"
                className="glass-card"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id={`featured-${project.id}`}
                checked={project.featured}
                onCheckedChange={(checked) => updateProject(project.id, "featured", checked as boolean)}
              />
              <Label htmlFor={`featured-${project.id}`}>Featured Project</Label>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
