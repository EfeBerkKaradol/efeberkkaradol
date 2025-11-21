"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { PortfolioData } from "@/lib/types";

interface ProfileEditorProps {
  profile: PortfolioData["profile"];
  onChange: (profile: PortfolioData["profile"]) => void;
}

export function ProfileEditor({ profile, onChange }: ProfileEditorProps) {
  const handleChange = (field: keyof PortfolioData["profile"], value: string) => {
    onChange({ ...profile, [field]: value });
  };

  return (
    <Card className="glass-card border-primary/20">
      <CardHeader>
        <CardTitle>Profile Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              value={profile.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className="glass-card"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="title">Professional Title</Label>
            <Input
              id="title"
              value={profile.title}
              onChange={(e) => handleChange("title", e.target.value)}
              className="glass-card"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="bio">Bio</Label>
          <Textarea
            id="bio"
            value={profile.bio}
            onChange={(e) => handleChange("bio", e.target.value)}
            rows={4}
            className="glass-card"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={profile.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="glass-card"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              value={profile.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              className="glass-card"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            value={profile.location}
            onChange={(e) => handleChange("location", e.target.value)}
            className="glass-card"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="github">GitHub URL</Label>
            <Input
              id="github"
              value={profile.github || ""}
              onChange={(e) => handleChange("github", e.target.value)}
              className="glass-card"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="linkedin">LinkedIn URL</Label>
            <Input
              id="linkedin"
              value={profile.linkedin || ""}
              onChange={(e) => handleChange("linkedin", e.target.value)}
              className="glass-card"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
