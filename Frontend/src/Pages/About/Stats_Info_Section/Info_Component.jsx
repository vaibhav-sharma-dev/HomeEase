import React from "react";
import ContactUsButton from "../../../Components/Button_Component/Contact_Us_Button";



export default function InfoComponent() {
    return (
        <div className="bg-[#dddbdb] rounded-xl mt-8 flex-1 flex justify-between">
            <div className="flex flex-col justify-between m-4">
                <p className="text-neutral-500 font-medium text-sm sm:text-sm md:text-md lg:text-xl max-w-[300px]">
                    We have witnessed the ever-evolving landscape of the real estate market and become a trusted partner by thousands of clients.
                </p>

                <div className="m-6">
                    <ContactUsButton />
                </div>
            </div>

            <img
                src="/Images/About_Villa.png"
                alt="HomeEase Property"
                className="rounded-xl shadow-2xl w-full max-w-60 min-w-28 m-4"
            />
        </div>
    )
}