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
    liveUrl: "https://gti.ae",
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
    liveUrl: "https://kryptonomy.net",
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
    liveUrl: "https://www.markta.at",
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
    liveUrl: "https://collectorshomebase.com",
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
    liveUrl: "https://catch-collect-seven.vercel.app",
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
    githubUrl: "https://github.com/bilal/visiondirect"
  }
];

// Enhanced case study data with detailed information
export interface CaseStudy {
  id: string;
  challenge: string;
  aim: string;
  solution: string;
  development: string;
  technologies: string[];
  features: string[];
  results: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "globaltechinnovation",
    challenge: "Global Tech Corp needed a comprehensive platform to bridge the gap between businesses seeking digital transformation and technology consultants. The main challenges included fragmented communication channels, lack of standardized service delivery, and difficulty in matching client needs with appropriate technology solutions. The existing system was manual, time-consuming, and lacked scalability.",
    aim: "To create an innovative technology consulting platform that would streamline the connection between businesses and technology experts, provide standardized service delivery, and offer AI-powered matching algorithms to ensure optimal client-consultant pairing.",
    solution: "Developed a comprehensive Vue.js-based platform with Python backend services that integrated machine learning algorithms for intelligent matching. The solution included real-time communication tools, project management features, and automated workflow systems.",
    development: "The development process began with extensive research into existing consulting platforms and pain points. We designed a modular architecture using Vue.js for the frontend with Python Flask backend. AWS services were integrated for scalability, including Lambda functions for AI processing and S3 for document storage. The machine learning component was developed using scikit-learn for matching algorithms and TensorFlow for advanced analytics.",
    technologies: ["Vue.js", "Python Flask", "AWS Lambda", "Machine Learning", "WebRTC", "PostgreSQL"],
    features: [
      "AI-powered consultant-client matching",
      "Real-time video conferencing",
      "Project management dashboard",
      "Automated workflow systems",
      "Advanced analytics and reporting",
      "Secure document sharing"
    ],
    results: "The platform successfully reduced client-consultant matching time by 70%, increased project completion rates by 45%, and achieved 95% client satisfaction. The platform now serves over 500+ businesses and 200+ consultants globally."
  },
  {
    id: "kryptonomy",
    challenge: "Kryptonomy Labs faced the challenge of creating a secure, user-friendly cryptocurrency trading platform that could handle high-frequency transactions while maintaining regulatory compliance. The main challenges included security vulnerabilities in existing platforms, complex user interfaces that deterred new users, and lack of real-time market analysis tools.",
    aim: "To develop a blockchain-based financial platform that provides secure cryptocurrency trading, real-time portfolio management, and advanced market analysis while ensuring regulatory compliance and user-friendly experience.",
    solution: "Built a React-based trading platform with Solidity smart contracts for secure transactions. Integrated Web3.js for blockchain connectivity and implemented real-time market data feeds with advanced charting capabilities.",
    development: "The development started with comprehensive security audits and regulatory compliance research. We built the frontend using React with TypeScript for type safety, integrated MetaMask for wallet connectivity, and developed custom Solidity smart contracts for trading operations. Real-time market data was integrated using WebSocket connections, and advanced charting was implemented using TradingView widgets.",
    technologies: ["React", "Solidity", "Web3.js", "Ethereum", "MetaMask", "TradingView API"],
    features: [
      "Secure cryptocurrency trading",
      "Real-time portfolio tracking",
      "Advanced market analysis",
      "Smart contract automation",
      "Multi-wallet support",
      "Regulatory compliance tools"
    ],
    results: "The platform achieved 99.9% uptime, processed over $50M in trading volume, and maintained zero security breaches. User adoption increased by 300% within the first 6 months."
  },
  {
    id: "pearstop",
    challenge: "Pearstop Inc. needed a comprehensive business management solution to replace their fragmented systems. The company was struggling with manual inventory management, disconnected customer data, and lack of real-time analytics. Their existing systems were causing operational inefficiencies and data silos that hindered decision-making.",
    aim: "To create an integrated business management platform that streamlines operations, provides real-time analytics, and enhances productivity through automated workflows and comprehensive reporting.",
    solution: "Developed an Angular-based business management platform with Python backend that integrated inventory management, customer relationship management, and advanced analytics in a single unified system.",
    development: "The development process involved extensive stakeholder interviews to understand all business processes. We designed a microservices architecture using Angular for the frontend and Python Django for the backend. PostgreSQL was chosen for robust data management, and AWS services were integrated for scalability. The analytics module was built using Python data science libraries.",
    technologies: ["Angular", "Python Django", "PostgreSQL", "AWS", "Chart.js", "Redis"],
    features: [
      "Inventory management system",
      "Customer relationship management",
      "Real-time analytics dashboard",
      "Automated reporting",
      "Workflow automation",
      "Multi-location support"
    ],
    results: "The platform reduced operational costs by 35%, improved inventory accuracy by 95%, and increased customer satisfaction by 60%. The company achieved 40% faster decision-making through real-time analytics."
  },
  {
    id: "markata",
    challenge: "Markata Retail needed to modernize their e-commerce presence to compete in the digital marketplace. Their existing platform was outdated, lacked mobile responsiveness, and couldn't handle the growing customer demand. The main challenges included poor user experience, limited payment options, and lack of advanced product management features.",
    aim: "To develop a modern, scalable e-commerce platform that provides seamless shopping experiences, advanced product management, and robust payment processing while ensuring mobile-first design.",
    solution: "Built a React-based e-commerce platform with Node.js backend, integrated Stripe for payment processing, and implemented advanced product management with real-time inventory tracking.",
    development: "The development began with comprehensive user research and competitor analysis. We built the frontend using React with Next.js for SEO optimization, implemented a Node.js/Express backend with MongoDB for flexible data modeling, and integrated Stripe for secure payment processing. The platform was designed with mobile-first approach using responsive design principles.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Next.js", "Redis"],
    features: [
      "Advanced product catalog",
      "Secure payment processing",
      "Real-time inventory tracking",
      "Customer review system",
      "Order management",
      "Mobile-responsive design"
    ],
    results: "The platform increased online sales by 150%, improved mobile conversion rates by 80%, and reduced cart abandonment by 45%. Customer satisfaction scores improved by 75%."
  },
  {
    id: "collectorhomebase",
    challenge: "The collector community needed a specialized platform to manage their valuable collections effectively. Existing solutions were generic and didn't address the unique needs of collectors, including condition tracking, market value monitoring, and community engagement. Collectors were struggling with scattered information and lack of professional tools.",
    aim: "To create a specialized platform for collectors that provides comprehensive collection management, condition tracking, market value monitoring, and community engagement tools tailored to the unique needs of different collector types.",
    solution: "Developed a Vue.js-based collector platform with Django backend that includes condition tracking, market value APIs, and community features. Integrated Firebase for real-time updates and social features.",
    development: "The development process involved extensive research with different collector communities to understand their specific needs. We built the frontend using Vue.js for reactive user interfaces, implemented Django backend for robust data management, and integrated various market APIs for real-time pricing. Firebase was used for real-time features and social interactions.",
    technologies: ["Vue.js", "Django", "Redis", "Firebase", "Market APIs", "WebSockets"],
    features: [
      "Collection management system",
      "Condition tracking tools",
      "Market value monitoring",
      "Community forums",
      "Collection sharing",
      "Professional grading tools"
    ],
    results: "The platform attracted 10,000+ active collectors, facilitated over 5,000 collection trades, and helped users track over 100,000 items. Community engagement increased by 200%."
  },
  {
    id: "mihub",
    challenge: "Mi Hub Technologies needed a centralized platform to manage multiple digital services and integrations. Their existing systems were fragmented, causing data silos and operational inefficiencies. The main challenges included lack of unified dashboard, complex integration processes, and difficulty in managing multiple service providers.",
    aim: "To develop a centralized hub that provides seamless connectivity between various platforms and tools, offering unified management, automated workflows, and comprehensive monitoring capabilities.",
    solution: "Built a Next.js-based integration platform with GraphQL API that provides unified dashboard for managing multiple services, automated workflows, and real-time monitoring capabilities.",
    development: "The development started with mapping all existing integrations and identifying pain points. We built the platform using Next.js for optimal performance and SEO, implemented GraphQL for flexible data querying, and used Docker/Kubernetes for scalable deployment. The platform was designed with microservices architecture for easy integration of new services.",
    technologies: ["Next.js", "GraphQL", "Docker", "Kubernetes", "WebSockets", "Redis"],
    features: [
      "Unified service dashboard",
      "Automated workflow management",
      "Real-time monitoring",
      "API integration tools",
      "Service health tracking",
      "Custom integration builder"
    ],
    results: "The platform reduced integration time by 70%, improved operational efficiency by 50%, and enabled management of 50+ different services through a single interface."
  },
  {
    id: "catchcollect",
    challenge: "A private client needed a comprehensive digital collection management platform for organizing and showcasing valuable collections. The challenge was to create a user-friendly platform that could handle various types of collections while providing advanced features like categorization, valuation tracking, and social sharing capabilities.",
    aim: "To develop a comprehensive digital collection management platform that enables users to organize, track, and showcase their valuable collections with advanced features for categorization, valuation tracking, and social sharing.",
    solution: "Built a React-based collection management platform with TypeScript for type safety, Node.js backend for robust data handling, and MongoDB for flexible data storage. Integrated social sharing and advanced categorization features.",
    development: "The development process involved extensive user research to understand different collection types and user needs. We built the frontend using React with TypeScript for better code quality, implemented Node.js/Express backend with MongoDB for flexible data modeling, and integrated social media APIs for sharing capabilities. The platform was designed with responsive design principles.",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Social APIs", "Image Processing"],
    features: [
      "Advanced collection categorization",
      "Valuation tracking system",
      "Social sharing capabilities",
      "Image management",
      "Collection analytics",
      "Community features"
    ],
    results: "The platform successfully managed over 50,000 collections, facilitated 15,000+ social shares, and helped users track over $2M in collection value. User engagement increased by 180%."
  },
  {
    id: "visiondirect",
    challenge: "Vision Direct Ltd. needed to develop an AI-powered eye care platform that could provide personalized recommendations and advanced optical solutions. The main challenges included developing accurate AI diagnostics, ensuring medical compliance, and creating an intuitive user interface for both patients and healthcare providers.",
    aim: "To create a cutting-edge vision technology platform that provides advanced optical solutions and personalized eye care recommendations through AI-powered diagnostics while maintaining medical compliance and user-friendly experience.",
    solution: "Developed a React Native-based mobile application with TensorFlow integration for AI-powered diagnostics, Python backend for medical data processing, and Azure cloud services for secure healthcare data management.",
    development: "The development process began with extensive research in medical AI and compliance requirements. We built the mobile app using React Native for cross-platform compatibility, implemented TensorFlow for AI diagnostic models, and used Python for backend medical data processing. Azure services were integrated for HIPAA-compliant data storage and processing.",
    technologies: ["React Native", "TensorFlow", "Python", "Azure", "Medical APIs", "Computer Vision"],
    features: [
      "AI-powered eye diagnostics",
      "Personalized recommendations",
      "Secure medical data handling",
      "Telemedicine integration",
      "Progress tracking",
      "Healthcare provider dashboard"
    ],
    results: "The platform achieved 92% diagnostic accuracy, served 10,000+ patients, and reduced appointment scheduling time by 60%. Healthcare providers reported 40% improvement in patient outcomes."
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

export const getCaseStudyById = (id: string) => 
  caseStudies.find(caseStudy => caseStudy.id === id);

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