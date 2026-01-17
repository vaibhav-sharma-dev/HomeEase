import React from "react";
import HeadComponent from "../../../Components/Heading_Component/Head_Component";
import StatsComponent from "./Stats_Component";
import InfoComponent from "./Info_Component";


export default function StatsInfoSection() {
    return (
        <div className="flex flex-col mx-16">
            <HeadComponent
                head="Your Trusted Real Estate Advisors"
                para="We are a cutting-edge real estate agent company that offer a seamless and immersive experience for finding your dream home in the heart of the city."
            />

            <div className="md:flex gap-5">
                <StatsComponent />
                <InfoComponent />
            </div>
       </div>
    )
}