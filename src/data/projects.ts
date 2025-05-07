// src/data/projects.ts

interface Project {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    projectUrl?: string;
    repoUrl?: string;
    tags: string[];
}

export const sampleProjects: Project[] = [
    {
        id: 1,
        title: "Konzum.hr",
        description: "Frontend development for Konzum.hr, a leading online grocery and retail chain in Croatia.",
        imageUrl: "/images/konzum-scr.png", // Corrected path
        projectUrl: "https://www.konzum.hr",
        repoUrl: undefined,
        tags: ["Hugo", "SASS", "jQuery"],
    },
    {
        id: 2,
        title: "Pharmeria.hr",
        description: "Frontend development for Pharmeria.hr, an e-commerce platform for pharmacy, health, and beauty products.",
        imageUrl: "/images/pharmeria-scr.png", // Path was already correct
        projectUrl: "https://www.pharmeria.hr",
        repoUrl: undefined,
        tags: ["ERB", "SCSS", "Stimulus"],
    },
    {
        id: 3,
        title: "Veruda Sport",
        description: "Created the official website for the Veruda Sport association, featuring news, activities, and event information.",
        imageUrl: "/images/vs-scr.png", // Path was already correct
        projectUrl: "https://www.veruda-sport.hr",
        repoUrl: undefined,
        tags: ["HTML", "CSS", "Bootstrap", "JS"],
    },
    {
        id: 4,
        title: "Momcilo Nikolic",
        description: "My first portfolio website, built using fundamental HTML, CSS, and Bootstrap.",
        imageUrl: "/images/first-port-scr.png", // Path was already correct
        projectUrl: "https://momcilonikolic.netlify.app/",
        repoUrl: undefined,
        tags: ["HTML", "CSS", "Bootstrap"],
    },
];
