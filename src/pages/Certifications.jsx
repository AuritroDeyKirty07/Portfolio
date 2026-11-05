import React, { useState, useEffect } from 'react';
import { Award, ExternalLink, Eye, X } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PORTFOLIO_DATA } from '@/data';

export function Certifications() {
  const { certifications } = PORTFOLIO_DATA;
  const [selectedCert, setSelectedCert] = useState(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedCert(null);
      }
    };
    if (selectedCert) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedCert]);

  return (
    <div className="container mx-auto px-6 md:px-12 py-16">
      <SectionHeading title="Certifications" subtitle="Professional achievements and ongoing learning" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {certifications.map((cert) => (
          <Card key={cert.id} className="bg-card border-border hover:border-primary/50 transition-all duration-300 group hover:shadow-lg flex flex-col justify-between">
            <CardContent className="p-6 flex flex-col h-full">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-secondary rounded-xl text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                  <Award size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold leading-tight mb-1 text-foreground">{cert.title}</h3>
                  <p className="text-muted-foreground text-sm font-medium">{cert.issuer}</p>
                </div>
              </div>
              
              <div className="mt-auto pt-4 flex items-center justify-between border-t border-border/50">
                <span className="text-xs text-muted-foreground font-medium">{cert.date}</span>
                {cert.isImage || cert.image ? (
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => setSelectedCert(cert)}
                    className="group/btn text-primary hover:text-primary hover:bg-primary/10 cursor-pointer"
                  >
                    View <Eye size={14} className="ml-1.5 opacity-70 group-hover/btn:opacity-100 transition-opacity" />
                  </Button>
                ) : (
                  <Button variant="ghost" size="sm" asChild className="group/btn">
                    <a href={cert.link} target="_blank" rel="noreferrer">
                      View <ExternalLink size={14} className="ml-1.5 opacity-70 group-hover/btn:opacity-100 transition-opacity" />
                    </a>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Certificate Image Modal Lightbox */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedCert(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-card border border-border rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-5 border-b border-border bg-card/90">
              <div>
                <h3 className="text-lg font-bold text-foreground">{selectedCert.title}</h3>
                <p className="text-xs text-muted-foreground">{selectedCert.issuer} • {selectedCert.date}</p>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Image View */}
            <div className="p-4 overflow-auto flex items-center justify-center bg-black/40 min-h-[350px]">
              <img 
                src={selectedCert.image} 
                alt={selectedCert.title}
                className="max-h-[70vh] w-auto max-w-full rounded-lg shadow-md object-contain"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = `${import.meta.env.BASE_URL}fullstack-ai-cert.svg`;
                }}
              />
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-border flex items-center justify-between bg-card text-xs text-muted-foreground">
              <span>Verified Certificate Course (Brain Mentors)</span>
              <Button size="sm" variant="outline" onClick={() => setSelectedCert(null)}>
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
