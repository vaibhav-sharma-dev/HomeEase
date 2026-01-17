import React from "react";
import { CountryDataContext } from "./Property_Map_Section";
// import WorldMapSVG from "./World_Map_SVG";


export default function WorldMap() {

    const {countryData, setCountryData} = React.useContext(CountryDataContext);

    // const mapContainerRef = React.useRef(null);
    
    // React.useEffect(() => {
    //     // Initialize the world map
    //     if (mapContainerRef.current) {
    //       const mapElement = mapContainerRef.current;
    //       const svgMap = new Image();
    //       svgMap.src = WorldMap;
    //       svgMap.onload = () => {
    //         mapElement.appendChild(svgMap);
    //         // Add event listeners or further customization here
    //       };
    //     }
    //   }, []);

    return (
        <>
            {/* <div>
                <div ref={mapContainerRef} style={{ width: '100%', height: '500px' }}></div>
                <img src="/Images/world.svg" alt="World Map" />
            </div> */}
            {/* <WorldMapSVG /> */}
            <img
                src="/Images/World_Map.svg"
                className="rounded-lg"
                onMouseEnter={() => setCountryData()}
                onMouseLeave={() => setCountryData(null)}
            />
        </>
    )
}


