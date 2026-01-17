import React from "react";
import ImageInfoCard from "./Image_Info_Card";


export default function ImageCard(props) {

    const [imageCardHovered, setImageCardHovered] = React.useState(false);


    return (
        <div className="relative overflow-hidden">
            <img 
                src={`/Images/${props.source}`}
                alt="Property Image"
                className="object-cover bg-cover w-full h-full border shadow-2xl rounded-xl cursor-pointer"
                onMouseEnter={() => setImageCardHovered(true)}
                onMouseLeave={() => setImageCardHovered(false)}
                // onClick={}
            />

            {imageCardHovered && (
                <ImageInfoCard 
                    setImageCardHovered={setImageCardHovered} 
                />
            )}
        </div>
    )
}


// w-60 h-auto flex-auto