import { Link } from "lucide-react";

export default function TermosDeUsoPage() {
    return (
        <section className="bg-white py-12 md:py-20">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">

                <h1 className="text-4xl font-extrabold text-[#0D194F] mb-6 border-b-4 border-[#E97527] pb-3">
                    Termos de Uso do Site Prisma Construtora
                </h1>

                <p className="text-gray-600 mb-8 text-lg">
                    Estes Termos de Uso regem o uso do site <Link href="/" className="text-[#E97527] hover:underline">Prisma Construtora</Link> e estabelecem os direitos e responsabilidades aplicáveis ao uso dos nossos conteúdos e serviços.
                </p>

                <h2 className="text-2xl font-bold text-[#0D194F] mt-8 mb-4">
                    1. Aceitação dos Termos
                </h2>
                <p className="text-gray-600 mb-4">
                    Ao acessar e utilizar este site, você concorda em cumprir estes Termos de Uso e todas as leis e regulamentos aplicáveis. Se você não concordar com algum destes termos, está proibido de usar ou acessar este site.
                </p>

                <h2 className="text-2xl font-bold text-[#0D194F] mt-8 mb-4">
                    2. Propriedade Intelectual
                </h2>
                <p className="text-gray-600 mb-4">
                    Todo o conteúdo presente neste site, incluindo textos, gráficos, logotipos, designs, fotos de projetos e código, é propriedade da Prisma Construtora ou de seus licenciadores e está protegido por leis de direitos autorais e marcas.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-gray-600">
                    <li>Você pode visualizar e fazer download de materiais (informações) apenas para uso pessoal e não comercial.</li>
                    <li>É estritamente proibida a modificação, cópia, distribuição ou republicação de qualquer material deste site sem o consentimento prévio por escrito da Prisma Construtora.</li>
                </ul>

                <h2 className="text-2xl font-bold text-[#0D194F] mt-8 mb-4">
                    3. Isenção de Responsabilidade
                </h2>
                <p className="text-gray-600 mb-4">
                    Os materiais no site da Prisma Construtora são fornecidos "como estão". A Prisma Construtora não oferece garantias, expressas ou implícitas, e se isenta de todas as outras garantias, incluindo garantias implícitas de comercialização, adequação a um fim específico ou não violação de propriedade intelectual.
                </p>
                <p className="text-gray-600 mb-4">
                    Nossos posts de blog e dicas de reforma são apenas sugestões informativas. Não nos responsabilizamos por perdas ou danos resultantes da aplicação destas informações.
                </p>

                <h2 className="text-2xl font-bold text-[#0D194F] mt-8 mb-4">
                    4. Links Externos
                </h2>
                <p className="text-gray-600 mb-4">
                    A Prisma Construtora não analisou todos os sites ligados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por parte da Prisma Construtora. O uso de qualquer site vinculado é por conta e risco do usuário.
                </p>

                <h2 className="text-2xl font-bold text-[#0D194F] mt-8 mb-4">
                    5. Modificações dos Termos
                </h2>
                <p className="text-gray-600 mb-4">
                    A Prisma Construtora pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual destes Termos de Uso.
                </p>

                <p className="text-gray-500 mt-10 text-sm italic border-t pt-4">
                    Última atualização: 15 de Novembro de 2025.
                </p>

            </div>
        </section>
    )
}