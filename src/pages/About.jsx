import React from 'react';
import { SectionHeading } from '@/components/SectionHeading';
import { Card, CardContent } from '@/components/ui/card';
import { PORTFOLIO_DATA } from '@/data';

export function About() {
  const { summary, education } = PORTFOLIO_DATA.about;

  return (
    <div className="container mx-auto px-6 md:px-12 py-16">
      <SectionHeading title="About Me" subtitle="Get to know me and my background" />
      
      <div className="max-w-4xl mx-auto space-y-12">
        <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
          <CardContent className="p-8 space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-primary">Professional Summary</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {summary}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-border/50">
              <div>
                <h3 className="text-xl font-semibold mb-3">Who Am I?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {PORTFOLIO_DATA.about.whoAmI}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Interests & Hobbies</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {PORTFOLIO_DATA.about.hobbies}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-center mb-8">Education Timeline</h3>
          <div className="relative border-l-2 border-primary/30 ml-4 md:ml-8 space-y-8 pb-4">
            {education.map((edu, index) => (
              <div key={edu.id} className="relative pl-8 md:pl-12">
                <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary ring-4 ring-background"></span>
                <Card className="bg-card border-border hover:border-primary/30 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                      <h4 className="text-xl font-bold">{edu.institution}</h4>
                      <span className="text-sm text-primary font-medium">{edu.duration}</span>
                    </div>
                    <p className="text-lg font-medium text-muted-foreground mb-1">{edu.degree}</p>
                    <p className="text-sm text-muted-foreground/80 mb-3">{edu.location} • {edu.grade}</p>
                    {edu.details && (
                      <p className="text-sm text-muted-foreground bg-secondary/30 p-3 rounded-md">
                        {edu.details}
                      </p>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
