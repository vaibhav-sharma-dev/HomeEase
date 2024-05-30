import React from "react";
import { FiltersContext } from "../Filters_Section";


export default function PropertyFurnishedCheckbox() {

    const {formData, handleFormDataChange} = React.useContext(FiltersContext);

    return (
        <fieldset className="flex items-center w-full gap-4">
            <input
                type="checkbox"
                id="furnished"
                name="furnished"
                value="furnished"
                onChange={handleFormDataChange}
                checked={formData.furnished}
                className=""
            />

            <label 
                className="text-md sm:text-sm md:text-md lg:text-lg font-semibold"
                htmlFor="furnished"
            >
                Fully Furnished
            </label>
        </fieldset>
    )
}