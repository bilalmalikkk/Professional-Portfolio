import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Code, Palette, Smartphone, Globe, Database, Shield, Zap } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";

const Services = () => {
  const services = [
    {
      id: 1,
      name: "Web Development",
      title: "Custom Web Applications",
      description: "Full-stack web development with modern technologies. From simple landing pages to complex enterprise applications, we build scalable solutions that drive business growth.",
      features: ["React/Next.js", "Node.js/Express", "Python/Django", "PostgreSQL/MongoDB"],
      category: ["Frontend", "Backend", "Full-Stack"],
      color: "bg-blue-500",
      borderColor: "border-blue-500",
      icon: <Code className="w-6 h-6" />
    },
    {
      id: 2,
      name: "UI/UX Design",
      title: "User-Centered Design",
      description: "Beautiful, intuitive interfaces that enhance user experience. We create designs that not only look great but also solve real user problems and drive engagement.",
      features: ["Figma/Sketch", "Prototyping", "User Research", "Design Systems"],
      category: ["Design", "UX Research", "Prototyping"],
      color: "bg-purple-500",
      borderColor: "border-purple-500",
      icon: <Palette className="w-6 h-6" />
    },
    {
      id: 3,
      name: "Mobile Development",
      title: "Native & Cross-Platform Apps",
      description: "Mobile applications that work seamlessly across iOS and Android. We build native and cross-platform solutions that deliver exceptional user experiences.",
      features: ["React Native", "Flutter", "iOS/Swift", "Android/Kotlin"],
      category: ["Mobile", "Cross-Platform", "Native"],
      color: "bg-green-500",
      borderColor: "border-green-500",
      icon: <Smartphone className="w-6 h-6" />
    },
    {
      id: 4,
      name: "E-commerce Solutions",
      title: "Online Store Development",
      description: "Complete e-commerce platforms that convert visitors into customers. From product catalogs to payment processing, we build everything you need to sell online.",
      features: ["Shopify/WooCommerce", "Payment Integration", "Inventory Management", "Analytics"],
      category: ["E-commerce", "Payment Processing", "Analytics"],
      color: "bg-orange-500",
      borderColor: "border-orange-500",
      icon: <Globe className="w-6 h-6" />
    },
    {
      id: 5,
      name: "Database Design",
      title: "Data Architecture & Management",
      description: "Robust database solutions that scale with your business. We design efficient data structures and implement secure, high-performance database systems.",
      features: ["PostgreSQL", "MongoDB", "Redis", "Data Migration"],
      category: ["Database", "Architecture", "Performance"],
      color: "bg-red-500",
      borderColor: "border-red-500",
      icon: <Database className="w-6 h-6" />
    },
    {
      id: 6,
      name: "Security & DevOps",
      title: "Infrastructure & Security",
      description: "Secure, scalable infrastructure that keeps your applications running smoothly. From cloud deployment to security audits, we ensure your systems are protected.",
      features: ["AWS/Azure", "Docker/Kubernetes", "CI/CD", "Security Audits"],
      category: ["DevOps", "Security", "Cloud"],
      color: "bg-indigo-500",
      borderColor: "border-indigo-500",
      icon: <Shield className="w-6 h-6" />
    }
  ];

  const filterCategories = [
    "All", "Web Development", "Mobile", "Design", "E-commerce", 
    "Database", "DevOps", "Security", "Cloud"
  ];

  return (
    <div className="min-h-screen bg-background relative">
      <AnimatedBackground />
      
      <div className="relative z-10">
        <Navigation />
        
        <div className="pt-20 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Our Services
              </h1>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service) => (
                <div
                  key={service.id}
                  className={`${service.color} rounded-3xl p-8 min-h-[400px] flex flex-col`}
                >
                  {/* Service Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="text-white">
                      {service.icon}
                    </div>
                    <span className="text-white/80 text-sm font-medium">
                      {service.name}
                    </span>
                  </div>

                  {/* Category Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.category.map((cat) => (
                      <Badge
                        key={cat}
                        variant="secondary"
                        className="bg-white/20 text-white border-white/30 hover:bg-white/30"
                      >
                        {cat}
                      </Badge>
                    ))}
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {service.title}
                  </h2>

                  {/* Description */}
                  <p className="text-white/90 text-base leading-relaxed mb-6 flex-1">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((feature) => (
                      <Badge
                        key={feature}
                        variant="secondary"
                        className="bg-white/20 text-white border-white/30 hover:bg-white/30"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button
                    variant="outline"
                    size="lg"
                    className={`bg-white text-black border-white hover:bg-white/90 ${service.borderColor} w-full`}
                  >
                    Learn More
                    <ArrowUpRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              ))}
            </div>

            {/* Call to Action Section */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl p-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Start Your Project?
                </h2>
                <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                  Let's discuss how we can help bring your ideas to life with our comprehensive development services.
                </p>
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-white/90 border-white"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Get Started
                  <ArrowUpRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services; 