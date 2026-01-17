import React from "react";
import LoadingComponent from "../../../../Components/Loading_Component";
import PropertyImageSlider from "./Property_Image_Slider";
import PropertyStats from "./Property_Stats";
import AboutOwnerProperty from "./About_Owner_Property/About_Owner_Property";


export default function PropertyDescription() {

    const [loading, setLoading] = React.useState(false);

    return (
        <div className="bg-neutral-200">
            {
                loading
                ? <LoadingComponent />
                : (
                    <div className="flex flex-col max-w-[1536px] ml-auto mr-auto">
                        <div className="md:flex gap-5 font-montserrat ml-20 mr-16">
                            <div className="w-[600px] flex-grow mt-16">
                                <PropertyImageSlider />
                            </div>
                            
                            <PropertyStats />
                        </div>
                        
                        <AboutOwnerProperty />
                    </div>
                )
            }
        </div>
    )
}
