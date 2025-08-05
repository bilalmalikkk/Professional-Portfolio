import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import HandshakeAnimation from "./HandshakeAnimation";

const Contact = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Section - Text and Handshake */}
          <div className="space-y-10">
            <div className="pt-8">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
                Let's Build Something{" "}
                <span className="text-orange-500">Great Together</span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                We believe in turning ideas into reality and we're ready to join your journey. 
                Reach out to us and let's start discussing your project.
              </p>
            </div>
            
            {/* Handshake Animation below text */}
            <div className="flex justify-center mr-12">
              <HandshakeAnimation />
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