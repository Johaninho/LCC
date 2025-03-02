const categoriesliste = [
    { name: "Santé/Hygiène", icon : ""},
    { name : "Accès à l'eau", icon : ""},
    { name : "Accès à l'energie", icon : ""},
    { name : "Education", icon : ""},
    { name : "Sécurité alimentaire", icon : ""},
    { name : "Digital", icon : ""},
    { name : "Empowerment des femmes", icon : ""},
    { name : "Entrepreunariat", icon : ""},
    { name : "Formation", icon : ""},
    { name : "Low Tech", icon : ""},
    { name : "Réduction de la pénibilité", icon : ""},
    { name : "R&D", icon : ""},
    { name : "Agroforesterie", icon : ""},
    { name : "Agriculture raisonnée", icon : ""}
]

export default function CategoriesListing () {
    return (
        <>
            {categoriesliste.map((categorie, index) => {
                return (
                <button
                    key={index}
                    className={`flex items-center rounded-full border px-4 py-1 text-md font-medium transition-all border-[#001d6c] text-[#001d6c] hover:bg-[#2a6235] hover:text-white hover:border-white`}
                >
                    <p className="md:block">{categorie.name}</p>
                </button>
                );
            })}
        </>
    )
}