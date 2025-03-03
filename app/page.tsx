import ArticlesListing from "./ui/footer/articlesListing";
import Footer from "./ui/footer/footer";
import CategoriesList from "./ui/categories et filtering/categoriesList";
import Filter from "./ui/categories et filtering/filter";
import Galerie from "./ui/footer/galerie";
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

          <ArticlesListing />
        </div>
      </div>

      <Galerie />
      <Footer />
    </div>
  );
}
