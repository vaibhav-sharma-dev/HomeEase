import React from "react";


export default function SocialButton({name, source, link}) {

    const handleClick = () => {
        window.location.href = link;
    }

    return (
        <img 
            src={`/Images/${source}`}
            alt={name}
            className="min-w-8 md:w-12 min-h-8 md:h-12 cursor-pointer"
            onClick={handleClick}
        />
    )
}