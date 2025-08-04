import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const Contact = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section - Heading and Illustration */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
                Let's Build Something{" "}
                <span className="text-orange-500">Great Together</span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                We believe in turning ideas into reality and we're ready to join your journey. 
                Reach out to us and let's start discussing your project.
              </p>
            </div>
            
            {/* Handshake Illustration */}
            <div className="relative w-64 h-48 flex items-center justify-center">
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Background circle */}
                <div className="absolute w-32 h-32 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-full blur-xl"></div>
                
                {/* Handshake icon */}
                <div className="relative z-10 flex items-center justify-center">
                  {/* Left hand */}
                  <div className="relative">
                    <div className="w-16 h-20 bg-gradient-to-b from-orange-400 to-orange-600 rounded-full relative shadow-lg">
                      {/* Fingers */}
                      <div className="absolute top-2 left-1 w-3 h-8 bg-orange-300 rounded-full transform rotate-12"></div>
                      <div className="absolute top-1 left-3 w-3 h-6 bg-orange-300 rounded-full transform rotate-6"></div>
                      <div className="absolute top-0 left-5 w-3 h-7 bg-orange-300 rounded-full transform -rotate-6"></div>
                      <div className="absolute top-1 left-7 w-3 h-5 bg-orange-300 rounded-full transform -rotate-12"></div>
                      {/* Thumb */}
                      <div className="absolute top-4 -left-1 w-4 h-6 bg-orange-300 rounded-full transform -rotate-45"></div>
                    </div>
                  </div>
                  
                  {/* Right hand */}
                  <div className="relative -ml-2">
                    <div className="w-16 h-20 bg-gradient-to-b from-gray-400 to-gray-600 rounded-full relative shadow-lg">
                      {/* Fingers */}
                      <div className="absolute top-2 right-1 w-3 h-8 bg-gray-300 rounded-full transform -rotate-12"></div>
                      <div className="absolute top-1 right-3 w-3 h-6 bg-gray-300 rounded-full transform -rotate-6"></div>
                      <div className="absolute top-0 right-5 w-3 h-7 bg-gray-300 rounded-full transform rotate-6"></div>
                      <div className="absolute top-1 right-7 w-3 h-5 bg-gray-300 rounded-full transform rotate-12"></div>
                      {/* Thumb */}
                      <div className="absolute top-4 -right-1 w-4 h-6 bg-gray-300 rounded-full transform rotate-45"></div>
                    </div>
                  </div>
                </div>
                
                {/* Sparkles */}
                <div className="absolute top-4 left-8">
                  <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
                </div>
                <div className="absolute top-6 right-12">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-1000"></div>
                </div>
                <div className="absolute bottom-8 left-12">
                  <div className="w-2 h-2 bg-orange-300 rounded-full animate-pulse delay-500"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Section - Contact Form */}
          <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
            <form className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium text-foreground">
                    Name <span className="text-orange-500">*</span>
                  </Label>
                  <Input 
                    id="name"
                    placeholder="Your name"
                    className="border-border bg-background text-foreground focus:border-orange-500 focus:ring-orange-500"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email <span className="text-orange-500">*</span>
                  </Label>
                  <Input 
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="border-border bg-background text-foreground focus:border-orange-500 focus:ring-orange-500"
                    required
                  />
                </div>
              </div>
              
              {/* Company Name */}
              <div className="space-y-2">
                <Label htmlFor="company" className="text-sm font-medium text-foreground">
                  Company Name <span className="text-orange-500">*</span>
                </Label>
                <Input 
                  id="company"
                  placeholder="Your company"
                  className="border-border bg-background text-foreground focus:border-orange-500 focus:ring-orange-500"
                  required
                />
              </div>
              
              {/* Service and Budget Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="service" className="text-sm font-medium text-foreground">
                    How can we help you? <span className="text-orange-500">*</span>
                  </Label>
                  <Select>
                    <SelectTrigger className="border-border bg-background text-foreground focus:border-orange-500 focus:ring-orange-500">
                      <SelectValue placeholder="Select Service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="web-development">Web Development</SelectItem>
                      <SelectItem value="mobile-development">Mobile Development</SelectItem>
                      <SelectItem value="ui-ux-design">UI/UX Design</SelectItem>
                      <SelectItem value="ecommerce">E-commerce Solutions</SelectItem>
                      <SelectItem value="database">Database Design</SelectItem>
                      <SelectItem value="devops">DevOps & Security</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="budget" className="text-sm font-medium text-foreground">
                    Budget Range <span className="text-orange-500">*</span>
                  </Label>
                  <Select>
                    <SelectTrigger className="border-border bg-background text-foreground focus:border-orange-500 focus:ring-orange-500">
                      <SelectValue placeholder="Select Budget Range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                      <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                      <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                      <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                      <SelectItem value="100k+">$100,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              {/* Project Description */}
              <div className="space-y-2">
                <Label htmlFor="description" className="text-sm font-medium text-foreground">
                  Tell us about your project
                </Label>
                <Textarea 
                  id="description"
                  placeholder="Describe your project requirements, goals, and any specific details..."
                  rows={4}
                  className="border-border bg-background text-foreground focus:border-orange-500 focus:ring-orange-500 resize-none"
                />
              </div>
              
              {/* Buttons */}
              <div className="flex gap-4 pt-4">
                <Button 
                  type="submit"
                  className="px-8 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white hover:from-orange-600 hover:to-yellow-600 rounded-full text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Send Message
                </Button>
                <Button 
                  type="button"
                  variant="outline"
                  className="px-8 py-3 border-white/30 text-white hover:bg-white/10 rounded-full text-sm font-medium"
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;