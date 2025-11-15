import { ResidentialProjects } from "./residentialProjects";
import { SobMedidaProjects } from "./sobMedidaProjects";
import ObrasPublicasProjects from "./obrasPublicasProjects";
import { ProjectDetailDataProps } from "@/app/lib/interface";

export const ALL_PROJECTS: ProjectDetailDataProps[] = [
    ...(Array.isArray(ResidentialProjects) ? ResidentialProjects : []),
    ...(Array.isArray(SobMedidaProjects) ? SobMedidaProjects : []),
    ...(Array.isArray(ObrasPublicasProjects) ? ObrasPublicasProjects : []),
];