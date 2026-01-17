import React from "react";
import { useNavigate } from "react-router-dom";


export default function ImageInfoCard(props) {

    const navigate = useNavigate();

    return (
        <div 
            className="absolute bottom-3 flex flex-col bg-[#282828] text-neutral-200 rounded-xl w-full max-w-[94%] max-h-[30%] ml-[3%] transition duration-300"
            onMouseEnter={() => props.setImageCardHovered(true)}    
            onMouseLeave={() => props.setImageCardHovered(false)}
            onClick={() => navigate("properties")}    
        >
            <div className="flex justify-between items-center m-3">
                <h1 className="text-neutral-200 text-lg sm:text-lg md:text-xl lg:text-2xl font-semibold cursor-pointer">
                    Villa
                </h1>

                <button 
                    className="text-lg sm:text-lg md:text-xl lg:text-2xl bg-[#B28A5B] rounded-full w-8 md:w-12 h-8 md:h-12 rotate-45 cursor-pointer"
                    onClick={() => navigate("contact-us")}
                >
                    &uarr;
                </button>
            </div>

            <div className="hidden lg:flex justify-between m-3">
                <p className="text-xs sm:text-xs md:text-sm lg:text-sm">
                    Property Description
                </p>

                <div className="flex text-xs sm:text-xs md:text-sm lg:text-sm">
                    <p>Property Size</p>
                    <p>No. of Rooms</p>
                    <p>No. of Washrooms</p>
                </div>
            </div>
        </div>
    )
}



// Conditionally Render Price/ House Type