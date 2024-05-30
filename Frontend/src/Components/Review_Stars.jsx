import React from "react";


export default function ReviewStars(props) {

    const filledStars = Array.from({ length: props.stars }, (_, index) => index);
    const emptyStars = Array.from({ length: 5 - props.stars }, (_, index) => index);


    return (
        <div className="flex items-center">
            {filledStars.map(index => (
                <img 
                    key={index} 
                    src={`/Images/Star_Filled_Icon.png`} 
                    alt="Filled Star" 
                    className="w-4 lg:w-8 h-4 lg:h-8" 
                />
            ))}

            {emptyStars.map(index => (
                <img 
                    key={index} 
                    src={`/Images/Star_Empty_Icon.png`}  
                    alt="Empty Star" 
                    className="w-4 lg:w-7 h-4 lg:h-7" 
                />
            ))}
        </div>
    )
}