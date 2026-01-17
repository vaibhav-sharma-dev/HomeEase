import React from "react";
import HeadComponent from "../../../Components/Heading_Component/Head_Component";
import PropertyCards from "./Property_Cards";


export default function DiscoverSection() {

    return (
            <div className="relative flex flex-col mx-16 mt-16">
                <HeadComponent 
                    head="Discover Your Perfect Property Match"  
                    para="Embark on a journey of discovery through exclusive collections of homes, luxury properties to fulfil your aspirations and inspire your imagination." 
                    showButton={true} 
                />            

                <PropertyCards />
            </div>
    )
}



// px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48