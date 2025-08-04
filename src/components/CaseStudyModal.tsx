import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { getProjectImages } from "@/utils/imageUtils";

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    id: number;
    name: string;
    title: string;
    description: string;
    category: string[];
    techStack: string[];
    color?: string;
    borderColor?: string;
    icon?: React.ReactNode;
    image?: string;
    desktopImage?: string;
    mobileImage?: string;
  } | null;
}

const CaseStudyModal = ({ isOpen, onClose, project }: CaseStudyModalProps) => {
  if (!project) return null;

  // Handle different project structures
  const getProjectImagesData = () => {
    if (project.desktopImage && project.mobileImage) {
      return {
        desktop: project.desktopImage,
        mobile: project.mobileImage,
        alt: project.title
      };
    }
    
    // Fallback to the original getProjectImages function
    try {
      return getProjectImages(project.name);
    } catch {
      return {
        desktop: project.image || '',
        mobile: project.image || '',
        alt: project.title
      };
    }
  };

  const projectImages = getProjectImagesData();

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
              {project.icon && (
                <div className="text-white/60">
                  {project.icon}
                </div>
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
            <p className="text-white/80 text-lg leading-relaxed text-center max-w-4xl mx-auto">
              {project.description}
            </p>
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
          </div>

          {/* Tech Stack */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white text-center">Technologies Used</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {project.techStack.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="bg-gradient-to-r from-orange-500/20 to-yellow-500/20 text-white border-orange-500/30 hover:from-orange-500/30 hover:to-yellow-500/30 px-4 py-2 rounded-full"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white text-center">Project Details</h3>
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
              
              <div className="space-y-4 p-6 bg-gradient-to-br from-orange-500/10 to-yellow-500/10 rounded-2xl border border-orange-500/20">
                <h4 className="text-xl font-bold text-white text-center">Development Process</h4>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Agile methodology with iterative development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Continuous integration and deployment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Comprehensive testing and quality assurance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Regular client feedback and iterations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button className="px-8 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white hover:from-orange-600 hover:to-yellow-600 rounded-full text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-2">
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </Button>
            <Button variant="outline" className="px-8 py-3 border-white/30 text-white hover:bg-white/10 rounded-full text-sm font-medium">
              <Github className="w-4 h-4 mr-2" />
              View Code
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CaseStudyModal; 