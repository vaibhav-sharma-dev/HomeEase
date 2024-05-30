import React from "react";
import { PropertyTypeData, CountryLocationData } from "../../../../Components/Properties_Data";
import SelectMenuButton from "../../../../Components/Button_Component/Select_Menu_Button";
import usePropertyDetails from "../../../../Hooks/Use_Property_Details";


export default function PropertyDetailsForm() {

    const {formData, formError, handleChange, handleSelectMenuChange, handleSubmit} = usePropertyDetails();

    return (
        <div className="bg-[#dddbdb] rounded-2xl mt-8 mb-16 flex-1 flex">
            <div className="flex flex-col mx-16 mb-8 font-montserrat text-[#282828] flex-grow">
                <h1 className="text-center text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mt-8 mb-6">
                    Property Description
                </h1>

                <form 
                    className="flex flex-col"
                    onSubmit={handleSubmit}
                >
                    <div className="flex justify-center items-center text-md sm:text-md md:text-lg lg:text-xl font-semibold mb-2">
                        <button
                            name="sell"
                            className={`${formData.sell ? "bg-[#282828] text-white" : "bg-white text-[#282828]"} pr-4 pl-5 py-2 rounded-l-full transition-colors duration-300`}
                            onClick={handleChange}
                        >
                            Sell
                        </button>

                        <div className="h-10 min-h-[1em] w-[0.5px] self-stretch bg-[#282828] mx-0 mt-0.5"></div>

                        <button
                            name="rent"
                            className={`${formData.rent ? "bg-[#282828] text-white" : "bg-white text-[#282828]"} px-4 py-2 rounded-r-full transition-colors duration-300`}
                            onClick={handleChange}
                        >
                            Rent
                        </button>
                    </div>
                    <p className="text-red-600 text-xs mt-1 mb-4 text-center">
                        {formError.sellOrRent}
                    </p>

                    <div className="flex justify-between items-center">
                        <label className="font-semibold text-md sm:text-md md:text-lg lg:text-lg">
                            Property Type <span className="text-red-600">*</span>
                        </label>

                        <SelectMenuButton 
                            name="propertyType"
                            id="propertyType"
                            placeholder="Property Type"
                            options={PropertyTypeData}
                            onChange={(option) => handleSelectMenuChange("propertyType", option)}
                        />
                    </div>
                    <p className="text-red-600 text-xs mb-4">
                        {formError.propertyType}
                    </p>

                    <div className="flex justify-between items-center">
                        <label className="font-semibold text-md sm:text-md md:text-lg lg:text-lg">
                            Country <span className="text-red-600">*</span>
                        </label>

                        <SelectMenuButton
                            name="country"
                            id="country"
                            placeholder="Country"
                            options={CountryLocationData}
                            onChange={(option) => handleSelectMenuChange("country", option)}
                        />
                    </div>
                    <p className="text-red-600 text-xs mb-4">
                        {formError.country}
                    </p>

                    <div className="flex justify-between items-center">
                        <label className="font-semibold text-md sm:text-md md:text-lg lg:text-lg">
                            City <span className="text-red-600">*</span>
                        </label>
                        
                        <SelectMenuButton
                            name="city"
                            id="city"
                            placeholder="City"
                            options={CountryLocationData}
                            onChange={(option) => handleSelectMenuChange("city", option)}
                        />
                    </div>
                    <p className="text-red-600 text-xs mb-4">
                        {formError.city}
                    </p>

                    <div className="flex justify-between items-center">    
                        <label className="font-semibold text-md sm:text-md md:text-lg lg:text-lg">
                            Property Size <span className="text-red-600">*</span>
                        </label>

                        <input
                            type="number"
                            id="size"
                            name="size"
                            value={formData.size}
                            placeholder="in sq. ft"
                            className="text-neutral-500 placeholder:text-neutral-500 px-4 py-2 w-60 rounded-lg"
                            onChange={handleChange}
                        />
                    </div>
                    <p className="text-red-600 text-xs mb-4">
                        {formError.size}
                    </p>

                    <div className="flex justify-between items-center">
                        <label className="font-semibold text-md sm:text-md md:text-lg lg:text-lg">
                            No. of Rooms <span className="text-red-600">*</span>
                        </label>

                        <input
                            type="number"
                            id="noOfRooms"
                            name="noOfRooms"
                            min={1}
                            value={formData.noOfRooms}
                            placeholder="Enter no. of rooms"
                            className="text-neutral-500 placeholder:text-neutral-500 px-4 py-2 w-60 rounded-lg"
                            onChange={handleChange}
                        />
                    </div>
                    <p className="text-red-600 text-xs mb-4">
                        {formError.noOfRooms}
                    </p>

                    <div className="flex justify-between items-center">
                        <label className="font-semibold text-md sm:text-md md:text-lg lg:text-lg">
                            No. of Baths <span className="text-red-600">*</span>
                        </label>

                        <input
                            type="number"
                            id="noOfBaths"
                            name="noOfBaths"
                            value={formData.noOfBaths}
                            placeholder="Enter no. of baths"
                            className="text-neutral-500 placeholder:text-neutral-500 px-4 py-2 w-60 rounded-lg"
                            onChange={handleChange}
                        />
                    </div>
                    <p className="text-red-600 text-xs mb-4">
                        {formError.noOfBaths}
                    </p>

                    <label className="flex justify-between font-semibold text-md sm:text-md md:text-lg lg:text-lg mb-4 select-none">
                        Furnished

                        <div className="relative bg-white cursor-pointer h-8 w-14 rounded-full mr-[184px]">
                            <input
                                type="checkbox"
                                id="furnished"
                                name="furnished"
                                value={formData.furnished}
                                className="sr-only peer"
                                onChange={handleChange}
                            />

                            <span className={`h-6 w-6 absolute top-1 rounded-full ${formData.furnished ? "bg-amber-500 left-7" : "bg-[#282828] left-1"} transition-all duration-300`}></span>
                        </div>
                    </label>

                    <label className="flex justify-between items-center font-semibold text-md sm:text-md md:text-lg lg:text-lg mb-4">
                        Parking

                        <div className="relative bg-white cursor-pointer h-8 w-14 rounded-full mr-[184px]">
                            <input
                                type="checkbox"
                                id="parking"
                                name="parking"
                                value={formData.parking}
                                className="sr-only peer"
                                onChange={handleChange}
                            />

                            <span className={`h-6 w-6 absolute top-1 rounded-full ${formData.parking ? "bg-amber-500 left-7" : "bg-[#282828] left-1"} transition-all duration-300`}></span>
                        </div>
                    </label>

                    <div className="flex justify-between items-center">
                        <label className="font-semibold text-md sm:text-md md:text-lg lg:text-lg">
                            Price <span className="text-red-600">*</span>
                        </label>

                        <input
                            type="number"
                            id="price"
                            name="price"
                            value={formData.price}
                            placeholder="in USD"
                            className="text-neutral-500 placeholder:text-neutral-500 px-4 py-2 w-60 rounded-lg"
                            onChange={handleChange}
                        />
                    </div>
                    <p className="text-red-600 text-xs mb-4">
                        {formError.price}
                    </p>

                    <button
                        className="bg-[#B28A5B] text-neutral-200 font-bold mt-2 py-2 px-4 rounded-lg hover:bg-amber-500 transition-colors duration-300"
                        type="submit"
                    >
                        List Your Property
                    </button>
                </form>
            </div>
        </div>
    )
}