import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Leaf, Building, MapPin, Truck } from "lucide-react";
import { getProjectImages } from "@/utils/imageUtils";
import CaseStudyModal from "@/components/CaseStudyModal";
import { useState } from "react";
import AnimatedBackground from "@/components/AnimatedBackground";

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
      color: "bg-blue-500",
      borderColor: "border-blue-500",
      icon: null
    },
    {
      id: 2,
      name: "pearstop",
      title: "Pearstop Solutions",
      description: "An innovative business management solution that streamlines operations and enhances productivity. Provides comprehensive tools for inventory management, customer relations, and analytics.",
      category: ["Business Management", "Analytics", "Productivity"],
      techStack: ["Angular", "Python", "PostgreSQL", "AWS"],
      color: "bg-green-500",
      borderColor: "border-green-500",
      icon: null
    },
    {
      id: 3,
      name: "collectorhomebase",
      title: "Collector HomeBase",
      description: "A specialized platform for collectors to manage their collections with advanced features like condition tracking, market value monitoring, and community engagement tools.",
      category: ["Collector Tools", "Community", "Analytics"],
      techStack: ["Vue.js", "Django", "Redis", "Firebase"],
      color: "bg-purple-500",
      borderColor: "border-purple-500",
      icon: null
    },
    {
      id: 4,
      name: "visiondirect",
      title: "Vision Direct",
      description: "A cutting-edge vision technology platform that provides advanced optical solutions and personalized eye care recommendations through AI-powered diagnostics.",
      category: ["Healthcare", "AI", "Optical"],
      techStack: ["React Native", "TensorFlow", "Python", "Azure"],
      color: "bg-indigo-500",
      borderColor: "border-indigo-500",
      icon: null
    },
    {
      id: 5,
      name: "mihub",
      title: "Mi Hub",
      description: "A centralized hub for managing multiple digital services and integrations. Provides seamless connectivity between various platforms and tools.",
      category: ["Integration", "Platform", "Connectivity"],
      techStack: ["Next.js", "GraphQL", "Docker", "Kubernetes"],
      color: "bg-orange-500",
      borderColor: "border-orange-500",
      icon: null
    },
    {
      id: 6,
      name: "collectorhomebase2",
      title: "Collector HomeBase Mobile",
      description: "Mobile-optimized version of the Collector HomeBase platform, providing on-the-go collection management with real-time synchronization.",
      category: ["Mobile App", "Collections", "Sync"],
      techStack: ["React Native", "TypeScript", "Firebase", "Redux"],
      color: "bg-teal-500",
      borderColor: "border-teal-500",
      icon: null
    },
    {
      id: 7,
      name: "catchcollect2",
      title: "Catch Collect Enhanced",
      description: "Enhanced version of the Catch Collect platform with advanced features including AI-powered collection insights and automated valuation updates.",
      category: ["AI", "Collections", "Analytics"],
      techStack: ["React", "Python", "TensorFlow", "PostgreSQL"],
      color: "bg-pink-500",
      borderColor: "border-pink-500",
      icon: null
    },
    {
      id: 8,
      name: "visiondirect2",
      title: "Vision Direct Pro",
      description: "Professional version of Vision Direct with advanced diagnostic tools, patient management systems, and comprehensive reporting capabilities.",
      category: ["Healthcare", "Professional", "Diagnostics"],
      techStack: ["Vue.js", "Node.js", "MongoDB", "AWS"],
      color: "bg-cyan-500",
      borderColor: "border-cyan-500",
      icon: null
    },
    {
      id: 9,
      name: "mihub2",
      title: "Mi Hub Enterprise",
      description: "Enterprise-grade version of Mi Hub with advanced security features, multi-tenant architecture, and comprehensive admin controls.",
      category: ["Enterprise", "Security", "Multi-tenant"],
      techStack: ["Angular", "Java", "Spring Boot", "Oracle"],
      color: "bg-red-500",
      borderColor: "border-red-500",
      icon: null
    }
  ];

  const filterCategories = [
    "All", "Health", "Energy", "Education", "Automotive", 
    "Financial Services", "Real Estate", "Artificial Intelligence", 
    "Advertising", "Gaming"
  ];

  return (
    <div className="min-h-screen bg-background relative">
      <AnimatedBackground />
      
      <div className="relative z-10">
        <Navigation />
        
        <div className="pt-20 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Our Work
              </h1>
              
              {/* Filter Buttons */}
              <div className="flex flex-wrap gap-3">
                {filterCategories.map((category, index) => (
                  <button
                    key={category}
                    className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                      index === 0 
                        ? "bg-white text-black border-2 border-blue-500" 
                        : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Projects Grid */}
            <div className="space-y-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className={`${project.color} rounded-3xl p-8 md:p-12 min-h-[600px] flex flex-col lg:flex-row items-center gap-8 lg:gap-12`}
                >
                  {/* Content */}
                  <div className="flex-1 space-y-6">
                    {/* Project Name */}
                    <div className="flex items-center gap-2">
                      <span className="text-white/80 text-sm font-medium">
                        {project.name}
                      </span>
                      {project.icon && (
                        <div className="text-white/80">
                          {project.icon}
                        </div>
                      )}
                    </div>

                    {/* Category Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.category.map((cat) => (
                        <Badge
                          key={cat}
                          variant="secondary"
                          className="bg-white/20 text-white border-white/30 hover:bg-white/30"
                        >
                          {cat}
                        </Badge>
                      ))}
                    </div>

                    {/* Title */}
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                      {project.title}
                    </h2>

                    {/* Description */}
                    <p className="text-white/90 text-lg leading-relaxed max-w-2xl">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-white/20 text-white border-white/30 hover:bg-white/30"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <Button
                      variant="outline"
                      size="lg"
                      className={`bg-white text-black border-white hover:bg-white/90 ${project.borderColor}`}
                      onClick={() => handleViewCaseStudy(project)}
                    >
                      View Case Study
                      <ArrowUpRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>

                  {/* Device Mockups */}
                  <div className="flex-1 flex justify-center lg:justify-end">
                    <div className="relative">
                      {/* Desktop Mockup */}
                      <div className="relative mb-4">
                        <div className="w-80 h-48 bg-gray-800 rounded-lg shadow-2xl border-4 border-gray-700 overflow-hidden">
                          <img 
                            src={getProjectImages(project.name).desktop} 
                            alt={getProjectImages(project.name).alt}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      
                      {/* Mobile Mockup */}
                      <div className="absolute -bottom-4 -right-4">
                        <div className="w-32 h-56 bg-gray-800 rounded-2xl shadow-2xl border-4 border-gray-700 overflow-hidden">
                          <img 
                            src={getProjectImages(project.name).mobile} 
                            alt={getProjectImages(project.name).alt}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Case Study Modal */}
      <CaseStudyModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </div>
  );
};

export default Projects; 