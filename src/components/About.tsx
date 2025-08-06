import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Award, Clock, Users, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      icon: <Clock className="w-6 h-6" />,
      value: "5+",
      label: "Years Experience",
      description: "Building scalable solutions"
    },
    {
      icon: <Users className="w-6 h-6" />,
      value: "50+",
      label: "Happy Clients",
      description: "Successful partnerships"
    },
    {
      icon: <Award className="w-6 h-6" />,
      value: "100+",
      label: "Projects Completed",
      description: "Diverse portfolio"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      value: "98%",
      label: "Client Satisfaction",
      description: "Consistent quality"
    }
  ];



  return (
    <section id="about-section" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
                 {/* Header */}
         <div className={`text-center mb-8 transform transition-all duration-1000 ${
           isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
         }`}>
           <div className="inline-flex items-center gap-4 mb-8">
             <div className="p-3 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl">
               <Award className="w-6 h-6 text-white" />
             </div>
             <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-white uppercase tracking-wider">
               About Me
             </span>
           </div>
            
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
           {/* Content */}
                       <div className={`space-y-6 transform transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
                            <div>
                 <div className="flex items-center gap-4 mb-4">
                   <div className="relative group">
                     {/* Modern gradient background with animation */}
                     <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-600 rounded-full transform rotate-3 scale-110 opacity-30 group-hover:scale-125 group-hover:rotate-6 transition-all duration-500"></div>
                     
                                           {/* Glowing ring effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                     
                     {/* Main avatar container */}
                     <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl group-hover:shadow-orange-500/25 transition-all duration-300">
                                               <img 
                          src="/profile-photo.jpg" 
                          alt="Bilal Malik"
                          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                        />
                       
                       {/* Modern overlay with status indicator */}
                       <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                       
                       {/* Online status indicator */}
                       <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-400 border-2 border-white rounded-full shadow-lg"></div>
                     </div>
                     
                     {/* Floating accent elements */}
                     <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                     <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-yellow-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                   </div>
                   <h3 className="text-2xl md:text-3xl font-bold text-white">
                     Who I Am
                   </h3>
                 </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  I'm Bilal Malik, a seasoned full-stack developer with over 5 years of experience in creating 
                  innovative web applications and digital solutions. My passion lies in building 
                  scalable, user-centric applications that drive business growth and deliver 
                  exceptional user experiences.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  With expertise in modern technologies like React, Node.js, Python, and cloud 
                  platforms, I specialize in turning complex requirements into elegant, 
                  maintainable code that exceeds expectations. My technical journey has been driven 
                  by a deep curiosity for emerging technologies and a commitment to staying ahead 
                  of industry trends.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Throughout my career, I've collaborated with diverse teams and clients across various industries, 
                  from startups to enterprise-level organizations. This experience has taught me the importance 
                  of not just writing code, but understanding business objectives and user needs to create 
                  solutions that truly make a difference.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  I believe in the power of continuous learning and innovation. Every project I undertake 
                  is an opportunity to push boundaries, explore new methodologies, and deliver solutions 
                  that not only meet current needs but are also future-proof.
                </p>
                
              </div>

                           
           </div>

                       {/* Right Column - Stats and Approach */}
            <div className={`space-y-6 transform transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-xl p-4 hover:border-orange-500/50 transition-all duration-300 group"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <div className="p-1.5 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        {stat.icon}
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs font-semibold text-orange-400 mb-1">
                      {stat.label}
                    </div>
                    <div className="text-xs text-gray-400">
                      {stat.description}
                    </div>
                  </div>
                ))}
              </div>

              {/* My Approach */}
              <div className="bg-card border border-border rounded-2xl p-5 transform transition-all duration-1000 delay-600">
                <h4 className="text-lg font-semibold text-white mb-3">My Approach</h4>
                <p className="text-gray-300 leading-relaxed mb-3 text-sm">
                  I believe in creating solutions that not only meet technical requirements but also 
                  deliver measurable business value. My development process focuses on clean code, 
                  scalable architecture, and user-centered design principles.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-orange-500/20 text-orange-400 border-orange-500/30 text-xs">
                    Clean Code
                  </Badge>
                  <Badge variant="secondary" className="bg-orange-500/20 text-orange-400 border-orange-500/30 text-xs">
                    Scalable Architecture
                  </Badge>
                  <Badge variant="secondary" className="bg-orange-500/20 text-orange-400 border-orange-500/30 text-xs">
                    User-Centered Design
                  </Badge>
                  <Badge variant="secondary" className="bg-orange-500/20 text-orange-400 border-orange-500/30 text-xs">
                    Performance Optimized
                  </Badge>
                </div>
              </div>
            </div>
        </div>

        
      </div>
    </section>
  );
};

export default About; 