"use client";

import { useState } from "react";
import { Education } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Trash2, GraduationCap } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

interface EducationEditorProps {
  education: Education[];
  onChange: (education: Education[]) => void;
}

export function EducationEditor({ education, onChange }: EducationEditorProps) {
  const [editingId, setEditingId] = useState<string | null>(null);

  const addEducation = () => {
    const newEducation: Education = {
      id: Date.now().toString(),
      degree: "",
      field: "",
      school: "",
      location: "",
      startDate: "",
      endDate: "",
      current: false,
      gpa: "",
      description: "",
    };
    onChange([...education, newEducation]);
    setEditingId(newEducation.id);
  };

  const updateEducation = (id: string, updates: Partial<Education>) => {
    onChange(
      education.map((edu) =>
        edu.id === id ? { ...edu, ...updates } : edu
      )
    );
  };

  const deleteEducation = (id: string) => {
    onChange(education.filter((edu) => edu.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold orbitron gradient-text flex items-center gap-2">
          <GraduationCap className="w-6 h-6" />
          Education Management
        </h2>
        <Button
          onClick={addEducation}
          className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Education
        </Button>
      </div>

      <div className="grid gap-6">
        {education.map((edu) => (
          <Card key={edu.id} className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{edu.degree || "New Education"}</span>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => deleteEducation(edu.id)}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor={`degree-${edu.id}`}>Degree *</Label>
                  <Input
                    id={`degree-${edu.id}`}
                    value={edu.degree}
                    onChange={(e) =>
                      updateEducation(edu.id, { degree: e.target.value })
                    }
                    placeholder="e.g., Bachelor of Science"
                    className="glass-card"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor={`field-${edu.id}`}>Field of Study *</Label>
                  <Input
                    id={`field-${edu.id}`}
                    value={edu.field}
                    onChange={(e) =>
                      updateEducation(edu.id, { field: e.target.value })
                    }
                    placeholder="e.g., Computer Engineering"
                    className="glass-card"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor={`school-${edu.id}`}>School/University *</Label>
                  <Input
                    id={`school-${edu.id}`}
                    value={edu.school}
                    onChange={(e) =>
                      updateEducation(edu.id, { school: e.target.value })
                    }
                    placeholder="e.g., TOBB Economy and Technology University"
                    className="glass-card"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor={`location-${edu.id}`}>Location *</Label>
                  <Input
                    id={`location-${edu.id}`}
                    value={edu.location}
                    onChange={(e) =>
                      updateEducation(edu.id, { location: e.target.value })
                    }
                    placeholder="e.g., Ankara, Turkey"
                    className="glass-card"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor={`startDate-${edu.id}`}>Start Date (YYYY-MM) *</Label>
                  <Input
                    id={`startDate-${edu.id}`}
                    type="month"
                    value={edu.startDate}
                    onChange={(e) =>
                      updateEducation(edu.id, { startDate: e.target.value })
                    }
                    className="glass-card"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor={`endDate-${edu.id}`}>
                    End Date (YYYY-MM) {edu.current ? "(Optional)" : "*"}
                  </Label>
                  <Input
                    id={`endDate-${edu.id}`}
                    type="month"
                    value={edu.endDate}
                    onChange={(e) =>
                      updateEducation(edu.id, { endDate: e.target.value })
                    }
                    disabled={edu.current}
                    className="glass-card"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor={`gpa-${edu.id}`}>GPA (Optional)</Label>
                  <Input
                    id={`gpa-${edu.id}`}
                    value={edu.gpa}
                    onChange={(e) =>
                      updateEducation(edu.id, { gpa: e.target.value })
                    }
                    placeholder="e.g., 3.8/4.0"
                    className="glass-card"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id={`current-${edu.id}`}
                    checked={edu.current}
                    onCheckedChange={(checked) =>
                      updateEducation(edu.id, {
                        current: checked as boolean,
                        endDate: checked ? "" : edu.endDate,
                      })
                    }
                  />
                  <Label
                    htmlFor={`current-${edu.id}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Currently Studying
                  </Label>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor={`description-${edu.id}`}>Description (Optional)</Label>
                <Textarea
                  id={`description-${edu.id}`}
                  value={edu.description}
                  onChange={(e) =>
                    updateEducation(edu.id, { description: e.target.value })
                  }
                  placeholder="e.g., Completed in 3.5 years. Focused on full-stack development..."
                  rows={3}
                  className="glass-card"
                />
              </div>
            </CardContent>
          </Card>
        ))}

        {education.length === 0 && (
          <Card className="glass-card">
            <CardContent className="py-12 text-center">
              <GraduationCap className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
              <p className="text-muted-foreground">
                No education entries yet. Click "Add Education" to get started.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
