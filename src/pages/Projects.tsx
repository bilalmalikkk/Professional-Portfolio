import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { getProjectImages } from "@/utils/imageUtils";
import CaseStudyModal from "@/components/CaseStudyModal";
import { useState } from "react";
import AnimatedBackground from "@/components/AnimatedBackground";
import { projects, getAllCategories, type Project } from "@/data/projects";

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleViewCaseStudy = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const filterCategories = ["All", ...getAllCategories()];

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category.includes(selectedCategory));

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
                {filterCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category
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
              {filteredProjects.map((project) => (
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
                      {project.featured && (
                        <Badge className="bg-white/20 text-white border-white/30">
                          Featured
                        </Badge>
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

                    {/* Project Details */}
                    <div className="flex flex-wrap gap-4 text-white/80 text-sm">
                      {project.year && (
                        <span>Year: {project.year}</span>
                      )}
                      {project.client && (
                        <span>Client: {project.client}</span>
                      )}
                      {project.duration && (
                        <span>Duration: {project.duration}</span>
                      )}
                    </div>

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

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                      <Button
                        variant="outline"
                        size="lg"
                        className={`bg-white text-black border-white hover:bg-white/90 ${project.borderColor}`}
                        onClick={() => handleViewCaseStudy(project)}
                      >
                        View Case Study
                        <ArrowUpRight className="w-4 h-4 ml-2" />
                      </Button>
                      
                      {project.liveUrl && (
                        <Button
                          variant="outline"
                          size="lg"
                          className="bg-white/10 text-white border-white/30 hover:bg-white/20"
                          onClick={() => window.open(project.liveUrl, '_blank')}
                        >
                          Live Demo
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </Button>
                      )}
                      
                      {project.githubUrl && (
                        <Button
                          variant="outline"
                          size="lg"
                          className="bg-white/10 text-white border-white/30 hover:bg-white/20"
                          onClick={() => window.open(project.githubUrl, '_blank')}
                        >
                          GitHub
                          <Github className="w-4 h-4 ml-2" />
                        </Button>
                      )}
                    </div>
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