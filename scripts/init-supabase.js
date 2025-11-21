/**
 * Supabase Initial Data Migration
 * 
 * This script initializes the Supabase database with default portfolio data.
 * Run this ONCE after setting up Supabase to populate the database.
 * 
 * Usage:
 * 1. Make sure .env.local has Supabase credentials
 * 2. Run: node scripts/init-supabase.js
 */

const { createClient } = require('@supabase/supabase-js');

// Import default data (we'll use a simplified version here)
const defaultPortfolioData = {
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
    ],
    education: [
        {
            id: '1',
            school: 'Gazi University',
            degree: 'Bachelor of Computer Engineering',
            field: 'Computer Engineering',
            startDate: '2020',
            endDate: '2024',
            description: 'Completed in 3.5 years with a focus on software development, algorithms, and system design.',
        },
    ],
    experiences: [
        {
            id: '1',
            company: 'Freelance',
            position: 'Full Stack Developer',
            startDate: '2023',
            endDate: 'Present',
            description: 'Developing web applications using React, Angular, Spring Boot, and modern technologies.',
            current: true,
        },
    ],
    projects: [
        {
            id: '1',
            title: 'AI Job Filter System',
            description: 'Developed an AI-powered job filtering system to match candidates with suitable positions.',
            technologies: ['Python', 'Machine Learning', 'React'],
            link: '',
            image: '',
        },
        {
            id: '2',
            title: 'Hospital Simulation System',
            description: 'Created a comprehensive hospital management and simulation system.',
            technologies: ['Java', 'Spring Boot', 'Angular'],
            link: '',
            image: '',
        },
    ],
};

async function initializeSupabase() {
    // Get environment variables
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
        console.error('❌ Error: Supabase credentials not found in environment variables');
        console.log('Please make sure .env.local has:');
        console.log('  NEXT_PUBLIC_SUPABASE_URL=your_url');
        console.log('  NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key');
        process.exit(1);
    }

    console.log('🔄 Connecting to Supabase...');
    const supabase = createClient(supabaseUrl, supabaseKey);

    try {
        // Check if data already exists
        const { data: existing, error: fetchError } = await supabase
            .from('portfolio_data')
            .select('*')
            .eq('user_id', 'default')
            .single();

        if (fetchError && fetchError.code !== 'PGRST116') {
            throw fetchError;
        }

        if (existing && existing.data && Object.keys(existing.data).length > 0) {
            console.log('⚠️  Data already exists in Supabase');
            console.log('Current data:', JSON.stringify(existing.data, null, 2));
            console.log('\nDo you want to overwrite? (This will delete existing data)');
            console.log('If yes, delete the row manually in Supabase and run this script again.');
            return;
        }

        // Insert default data
        console.log('📝 Inserting default portfolio data...');
        const { error: upsertError } = await supabase
            .from('portfolio_data')
            .upsert({
                user_id: 'default',
                data: defaultPortfolioData,
                updated_at: new Date().toISOString(),
            }, {
                onConflict: 'user_id'
            });

        if (upsertError) {
            throw upsertError;
        }

        console.log('✅ Success! Default portfolio data has been inserted into Supabase');
        console.log('\nYou can now:');
        console.log('1. Restart your dev server: npm run dev');
        console.log('2. Visit http://localhost:3000');
        console.log('3. Go to /admin to edit your portfolio data');

    } catch (error) {
        console.error('❌ Error initializing Supabase:', error.message);
        process.exit(1);
    }
}

// Load environment variables
require('dotenv').config({ path: '.env.local' });

// Run the initialization
initializeSupabase();
