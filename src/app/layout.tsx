import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ClientLayout from "./_components/ClientLayout";

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: {
    default: "Prisma Construtora | Engenharia Civil, Obras e Projetos",
    template: "%s | Prisma Construtora",
  },
  description: "Prisma Construtora: Especialistas em Engenharia Civil, Construção Industrial e Obras Residenciais de Alto Padrão. Qualidade, transparência e comprometimento em cada etapa. Solicite seu orçamento sem compromisso!",

  keywords: [
    'Prisma Construtora', 'Construção Civil', 'Engenharia Civil',
    'Obras Industriais', 'Construção Residencial Alto Padrão',
    'Orçamento de Obra', 'Construtora em [Hortolândia/SP]'!
  ],

  openGraph: {
    title: "Prisma Construtora | Excelência em Engenharia e Construção",
    description: "Especialistas em Obras de Infraestrutura, Industrial e Residencial. Qualidade e transparência garantidas em todos os projetos.",
    url: 'https://www.suaempresa.com.br',
    siteName: 'Prisma Construtora',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Fachada de projeto de destaque da Prisma Construtora',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="shortcut icon" href="/icons/icon.png" type="image/png" />
      </head>
      <body
        className={`${poppins.variable} antialiased`}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}