import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { getProjectImages, getProjectSequenceImages } from "@/utils/imageUtils";
import { type Project, getCaseStudyById } from "@/data/projects";
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
  const caseStudy = getCaseStudyById(project.id);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[95vw] max-w-7xl max-h-[95vh] md:max-h-[90vh] overflow-y-auto bg-background border-white/20 backdrop-blur-sm scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10 hover:scrollbar-thumb-white/20 scrollbar-thumb-rounded-full p-4 md:p-6">
        <DialogHeader className="relative">
          <DialogTitle className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center">
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

          {/* Enhanced Case Study Information */}
          {caseStudy && (
            <div className="space-y-8">
              {/* Key Features */}
              <div className="space-y-4 p-6 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 rounded-2xl border border-teal-500/20">
                <h3 className="text-xl md:text-2xl font-bold text-white text-center">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {caseStudy.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-white/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Gallery */}
              <div className="space-y-6">
                <h3 className="text-xl md:text-2xl font-bold text-white text-center">Project Gallery</h3>
                
                <div className="relative">
                  <Carousel
                    opts={{
                      align: "start",
                      loop: true,
                    }}
                    className="w-full"
                  >
                    <CarouselContent>
                      {/* Desktop Screenshot */}
                      <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/2">
                        <div className="p-1">
                          <div className="w-full h-60 md:h-80 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-lg border border-white/10 overflow-hidden transform hover:scale-105 transition-transform duration-300">
                            <img 
                              src={projectImages.desktop} 
                              alt={`${project.name} desktop view`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </CarouselItem>
                      
                      {/* Sequence Images */}
                      {sequenceImages.map((image, index) => (
                        <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-1/2">
                          <div className="p-1">
                            <div className="w-full h-60 md:h-80 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-lg border border-white/10 overflow-hidden transform hover:scale-105 transition-transform duration-300">
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
                    <CarouselPrevious className="bg-white/20 border-white/30 text-white hover:bg-white/30 hover:border-white/50 w-10 h-10 md:w-12 md:h-12 -left-2 md:-left-6" />
                    <CarouselNext className="bg-white/20 border-white/30 text-white hover:bg-white/30 hover:border-white/50 w-10 h-10 md:w-12 md:h-12 -right-2 md:-right-6" />
                  </Carousel>
                </div>
              </div>

              {/* Aim Section */}
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-white text-center">Project Aim</h3>
                <p className="text-white/80 leading-relaxed text-lg text-center max-w-4xl mx-auto">
                  {caseStudy.aim}
                </p>
              </div>

              {/* Development Process */}
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-white text-center">Development Process</h3>
                <p className="text-white/80 leading-relaxed text-lg text-center max-w-4xl mx-auto">
                  {caseStudy.development}
                </p>
              </div>

              {/* Results */}
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-white text-center">Results & Impact</h3>
                <p className="text-white/80 leading-relaxed text-lg text-center max-w-4xl mx-auto">
                  {caseStudy.results}
                </p>
              </div>
            </div>
          )}

          {/* Tech Stack */}
          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl font-bold text-white text-center">Technology Stack</h3>
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
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CaseStudyModal; 