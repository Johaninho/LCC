import { IoFlashOutline, IoWaterOutline, IoHeartOutline, IoLaptopOutline, IoFemaleOutline, IoBriefcaseOutline, IoBookOutline, IoTrendingDown } from "react-icons/io5";
import { MdNature, MdMemory, MdSchool, MdRiceBowl, MdNaturePeople, MdSavedSearch } from "react-icons/md";

const categoriesliste = [
    { name: "Santé/Hygiène", icon: IoHeartOutline },
    { name: "Accès à l'eau", icon: IoWaterOutline },
    { name: "Accès à l'énergie", icon: IoFlashOutline },
    { name: "Éducation", icon: MdSchool },
    { name: "Sécurité alimentaire", icon: MdRiceBowl },
    { name: "Digital", icon: IoLaptopOutline },
    { name: "Empowerment des femmes", icon: IoFemaleOutline },
    { name: "Entrepreneuriat", icon: IoBriefcaseOutline },
    { name: "Formation", icon: IoBookOutline },
    { name: "Low Tech", icon: MdMemory },
    { name: "Réduction de la pénibilité", icon: IoTrendingDown },
    { name: "R&D", icon: MdSavedSearch },
    { name: "Agroforesterie", icon: MdNature },
    { name: "Agriculture raisonnée", icon: MdNaturePeople }
];

export default function CategoriesListing () {
    return (
        <>
            {categoriesliste.map((categorie, index) => {
                const IconComponent = categorie.icon;
                return (
                <button
                    key={index}
                    className={`flex inline-flex items-center gap-2 rounded-full border px-4 py-1 text-md font-medium transition-all border-[#001d6c] text-[#001d6c] hover:bg-[#2a6235] hover:text-white hover:border-white`}
                >
                    <IconComponent size={20} />
                    <p className="md:block">{categorie.name}</p>
                </button>
                );
            })}
        </>
    )
}