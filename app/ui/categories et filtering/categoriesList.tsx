import CategoriesListing from "./categoriesListing"

export default function CategoriesList () {
    return (
        <>
            <div className="w-full flex flex-wrap justify-center gap-4 p-4">
                <button
                    key='Tout'
                    className={`flex items-center rounded-full border px-4 py-1 text-md font-medium transition-all bg-[#2a6235] text-white`}
                >
                    <p className="md:block">Tout</p>
                </button>

                <CategoriesListing />
            </div>
        </>
    )
}