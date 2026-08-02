import React from "react";
import { BookOpen, ExternalLink, Calendar, Clock } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PORTFOLIO_DATA } from "@/data";

export function Blog() {
  const { blog } = PORTFOLIO_DATA;

  return (
    <div className="container mx-auto px-6 md:px-12 py-16">
      <SectionHeading
        title="Blog"
        subtitle="My thoughts on software engineering and technology"
      />

      <div className="flex flex-wrap justify-center gap-8">
        {blog.map((post) => (
          <Card
            key={post.id}
            className="w-full max-w-md overflow-hidden flex flex-col bg-card border-border hover:shadow-lg hover:border-primary/50 transition-all duration-300 group"
          >
            <div className="relative overflow-hidden aspect-video bg-muted">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-300" />
            </div>

            <CardHeader className="pb-3">
              <div className="flex justify-between items-center text-xs text-muted-foreground mb-3">
                <span className="flex items-center gap-1">
                  <Calendar size={14} /> {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={14} /> {post.readTime}
                </span>
              </div>
              <CardTitle className="text-xl line-clamp-2 leading-snug group-hover:text-primary transition-colors">
                {post.title}
              </CardTitle>
            </CardHeader>

            <CardContent className="flex-grow">
              <CardDescription className="text-sm leading-relaxed text-muted-foreground line-clamp-3">
                {post.summary}
              </CardDescription>
              <div className="flex flex-wrap gap-2 pt-4">
                {post.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="font-normal text-xs"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>

            <CardFooter className=" flex justify-center h-20 pt-2 pb-6 border-t border-transparent">
              <a href={post.link} target="_blank" rel="noreferrer">
                <Button
                  asChild
                  variant="ghost"
                  className="flex gap-3 justify-between cursor-pointer"
                >
                  Read Article
                  <ExternalLink size={16} />
                </Button>
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="text-center py-12 flex flex-col items-center">
        <BookOpen size={48} className="text-muted-foreground mb-4 opacity-50" />
        <h3 className="text-xl font-medium">Coming Soon</h3>
        <p className="text-muted-foreground">
          I am currently working on some exciting articles. Check back later!
        </p>
      </div>
    </div>
  );
}
