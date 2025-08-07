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

  // Extract color classes from project.color (e.g., "bg-teal-500" -> "teal")
  const colorName = project.color.replace('bg-', '').replace('-500', '');
  const colorVariants = {
    'teal': 'from-teal-500/20 to-cyan-500/20 border-teal-500/30',
    'yellow': 'from-yellow-500/20 to-orange-500/20 border-yellow-500/30',
    'green': 'from-green-500/20 to-emerald-500/20 border-green-500/30',
    'pink': 'from-pink-500/20 to-rose-500/20 border-pink-500/30',
    'blue': 'from-blue-500/20 to-indigo-500/20 border-blue-500/30',
    'purple': 'from-purple-500/20 to-violet-500/20 border-purple-500/30',
    'red': 'from-red-500/20 to-pink-500/20 border-red-500/30',
    'indigo': 'from-indigo-500/20 to-purple-500/20 border-indigo-500/30',
    'emerald': 'from-emerald-500/20 to-teal-500/20 border-emerald-500/30',
    'orange': 'from-orange-500/20 to-red-500/20 border-orange-500/30',
    'cyan': 'from-cyan-500/20 to-blue-500/20 border-cyan-500/30',
    'violet': 'from-violet-500/20 to-purple-500/20 border-violet-500/30',
    'rose': 'from-rose-500/20 to-pink-500/20 border-rose-500/30',
  };
  
  const projectColorVariant = colorVariants[colorName as keyof typeof colorVariants] || colorVariants['teal'];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className={`w-[95vw] max-w-7xl max-h-[95vh] md:max-h-[90vh] overflow-y-auto bg-background backdrop-blur-sm scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10 hover:scrollbar-thumb-white/20 scrollbar-thumb-rounded-full p-4 md:p-6 ${project.color} bg-opacity-10 border-2 ${project.borderColor} border-opacity-30`}>
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
                <Badge className={`bg-gradient-to-r ${projectColorVariant} text-white`}>
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
                  className={`bg-gradient-to-r ${projectColorVariant} text-white hover:from-${colorName}-500/30 hover:to-${colorName}-600/30 px-4 py-2 rounded-full`}
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
              <div className={`space-y-4 p-6 bg-gradient-to-br ${projectColorVariant.replace('/20', '/10').replace('/30', '/20')} rounded-2xl border`}>
                <h3 className="text-xl md:text-2xl font-bold text-white text-center">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {caseStudy.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className={`w-2 h-2 bg-gradient-to-r ${projectColorVariant.replace('/20', '').replace('/30', '')} rounded-full mt-2 flex-shrink-0`}></span>
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
                  className={`bg-gradient-to-r ${projectColorVariant} text-white hover:from-${colorName}-500/30 hover:to-${colorName}-600/30 px-4 py-2 rounded-full`}
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
                className={`px-8 py-3 bg-gradient-to-r ${projectColorVariant.replace('/20', '').replace('/30', '')} text-white hover:from-${colorName}-600 hover:to-${colorName}-700 rounded-full text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-2`}
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