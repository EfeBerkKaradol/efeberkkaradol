import { PortfolioData } from './types';
import { supabase } from './supabase';

export const defaultPortfolioData: PortfolioData = {
  profile: {
    name: "Efe Berk Karadöl",
    title: "Software Developer & Computer Engineer",
    bio: "Passionate Computer Engineer with expertise in full-stack development. Experienced in React, Angular, Spring Boot, and Unity. Successfully completed university in 3.5 years and developed various projects including AI-powered job filtering, hospital simulation systems, and military operation simulators. Specialized in both web and game development with a strong foundation in modern technologies.",
    email: "efeberkkaradol@gmail.com",
    phone: "+90 553 297 67 87",
    location: "Yenimahalle, Ankara, Turkey",
    github: "https://github.com/efeberkkaradol",
    linkedin: "https://www.linkedin.com/in/efe-berk-karadol-748543210/",
  },
  skills: [
    { id: '1', name: 'Java', level: 90, category: 'Backend', icon: '☕' },
    { id: '2', name: 'Spring Boot', level: 85, category: 'Backend', icon: '🍃' },
    { id: '3', name: 'React.js', level: 90, category: 'Frontend', icon: '⚛️' },
    { id: '4', name: 'Angular', level: 85, category: 'Frontend', icon: '🅰️' },
    { id: '5', name: 'JavaScript', level: 90, category: 'Frontend', icon: '⚡' },
    { id: '6', name: 'TypeScript', level: 88, category: 'Frontend', icon: '📘' },
    { id: '7', name: 'C#', level: 80, category: 'Backend', icon: '#️⃣' },
    { id: '8', name: 'Unity', level: 75, category: 'Game Dev', icon: '🎮' },
    { id: '9', name: 'Python', level: 70, category: 'Backend', icon: '🐍' },
    { id: '10', name: 'Oracle SQL', level: 80, category: 'Database', icon: '💾' },
    { id: '11', name: 'PostgreSQL', level: 80, category: 'Database', icon: '🐘' },
    { id: '12', name: 'Tailwind CSS', level: 85, category: 'Frontend', icon: '🎨' },
    { id: '13', name: 'Material UI', level: 82, category: 'Frontend', icon: '🎭' },
    { id: '14', name: 'HTML & CSS', level: 90, category: 'Frontend', icon: '🌐' },
    { id: '15', name: 'PHP', level: 70, category: 'Backend', icon: '🐘' },
  ],
  education: [
    {
      id: '1',
      degree: 'Bachelor of Science',
      field: 'Computer Engineering',
      school: 'TOBB Economy and Technology University',
      location: 'Ankara, Turkey',
      startDate: '2020-09',
      endDate: '2024-02',
      current: false,
      description: 'Completed in 3.5 years. Focused on full-stack development, artificial intelligence, and game development. Developed multiple projects including AI-powered job filtering system and military operation simulators.'
    }
  ],
  experiences: [
    {
      id: '1',
      title: 'Software Developer',
      company: 'Innova',
      location: 'Ankara, Turkey',
      startDate: '2024-09',
      endDate: '',
      current: true,
      description: 'Fixing bugs detected by customers and test teams in legacy projects. Designed and developed both backend and frontend of a new project\'s home screen. Working with enterprise-level applications and databases.',
      technologies: ['Angular', 'TypeScript', 'Java', 'Spring Boot', 'Oracle SQL', 'PostgreSQL']
    },
    {
      id: '2',
      title: 'Software Developer',
      company: 'idvlabs',
      location: 'Ankara, Turkey',
      startDate: '2024-05',
      endDate: '2024-08',
      current: false,
      description: 'Developed front-end improvements for an audit application for a corporate company. Focused on creating responsive and user-friendly interfaces.',
      technologies: ['React.js', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Material UI']
    },
    {
      id: '3',
      title: 'Intern',
      company: 'SimBT',
      location: 'Ankara, Turkey',
      startDate: '2023-09',
      endDate: '2023-12',
      current: false,
      description: 'Implemented new features for defense and attack planning system on country maps. Contributed to ship simulator development with GPU-drawn fog shaders, particle system fire smoke effects, and VR experience.',
      technologies: ['C#', 'Unity', 'Particle Effects', 'Shaders', 'VR']
    },
    {
      id: '4',
      title: 'Intern',
      company: 'ICTerra',
      location: 'Ankara, Turkey',
      startDate: '2023-01',
      endDate: '2023-04',
      current: false,
      description: 'Developed both frontend and backend of a military operation simulator. Implemented real-time machine status updates and monitoring capabilities.',
      technologies: ['JavaScript', 'TypeScript', 'React', 'Spring']
    },
    {
      id: '5',
      title: 'Intern',
      company: 'Jotform',
      location: 'Ankara, Turkey',
      startDate: '2022-05',
      endDate: '2022-09',
      current: false,
      description: 'Developed a system to simplify users\' workflow on the company\'s product forms, enabling easier item additions and improved user experience.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP']
    },
    {
      id: '6',
      title: 'Teaching Assistant',
      company: 'TOBB Economy and Technology University',
      location: 'Ankara, Turkey',
      startDate: '2022-02',
      endDate: '2023-12',
      current: false,
      description: 'Assisted in teaching C programming language to students during laboratory courses. Provided additional explanations and support during extracurricular periods for difficult concepts.',
      technologies: ['C', 'Programming Education']
    },
    {
      id: '7',
      title: 'Web Designer & Social Media Coordinator',
      company: '1907 ÜNİFEB',
      location: 'Ankara, Turkey',
      startDate: '2022-02',
      endDate: '2023-09',
      current: false,
      description: 'Served on the board of 1907 ÜNİFEB at TOBB ETÜ community. Created videos and social media content using Adobe Creative Suite.',
      technologies: ['Adobe Photoshop', 'Premiere Pro', 'Illustrator']
    },
    {
      id: '8',
      title: 'Private Lesson Instructor',
      company: 'Self-Employed',
      location: 'Ankara, Turkey',
      startDate: '2024-03',
      endDate: '',
      current: true,
      description: 'Providing private tutoring focused on programming and computer science subjects based on students\' specific needs and requests.',
      technologies: ['Programming', 'Computer Science', 'Teaching']
    }
  ],
  projects: [
    {
      id: '1',
      title: 'AI-Powered LinkedIn Job Filter',
      description: 'Final year project utilizing artificial intelligence to filter and match job listings from LinkedIn based on user input and preferences. Automated job search and recommendation system.',
      technologies: ['Python', 'AI/ML', 'LinkedIn API', 'Data Processing'],
      featured: true
    },
    {
      id: '2',
      title: 'Hospital Website Simulation',
      description: 'Comprehensive hospital management system developed for database course. Includes patient management, appointment scheduling, and administrative features with full database integration.',
      technologies: ['Database Design', 'SQL', 'Web Development'],
      featured: true
    },
    {
      id: '3',
      title: 'Image Processing Hardware Project',
      description: 'Applied image processing techniques in hardware course project. Implemented various algorithms for real-time image manipulation and analysis.',
      technologies: ['Image Processing', 'Hardware Integration', 'Algorithms'],
      featured: true
    },
    {
      id: '4',
      title: 'Military Operation Simulator',
      description: 'Full-stack military operation simulator with real-time machine status monitoring. Features interactive map-based defense and attack planning capabilities.',
      technologies: ['React', 'TypeScript', 'Spring', 'Real-time Updates'],
      featured: false
    },
    {
      id: '5',
      title: 'Ship Simulator with VR',
      description: 'Advanced ship simulator featuring GPU-rendered fog effects using custom shaders, particle system-based fire and smoke effects, and VR compatibility for immersive experience.',
      technologies: ['Unity', 'C#', 'Shaders', 'Particle Systems', 'VR'],
      featured: false
    }
  ]
};

/**
 * Fetch portfolio data from Supabase
 * Falls back to defaultPortfolioData if not found or on error
 */
export async function getPortfolioData(): Promise<PortfolioData> {
  try {
    const { data, error } = await supabase
      .from('portfolio_data')
      .select('data')
      .eq('user_id', 'default')
      .single();

    if (error) {
      // If no data exists yet, return default
      if (error.code === 'PGRST116') {
        return defaultPortfolioData;
      }
      throw error;
    }

    return data.data as PortfolioData;
  } catch (error) {
    console.error('Error fetching portfolio data:', error);
    return defaultPortfolioData;
  }
}

/**
 * Save portfolio data to Supabase
 * Returns true on success, false on error
 */
export async function savePortfolioData(portfolioData: PortfolioData): Promise<boolean> {
  try {
    const { error } = await supabase
      .from('portfolio_data')
      .upsert({
        user_id: 'default',
        data: portfolioData,
        updated_at: new Date().toISOString()
      }, {
        onConflict: 'user_id'
      });

    if (error) throw error;
    return true;
  } catch (error) {
    console.error('Error saving portfolio data:', error);
    return false;
  }
}