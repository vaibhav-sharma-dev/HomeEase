import React from "react";
import { FiltersContext } from "../Filters_Section";


export default function BuyRentButton() {

    const {formData, handleFormDataChange} = React.useContext(FiltersContext);

    return (
        <div className="flex justify-center items-center text-lg sm:text-md md:text-lg lg:text-xl font-semibold">
            <button
                name="buy"
                value={formData.buy}
                className="bg-white hover:bg-[#282828] hover:text-white pr-4 pl-5 py-2 rounded-l-full"
                onChange={handleFormDataChange}
            >
                Buy
            </button>

            <div className="h-10 min-h-[1em] w-[0.5px] self-stretch bg-[#282828] mx-0 mt-0.5"></div>

            <button
                name="sell"
                value={formData.sell}
                className="bg-white hover:bg-[#282828] hover:text-white px-4 py-2 rounded-r-full"
                onChange={handleFormDataChange}
            >
                Rent
            </button>
        </div>
    )
}