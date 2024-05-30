import React from "react";
import CenterHeadComponent from "../../Components/Heading_Component/Center_Head_Component";
import ContactUsForm from "./Contact_Us_Form";
import BrandSection from "./Brand_Section";


export default function ContactUs() {
    return (
        <div className="bg-neutral-200">
            <div className="flex flex-col max-w-[1536px] ml-auto mr-auto">
                <CenterHeadComponent
                    head="Get in Touch with Us!"
                    para="Connect with our dedicated team of professionals today for expert guidance in securing your dream property."
                />

                <div className="md:flex mx-16 gap-5 font-montserrat">
                    <BrandSection />
                    <ContactUsForm />
                </div>
            </div>
        </div>
    )
}