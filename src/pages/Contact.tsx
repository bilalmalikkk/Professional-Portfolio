import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Mail, Phone, MapPin, Clock, MessageSquare, Send, Mail as MailIcon, Phone as PhoneIcon, MapPin as MapPinIcon, Clock as ClockIcon } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";

const Contact = () => {
  const contactInfo = [
    {
      icon: <MailIcon className="w-5 h-5" />,
      title: "Email",
      value: "hello@bilalmalik.dev",
      description: "Send us an email anytime"
    },
    {
      icon: <PhoneIcon className="w-5 h-5" />,
      title: "Phone",
      value: "+1 (555) 123-4567",
      description: "Mon-Fri from 8am to 6pm"
    },
    {
      icon: <MapPinIcon className="w-5 h-5" />,
      title: "Office",
      value: "New York, NY",
      description: "Visit us anytime"
    },
    {
      icon: <ClockIcon className="w-5 h-5" />,
      title: "Response Time",
      value: "Within 24 hours",
      description: "We'll get back to you quickly"
    }
  ];

  const socialLinks = [
    { name: "LinkedIn", url: "#", icon: "💼" },
    { name: "Twitter", url: "#", icon: "🐦" },
    { name: "GitHub", url: "#", icon: "💻" },
    { name: "Dribbble", url: "#", icon: "🎨" }
  ];

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer comprehensive web development, mobile app development, UI/UX design, and digital consulting services."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity. Simple websites take 2-4 weeks, while complex applications can take 3-6 months."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, we offer maintenance and support packages to ensure your project continues to perform optimally."
    },
    {
      question: "What is your pricing structure?",
      answer: "We provide custom quotes based on project requirements. Contact us for a detailed proposal."
    }
  ];

  return (
    <div className="min-h-screen bg-background relative">
      <AnimatedBackground />
      
      <div className="relative z-10">
        <Navigation />
        
        <div className="pt-20 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Get In Touch
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ready to start your next project? Let's discuss how we can help bring your ideas to life.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                {/* Contact Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="bg-card border border-border rounded-2xl p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="text-primary">
                          {info.icon}
                        </div>
                        <h3 className="text-white font-semibold">{info.title}</h3>
                      </div>
                      <p className="text-white text-lg font-medium mb-1">{info.value}</p>
                      <p className="text-sm text-gray-400">{info.description}</p>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="bg-card border border-border rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-white mb-6">Follow Us</h3>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="lg"
                        className="bg-white/10 text-white border-white/20 hover:bg-white/20"
                      >
                        <span className="text-xl mr-2">{social.icon}</span>
                        {social.name}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Map Section */}
                <div className="bg-card border border-border rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-white mb-6">Our Location</h3>
                  <div className="bg-gray-800 rounded-xl h-48 flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <MapPin className="w-12 h-12 mx-auto mb-3" />
                      <p>Interactive Map Coming Soon</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="space-y-8">
                <div className="bg-card border border-border rounded-2xl p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
                  
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-white font-medium mb-2">First Name</label>
                        <Input 
                          placeholder="John"
                          className="bg-background border-border text-white placeholder:text-gray-400"
                        />
                      </div>
                      <div>
                        <label className="block text-white font-medium mb-2">Last Name</label>
                        <Input 
                          placeholder="Doe"
                          className="bg-background border-border text-white placeholder:text-gray-400"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-white font-medium mb-2">Email</label>
                      <Input 
                        type="email"
                        placeholder="john@example.com"
                        className="bg-background border-border text-white placeholder:text-gray-400"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-white font-medium mb-2">Phone (Optional)</label>
                      <Input 
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        className="bg-background border-border text-white placeholder:text-gray-400"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-white font-medium mb-2">Project Type</label>
                      <select className="w-full bg-background border border-border rounded-md px-3 py-2 text-white">
                        <option value="">Select a project type</option>
                        <option value="web">Web Development</option>
                        <option value="mobile">Mobile App</option>
                        <option value="design">UI/UX Design</option>
                        <option value="consulting">Consulting</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-white font-medium mb-2">Message</label>
                      <Textarea 
                        placeholder="Tell us about your project..."
                        rows={6}
                        className="bg-background border-border text-white placeholder:text-gray-400"
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      size="lg"
                      className="bg-primary text-white hover:bg-primary/90 w-full"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </div>

                {/* FAQ Section */}
                <div className="bg-card border border-border rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-white mb-6">Frequently Asked Questions</h3>
                  <div className="space-y-4">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-border pb-4 last:border-b-0">
                        <h4 className="text-white font-semibold mb-2">{faq.question}</h4>
                        <p className="text-gray-400 text-sm">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 