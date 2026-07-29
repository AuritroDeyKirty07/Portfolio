import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PORTFOLIO_DATA } from '@/data';

export function Certifications() {
  const { certifications } = PORTFOLIO_DATA;

  return (
    <div className="container mx-auto px-6 md:px-12 py-16">
      <SectionHeading title="Certifications" subtitle="Professional achievements and ongoing learning" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {certifications.map((cert) => (
          <Card key={cert.id} className="bg-card border-border hover:border-primary/50 transition-colors group">
            <CardContent className="p-6 flex flex-col h-full">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-secondary rounded-xl text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Award size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold leading-tight mb-1">{cert.title}</h3>
                  <p className="text-muted-foreground font-medium">{cert.issuer}</p>
                </div>
              </div>
              <div className="mt-auto pt-4 flex items-center justify-between border-t border-border/50">
                <span className="text-sm text-muted-foreground">{cert.date}</span>
                <Button variant="ghost" size="sm" asChild className="group/btn">
                  <a href={cert.link} target="_blank" rel="noreferrer">
                    View <ExternalLink size={14} className="ml-2 opacity-50 group-hover/btn:opacity-100" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
