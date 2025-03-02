export default function FilterTemplate({filterName, optionValues, selectedValue}: {filterName : string, optionValues: Array<string>, selectedValue: string}) {
    return (
        <div className="flex inline-flex items-center gap-2">
            <p className="text-black font-semibold">{filterName}: </p>

            <form className="max-w-[200px] mx-auto">
                <select id={filterName} className="bg-gray-50 text-md bg-transparent text-[#2a6235] block w-full p-2.5">
                    {optionValues.map((option, index) => {
                        return (
                            <option 
                                key={index} 
                                value={option} 
                                selected={selectedValue == option}
                            > 
                                {option}
                            </option>
                        );
                    })}
                </select>
            </form>
        </div>
    )
}