export interface Project {
  id: string;
  name: string;
  title: string;
  description: string;
  category: string[];
  techStack: string[];
  color: string;
  borderColor: string;
  images: {
    desktop: string;
    mobile: string;
    alt: string;
  };
  featured?: boolean;
  year?: number;
  client?: string;
  duration?: string;
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: "catchcollect",
    name: "catchcollect",
    title: "Catch Collect Platform",
    description: "A comprehensive digital collection management platform that enables users to organize, track, and showcase their valuable collections. Features advanced categorization, valuation tracking, and social sharing capabilities.",
    category: ["Digital Collections", "Platform", "Social"],
    techStack: ["React", "TypeScript", "Node.js", "MongoDB"],
    color: "bg-blue-500",
    borderColor: "border-blue-500",
    images: {
      desktop: "/src/assets/projects/catchcollect/Catch-Collect1.png",
      mobile: "/src/assets/projects/catchcollect/Catch-Collect3.png",
      alt: "Catch Collect Platform"
    },
    featured: true,
    year: 2024,
    client: "Private Client",
    duration: "3 months",
    liveUrl: "https://catchcollect.com",
    githubUrl: "https://github.com/bilal/catchcollect"
  },
  {
    id: "pearstop",
    name: "pearstop",
    title: "Pearstop Solutions",
    description: "An innovative business management solution that streamlines operations and enhances productivity. Provides comprehensive tools for inventory management, customer relations, and analytics.",
    category: ["Business Management", "Analytics", "Productivity"],
    techStack: ["Angular", "Python", "PostgreSQL", "AWS"],
    color: "bg-green-500",
    borderColor: "border-green-500",
    images: {
      desktop: "/src/assets/projects/pearstop/Pearstop1.png",
      mobile: "/src/assets/projects/pearstop/Pearstop1.png",
      alt: "Pearstop Solutions"
    },
    featured: true,
    year: 2024,
    client: "Pearstop Inc.",
    duration: "4 months",
    liveUrl: "https://pearstop.com",
    githubUrl: "https://github.com/bilal/pearstop"
  },
  {
    id: "collectorhomebase",
    name: "collectorhomebase",
    title: "Collector HomeBase",
    description: "A specialized platform for collectors to manage their collections with advanced features like condition tracking, market value monitoring, and community engagement tools.",
    category: ["Collector Tools", "Community", "Analytics"],
    techStack: ["Vue.js", "Django", "Redis", "Firebase"],
    color: "bg-purple-500",
    borderColor: "border-purple-500",
    images: {
      desktop: "/src/assets/projects/collectorhomebase/Collector-HomeBase1.png",
      mobile: "/src/assets/projects/collectorhomebase/Collector-HomeBase2.png",
      alt: "Collector HomeBase"
    },
    featured: true,
    year: 2023,
    client: "Collector Community",
    duration: "6 months",
    liveUrl: "https://collectorhomebase.com",
    githubUrl: "https://github.com/bilal/collectorhomebase"
  },
  {
    id: "visiondirect",
    name: "visiondirect",
    title: "Vision Direct",
    description: "A cutting-edge vision technology platform that provides advanced optical solutions and personalized eye care recommendations through AI-powered diagnostics.",
    category: ["Healthcare", "AI", "Optical"],
    techStack: ["React Native", "TensorFlow", "Python", "Azure"],
    color: "bg-indigo-500",
    borderColor: "border-indigo-500",
    images: {
      desktop: "/src/assets/projects/visiondirect/Vision-Direct1.png",
      mobile: "/src/assets/projects/visiondirect/Vision-Direct2.png",
      alt: "Vision Direct - AI-Powered Eye Care Platform"
    },
    featured: true,
    year: 2023,
    client: "Vision Direct Ltd.",
    duration: "8 months",
    liveUrl: "https://visiondirect.com",
    githubUrl: "https://github.com/bilal/visiondirect"
  },
  {
    id: "mihub",
    name: "mihub",
    title: "Mi Hub",
    description: "A centralized hub for managing multiple digital services and integrations. Provides seamless connectivity between various platforms and tools.",
    category: ["Integration", "Platform", "Connectivity"],
    techStack: ["Next.js", "GraphQL", "Docker", "Kubernetes"],
    color: "bg-orange-500",
    borderColor: "border-orange-500",
    images: {
      desktop: "/src/assets/projects/mihub/Mi-Hub1.png",
      mobile: "/src/assets/projects/mihub/Mi-Hub2.png",
      alt: "Mi Hub"
    },
    featured: true,
    year: 2023,
    client: "Mi Hub Technologies",
    duration: "5 months",
    liveUrl: "https://mihub.com",
    githubUrl: "https://github.com/bilal/mihub"
  }
];

// Utility functions for filtering and searching projects
export const getFeaturedProjects = () => projects.filter(project => project.featured);

export const getProjectsByCategory = (category: string) => 
  projects.filter(project => project.category.includes(category));

export const getProjectsByTech = (tech: string) => 
  projects.filter(project => project.techStack.includes(tech));

export const getProjectById = (id: string) => 
  projects.find(project => project.id === id);

export const getAllCategories = () => {
  const categories = new Set<string>();
  projects.forEach(project => {
    project.category.forEach(cat => categories.add(cat));
  });
  return Array.from(categories);
};

export const getAllTechStacks = () => {
  const techStacks = new Set<string>();
  projects.forEach(project => {
    project.techStack.forEach(tech => techStacks.add(tech));
  });
  return Array.from(techStacks);
}; 