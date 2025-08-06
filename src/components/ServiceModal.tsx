import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CheckCircle, Clock, Users, Target } from "lucide-react";

interface Service {
  id: number;
  name: string;
  title: string;
  description: string;
  features: string[];
  category: string[];
  color: string;
  borderColor: string;
  icon: React.ReactNode;
  detailedDescription?: string;
  process?: string[];
  benefits?: string[];
  timeline?: string;
  teamSize?: string;
  deliverables?: string[];
}

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: Service | null;
}

const ServiceModal = ({ isOpen, onClose, service }: ServiceModalProps) => {
  if (!service) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-background border-white/20 backdrop-blur-sm scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10 hover:scrollbar-thumb-white/20 scrollbar-thumb-rounded-full">
        <DialogHeader className="relative">
          <DialogTitle className="text-3xl md:text-4xl font-bold text-white text-center">
            {service.title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-8">
          {/* Service Overview */}
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-white/60 text-sm font-medium uppercase tracking-wider">
                {service.name}
              </span>
            </div>

            {/* Category Tags */}
            <div className="flex flex-wrap gap-3 justify-center">
              {service.category.map((cat) => (
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
              {service.description}
            </p>
          </div>

          {/* Detailed Information Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Features & Technologies */}
            <div className="space-y-4 p-6 bg-gradient-to-br from-orange-500/10 to-yellow-500/10 rounded-2xl border border-orange-500/20">
              <h4 className="text-xl font-bold text-white text-center">Technologies & Features</h4>
              <div className="grid grid-cols-2 gap-3">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-white/80">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Process & Timeline */}
            <div className="space-y-4 p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl border border-blue-500/20">
              <h4 className="text-xl font-bold text-white text-center">Development Process</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-white/80">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                  <span>Discovery & Planning</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                  <span>Design & Prototyping</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                  <span>Development & Testing</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">4</div>
                  <span>Deployment & Support</span>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="space-y-4 p-6 bg-gradient-to-br from-green-500/10 to-teal-500/10 rounded-2xl border border-green-500/20">
            <h4 className="text-xl font-bold text-white text-center">Why Choose Our {service.name} Service?</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <Target className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <h5 className="font-semibold text-white mb-1">Custom Solutions</h5>
                <p className="text-sm text-white/70">Tailored to your specific needs and requirements</p>
              </div>
              <div className="text-center">
                <Clock className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <h5 className="font-semibold text-white mb-1">Fast Delivery</h5>
                <p className="text-sm text-white/70">Quick turnaround times without compromising quality</p>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <h5 className="font-semibold text-white mb-1">Expert Team</h5>
                <p className="text-sm text-white/70">Experienced developers and designers</p>
              </div>
            </div>
          </div>

          {/* Deliverables */}
          <div className="space-y-4 p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl border border-purple-500/20">
            <h4 className="text-xl font-bold text-white text-center">What You'll Get</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <h5 className="font-semibold text-white">Complete Source Code</h5>
                  <p className="text-sm text-white/70">Full ownership of your project codebase</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <h5 className="font-semibold text-white">Documentation</h5>
                  <p className="text-sm text-white/70">Comprehensive technical documentation</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <h5 className="font-semibold text-white">Deployment Support</h5>
                  <p className="text-sm text-white/70">Help with hosting and deployment setup</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <h5 className="font-semibold text-white">Post-Launch Support</h5>
                  <p className="text-sm text-white/70">Ongoing maintenance and updates</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button 
              className="px-8 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white hover:from-orange-600 hover:to-yellow-600 rounded-full text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-2"
              onClick={() => {
                onClose();
                // Navigate to contact page
                window.location.href = '/contact';
              }}
            >
              <ArrowUpRight className="w-4 h-4" />
              Get Started
            </Button>
            <Button 
              variant="outline"
              className="px-8 py-3 border-white/30 text-white hover:bg-white/10 rounded-full text-sm font-medium"
              onClick={onClose}
            >
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceModal; 