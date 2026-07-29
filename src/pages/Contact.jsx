import React, { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SectionHeading } from '@/components/SectionHeading';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PORTFOLIO_DATA } from '@/data';

export function Contact() {
  const { socials } = PORTFOLIO_DATA.hero;

  const [submitted, setSubmitted] = useState(false)
const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
  e.preventDefault();

  setLoading(true);

  const formData = new FormData(e.target);

  try {
    const response = await fetch("https://formspree.io/f/maqdkgka", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setSubmitted(true);
      e.target.reset();
    } else {
      alert("Something went wrong.");
    }
  } catch (error) {
    alert("Failed to send message.");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="container mx-auto px-6 md:px-12 py-16">
      <SectionHeading title="Get In Touch" subtitle="I'm always open to new opportunities and collaborations" />
      
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
        
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <p className="text-muted-foreground mb-8">
              Feel free to reach out to me for any questions or opportunities! I'll get back to you as soon as possible.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-secondary rounded-full text-primary">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-sm font-medium text-muted-foreground">Email</h4>
                <a href={`mailto:${socials.email}`} className="text-lg font-medium hover:text-primary transition-colors">
                  {socials.email}
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-3 bg-secondary rounded-full text-primary">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-sm font-medium text-muted-foreground">Location</h4>
                <p className="text-lg font-medium">Ghaziabad, India</p>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-border/50">
            <h4 className="text-sm font-medium text-muted-foreground mb-4">Connect with me</h4>
            <div className="flex gap-4">
              <a href={socials.github} target="_blank" rel="noreferrer" className="p-3 bg-secondary rounded-full text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <FaGithub size={24} />
              </a>
              <a href={socials.linkedin} target="_blank" rel="noreferrer" className="p-3 bg-secondary rounded-full text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          <Card className="bg-card border-border shadow-lg">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="cf-name" className="text-sm font-medium">Full Name</label>
                  <input 
                    type="text" 
                    id="cf-name" 
                    name="name"
                    required
                    className="w-full bg-background border border-input rounded-md px-4 py-3 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="cf-email" className="text-sm font-medium">Email Address</label>
                  <input 
                    type="email" 
                    id="cf-email"
                    name="cf-email" 
                    required
                    className="w-full bg-background border border-input rounded-md px-4 py-3 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="cf-msg" className="text-sm font-medium">Message</label>
                  <textarea 
                    id="cf-msg" 
                    name="message"
                    required
                    rows={5}
                    className="w-full bg-background border border-input rounded-md px-4 py-3 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all resize-y"
                    placeholder="How can I help you?"
                  ></textarea>
                </div>
                
                {submitted && (
  <div className="rounded-md bg-green-500/10 border border-green-500/30 p-4 text-green-500">
Your message has been sent successfully. I'll get back to you soon!
  </div>
)}
                <Button
  type="submit"
  size="lg"
  className="w-full cursor-pointer"
  disabled={loading}
>
  {loading ? "Sending..." : "Send Message"}
  {!loading && <Send size={18} className="ml-2" />}
</Button>


                
                
              </form>
            </CardContent>
          </Card>
        </div>
        
      </div>
    </div>
  );
}
