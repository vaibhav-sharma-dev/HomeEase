import React from "react";

export default function BrandSection() {
    return (
        <div className="bg-[#dddbdb] rounded-2xl mt-8 mb-16 flex flex-col flex-1">
            <img 
                src="/Images/HomeEase_Logo.png"
                alt="HomeEase Logo"
                className="rounded-2xl shadow-2xl m-4"
            />

            <h1 className="text-[#282828] text-3xl text-center sm:text-3xl md:text-4xl lg:text-5xl font-semibold mx-4 my-8">
                Journey To Your Perfect Home!
            </h1>

            <p className="text-neutral-500 font-medium text-sm sm:text-sm md:text-md lg:text-xl m-4">
                <span className="text-[#282828] font-bold">Post: </span>
                10880 Stark Tower, Pacific Coast Highway,
                <br />
                Malibu, California 90265
                <br />
                <span className="text-[#282828] font-bold">Phone: </span>9107071981
            </p>
        </div>
    )
}