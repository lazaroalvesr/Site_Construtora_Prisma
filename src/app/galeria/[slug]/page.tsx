import { ProjectDetailClient } from "@/app/_components/ProjectDetailClient";
import { ALL_PROJECTS } from "@/app/data/allProjects";
import { notFound } from "next/navigation";

interface ProjectDetailProps {
    params: Promise<{ slug: string }>;
}

export default async function ProjectDetail({ params }: ProjectDetailProps) {
    const { slug } = await params; 
    const decodedSlug = decodeURIComponent(slug);
    const normalizedSlug = decodedSlug.toLowerCase().replace(/\s/g, '-');

    const project = ALL_PROJECTS.find(p => p.slug === normalizedSlug);

    if (!project) {
        notFound(); 
    }

    return <ProjectDetailClient project={project} />;
}