import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { PORTFOLIO_DATA } from '@/data';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">Auritro Dey Kirty<span className="text-primary">.</span></h3>
            <p className="text-muted-foreground text-sm max-w-sm">
              Computer Science undergraduate focused on building scalable and beautiful web applications.
            </p>
          </div>

          <div className="flex gap-4">
            <a href={PORTFOLIO_DATA.hero.socials.github} target="_blank" rel="noreferrer" className="p-2 bg-secondary rounded-full text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
              <FaGithub size={20} />
            </a>
            <a href={PORTFOLIO_DATA.hero.socials.linkedin} target="_blank" rel="noreferrer" className="p-2 bg-secondary rounded-full text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
              <FaLinkedin size={20} />
            </a>
            <a href={`mailto:${PORTFOLIO_DATA.hero.socials.email}`} className="p-2 bg-secondary rounded-full text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
              <Mail size={20} />
            </a>
          </div>

        </div>

        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Auritro Dey Kirty. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Back to top <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
