import React from "react";
import CenterHeadComponent from "../../../Components/Heading_Component/Center_Head_Component";
import WorldMap from "./World_Map";
import MapCountyInfoCard from "./Map_Country_Info_Card";


const CountryDataContext = React.createContext();

export default function PropertyMapSection() {

    const [countryData, setCountryData] = React.useState(null);


    return (
        <CountryDataContext.Provider value={{countryData, setCountryData}}>
            <div className="mt-16 mx-16">
                <CenterHeadComponent
                    head="International Property Network"
                    para="Our global reach opes doors to exclusive properties and provides you the international real estate landscape."
                />

                <WorldMap />
                {countryData && <MapCountyInfoCard />}   {/* pass countryData to this component */}
            </div>
        </CountryDataContext.Provider>
    )
}

export {CountryDataContext};
