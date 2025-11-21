"use client";

import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Save } from "lucide-react";
import Link from "next/link";
import { PortfolioData } from "@/lib/types";
import { getPortfolioData, savePortfolioData, defaultPortfolioData } from "@/lib/portfolio-data";
import { ProfileEditor } from "./ProfileEditor";
import { SkillsEditor } from "./SkillsEditor";
import { EducationEditor } from "./EducationEditor";
import { ExperienceEditor } from "./ExperienceEditor";
import { ProjectsEditor } from "./ProjectsEditor";
import { useRouter } from "next/navigation";

export function AdminDashboard() {
  const router = useRouter();
  const [data, setData] = useState<PortfolioData>(defaultPortfolioData);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    setData(getPortfolioData());
  }, []);

  const handleSave = () => {
    setIsSaving(true);
    savePortfolioData(data);
    setTimeout(() => {
      setIsSaving(false);
      router.push("/");
    }, 500);
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="outline" asChild className="glass-card">
              <Link href="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Portfolio
              </Link>
            </Button>
            <h1 className="text-3xl font-bold orbitron gradient-text">Admin Dashboard</h1>
          </div>
          <Button
            onClick={handleSave}
            disabled={isSaving}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
          >
            <Save className="w-4 h-4 mr-2" />
            {isSaving ? "Saving..." : "Save Changes"}
          </Button>
        </div>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="glass-card p-1">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
          </TabsList>

          <TabsContent value="profile">
            <ProfileEditor
              profile={data.profile}
              onChange={(profile) => setData({ ...data, profile })}
            />
          </TabsContent>

          <TabsContent value="skills">
            <SkillsEditor
              skills={data.skills}
              onChange={(skills) => setData({ ...data, skills })}
            />
          </TabsContent>

          <TabsContent value="education">
            <EducationEditor
              education={data.education}
              onChange={(education) => setData({ ...data, education })}
            />
          </TabsContent>

          <TabsContent value="experience">
            <ExperienceEditor
              experiences={data.experiences}
              onChange={(experiences) => setData({ ...data, experiences })}
            />
          </TabsContent>

          <TabsContent value="projects">
            <ProjectsEditor
              projects={data.projects}
              onChange={(projects) => setData({ ...data, projects })}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}