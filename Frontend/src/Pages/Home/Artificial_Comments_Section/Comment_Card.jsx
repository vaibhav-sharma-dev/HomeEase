import React from "react";
import ReviewStars from "../../../Components/Review_Stars";


export default function CommentCard(props) {
    return (
        <div className="relative flex flex-col bg-[#dddbdb] font-montserrat rounded-xl">
            <img
                src={`/Images/${props.imgSrc}`}
                alt="HomeEase user"
                className="absolute -top-12 left-10 w-24 rounded-full border-2 border-neutral-200"
            />

            <h1 className="mt-16 mx-6 text-neutral-500 font-medium text-sm sm:text-sm md:text-md lg:text-xl">
                {props.description}
            </h1>

            <div className="flex justify-between items-center">
                <div className="flex flex-col m-6">
                    <h1 className="font-semibold mb-2 text-sm sm:text-sm md:text-md lg:text-lg">
                        {props.name}
                    </h1>

                    <ReviewStars stars={props.star}/>
                </div>

                <img
                    src="/Images/Double_Quotes_Icon.png"
                    alt="double quotation image"
                    className="m-6 w-12 md:w-20 lg:w-24 h-12 md:h-20 lg:h-24"
                /> 
            </div>
        </div>
    )
}