import React from 'react';
import { SectionHeading } from '@/components/SectionHeading';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { PORTFOLIO_DATA } from '@/data';

export function Skills() {
  const { skills } = PORTFOLIO_DATA;

  return (
    <div className="container mx-auto px-6 md:px-12 py-16">
      <SectionHeading title="Technical Skills" subtitle="Technologies and tools I work with" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {Object.entries(skills).map(([category, items]) => (
          <Card key={category} className="bg-card border-border hover:border-primary/50 transition-colors h-full">
            <CardHeader>
              <CardTitle className="text-xl">{category}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {items.map((skill) => (
                <div key={skill.name} className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-xs text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary rounded-full transition-all duration-1000 ease-out" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
