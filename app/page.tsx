import ArticleCard from "./ui/articleCrad";
import CategoriesList from "./ui/categories et filtering/categoriesList";
import Filter from "./ui/categories et filtering/filter";
import Galerie from "./ui/galerie";
import Header from "./ui/header";

export default function Home() {
  return (
    <div className="w-full">
      <Header />

      <div className="w-full flex justify-center pb-5 bg-[#ccc3f4]">
        <div className="container">
          
          <p className="text-[#001d6c] text-4xl pt-5 font-semibold text-center mb-2">Catégories</p>
          <CategoriesList />
          <Filter />

          <div className="w-full grid grid-cols-3 gap-x-4 gap-y-6 mt-5">
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
          </div>

          <div className="w-full flex justify-between">
            <button className="text-xl text-[#f05c2c] font-bold px-10 py-3 hover:cursor-pointer hover:text-white hover:bg-[#f05c2c] mt-5 border-3 border-[#f05c2c] bg-white rounded-full mx-auto">
              Voir plus
            </button>
          </div>

        </div>
      </div>

      <Galerie />

    </div>
  );
}
