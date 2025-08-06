import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import HandshakeAnimation from "./HandshakeAnimation";
import { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '@/config/emailjs';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    description: ''
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
      // EmailJS configuration for direct email sending
      const templateParams = {
        name: formData.name,
        message: `
Project Inquiry Details:

Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Service: ${formData.service}
Budget: ${formData.budget}
Description: ${formData.description}

Please contact: ${formData.email}
        `.trim(),
        time: new Date().toLocaleString(),
        subject: `New Project Inquiry from ${formData.name}`
      };

      console.log('Sending email with params:', {
        serviceId: EMAILJS_CONFIG.SERVICE_ID,
        templateId: EMAILJS_CONFIG.TEMPLATE_ID,
        publicKey: EMAILJS_CONFIG.PUBLIC_KEY,
        templateParams
      });

      // Try different EmailJS methods
      let result;
      try {
        // Method 1: Standard send
        result = await emailjs.send(
          EMAILJS_CONFIG.SERVICE_ID,
          EMAILJS_CONFIG.TEMPLATE_ID,
          templateParams,
          EMAILJS_CONFIG.PUBLIC_KEY
        );
        console.log('Email sent successfully with send method:', result);
      } catch (sendError) {
        console.log('Send method failed, trying sendForm:', sendError);
        
        // Method 2: SendForm (alternative)
        result = await emailjs.sendForm(
          EMAILJS_CONFIG.SERVICE_ID,
          EMAILJS_CONFIG.TEMPLATE_ID,
          document.querySelector('form') as HTMLFormElement,
          EMAILJS_CONFIG.PUBLIC_KEY
        );
        console.log('Email sent successfully with sendForm method:', result);
      }

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        budget: '',
        description: ''
      });
    } catch (error) {
      console.error('Email sending failed:', error);
      console.error('Error details:', {
        message: error.message,
        code: error.code,
        stack: error.stack
      });
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
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
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium text-foreground">
                    Name <span className="text-orange-500">*</span>
                  </Label>
                  <Input 
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
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
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
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
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
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
                  <Select onValueChange={(value) => handleInputChange('service', value)} value={formData.service}>
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
                  <Select onValueChange={(value) => handleInputChange('budget', value)} value={formData.budget}>
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
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  rows={4}
                  className="border-border bg-background text-foreground focus:border-orange-500 focus:ring-orange-500 resize-none"
                />
              </div>
              
              {/* Buttons */}
              <div className="flex gap-4 pt-4">
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white hover:from-orange-600 hover:to-yellow-600 rounded-full text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
                <Button 
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setFormData({
                      name: '',
                      email: '',
                      company: '',
                      service: '',
                      budget: '',
                      description: ''
                    });
                    setSubmitStatus('idle');
                  }}
                  className="px-8 py-3 border-white/30 text-white hover:bg-white/10 rounded-full text-sm font-medium"
                >
                  Cancel
                </Button>
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mt-4 p-3 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 text-sm">
                  ✓ Message sent successfully! We'll get back to you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="mt-4 p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 text-sm">
                  ✗ There was an error sending your message. Please try again or contact us directly at bilalmalik746429@gmail.com
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;