import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import CaseStudyModal from "@/components/CaseStudyModal";
import project1 from "@/assets/Catch-Collect1.png";
import project2 from "@/assets/Pearstop1.png";
import project3 from "@/assets/Collector-HomeBase1.png";
import project4 from "@/assets/Vision-Direct1.png";
import project5 from "@/assets/Mi-Hub1.png";
import project6 from "@/assets/Collector-HomeBase2.png";
import project7 from "@/assets/Catch-Collect2.png";
import project8 from "@/assets/Vision-Direct2.png";
import project9 from "@/assets/Mi-Hub2.png";

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const handleViewCaseStudy = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const projects = [
    { 
      id: 1, 
      name: "catchcollect",
      title: "Catch Collect Platform",
      description: "A comprehensive digital collection management platform that enables users to organize, track, and showcase their valuable collections. Features advanced categorization, valuation tracking, and social sharing capabilities.",
      category: ["Digital Collections", "Platform", "Social"],
      techStack: ["React", "TypeScript", "Node.js", "MongoDB"],
      image: project1,
      desktopImage: project1,
      mobileImage: project7
    },
    { 
      id: 2, 
      name: "pearstop",
      title: "Pearstop Solutions",
      description: "An innovative business management solution that streamlines operations and enhances productivity. Provides comprehensive tools for inventory management, customer relations, and analytics.",
      category: ["Business Management", "Analytics", "Productivity"],
      techStack: ["Angular", "Python", "PostgreSQL", "AWS"],
      image: project2,
      desktopImage: project2,
      mobileImage: project2
    },
    { 
      id: 3, 
      name: "collectorhomebase",
      title: "Collector HomeBase",
      description: "A specialized platform for collectors to manage their collections with advanced features like condition tracking, market value monitoring, and community engagement tools.",
      category: ["Collector Tools", "Community", "Analytics"],
      techStack: ["Vue.js", "Django", "Redis", "Firebase"],
      image: project3,
      desktopImage: project3,
      mobileImage: project6
    },
    { 
      id: 4, 
      name: "visiondirect",
      title: "Vision Direct",
      description: "A cutting-edge vision technology platform that provides advanced optical solutions and personalized eye care recommendations through AI-powered diagnostics.",
      category: ["Healthcare", "AI", "Optical"],
      techStack: ["React Native", "TensorFlow", "Python", "Azure"],
      image: project4,
      desktopImage: project4,
      mobileImage: project8
    },
    { 
      id: 5, 
      name: "mihub",
      title: "Mi Hub",
      description: "A centralized hub for managing multiple digital services and integrations. Provides seamless connectivity between various platforms and tools.",
      category: ["Integration", "Platform", "Connectivity"],
      techStack: ["Next.js", "GraphQL", "Docker", "Kubernetes"],
      image: project5,
      desktopImage: project5,
      mobileImage: project9
    },
    { 
      id: 6, 
      name: "collectorhomebase2",
      title: "Collector HomeBase Mobile",
      description: "Mobile-optimized version of the Collector HomeBase platform, providing on-the-go collection management with real-time synchronization.",
      category: ["Mobile App", "Collections", "Sync"],
      techStack: ["React Native", "TypeScript", "Firebase", "Redux"],
      image: project6,
      desktopImage: project6,
      mobileImage: project6
    },
    { 
      id: 7, 
      name: "catchcollect2",
      title: "Catch Collect Enhanced",
      description: "Enhanced version of the Catch Collect platform with advanced features including AI-powered collection insights and automated valuation updates.",
      category: ["AI", "Collections", "Analytics"],
      techStack: ["React", "Python", "TensorFlow", "PostgreSQL"],
      image: project7,
      desktopImage: project7,
      mobileImage: project7
    },
    { 
      id: 8, 
      name: "visiondirect2",
      title: "Vision Direct Pro",
      description: "Professional version of Vision Direct with advanced diagnostic tools, patient management systems, and comprehensive reporting capabilities.",
      category: ["Healthcare", "Professional", "Diagnostics"],
      techStack: ["Vue.js", "Node.js", "MongoDB", "AWS"],
      image: project8,
      desktopImage: project8,
      mobileImage: project8
    },
    { 
      id: 9, 
      name: "mihub2",
      title: "Mi Hub Enterprise",
      description: "Enterprise-grade version of Mi Hub with advanced security features, multi-tenant architecture, and comprehensive admin controls.",
      category: ["Enterprise", "Security", "Multi-tenant"],
      techStack: ["Angular", "Java", "Spring Boot", "Oracle"],
      image: project9,
      desktopImage: project9,
      mobileImage: project9
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className={`group relative overflow-hidden bg-transparent border-none cursor-pointer ${
                index % 3 === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <div className="relative w-full h-full overflow-hidden rounded-lg">
                <img 
                  src={project.image}   
                  alt={`Project ${project.id}`}
                  className="w-full h-full object-cover filter grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                
                {/* View Casestudy Button */}
                <div 
                  className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 cursor-pointer"
                  onClick={() => handleViewCaseStudy(project)}
                >
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 flex items-center justify-between text-white">
                    <span className="text-sm font-medium">View Casestudy</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Case Study Modal */}
      <CaseStudyModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </section>
  );
};

export default Projects;