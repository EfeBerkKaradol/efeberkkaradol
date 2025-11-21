"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Trash2, Plus } from "lucide-react";
import { Skill } from "@/lib/types";

interface SkillsEditorProps {
  skills: Skill[];
  onChange: (skills: Skill[]) => void;
}

export function SkillsEditor({ skills, onChange }: SkillsEditorProps) {
  const addSkill = () => {
    const newSkill: Skill = {
      id: Date.now().toString(),
      name: "New Skill",
      level: 50,
      category: "Frontend",
      icon: "⚡",
    };
    onChange([...skills, newSkill]);
  };

  const updateSkill = (id: string, field: keyof Skill, value: string | number) => {
    onChange(skills.map((skill) => (skill.id === id ? { ...skill, [field]: value } : skill)));
  };

  const deleteSkill = (id: string) => {
    onChange(skills.filter((skill) => skill.id !== id));
  };

  return (
    <Card className="glass-card border-primary/20">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Skills Management</CardTitle>
        <Button onClick={addSkill} className="bg-gradient-to-r from-purple-600 to-blue-600">
          <Plus className="w-4 h-4 mr-2" />
          Add Skill
        </Button>
      </CardHeader>
      <CardContent className="space-y-6">
        {skills.map((skill) => (
          <div key={skill.id} className="p-4 rounded-lg glass-card space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Skill #{skill.id}</h3>
              <Button variant="destructive" size="sm" onClick={() => deleteSkill(skill.id)}>
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label>Name</Label>
                <Input
                  value={skill.name}
                  onChange={(e) => updateSkill(skill.id, "name", e.target.value)}
                  className="glass-card"
                />
              </div>
              <div className="space-y-2">
                <Label>Category</Label>
                <Input
                  value={skill.category}
                  onChange={(e) => updateSkill(skill.id, "category", e.target.value)}
                  className="glass-card"
                />
              </div>
              <div className="space-y-2">
                <Label>Icon (Emoji)</Label>
                <Input
                  value={skill.icon || ""}
                  onChange={(e) => updateSkill(skill.id, "icon", e.target.value)}
                  className="glass-card"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Level: {skill.level}%</Label>
              <Slider
                value={[skill.level]}
                onValueChange={(value) => updateSkill(skill.id, "level", value[0])}
                max={100}
                step={5}
              />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
