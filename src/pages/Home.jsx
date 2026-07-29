import React from 'react';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import  LeetcodeCard  from '@/components/LeetcodeCard';
import { PORTFOLIO_DATA } from '@/data';
import { Link } from 'react-router-dom';

export function Home() {
  const { name, role, description, socials, resumeLink } = PORTFOLIO_DATA.hero;

  return (
    <div className="container mx-auto px-6 md:px-12 py-12 md:py-24 flex flex-col justify-center min-h-[calc(100vh-80px)]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h2 className="text-primary font-medium tracking-wide">HELLO, I'M</h2>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
              {name}
            </h1>
            <h3 className="text-2xl md:text-3xl text-muted-foreground font-medium">
              {role}
            </h3>
            <p className="text-lg text-muted-foreground/80 max-w-xl leading-relaxed">
              {description}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Button asChild size="lg" className="rounded-full group cursor-pointer">
              <Link to="/projects" className="flex items-center">
                View Projects 
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full cursor-pointer">
              <a href={resumeLink} target="_blank" rel="noreferrer" className="flex items-center">
                <Download className="mr-2" size={18} />
                Download Resume
              </a>
            </Button>
          </div>

          <div className="flex items-center gap-4 pt-4">
            <a href={socials.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2">
              <FaGithub size={24} />
            </a>
            <a href={socials.linkedin} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2">
              <FaLinkedin size={24} />
            </a>
            <a href={`mailto:${socials.email}`} className="text-muted-foreground hover:text-primary transition-colors p-2">
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end animate-fade-in-up">
          <div className="w-full max-w-md">
            <LeetcodeCard />
          </div>
        </div>
      </div>
    </div>
  );
}
