import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Server, Wrench, Sparkles, Zap, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  const handleExploreWork = () => {
    navigate('/projects');
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('skills-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Frontend Development",
      subtitle: "Modern UI/UX Technologies",
      icon: <Code className="w-6 h-6" />,
      color: "from-orange-700 to-yellow-700",
      borderColor: "border-orange-700/20",
      bgColor: "bg-orange-700/10",
      skills: ["React", "Next.js","Angular", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Material-UI"]
    },
    {
      title: "Backend Development",
      subtitle: "Server-Side Technologies",
      icon: <Server className="w-6 h-6" />,
      color: "from-yellow-700 to-orange-700",
      borderColor: "border-yellow-700/20",
      bgColor: "bg-orange-700/10",
      skills: [".NET Core", "Node.js", "Express.js", "Django", "Python", "C#", "RESTful APIs", "GraphQL"]
    },
    {
      title: "Database & Storage",
      subtitle: "Data Management Solutions",
      icon: <Database className="w-6 h-6" />,
      color: "from-orange-700 to-yellow-700",
      borderColor: "border-orange-700/20",
      bgColor: "bg-orange-700/10",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase", "SQL Server"]
    },
    {
      title: "DevOps & Tools",
      subtitle: "Infrastructure & Deployment",
      icon: <Wrench className="w-6 h-6" />,
      color: "from-orange-700 to-yellow-700",
      borderColor: "border-orange-700/20",
      bgColor: "bg-orange-700/10",
      skills: ["Git", "Docker", "AWS", "Azure", "Vercel", "Postman", "Jest", "Webpack"]
    }
  ];

  return (
    <section id="skills-section" className="py-1 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-black/50"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-4 mb-8">
            <div className="p-3 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-white uppercase tracking-wider">
              Expertise
            </span>
          </div>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit of cutting-edge technologies I leverage to transform ideas into 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 font-semibold"> exceptional digital experiences</span>
          </p>
        </div>
        
        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`transform transition-all duration-700 ease-out ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Card className={`skill-card p-8 border ${category.borderColor} ${category.bgColor} backdrop-blur-sm hover:scale-105 transition-all duration-500 group`}>
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 bg-gradient-to-r ${category.color} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {category.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {category.subtitle}
                    </p>
                  </div>
                </div>
                
                {/* Skills */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary"
                      className={`bg-white/10 text-white border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 group-hover:scale-105`}
                      style={{ transitionDelay: `${skillIndex * 50}ms` }}
                    >
                      <Zap className="w-3 h-3 mr-1" />
                      {skill}
                    </Badge>
                  ))}
                </div>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
              </Card>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className={`text-center mt-16 transform transition-all duration-700 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`} style={{ transitionDelay: '600ms' }}>
          <div 
            onClick={handleExploreWork}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full text-white font-medium hover:scale-105 transition-transform duration-300 cursor-pointer group"
          >
            <span>Explore My Work</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;