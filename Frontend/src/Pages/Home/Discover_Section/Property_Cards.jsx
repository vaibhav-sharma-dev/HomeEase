import React from "react";
import ImageCard from "../../../Components/Image_Card/Image_Card";


export default function PropertyCards() {
    return (
        <div className="grid grid-rows-2 grid-cols-4 grid-flow-col gap-y-0 gap-x-6">
            <div className="row-span-2 col-span-2 ">
                <ImageCard source="Discover_Apartment.png"/>
            </div>

            <div className="col-span-2">
                <ImageCard source="Discover_Villa.png"/>
            </div>

            <ImageCard source="Discover_Cottage.png"/>
            <ImageCard source="Discover_Mansion.png"/>
        </div> 
    )
}


// h-max-[890px] 