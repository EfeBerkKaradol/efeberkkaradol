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
              ```javascript
              "use client";

              import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
              import {Input} from "@/components/ui/input";
              import {Label} from "@/components/ui/label";
              import {Textarea} from "@/components/ui/textarea";
              import {Button} from "@/components/ui/button";
              import {Checkbox} from "@/components/ui/checkbox";
              import {Trash2, Plus} from "lucide-react";
              import {Experience} from "@/lib/types";

              interface ExperienceEditorProps {
                experiences: Experience[];
  onChange: (experiences: Experience[]) => void;
}

              export function ExperienceEditor({experiences, onChange}: ExperienceEditorProps) {
  const addExperience = () => {
    const newExperience: Experience = {
                id: Date.now().toString(),
              position: "Job Title", // Changed from 'title' to 'position'
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

  // The updateExperience and deleteExperience helpers are no longer used directly in the JSX
  // as the new code directly modifies the array within the onChange handlers.
  // However, deleteExperience is still used for the delete button.
  const deleteExperience = (id: string) => {
                onChange(experiences.filter((exp) => exp.id !== id));
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
                  {experiences.map((exp, index) => (
                    <div key={exp.id} className="p-4 rounded-lg glass-card space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold">Experience #{index + 1}</h3> {/* Changed to use index */}
                        <Button variant="destructive" size="sm" onClick={() => deleteExperience(exp.id)}>
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor={`position-${index}`}>Job Title</Label> {/* Added htmlFor */}
                          <Input
                            id={`position-${index}`} // Added id
                            value={exp.position} // Changed from exp.title to exp.position
                            onChange={(e) => {
                              const updated = [...experiences];
                              updated[index] = { ...updated[index], position: e.target.value }; // Direct update for position
                              onChange(updated);
                            }}
                            placeholder="e.g., Software Developer" // Added placeholder
                            className="glass-card" // Kept existing class
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor={`company-${index}`}>Company</Label> {/* Added htmlFor */}
                          <Input
                            id={`company-${index}`} // Added id
                            value={exp.company}
                            onChange={(e) => {
                              const updated = [...experiences];
                              updated[index] = { ...updated[index], company: e.target.value };
                              onChange(updated);
                            }}
                            placeholder="e.g., Tech Corp" // Added placeholder
                            className="glass-card" // Kept existing class
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`location-${index}`}>Location</Label> {/* Added htmlFor */}
                        <Input
                          id={`location-${index}`} // Added id
                          value={exp.location || ''} // Added defensive check
                          onChange={(e) => {
                            const updated = [...experiences];
                            updated[index] = { ...updated[index], location: e.target.value };
                            onChange(updated);
                          }}
                          placeholder="e.g., San Francisco, CA" // Added placeholder
                          className="glass-card" // Kept existing class
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4"> {/* Changed grid-cols-2 to grid */}
                        <div className="space-y-2">
                          <Label htmlFor={`startDate-${index}`}>Start Date</Label> {/* Added htmlFor */}
                          <Input
                            id={`startDate-${index}`} // Added id
                            // type="month" // Removed type="month"
                            value={exp.startDate}
                            onChange={(e) => {
                              const updated = [...experiences];
                              updated[index] = { ...updated[index], startDate: e.target.value };
                              onChange(updated);
                            }}
                            placeholder="e.g., Jan 2023" // Added placeholder
                            className="glass-card" // Kept existing class
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor={`endDate-${index}`}>End Date</Label> {/* Added htmlFor */}
                          <Input
                            id={`endDate-${index}`} // Added id
                            // type="month" // Removed type="month"
                            value={exp.endDate || ''} // Added defensive check
                            onChange={(e) => {
                              const updated = [...experiences];
                              updated[index] = { ...updated[index], endDate: e.target.value };
                              onChange(updated);
                            }}
                            placeholder="e.g., Present" // Added placeholder
                            disabled={exp.current}
                            className="glass-card" // Kept existing class
                          />
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input // Changed from Checkbox component to native input
                          type="checkbox"
                          id={`current-${index}`} // Changed id to use index
                          checked={exp.current || false} // Added defensive check
                          onChange={(e) => {
                            const updated = [...experiences];
                            updated[index] = {
                              ...updated[index],
                              current: e.target.checked,
                              endDate: e.target.checked ? '' : updated[index].endDate // Logic to clear endDate if current
                            };
                            onChange(updated);
                          }}
                          className="rounded border-gray-300" // Added class
                        />
                        <Label htmlFor={`current-${index}`}>Currently working here</Label> {/* Changed label text and htmlFor */}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`description-${index}`}>Description</Label> {/* Added htmlFor */}
                        <Textarea
                          id={`description-${index}`} // Added id
                          value={exp.description}
                          onChange={(e) => {
                            const updated = [...experiences];
                            updated[index] = { ...updated[index], description: e.target.value };
                            onChange(updated);
                          }}
                          placeholder="Describe your role and achievements..." // Added placeholder
                          rows={4} // Changed rows from 3 to 4
                          className="glass-card" // Kept existing class
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`technologies-${index}`}>Technologies (comma-separated)</Label> {/* Added htmlFor */}
                        <Input
                          id={`technologies-${index}`} // Added id
                          value={exp.technologies?.join(', ') || ''} // Added defensive check and optional chaining
                          onChange={(e) => {
                            const updated = [...experiences];
                            updated[index] = {
                              ...updated[index],
                              technologies: e.target.value.split(',').map(t => t.trim()).filter(Boolean)
                            };
                            onChange(updated);
                          }}
                          placeholder="e.g., React, Node.js, TypeScript"
                          className="glass-card" // Kept existing class
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
              );
}
              ```
