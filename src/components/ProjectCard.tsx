// src/components/ProjectCard.tsx
"use client";

import { motion } from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';

interface Project {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    projectUrl?: string;
    repoUrl?: string;
    tags: string[];
}

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <motion.div
            className="flex flex-col overflow-hidden rounded-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
        >
            <div className="relative w-full aspect-video">
                <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover rounded-t-lg"
                    loading="lazy" // Keep lazy loading
                />
            </div>

            <div className="flex flex-1 flex-col p-4">
                <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{project.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="inline-block rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                        >
                          {tag}
                        </span>
                    ))}
                </div>

                <div className="mt-6 flex items-center justify-end gap-4">
                    {project.projectUrl && (
                        <Link
                            href={project.projectUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative inline-flex items-center justify-center px-4 py-2 overflow-hidden text-sm font-medium text-primary-foreground rounded-md bg-gray-600 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-offset-background"
                        >
                            <span className="absolute left-0 top-0 h-full w-0 bg-sky-600 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                            <span className="relative z-10">Live Demo</span>
                        </Link>
                    )}
                    {project.repoUrl && (
                        <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-primary hover:underline">
                            GitHub
                        </Link>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
