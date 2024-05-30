import React from "react";
import SearchBox from "./Hero_Search";


export default function Hero() {
    return (
        <>
            <div className="relative flex flex-col justify-center items-center mx-4">
                <img 
                    src="./Images/Home_Background.png"
                    alt="HomeEase homes"
                    className="w-full h-auto border shadow-2xl rounded-xl opacity-75"
                />

                <div className="absolute top-[30%] flex flex-col items-center text-center text-white font-montserrat">
                    <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold text-nowrap mb-8 mx-auto">
                        Journey To Your Perfect Home
                    </h1>
                    <p className="text-md sm:text-md md:text-lg lg:text-xl w-sm max-w-4xl mb-12">
                        Let our expert team guide you through the magic of real estate and helping you find the perfect home where your dreams take flight!
                    </p>

                    <SearchBox />
                </div>
            </div>
        </>
    )
}