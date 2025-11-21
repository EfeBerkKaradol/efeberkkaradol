"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { getPortfolioData } from "@/lib/portfolio-data";
import { PortfolioData } from "@/lib/types";

export default function Home() {
  const [data, setData] = useState<PortfolioData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const portfolioData = await getPortfolioData();
        setData(portfolioData);
      } catch (error) {
        console.error('Failed to load portfolio data:', error);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <h1 className="text-4xl font-bold mb-4 gradient-text">Configuration Required</h1>
          <p className="text-muted-foreground mb-4">
            Please set up your Supabase database to enable data persistence.
          </p>
          <p className="text-sm text-muted-foreground">
            Check the setup guide in the documentation.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero
        name={data.profile.name}
        title={data.profile.title}
        bio={data.profile.bio}
        location={data.profile.location}
        email={data.profile.email}
        github={data.profile.github}
        linkedin={data.profile.linkedin}
      />
      <Skills skills={data.skills} />
      <Education education={data.education} />
      <Experience experiences={data.experiences} />
      <Projects projects={data.projects} />
      <Contact
        email={data.profile.email}
        phone={data.profile.phone}
        location={data.profile.location}
      />
      <footer className="py-8 text-center text-muted-foreground border-t border-primary/20">
        <p>© 2025 {data.profile.name}. All rights reserved.</p>
      </footer>
    </div>
  );
}