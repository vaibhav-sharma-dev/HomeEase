import React from "react";
import ViewAllButton from "../Button_Component/View_All_Button"


export default function HeadComponent(props) {
    return (
        <div className="md:flex justify-between text-center md:text-left text-[#282828] font-montserrat mx-auto mb-4 mt-16">
            <h1 className="flex-1 text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
                {props.head}
            </h1>

            <div className="flex-1 flex flex-col items-end">
                <p className="ml-4 text-md sm:text-md md:text-lg font-semibold">
                    {props.para}
                </p>

                {props.showButton && <ViewAllButton />}
            </div>
        </div>
    )
}