import ArticleCard from "./ui/articleCrad";

export default function ArticlesListing() {
    return (
        <>
            <div className="w-full grid grid-cols-3 gap-x-4 gap-y-6 mt-5">
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
            </div>

            <div className="w-full flex justify-between">
                <button className="text-xl text-[#f05c2c] my-3 font-bold px-10 py-3 hover:cursor-pointer hover:text-white hover:bg-[#f05c2c] mt-5 border-3 border-[#f05c2c] bg-white rounded-full mx-auto">
                Voir plus
                </button>
            </div>
        </>
    )
}