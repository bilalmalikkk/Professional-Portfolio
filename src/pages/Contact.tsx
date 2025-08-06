import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Mail, Phone, MapPin, Clock, MessageSquare, Send, Mail as MailIcon, Phone as PhoneIcon, MapPin as MapPinIcon, Clock as ClockIcon } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";
import { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '@/config/emailjs';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
  }, []);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const templateParams = {
        name: `${formData.firstName} ${formData.lastName}`,
        message: `
Contact Form Submission:

Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
Project Type: ${formData.projectType}
Message: ${formData.message}

Please contact: ${formData.email}
        `.trim(),
        time: new Date().toLocaleString(),
        subject: `New Contact Form Submission from ${formData.firstName} ${formData.lastName}`
      };

      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      console.log('Email sent successfully:', result);
      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        projectType: '',
        message: ''
      });
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <MailIcon className="w-5 h-5" />,
      title: "Email",
      value: "bilalmalik746429@gmail.com",
      description: "Send us an email anytime"
    },
    {
      icon: <PhoneIcon className="w-5 h-5" />,
      title: "Phone",
      value: "+923038043790",
      description: "Mon-Fri from 8am to 6pm"
    },
    {
      icon: <MapPinIcon className="w-5 h-5" />,
      title: "Office",
      value: "Lahore, Pakistan",
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
                         {/* Header Section */}
             <div className="text-center mb-8 md:mb-16">
               <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4">
                 Get In Touch
               </h1>
               <p className="text-base md:text-lg lg:text-xl text-white/70 max-w-3xl mx-auto px-4">
                 Ready to start your next project? Let's discuss how we can help bring your ideas to life.
               </p>
             </div>

                         {/* Main Content Grid - Two Columns */}
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
               
               {/* Contact Information - Left Column */}
               <div className="lg:col-span-1">
                 <div className="bg-card border border-border rounded-2xl p-6 md:p-8 h-auto lg:h-[730px] flex flex-col">
                   <h2 className="text-xl md:text-2xl font-bold text-white mb-6">Contact Information</h2>
                   <div className="space-y-4 flex-1">
                     {contactInfo.map((info, index) => (
                       <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-background/50">
                         <div className="text-primary mt-1">
                           {info.icon}
                         </div>
                         <div>
                           <h3 className="text-white font-semibold text-sm">{info.title}</h3>
                           <p className="text-white text-base font-medium">{info.value}</p>
                           <p className="text-xs text-gray-400">{info.description}</p>
                         </div>
                       </div>
                     ))}
                   </div>
                 </div>
               </div>

               {/* Contact Form - Right Column */}
               <div className="lg:col-span-1">
                 <div className="bg-card border border-border rounded-2xl p-6 md:p-8 h-auto lg:h-[730px] flex flex-col">
                                     <h2 className="text-xl md:text-2xl font-bold text-white mb-6">Send a Message</h2>
                  
                  <form className="space-y-6 flex-1 flex flex-col" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white font-medium mb-2 text-sm">First Name <span className="text-orange-500">*</span></label>
                        <Input 
                          placeholder="John"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          className="bg-background border-border text-white placeholder:text-gray-400"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-white font-medium mb-2 text-sm">Last Name <span className="text-orange-500">*</span></label>
                        <Input 
                          placeholder="Doe"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          className="bg-background border-border text-white placeholder:text-gray-400"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-white font-medium mb-2 text-sm">Email <span className="text-orange-500">*</span></label>
                      <Input 
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="bg-background border-border text-white placeholder:text-gray-400"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-white font-medium mb-2 text-sm">Phone (Optional)</label>
                      <Input 
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="bg-background border-border text-white placeholder:text-gray-400"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-white font-medium mb-2 text-sm">Project Type <span className="text-orange-500">*</span></label>
                      <select 
                        className="w-full bg-background border border-border rounded-md px-3 py-2 text-white text-sm"
                        value={formData.projectType}
                        onChange={(e) => handleInputChange('projectType', e.target.value)}
                        required
                      >
                        <option value="">Select a project type</option>
                        <option value="web">Web Development</option>
                        <option value="mobile">Mobile App</option>
                        <option value="design">UI/UX Design</option>
                        <option value="consulting">Consulting</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-white font-medium mb-2 text-sm">Message <span className="text-orange-500">*</span></label>
                      <Textarea 
                        placeholder="Tell us about your project..."
                        rows={6}
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        className="bg-background border-border text-white placeholder:text-gray-400"
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="bg-white text-black hover:bg-white/90 w-full h-12 mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>

                                         {/* Status Messages */}
                     {submitStatus === 'success' && (
                       <div className="mt-4 p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 text-sm text-center">
                         <div className="flex items-center justify-center gap-2">
                           <span className="text-green-400">✓</span>
                           <span>Message sent successfully! We'll get back to you soon.</span>
                         </div>
                       </div>
                     )}
                     {submitStatus === 'error' && (
                       <div className="mt-4 p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 text-sm text-center">
                         <div className="flex flex-col items-center justify-center gap-2">
                           <div className="flex items-center gap-2">
                             <span className="text-red-400">✗</span>
                             <span>There was an error sending your message.</span>
                           </div>
                           <span className="text-xs">Please try again or contact us directly at bilalmalik746429@gmail.com</span>
                         </div>
                       </div>
                     )}
                  </form>
                </div>
              </div>
            </div>

                         {/* FAQ Section - Full Width Below */}
             <div className="mb-16 mt-8">
               <h3 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8 text-center">Frequently Asked Questions</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                 {faqs.map((faq, index) => (
                   <div key={index} className="p-4 md:p-6 rounded-lg bg-background/20">
                     <h4 className="text-white font-semibold mb-2 md:mb-3 text-sm md:text-base">{faq.question}</h4>
                     <p className="text-gray-400 text-xs md:text-sm leading-relaxed">{faq.answer}</p>
                   </div>
                 ))}
               </div>
             </div>

            {/* Enhanced Call to Action Section */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl p-12 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Ready to Start Your Project?
                  </h2>
                  <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                    Let's discuss how we can help bring your ideas to life with our comprehensive development services. 
                    Get a free consultation and project estimate today.
                  </p>
                                     <div className="text-center">
                     <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-8 py-4">
                       <Mail className="w-5 h-5 text-white" />
                       <span className="text-white font-medium">Ready to discuss your project? Let's connect!</span>
                       <ArrowUpRight className="w-4 h-4 text-white" />
                     </div>
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