import React from "react";
import OwnerInforCard from "./Owner_Info_Card";
import OwnerDescription from "./Owner_Description_Section";


export default function AboutOwnerProperty() {
    return (
        <div className="mt-32 mx-16 mb-0 pb-16 flex flex-col">
            <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold my-8 text-left font-montserrat text-[#282828]">
                Know the Owner
            </h1>

            <div className="bg-[#dddbdb] rounded-lg lg:flex">
                <OwnerInforCard 
                    name={""}
                    imgSrc={""}
                    reviews={""}
                    rating={""}
                />

                <OwnerDescription 
                    name={""}
                    description={""}
                />
            </div>
        </div>
    )
}