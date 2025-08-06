import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, ExternalLink } from "lucide-react";
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
        
        <div className="pt-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8 sm:mb-12">
              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                  Our Work
                </h1>
                <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
                  Explore our portfolio of innovative projects and creative solutions
                </p>
              </div>
              
              {/* Filter Buttons */}
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {filterCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
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
            <div className="space-y-6 sm:space-y-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className={`${project.color} rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 min-h-[400px] sm:min-h-[450px] flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12`}
                >
                  {/* Content */}
                  <div className="flex-1 space-y-4 sm:space-y-6">
                    {/* Project Name */}
                    <div className="flex items-center gap-2">
                      <span className="text-white/80 text-xs sm:text-sm font-medium">
                        {project.name}
                      </span>
                      {project.featured && (
                        <Badge className="bg-white/20 text-white border-white/30 text-xs">
                          Featured
                        </Badge>
                      )}
                    </div>

                    {/* Category Tags */}
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {project.category.map((cat) => (
                        <Badge
                          key={cat}
                          variant="secondary"
                          className="bg-white/20 text-white border-white/30 hover:bg-white/30 text-xs"
                        >
                          {cat}
                        </Badge>
                      ))}
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                      {project.title}
                    </h2>

                    {/* Description */}
                    <p className="text-white/90 text-base sm:text-lg leading-relaxed max-w-2xl">
                      {project.description}
                    </p>

                    {/* Project Details */}
                    <div className="flex flex-wrap gap-2 sm:gap-4 text-white/80 text-xs sm:text-sm">
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
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {project.techStack.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-white/20 text-white border-white/30 hover:bg-white/30 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                      <Button
                        variant="outline"
                        size="sm"
                        className={`bg-white text-black border-white hover:bg-white/90 ${project.borderColor} text-xs sm:text-sm`}
                        onClick={() => handleViewCaseStudy(project)}
                      >
                        View Case Study
                        <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
                      </Button>
                      
                      {project.liveUrl && !['Strada', 'Comovorun', 'Icon-IQ'].includes(project.name) && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="bg-white/10 text-white border-white/30 hover:bg-white/20 text-xs sm:text-sm"
                          onClick={() => window.open(project.liveUrl, '_blank')}
                        >
                          Live Demo
                          <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
                        </Button>
                      )}
                      

                    </div>
                  </div>

                  {/* Device Mockups */}
                  <div className="flex-1 flex justify-center lg:justify-end">
                    <div className="relative">
                      {/* Desktop Mockup */}
                      <div className="relative mb-4">
                        <div className={`bg-gray-800 rounded-lg shadow-2xl border-2 sm:border-4 border-gray-700 overflow-hidden ${
                          ['Icon-IQ', 'Comovorun', 'Strada'].includes(project.name)
                            ? 'w-72 sm:w-80 md:w-96 h-48 sm:h-56 md:h-64' // Reduced width for new projects
                            : 'w-64 sm:w-80 md:w-86 h-32 sm:h-40 md:h-46' // Original size for existing projects
                        }`}>
                          <img 
                            src={getProjectImages(project.name).desktop} 
                            alt={getProjectImages(project.name).alt}
                            className="w-full h-full object-contain bg-gray-900"
                          />
                        </div>
                      </div>
                      
                      {/* Mobile Mockup - Only show for existing projects, not for new ones */}
                      {!['Icon-IQ', 'Comovorun', 'Strada'].includes(project.name) && (
                        <div className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4">
                          <div className="w-24 sm:w-32 md:w-40 h-36 sm:h-48 md:h-64 bg-gray-800 rounded-xl sm:rounded-2xl shadow-2xl border-2 sm:border-4 border-gray-700 overflow-hidden">
                            <img 
                              src={getProjectImages(project.name).mobile} 
                              alt={getProjectImages(project.name).alt}
                              className="w-full h-full object-contain bg-gray-900"
                            />
                          </div>
                        </div>
                      )}
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