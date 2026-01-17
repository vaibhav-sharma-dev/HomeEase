import React from "react";
import HeadComponent from "../../../Components/Heading_Component/Head_Component";
import TrendsImageSlider from "./Trends_Image_Slider";


export default function PropertyTrendsSection() {
    return (
        <div className="flex flex-col mt-16 mx-16">
            <HeadComponent
                head="Uncover The Latest Trends And Stories"
                para="Stay informed and updated with latest trends, home improvement ideas, and our clients' stories who have achieved their real estate dreams."
                showButton={true}
            />

            <TrendsImageSlider />
        </div>
    )
}