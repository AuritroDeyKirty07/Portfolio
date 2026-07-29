import React from 'react';
import { cn } from '@/utils';

export function SectionHeading({ title, subtitle, className }) {
  return (
    <div className={cn("flex flex-col items-center justify-center text-center mb-12", className)}>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground max-w-[600px] mx-auto text-lg">
          {subtitle}
        </p>
      )}
      <div className="w-16 h-1 bg-primary rounded-full mt-6"></div>
    </div>
  );
}
