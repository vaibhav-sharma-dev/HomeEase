import React from "react";
import StatsInfoSection from "./Stats_Info_Section/Stats_Info_Section";
import FoundersInfoSection from "./Founders_Info_Section/Founders_Info_Section";
import PartnersInfoSection from "./Partners_Info_Section/Partners_Info_Section";


export default function About() {

    return (
        <div className="bg-neutral-200">
            <div className="flex flex-col max-w-[1536px] ml-auto mr-auto">
                <StatsInfoSection />
                <FoundersInfoSection />  {/* ceo, cto, creative head */}
                <PartnersInfoSection />  {/* partner companies list */}
            </div>
        </div>
    )
}