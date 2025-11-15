export interface SubMenuItem {
    title: string
    href: string
}

export interface DropdownMenuProps {
    mainTitle: string
    subItems: SubMenuItem[]
}

export interface LiHeaderProps {
    text: string
    href: string
}

export interface CardProjetoProps {
    href: string
    src: string
    alt: string
    title: string
    subTitle: string
}

export interface CardDepoimentoProps {
    text: string
    src: string
    alt: string
    title: string
    subTitle: string
}

export interface CardNossoTimeProps {
    src: string
    alt: string
    title: string
    subTitle: string
}

export interface LiFooterProps {
    text: string;
    href?: string;
}

export interface ButtonOption {
    text: string;
    action: () => void;
}

export interface Message {
    id: string;
    text: string;
    isBot: boolean;
    timestamp: Date;
    options?: (string | ButtonOption)[] | null;
    isDelivered?: boolean;
}

export interface imgProjetosInfoProps {
    src: string
    alt: string
    text: string
    section?: string
    slug?: string
}

export interface SectionPageProjetosProps {
    imgProjetos: imgProjetosInfoProps[]
}

export interface ProjectDetailDataProps extends imgProjetosInfoProps {
    challengeDescription?: string;
    solutionDescription?: string;
    tempoConclusaoDaObra?: string
    tamanhoDaObra?: string
    anoDaConstrucao?: string
    images?: { src: string; alt: string }[]; 
}

export interface SinglePost {
    _id: string;
    title: string;
    slug: string;
    imageUrl: string;
    body: any[]; 
    author: string | null;
    createdAt: string; 
}
