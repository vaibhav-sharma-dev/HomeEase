import React from "react";
import PropertiesListNavbar from "./Properties_List_Navbar";
import LoadingComponent from "../../../Components/Loading_Component";
import PropertyCardsList from "./Property_Cards_List";


export default function PropertiesListSection() {

    const [loading, setLoading] = React.useState(false);


    return (
        <div className="bg-[#dddbdb] rounded-xl mt-2 mb-16 mr-2 w-full">
            <div className="flex flex-col mx-4 font-montserrat text-[#282828]">
                <PropertiesListNavbar />

                <div className="h-[0.5px] border-t-0 bg-[#282828] mt-3 mb-4 "></div>

                {
                    loading
                    ? <LoadingComponent />
                    : <PropertyCardsList />
                }
            </div>
        </div>
    )
}