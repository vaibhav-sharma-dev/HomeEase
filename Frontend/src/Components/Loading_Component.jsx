import React from "react";


export default function LoadingComponent() {
    return (
        <div className="flex items-center gap-2 mx-16 my-0 py-16">
            <img
                src="/Images/Loading_Icon.svg"
                alt="Loading Icon"
                className="bg-neutral-200 w-20"
            />

            <p className="font-semibold text-[#282828] text-xl sm:text-lg md:text-xl lg:text-2xl">
                Hold Your Fire 🔥
            </p>
        </div>
    )
}