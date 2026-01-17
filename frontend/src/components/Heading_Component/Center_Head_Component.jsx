import React from "react";


export default function CenterHeadComponent(props) {
    return (
        <div className="flex flex-col items-center text-center text-[#282828] font-montserrat mx-auto mb-4 mt-16 max-w-[800px]">
            <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 ">
                {props.head}
            </h1>

            <p className="text-md sm:text-md md:text-md lg:text-lg font-semibold mb-8 text-center">
                {props.para}
            </p>
        </div>
    )
}