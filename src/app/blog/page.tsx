import { getAllPosts, getTotalPostCount } from "@/sanity/lib/getAllPosts";
import { getCategories } from "@/sanity/lib/getCategories";
import Link from "next/link";
import Image from "next/image";
import { SearchIcon } from "lucide-react";

const POSTS_PER_PAGE = 8;

export default async function BlogPage({ params }: any) {
    const currentPage = Number(params.page) || 1;

    const offset = (currentPage - 1) * POSTS_PER_PAGE;

    const posts = await getAllPosts(POSTS_PER_PAGE, offset);
    const totalPosts = await getTotalPostCount();
    const categories = await getCategories();

    const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);

    if (!posts || posts.length === 0) {
        return <p className="text-center p-8">Nenhum post encontrado.</p>;
    }

    return (
        <section className="pb-12">
            <div>
                <Image
                    src="/icons/regua-icon.png"
                    alt="Faixa decorativa"
                    width={1200}
                    height={20}
                    className="w-full h-auto"
                />
            </div>

            <div className="max-w-6xl m-auto pt-[53px]">
                <div className="px-6 lg:px-0">
                    <div className="flex lg:items-center flex-col md:flex-row gap-4">
                        <div className="bg-[#E97527] w-[41px] h-[6px]" />
                        <h1 className="text-[#0D194F] font-semibold text-3xl lg:text-4xl">
                            Blog da Prisma
                        </h1>
                    </div>
                </div>

                <div className="flex lg:flex-row flex-col-reverse mt-12">
                    <div className="gap-4 mx-4 grid lg:grid-cols-2 grid-cols-1">
                        {posts.map((post: any) => (
                            <Link href={`/blog/posts/${post.slug}`} key={post._id}>
                                <div className="lg:w-96 h-[500px] bg-gray-200 rounded-2xl">
                                    <Image
                                        src={post.imageUrl}
                                        alt={post.title}
                                        width={200}
                                        height={120}
                                        className="rounded-t-2xl w-full h-60"
                                    />
                                    <div className="p-4">
                                        <h2 className="text-[#0D194F] font-semibold">
                                            {post.title}
                                        </h2>
                                        <div className="w-full h-0.5 bg-gray-400 mt-4" />
                                        <p className="text-sm text-gray-500 line-clamp-6 pt-4">
                                            {post.plainText.join(" ")}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="flex flex-col lg:ml-12 pb-12 ml-8">
                        <label className="w-[300px] bg-gray-200 p-3 border border-gray-300 flex items-start rounded-md">
                            <input
                                type="text"
                                placeholder="Pesquisar..."
                                className="w-80 focus:outline-none"
                            />
                            <SearchIcon size={20} className="cursor-pointer" />
                        </label>

                        <div className="pt-8 ml-2">
                            <h2 className="text-2xl text-[#0D194F] font-semibold">Categorias</h2>
                            <div className="pt-4 ml-1">
                                {categories.map((category: any) => (
                                    <li key={category._id} className="list-none pb-2">
                                        <Link
                                            href={`/categoria/${category.slug}`}
                                            className="text-[#0D194F] hover:text-[#E97527] cursor-pointer"
                                        >
                                            {category.title}
                                        </Link>
                                    </li>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* PAGINAÇÃO */}
                <div className="flex justify-center mt-10 gap-4">
                    {currentPage > 1 && (
                        <Link
                            href={`/blog/page/${currentPage - 1}`}
                            className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
                        >
                            ← Anterior
                        </Link>
                    )}

                    {currentPage < totalPages && (
                        <Link
                            href={`/blog/page/${currentPage + 1}`}
                            className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
                        >
                            Próxima →
                        </Link>
                    )}
                </div>
            </div>
        </section>
    );
}
