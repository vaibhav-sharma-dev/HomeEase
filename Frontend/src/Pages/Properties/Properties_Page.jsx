import React from "react";
import FiltersSection from "./Filters_Section/Filters_Section";
import PropertiesListSection from "./Properties_List_Section/Properties_List_Section";


export default function Properties() {
    return (
        <div className="bg-neutral-200">    
            <div className="flex gap-2 max-w-[1536px] ml-auto mr-auto">
                <FiltersSection />
                <PropertiesListSection />
            </div>
        </div>
    )
}