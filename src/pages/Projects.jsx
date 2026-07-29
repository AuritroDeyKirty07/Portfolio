import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { SectionHeading } from '@/components/SectionHeading';
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { PORTFOLIO_DATA } from '@/data';

export function Projects() {
  const { projects } = PORTFOLIO_DATA;
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...new Set(projects.map(p => p.category))];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="container mx-auto px-6 md:px-12 py-16">
      <SectionHeading title="Featured Projects" subtitle="Some of my recent work" />
      
      <div className="flex justify-center flex-wrap gap-2 mb-12">
        {categories.map(cat => (
          <Button
            key={cat}
            variant={filter === cat ? "default" : "outline"}
            onClick={() => setFilter(cat)}
            className="rounded-full"
            size="sm"
          >
            {cat}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {filteredProjects.map((project) => (
          <Card key={project.id} className="overflow-hidden flex flex-col bg-card border-border hover:shadow-lg hover:border-primary/50 transition-all duration-300 group">
            <div className="relative overflow-hidden aspect-video bg-muted">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-300" />
            </div>
            
            <CardHeader>
              <div className="flex justify-between items-start gap-4">
                <CardTitle className="text-2xl">{project.title}</CardTitle>
              </div>
            </CardHeader>
            
            <CardContent className="flex-grow space-y-4">
              <CardDescription className="text-base leading-relaxed text-muted-foreground">
                {project.description}
              </CardDescription>
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map(tag => (
                  <Badge key={tag} variant="secondary" className="font-normal text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            
            <CardFooter className="pt-4 border-t border-border/50 gap-4">
              <Button asChild variant="default" className="flex-1">
                <a href={project.live} target="_blank" rel="noreferrer">
                  <ExternalLink size={16} className="mr-2" /> Live Demo
                </a>
              </Button>
              <Button asChild variant="outline" className="flex-1">
                <a href={project.github} target="_blank" rel="noreferrer">
                  <FaGithub size={16} className="mr-2" /> GitHub
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
