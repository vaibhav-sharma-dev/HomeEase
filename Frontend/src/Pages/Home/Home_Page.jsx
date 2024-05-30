import React from "react";
import HeroSection from "./Hero_Section/Hero_Component";
import DiscoverSection from "./Discover_Section/Discover_Section";
import PropertyMapSection from "./Property_Map_Section/Property_Map_Section";
import PropertyTrendsSection from "./Property_Trends_Section/Property_Trends_Section";
import ArtificialCommentsSection from "./Artificial_Comments_Section/Artificial_Comments_Section";


export default function Home() {

    return (
        <div className="bg-neutral-200">
            <div className="flex flex-col max-w-[1536px] ml-auto mr-auto">
                <HeroSection />
                <DiscoverSection />
                <PropertyMapSection />
                <PropertyTrendsSection />
                <ArtificialCommentsSection />
            </div>
        </div>
    )
}


