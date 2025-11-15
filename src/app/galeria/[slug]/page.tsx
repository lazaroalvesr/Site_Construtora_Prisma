import { ProjectDetailClient } from "@/app/_components/ProjectDetailClient";
import ObrasPublicasProjects from "@/app/data/obrasPublicasProjects";
import { ResidentialProjects } from "@/app/data/residentialProjects";
import SobMedidaProjects from "@/app/data/sobMedidaProjects";
import { ProjectDetailDataProps } from "@/app/lib/interface";
import Link from "next/link";

export const ALL_PROJECTS: ProjectDetailDataProps[] = [
    ...(Array.isArray(ResidentialProjects) ? ResidentialProjects : []),
    ...(Array.isArray(SobMedidaProjects) ? SobMedidaProjects : []),
    ...(Array.isArray(ObrasPublicasProjects) ? ObrasPublicasProjects : []),
];

interface ProjectDetailProps {
    params: {
        slug: string;
    };
}

export default function ProjectDetail({ params }: ProjectDetailProps) {
    
    const decodedSlug = decodeURIComponent(params.slug);
    const normalizedSlug = decodedSlug.toLowerCase().replace(/\s/g, '-');
    
    const project = ALL_PROJECTS.find(p => p.slug === normalizedSlug);

    if (!project) {
        return <h2 className="text-center py-20 text-xl font-semibold">Projeto não encontrado. Volte ao <Link href="/portfolio" className="text-[#E97527] underline">portfólio</Link>.</h2>;
    }

    return <ProjectDetailClient project={project} />;
}
