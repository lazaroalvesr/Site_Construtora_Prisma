import { ProjectDetailDataProps } from "../lib/interface";

export const ObrasPublicasProjects: ProjectDetailDataProps[] = [
    {
        src: "/img/obras_publicas/obras_publicas_1.jpg",
        slug: "construcao-edificio-administrativo",
        alt: "Edifício administrativo moderno de 15 andares",
        text: "Construção de Edifício Público",
        section: "/obras_publicas",
        tamanhoDaObra: "15.000m² (Área construída)",
        anoDaConstrucao: "2023",
        tempoConclusaoDaObra: "2 anos e 6 meses",
        challengeDescription: "A implantação do novo Edifício Administrativo de 15 pavimentos em área urbana consolidada exigiu um planejamento logístico <strong>extremamente detalhado</strong> para minimizar o impacto no tráfego local. O desafio técnico incluiu a execução da laje protendida em altura e a instalação de sistemas HVAC (Climatização) de alta eficiência energética. Foi crucial a <strong>coordenação rigorosa</strong> de segurança no canteiro de obras e a gestão simultânea de subempreiteiras para garantir a entrega dentro do prazo fiscal.",
        images: [
            { src: "/img/obras_publicas/obras_publicas_1.jpg", alt: "Vista principal do novo edifício em área urbana" },
            { src: "/img/obras_publicas/obra_predio_fundacao.jpg", alt: "Detalhamento da fundação e estacas helicoidais" },
            { src: "/img/obras_publicas/obra_predio_frente.jpg", alt: "Fachada com revestimento em vidro e controle solar" },
        ],
    },

    {
        src: "/img/obras_publicas/obras_publicas_2.jpg",
        alt: "Pavimentação de nova via expressa",
        text: "Projeto de Pavimentação Urbana",
    },

    {
        src: "/img/obras_publicas/obras_publicas_3.jpg",
        slug: "edificio-luxo",
        alt: "Edifício alto em construção com guindaste no topo",
        text: "Edifício luxo",
        section: "/sob_medida",
        tamanhoDaObra: "30.000m² (25 pavimentos)",
        anoDaConstrucao: "2024",
        tempoConclusaoDaObra: "3 anos",
        challengeDescription: "A construção deste edifício vertical de alto padrão exigiu um controle rigoroso de segurança e precisão estrutural. O maior desafio foi o <strong>gerenciamento logístico vertical</strong> (movimentação de materiais e equipes em altura) e a instalação da estrutura do guindaste (grua) em um canteiro de obras apertado, em área urbana. Foi fundamental a <strong>aplicação de sistemas de vedação e fachadas de alto desempenho</strong> para garantir o conforto termoacústico dos futuros moradores ou ocupantes.",
        images: [
            { src: "/img/obras_publicas/obras_publicas_3.jpg", alt: "Edifício em fase final de estrutura com grua" },
            { src: "/img/obras_publicas/fundacao_predio.jpg", alt: "Fundação do edificio" },
            { src: "/img/obras_publicas/fachada_predio.jpg", alt: "Fachada do edificio" },
        ],
    },

    {
        src: "/img/obras_publicas/obras_publicas_4.jpg",
        alt: "Construção de terminal de ônibus e praça",
        text: "Terminal de Transporte Urbano",
    },

    {
        src: "/img/obras_publicas/obras_publicas_5.jpg",
        alt: "Instalação de rede elétrica subterrânea",
        text: "Rede Elétrica e Iluminação Pública",
    },

    {
        src: "/img/obras_publicas/obras_publicas_6.jpg",
        alt: "Entrada de túnel em rodovia",
        text: "Construção de Passagem Subterrânea",
    },
];

export default ObrasPublicasProjects;