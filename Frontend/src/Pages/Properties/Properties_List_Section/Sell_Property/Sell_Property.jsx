import React from "react";
import HeadComponent from "../../../../Components/Heading_Component/Head_Component";
import FileUploadBox from "./File_Upload_Box";
import PropertyDetailsForm from "./Property_Details_Form";


export default function SellProperty() {
    return (
        <div className="bg-neutral-200">
            <div className="flex flex-col max-w-[1536px] ml-auto mr-auto">
                <div className="mx-16">
                    <HeadComponent
                        head="Uncover Global Opportunities"
                        para="Discover the seamless process of selling your property globally with our expert team, ensuring a smooth and efficient transaction at every step of the way."
                        showButton={false}
                    />
                </div>

                <div className="mx-16 lg:flex gap-8">
                    <FileUploadBox />
                    <PropertyDetailsForm />
                </div>
            </div>
        </div>
    )
}