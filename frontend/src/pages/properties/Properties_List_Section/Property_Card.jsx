import React from "react";
import { useNavigate } from "react-router-dom";


export default function PropertyCard() {

    const navigate = useNavigate();

    return (
        <div 
            className="flex bg-neutral-200 rounded-xl mb-3"
        >
            <img
                src="/Images/Discover_Villa.png"
                alt="Property Image" // Set property type dynamically in place of "Property"
                className="rounded-2xl w-auto max-w-[350px] min-w-[200px] m-2 cursor-pointer"
                onClick={() => navigate("property-description")}      // temporary
            />

            <div className="flex flex-col md:flex-row flex-grow">
                <div className="flex-grow flex flex-col m-2 mt-4 font-montserrat text-left">
                    <h1 
                        className="text-[#282828] font-semibold text-md sm:text-md md:text-lg lg:text-xl cursor-pointer"
                        onClick={() => navigate("property-description")}      // temporary
                    >
                        Property Type | Villa
                    </h1>

                    <p className="mt-2 text-xs sm:text-xs md:text-sm lg:text-md font-medium text-neutral-500">
                        Size: 777 sq. ft
                    </p>

                    <div className="flex gap-2 my-2 text-xs sm:text-xs md:text-sm lg:text-md font-medium text-neutral-500 ">
                        <p className="">No. Of Rooms</p>

                        <div className="h-5 min-h-[1em] w-[0.5px] self-stretch bg-[#282828]  mt-0.5"></div>

                        <p className="">No. Of Baths</p>
                    </div>

                    <p className="mb-2 text-xs sm:text-xs md:text-sm lg:text-md font-medium text-neutral-500">
                        Location (City Only)
                    </p>
                </div>

                <div className="flex-grow flex flex-col md:mt-8 mr-8 md:ml-8 font-montserrat text-left">
                    <h1 
                        className="text-[#282828] font-bold text-center text-lg sm:text-lg md:text-xl lg:text-2xl cursor-pointer"
                        onClick={() => navigate("property-description")}      // temporary
                    >
                        Property Price | $
                    </h1>

                    <button
                        className="flex items-center justify-center gap-2 bg-[#B28A5B] mt-4 mb-2 py-2 px-2 md:px-4 rounded-lg hover:bg-amber-500 transition-colors duration-300"
                        // onClick={() => navigate("properties")}
                    >
                        <span className="hidden md:block text-neutral-200 font-bold">
                            Add To Cart
                        </span>
                        <img
                            src="/Images/Add_To_Cart_Icon.png"
                            alt="Add to Cart Icon"
                            className="w-8"
                        />
                    </button>
                </div>
            </div>
        </div>
    )
}