import ArticleCard from "../articleCrad";
import { GetArticles } from "../../lib/data";

export interface Article {
    id: number;
    title: string;
    body: string;
    userId: number;
}


export default async  function ArticlesListing() {
    const data = await GetArticles()
    return (
        <>
            <div className="w-full grid grid-cols-3 gap-x-4 gap-y-6 mt-5">
                {data.slice(0,6).map((post: Article) => (
                    <ArticleCard title={post.title} body={post.body} id={post.id} />
                ))}
            </div>

            <div className="w-full flex justify-between">
                <button className="text-xl text-[#f05c2c] my-3 font-bold px-10 py-3 transition-transform transform hover:scale-105 hover:cursor-pointer hover:text-white hover:bg-[#f05c2c] mt-5 border-3 border-[#f05c2c] bg-white rounded-full mx-auto">
                Voir plus
                </button>
            </div>
        </>
    )
}