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
        bio = { data.profile.bio }
        location = { data.profile.location }
        email = { data.profile.email }
        github = { data.profile.github }
        linkedin = { data.profile.linkedin }
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
    </div >
  );
}