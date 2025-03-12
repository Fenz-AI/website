"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

// R&D project data
const researchProjects = [
  {
    id: 1,
    title: "Imitate Before Detect",
    intro: "Aligning Machine Stylistic Preference for Machine-Revised Text Detection",
    link: "https://machine-text-detection.github.io/ImBD/",
    tags: ["NLP", "Detection", "AI Research"]
  }
];

const ResearchAndDevelopment = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section className="w-full py-20 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-3">Research & Development</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our cutting-edge research initiatives pushing the boundaries of AI technology
          </p>
        </div>

        <div className="flex flex-col items-center space-y-8 max-w-4xl mx-auto">
          {researchProjects.map((project) => (
            <motion.div
              key={project.id}
              className="w-full"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full overflow-hidden transition-all duration-300 ${
                hoveredProject === project.id ? "shadow-lg border-primary/50" : "shadow"
              }`}>
                <CardHeader>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary" className="font-medium">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <CardTitle className="text-xl sm:text-2xl">
                    {project.link ? (
                      <Link 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 hover:text-primary transition-colors"
                      >
                        {project.title}
                        <ArrowTopRightIcon className="h-4 w-4" />
                      </Link>
                    ) : (
                      project.title
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {project.intro}
                  </CardDescription>
                </CardContent>
                <CardFooter className="pt-4">
                  {project.link && (
                    <Link 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1.5"
                    >
                      View Research
                      <ArrowTopRightIcon className="h-3.5 w-3.5" />
                    </Link>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchAndDevelopment;
