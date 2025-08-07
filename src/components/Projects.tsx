import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import CaseStudyModal from "@/components/CaseStudyModal";
import { getProjectImages } from "@/utils/imageUtils";
import { projects, type Project } from "@/data/projects";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleViewCaseStudy = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  // Show only the first 8 projects plus Strada as the 9th featured project
  const firstEightProjects = projects.slice(0, 8);
  const stradaProject = projects.find(project => project.name === "Strada");
  const displayProjects = stradaProject ? [...firstEightProjects, stradaProject] : firstEightProjects;

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Animation */}
        {(() => {
          const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation({
            threshold: 0.2,
            rootMargin: '0px 0px -100px 0px'
          });
          
          return (
            <div 
              ref={headerRef}
              className={`text-center mb-16 transform transition-all duration-1000 ease-out ${
                headerVisible 
                  ? 'header-enter' 
                  : 'translate-y-8 opacity-0'
              }`}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Featured Projects
              </h2>
              <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
                Explore our latest work and innovative solutions
              </p>
            </div>
          );
        })()}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayProjects.map((project, index) => {
            const projectImages = getProjectImages(project.name);
            const { elementRef, isVisible } = useScrollAnimation({
              threshold: 0.1,
              rootMargin: '0px 0px -50px 0px'
            });
            
            return (
              <Card 
                ref={elementRef}
                key={project.id} 
                className={`group relative overflow-hidden bg-transparent border-none cursor-pointer featured-project-card transform transition-all duration-1000 ease-out ${
                  index % 3 === 0 ? 'md:col-span-2 md:row-span-2' : ''
                } ${
                  isVisible 
                    ? 'project-card-enter' 
                    : 'translate-y-12 opacity-0 scale-95'
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`
                }}
              >
                <div className="relative w-full h-full overflow-hidden rounded-lg">
                  <img 
                    src={projectImages.desktop}   
                    alt={projectImages.alt}
                    className="w-full h-full object-cover filter grayscale transition-all duration-500 group-hover:grayscale-0"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 transition-all duration-300"></div>
                  
                  {/* Project Info Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 project-overlay">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-white text-lg font-semibold mb-2">{project.title}</h3>
                      <p className="text-white/80 text-sm line-clamp-2">{project.description}</p>
                    </div>
                  </div>
                  
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
            );
          })}
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