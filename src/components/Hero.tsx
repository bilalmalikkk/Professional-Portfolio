import { Button } from "@/components/ui/button";
import { ArrowDown, Mouse, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min((scrollTop / docHeight) * 100, 100);
      setScrollProgress(progress);
    };

    // Trigger animation after component mounts
    const timer = setTimeout(() => setIsVisible(true), 500);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollIndicatorClick = () => {
    scrollToProjects();
  };

  const navigateToProjects = () => {
    navigate('/projects');
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden">
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-8">
          <div className="hero-badge px-4 py-2 rounded-full text-sm text-foreground/80 border border-white/20 bg-white/5 backdrop-blur-sm">
            <span className="inline-block w-2 h-2 bg-white/60 rounded-full mr-2"></span>
            Crafting Unique Software Solutions
          </div>
        </div>
        
        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-8 leading-tight tracking-tight">
          Software that you<br />
          need Indeed
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-12 leading-relaxed">
          Elevate your business with custom software solutions and innovative applications. 
          Transform your ideas into powerful digital experiences with cutting-edge technology.
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <Button 
            onClick={scrollToProjects}
            className="px-8 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white hover:from-orange-600 hover:to-yellow-600 rounded-full text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-2"
          >
            <span>Get Started Now</span>
            <ArrowDown className="w-4 h-4" />
          </Button>
          <Button 
            variant="outline"
            className="px-8 py-3 border-white/30 text-white hover:bg-white/10 rounded-full text-sm font-medium"
            onClick={navigateToProjects}
          >
            See Projects
          </Button>
        </div>
      </div>
      
      {/* Enhanced Scroll Indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-4 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}>
        
        {/* Scroll Text */}
        <div className="text-sm text-foreground/60 animate-pulse">Scroll down to see projects</div>
        
        {/* Interactive Scroll Indicator */}
        <div 
          className="relative cursor-pointer group"
          onClick={handleScrollIndicatorClick}
        >
          {/* Outer Circle */}
          <div className="w-16 h-16 border border-foreground/30 rounded-full flex items-center justify-center relative overflow-hidden">
            
            {/* Progress Ring */}
            <svg className="absolute inset-0 w-full h-full transform -rotate-90">
              <circle
                cx="32"
                cy="32"
                r="28"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                className="text-foreground/20"
              />
              <circle
                cx="32"
                cy="32"
                r="28"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeDasharray={`${2 * Math.PI * 28}`}
                strokeDashoffset={`${2 * Math.PI * 28 * (1 - scrollProgress / 100)}`}
                className="text-orange-500 transition-all duration-300 ease-out"
                style={{ strokeLinecap: 'round' }}
              />
            </svg>
            
            {/* Center Content */}
            <div className="relative z-10 flex flex-col items-center">
              <Mouse className="w-4 h-4 text-foreground/60 mb-1 group-hover:text-orange-500 transition-colors duration-300" />
              <span className="text-xs text-foreground/60 font-medium">
                {Math.round(scrollProgress)}%
              </span>
            </div>
            
            {/* Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          
          {/* Bouncing Arrow */}
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
            <ChevronDown className="w-4 h-4 text-orange-500 animate-bounce" />
          </div>
        </div>
        
        {/* Pulse Effect */}
        <div className="absolute inset-0 w-20 h-20 border border-orange-500/30 rounded-full animate-ping opacity-20"></div>
      </div>
    </section>
  );
};

export default Hero;