export interface Dashboard {
  title: string;
  description: string;
  image: string;
  live: string;
  github?: string;
  techStack: string[];
  features?: string[];
}

export const dashboardsData: Dashboard[] = [
  {
    title: "Admin Dashboard",
    description: "Modern admin dashboard with analytics, user management, and real-time data visualization.",
    image: "/dashboard1.png",
    live: "https://nice-dashboard-three.vercel.app/",
    github: "https://github.com/mizurex/nice_dashboard",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Recharts"],
    features: ["Real-time Analytics", "User Management", "Data Visualization", "Responsive Design"]
  },
 
  {
    title: "Vault Dashboard",
    description: "Comprehensive dashboard for managing and visualizing grid-based layouts and components.",
    image: "/dashboard_3.png",
    live: "https://dash-b-sigma.vercel.app/dashboard",
    github: "https://github.com/mizurex/grid-vault",
    techStack: ["React", "TypeScript", "CSS Grid", "Framer Motion"],
    features: ["Grid Layouts", "Component Library", "Interactive Demos", "Copy to Clipboard"]
  },
   {
    title: "Minimal Dashboard",
    description: "Clean and minimalist dashboard interface focused on essential metrics and KPIs.",
    image: "/dashboard_2.png",
    live: "https://github.com/mizurex/printin",
    github: "https://github.com/mizurex/turfex",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    features: ["Minimal Design", "Fast Performance", "Dark Mode", "Mobile Responsive"]
  }
];