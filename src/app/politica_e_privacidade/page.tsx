import Link from 'next/link';

export default function PoliticaEPrivacidadePage() {
    return (
        <section className="bg-white py-12 md:py-20">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">

                <h1 className="text-4xl font-extrabold text-[#0D194F] mb-6 border-b-4 border-[#E97527] pb-3">
                    Política de Privacidade da Prisma Construtora
                </h1>

                <p className="text-gray-600 mb-8 text-lg">
                    A sua privacidade é importante para nós. É política da Prisma Construtora respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site <Link href="/" className="text-[#E97527] hover:underline">Prisma Construtora</Link>.
                </p>

                <h2 className="text-2xl font-bold text-[#0D194F] mt-8 mb-4">
                    1. Informações que Coletamos
                </h2>
                <p className="text-gray-600 mb-4">
                    Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. As informações que coletamos podem incluir:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-gray-600">
                    <li><strong>Dados de Identificação</strong>: Nome, email e telefone (geralmente via formulários de contato).</li>
                    <li><strong>Dados de Navegação (Cookies)</strong>: Informações sobre como você utiliza o nosso site (tempo de permanência, páginas visitadas, etc.), coletadas via Google Analytics e Cookies essenciais.</li>
                </ul>

                <h2 className="text-2xl font-bold text-[#0D194F] mt-8 mb-4">
                    2. Uso das Informações Coletadas
                </h2>
                <p className="text-gray-600 mb-4">
                    As informações coletadas são usadas exclusivamente para os seguintes fins:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-gray-600">
                    <li>Melhorar a experiência do usuário e a qualidade do nosso conteúdo e serviços.</li>
                    <li>Responder a pedidos de contato ou orçamentos solicitados por você.</li>
                    <li>Enviar newsletters ou materiais informativos, caso você tenha optado por recebê-los.</li>
                </ul>

                <h2 className="text-2xl font-bold text-[#0D194F] mt-8 mb-4">
                    3. Cookies e Tecnologias Semelhantes
                </h2>
                <p className="text-gray-600 mb-4">
                    Utilizamos cookies para ajudar a analisar o tráfego do website e medir a eficácia das nossas campanhas de marketing. Você pode optar por desativar ou apagar os cookies no seu navegador a qualquer momento.
                </p>

                <h2 className="text-2xl font-bold text-[#0D194F] mt-8 mb-4">
                    4. Compartilhamento com Terceiros
                </h2>
                <p className="text-gray-600 mb-4">
                    Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei. As suas informações podem ser compartilhadas com provedores de serviços terceirizados (como serviços de email marketing) apenas para a execução dos serviços contratados.
                </p>

                <h2 className="text-2xl font-bold text-[#0D194F] mt-8 mb-4">
                    5. Compromisso do Usuário
                </h2>
                <p className="text-gray-600 mb-4">
                    Ao utilizar o site da Prisma Construtora, você se compromete a fazer uso adequado dos conteúdos e da informação que apresentamos, de forma lícita e ética.
                </p>

                <p className="text-gray-500 mt-10 text-sm italic border-t pt-4">
                    Última atualização: 15 de Novembro de 2025.
                </p>

            </div>
        </section>
    )
}