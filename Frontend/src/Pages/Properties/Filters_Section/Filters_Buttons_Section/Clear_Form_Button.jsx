import React from "react";
import { FiltersContext } from "../Filters_Section";


export default function ClearFormButton() {

    const {handleFormDataClear} = React.useContext(FiltersContext);

    return (
        <button
            className="bg-[#282828] hover:bg-black text-white px-4 py-0.5 ml-2 rounded-full font-montserrat transition-colors duration-300"
            onClick={handleFormDataClear}
        >
            Clear
        </button>
    )
}