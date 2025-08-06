import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { getProjectImages, getProjectSequenceImages } from "@/utils/imageUtils";
import { type Project } from "@/data/projects";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

const CaseStudyModal = ({ isOpen, onClose, project }: CaseStudyModalProps) => {
  if (!project) return null;

  const projectImages = getProjectImages(project.name);
  const sequenceImages = getProjectSequenceImages(project.name);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto bg-background border-white/20 backdrop-blur-sm scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10 hover:scrollbar-thumb-white/20 scrollbar-thumb-rounded-full">
        <DialogHeader className="relative">
          <DialogTitle className="text-3xl md:text-4xl font-bold text-white text-center">
            {project.title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-8">
          {/* Project Overview */}
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-white/60 text-sm font-medium uppercase tracking-wider">
                {project.name}
              </span>
              {project.featured && (
                <Badge className="bg-gradient-to-r from-orange-500/20 to-yellow-500/20 text-white border-orange-500/30">
                  Featured
                </Badge>
              )}
            </div>

            {/* Category Tags */}
            <div className="flex flex-wrap gap-3 justify-center">
              {project.category.map((cat) => (
                <Badge
                  key={cat}
                  variant="secondary"
                  className="bg-gradient-to-r from-orange-500/20 to-yellow-500/20 text-white border-orange-500/30 hover:from-orange-500/30 hover:to-yellow-500/30 px-4 py-2 rounded-full"
                >
                  {cat}
                </Badge>
              ))}
            </div>

            {/* Description */}
            <p className="text-lg text-white/80 text-center leading-relaxed max-w-4xl mx-auto">
              {project.description}
            </p>

            {/* Project Details */}
            <div className="flex flex-wrap gap-4 justify-center text-white/60 text-sm">
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
          </div>

          {/* Project Images */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white text-center">Project Screenshots</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Desktop Screenshot */}
              <div className="space-y-4">
                <h4 className="text-lg font-medium text-white/80 text-center">Desktop View</h4>
                <div className="w-full h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl border border-white/10 overflow-hidden transform hover:scale-105 transition-transform duration-300">
                  <img 
                    src={projectImages.desktop} 
                    alt={`${project.name} desktop view`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Mobile Screenshot */}
              <div className="space-y-4">
                <h4 className="text-lg font-medium text-white/80 text-center">Mobile View</h4>
                <div className="w-full h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl border border-white/10 overflow-hidden transform hover:scale-105 transition-transform duration-300">
                  <img 
                    src={projectImages.mobile} 
                    alt={`${project.name} mobile view`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Sequence Images Carousel */}
            {sequenceImages.length > 0 && (
              <div className="space-y-4">
                <h4 className="text-lg font-medium text-white/80 text-center">Project Gallery</h4>
                <div className="relative">
                  <Carousel
                    opts={{
                      align: "start",
                      loop: true,
                    }}
                    className="w-full"
                  >
                    <CarouselContent>
                      {sequenceImages.map((image, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                          <div className="p-1">
                            <div className="w-full h-48 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-lg border border-white/10 overflow-hidden transform hover:scale-105 transition-transform duration-300">
                              <img 
                                src={image} 
                                alt={`${project.name} screenshot ${index + 1}`}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="bg-white/10 border-white/20 text-white hover:bg-white/20" />
                    <CarouselNext className="bg-white/10 border-white/20 text-white hover:bg-white/20" />
                  </Carousel>
                </div>
              </div>
            )}
          </div>

          {/* Tech Stack */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white text-center">Technology Stack</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {project.techStack.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white border-blue-500/30 hover:from-blue-500/30 hover:to-purple-500/30 px-4 py-2 rounded-full"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Project Features and Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4 p-6 bg-gradient-to-br from-orange-500/10 to-yellow-500/10 rounded-2xl border border-orange-500/20">
              <h4 className="text-xl font-bold text-white text-center">Key Features</h4>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Responsive design for all devices</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Modern UI/UX with intuitive navigation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Scalable architecture for future growth</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Performance optimized for speed</span>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4 p-6 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-2xl border border-green-500/20">
              <h4 className="text-xl font-bold text-white text-center">Project Benefits</h4>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Enhanced user experience and engagement</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Improved efficiency and productivity</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Reduced operational costs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Future-proof technology stack</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            {project.liveUrl && (
              <Button 
                className="px-8 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white hover:from-orange-600 hover:to-yellow-600 rounded-full text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-2"
                onClick={() => window.open(project.liveUrl, '_blank')}
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </Button>
            )}
            {project.githubUrl && (
              <Button 
                variant="outline" 
                className="px-8 py-3 border-white/30 text-white hover:bg-white/10 rounded-full text-sm font-medium"
                onClick={() => window.open(project.githubUrl, '_blank')}
              >
                <Github className="w-4 h-4 mr-2" />
                View Code
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CaseStudyModal; 