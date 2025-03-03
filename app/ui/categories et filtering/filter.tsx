import FilterTemplate from "./filterTemplate";
import { IoMdTrash } from "react-icons/io";

const localisationOptionsValues = ["Tous", "Cameroun", "Togo"]
const AgirSurOptionsValues = ['Tous', 'Forêt et biodiversité', 'Condition de vie']
const StatusOptionsValues = ['Tous', 'En collecte', 'En déploiement', 'Réalisé']

export default function Filter() {
    return (
        <div className="w-full px-12 flex inline-flex items-center justify-between mt-2 mb-4">
            <div className="flex inline-flex items-center gap-4">
                    <FilterTemplate filterName="Localisation" optionValues= {localisationOptionsValues} selectedValue="Cameroun" />
                    <FilterTemplate filterName="Agir sur" optionValues= {AgirSurOptionsValues} selectedValue="Forêt et biodiversité" />
                    <FilterTemplate filterName="Status" optionValues={StatusOptionsValues} selectedValue="En collecte" />
            </div>

            <div className="flex inline-flex items-center gap-4">
                <button 
                    className="text-gray-600 flex inline-flex gap-3 hover:text-gray-700 items-center font-semibold text-lg p-2 hover:bg-gray-300 rounded-md hover:cursor-pointer"
                >
                    <IoMdTrash size={20}/>
                    <p>Effacer les filtres</p>
                </button>
            </div>
        </div>
    )
}