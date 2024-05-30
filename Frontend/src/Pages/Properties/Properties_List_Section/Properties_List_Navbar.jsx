import React from "react";
import { Link } from "react-router-dom";


export default function PropertiesListNavbar() {

    const [searchProperty, setSearchProperty] = React.useState("");

    const handleChange = (event) => {
        setSearchProperty(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div className="flex gap-4 md:gap-8 items-center">
            <h1 className="text-[#282828] text-left text-xl sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-6">
                Find Your Perfect Home
            </h1>

            <form 
                className="flex items-center flex-grow mt-6"
                onSubmit={handleSubmit}
            >
                <input  
                    type="text"
                    placeholder="Search"
                    value={searchProperty}
                    onChange={handleChange}
                    className="w-full rounded-xl px-4 py-2 border border-[#282828] focus:outline-none"
                />

                <img
                    src="/Images/Search_Icon.png"
                    alt="Search Icon"
                    className="relative -left-11 w-8 cursor-pointer"
                />
            </form>

            <Link to={"sell-property"}>
                <button className="flex items-center bg-[#282828] hover:bg-black transition-colors duration-300 rounded-full text-white text-sm sm:text-sm md:text-lg lg:text-xl font-semibold mt-6 px-2 md:px-4 py-2">
                    Sell Your Property
                    <span className="ml-2 text-lg sm:text-lg md:text-xl lg:text-2xl">&#8594;</span>
                </button>
            </Link>
        </div>
    )
}