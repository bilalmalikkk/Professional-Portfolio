import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Quote, Star, ArrowUpRight } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";
import { useNavigate } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Testimonials = () => {
  const navigate = useNavigate();
  
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO",
      company: "TechStart Inc.",
      content: "Bilal delivered an exceptional website that exceeded our expectations. His attention to detail and technical expertise made the entire process smooth and enjoyable.",
      rating: 5,
      project: "E-commerce Platform",
      avatar: "👩‍💼"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Founder",
      company: "InnovateLab",
      content: "Working with Bilal was a game-changer for our startup. He not only built a great product but also provided valuable insights that helped us scale.",
      rating: 5,
      project: "Mobile App Development",
      avatar: "👨‍💻"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Marketing Director",
      company: "GrowthCo",
      content: "The UI/UX design Bilal created for our platform significantly improved user engagement. His creative approach and technical skills are outstanding.",
      rating: 5,
      project: "UI/UX Design",
      avatar: "👩‍🎨"
    },
    {
      id: 4,
      name: "David Thompson",
      role: "CTO",
      company: "DataFlow Systems",
      content: "Bilal's expertise in database design and backend development helped us build a robust system that handles millions of users efficiently.",
      rating: 5,
      project: "Backend Architecture",
      avatar: "👨‍🔬"
    },
    {
      id: 5,
      name: "Lisa Wang",
      role: "Product Manager",
      company: "CloudScale",
      content: "From concept to deployment, Bilal guided us through every step. His communication skills and technical knowledge made him an invaluable partner.",
      rating: 5,
      project: "Full-Stack Development",
      avatar: "👩‍💼"
    },
    {
      id: 6,
      name: "James Wilson",
      role: "Director",
      company: "Digital Solutions",
      content: "Bilal's ability to understand our business needs and translate them into technical solutions is remarkable. Highly recommended for any development project.",
      rating: 5,
      project: "Enterprise Platform",
      avatar: "👨‍💼"
    }
  ];

  const stats = [
    { label: "Projects Completed", value: "50+" },
    { label: "Happy Clients", value: "30+" },
    { label: "Years Experience", value: "5+" },
    { label: "Success Rate", value: "100%" }
  ];

  return (
    <div className="min-h-screen bg-background relative">
      <AnimatedBackground />
      
      <div className="relative z-10">
        <Navigation />
        
        <div className="pt-20 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
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
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                    What Our Clients Say
                  </h1>
                  <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
                    Don't just take our word for it. Here's what our clients have to say about working with us.
                  </p>
                </div>
              );
            })()}

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {testimonials.map((testimonial, index) => {
                const { elementRef, isVisible } = useScrollAnimation({
                  threshold: 0.2,
                  rootMargin: '0px 0px -100px 0px'
                });

                return (
                  <div
                    ref={elementRef}
                    key={testimonial.id}
                    className={`bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 transform transition-all duration-1000 ease-out ${
                      isVisible 
                        ? 'card-stack-enter' 
                        : 'translate-y-16 opacity-0'
                    }`}
                    style={{
                      transitionDelay: `${index * 150}ms`
                    }}
                  >
                  {/* Quote Icon */}
                  <div className="flex justify-between items-start mb-6">
                    <Quote className="w-8 h-8 text-primary" />
                    <Badge
                      variant="secondary"
                      className="bg-primary/20 text-primary border-primary/30"
                    >
                      {testimonial.project}
                    </Badge>
                  </div>

                  {/* Content */}
                  <p className="text-gray-300 leading-relaxed mb-6">
                    "{testimonial.content}"
                  </p>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="text-2xl">{testimonial.avatar}</div>
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
            </div>

            {/* Stats Section */}
            {(() => {
              const { elementRef: statsRef, isVisible: statsVisible } = useScrollAnimation({
                threshold: 0.2,
                rootMargin: '0px 0px -100px 0px'
              });

              return (
                <div 
                  ref={statsRef}
                  className={`bg-card border border-border rounded-2xl p-8 transform transition-all duration-1000 ease-out ${
                    statsVisible 
                      ? 'card-stack-enter' 
                      : 'translate-y-16 opacity-0'
                  }`}
                >
                  <h2 className="text-3xl font-bold text-white text-center mb-8">
                    Our Impact in Numbers
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                      <div 
                        key={index} 
                        className="text-center transform transition-all duration-1000 ease-out"
                        style={{ transitionDelay: `${index * 100}ms` }}
                      >
                        <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                          {stat.value}
                        </div>
                        <div className="text-gray-400 text-sm">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })()}

            {/* Enhanced Call to Action */}
            {(() => {
              const { elementRef: ctaRef, isVisible: ctaVisible } = useScrollAnimation({
                threshold: 0.2,
                rootMargin: '0px 0px -100px 0px'
              });

              return (
                <div className="text-center mt-16">
                  <div 
                    ref={ctaRef}
                    className={`bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl p-12 relative overflow-hidden transform transition-all duration-1000 ease-out ${
                      ctaVisible 
                        ? 'card-stack-enter' 
                        : 'translate-y-16 opacity-0'
                    }`}
                  >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="relative z-10">
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Ready to Join Our Success Stories?
                      </h2>
                      <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                        Let's work together to create something amazing. Your success story could be next.
                      </p>
                      <div className="text-center">
                        <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-8 py-4">
                          <Quote className="w-5 h-5 text-white" />
                          <span className="text-white font-medium">Ready to be our next success story? Let's talk!</span>
                          <ArrowUpRight className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials; 