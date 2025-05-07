import ProjectCard from "@/components/ProjectCard";
import type { Metadata } from 'next';
import { sampleProjects } from '@/data/projects';

export const metadata: Metadata = {
    title: 'My Projects | Blind Code Portfolio',
    description: 'Explore projects developed by Momčilo Nikolić (Blind Code), including work with Next.js, React, Tailwind CSS, Hugo, and more.',
};

export default function Projects() {
    return (
        <div className="container mx-auto px-4 py-16">
            <h1 className="mb-12 text-center text-4xl font-bold tracking-tight text-gray-600 sm:text-5xl">
                My Projects
            </h1>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {sampleProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
}
