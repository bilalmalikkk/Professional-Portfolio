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
    id: "globaltechinnovation",
    name: "Global Technology Innovation",
    title: "Global Technology Innovation",
    description: "An innovative technology consulting platform that connects businesses with cutting-edge solutions and digital transformation services.",
    category: ["Consulting", "Technology", "Innovation"],
    techStack: ["Vue.js", "Python", "AWS", "Machine Learning"],
    color: "bg-teal-500",
    borderColor: "border-teal-500",
    images: {
      desktop: "/src/assets/projects/Global Technology Innovation/Global-Technology-Innovation-Web.png",
      mobile: "/src/assets/projects/Global Technology Innovation/Global-Technology-Innovation-Mobile.png",
      alt: "Global Technology Innovation Platform"
    },
    featured: true,
    year: 2023,
    client: "Global Tech Corp",
    duration: "7 months",
    liveUrl: "https://globaltechinnovation.com",
    githubUrl: "https://github.com/bilal/globaltechinnovation"
  },
  {
    id: "kryptonomy",
    name: "Kryptonomy",
    title: "Kryptonomy",
    description: "A blockchain-based financial platform that provides secure cryptocurrency trading and portfolio management with real-time market analysis.",
    category: ["Blockchain", "Finance", "Cryptocurrency"],
    techStack: ["React", "Solidity", "Web3.js", "Ethereum"],
    color: "bg-yellow-500",
    borderColor: "border-yellow-500",
    images: {
      desktop: "/src/assets/projects/Kryptonomy/Kryptonomy-Web.png",
      mobile: "/src/assets/projects/Kryptonomy/Kryptonomy-Mobile.png",
      alt: "Kryptonomy Blockchain Platform"
    },
    featured: true,
    year: 2023,
    client: "Kryptonomy Labs",
    duration: "6 months",
    liveUrl: "https://kryptonomy.com",
    githubUrl: "https://github.com/bilal/kryptonomy"
  },
  {
    id: "pearstop",
    name: "Pearstop",
    title: "Pearstop Solutions",
    description: "An innovative business management solution that streamlines operations and enhances productivity. Provides comprehensive tools for inventory management, customer relations, and analytics.",
    category: ["Business Management", "Analytics", "Productivity"],
    techStack: ["Angular", "Python", "PostgreSQL", "AWS"],
    color: "bg-green-500",
    borderColor: "border-green-500",
    images: {
      desktop: "/src/assets/projects/Pearstop/Pearstop-Web.png",
      mobile: "/src/assets/projects/Pearstop/Pearstop-Mobile.png",
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
    id: "markata",
    name: "Markata",
    title: "Markata",
    description: "A modern e-commerce platform designed for seamless online shopping experiences with advanced product management and customer engagement features.",
    category: ["E-commerce", "Retail", "Platform"],
    techStack: ["React", "Node.js", "MongoDB", "Stripe"],
    color: "bg-pink-500",
    borderColor: "border-pink-500",
    images: {
      desktop: "/src/assets/projects/Markata/Markata-Web.png",
      mobile: "/src/assets/projects/Markata/Markata-Mobile.png",
      alt: "Markata E-commerce Platform"
    },
    featured: true,
    year: 2023,
    client: "Markata Retail",
    duration: "4 months",
    liveUrl: "https://markata.com",
    githubUrl: "https://github.com/bilal/markata"
  },
  {
    id: "collectorhomebase",
    name: "Collector-HomeBase",
    title: "Collector HomeBase",
    description: "A specialized platform for collectors to manage their collections with advanced features like condition tracking, market value monitoring, and community engagement tools.",
    category: ["Collector Tools", "Community", "Analytics"],
    techStack: ["Vue.js", "Django", "Redis", "Firebase"],
    color: "bg-purple-500",
    borderColor: "border-purple-500",
    images: {
      desktop: "/src/assets/projects/Collector-HomeBase/Collector-HomeBase-Web.png",
      mobile: "/src/assets/projects/Collector-HomeBase/Collector-HomeBase-Mobile.png",
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
    id: "mihub",
    name: "Mi-Hub",
    title: "Mi Hub",
    description: "A centralized hub for managing multiple digital services and integrations. Provides seamless connectivity between various platforms and tools.",
    category: ["Integration", "Platform", "Connectivity"],
    techStack: ["Next.js", "GraphQL", "Docker", "Kubernetes"],
    color: "bg-orange-500",
    borderColor: "border-orange-500",
    images: {
      desktop: "/src/assets/projects/Mi-Hub/Mi-Hub-Web.png",
      mobile: "/src/assets/projects/Mi-Hub/Mi-Hub-Mobile.png",
      alt: "Mi Hub"
    },
    featured: true,
    year: 2023,
    client: "Mi Hub Technologies",
    duration: "5 months",
    liveUrl: "https://mihub.com",
    githubUrl: "https://github.com/bilal/mihub"
  },
  {
    id: "catchcollect",
    name: "Catch-Collect",
    title: "Catch Collect Platform",
    description: "A comprehensive digital collection management platform that enables users to organize, track, and showcase their valuable collections. Features advanced categorization, valuation tracking, and social sharing capabilities.",
    category: ["Digital Collections", "Platform", "Social"],
    techStack: ["React", "TypeScript", "Node.js", "MongoDB"],
    color: "bg-blue-500",
    borderColor: "border-blue-500",
    images: {
      desktop: "/src/assets/projects/Catch-Collect/Catch-Collect-Web.png",
      mobile: "/src/assets/projects/Catch-Collect/Catch-Collect-Mobile.png",
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
    id: "visiondirect",
    name: "Vision-Direct",
    title: "Vision Direct",
    description: "A cutting-edge vision technology platform that provides advanced optical solutions and personalized eye care recommendations through AI-powered diagnostics.",
    category: ["Healthcare", "AI", "Optical"],
    techStack: ["React Native", "TensorFlow", "Python", "Azure"],
    color: "bg-indigo-500",
    borderColor: "border-indigo-500",
    images: {
      desktop: "/src/assets/projects/Vision-Direct/Vision-Direct-Web.png",
      mobile: "/src/assets/projects/Vision-Direct/Vision-Direct-Mobile.png",
      alt: "Vision Direct - AI-Powered Eye Care Platform"
    },
    featured: true,
    year: 2023,
    client: "Vision Direct Ltd.",
    duration: "8 months",
    liveUrl: "https://visiondirect.com",
    githubUrl: "https://github.com/bilal/visiondirect"
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

// Helper function to get all unique categories
export const getAllCategories = (): string[] => {
  const categories = projects.flatMap(project => project.category);
  return [...new Set(categories)];
};

export const getAllTechStacks = () => {
  const techStacks = new Set<string>();
  projects.forEach(project => {
    project.techStack.forEach(tech => techStacks.add(tech));
  });
  return Array.from(techStacks);
}; 