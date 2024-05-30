import React from "react";
import ContactUsButton from "../Button_Component/Contact_Us_Button";
import SocialButton from "./Social_Button";
import Email_Sub_Button from "./Email_Sub_Button";
// import {ReactComponent as Instagram_Logo_No_Background} from "../../../public/Images/Instagram_Logo_No_Background.svg"


export default function Footer() {
    return (
        <footer className="bg-[#282828]">
            <div className="bg-[#282828] max-w-[1536px] ml-auto mr-auto rounded-lg py-8 px-16">
                <div className="flex flex-col justify-between font-montserrat mx-auto my-0">
                    <div className="flex justify-between gap-8">
                        <div className="flex flex-col items-center justify-center text-neutral-200">
                            <h1 className="text-3xl sm:text-3xl md:text-5xl font-semibold">
                                Ready To Work With Us?
                            </h1>
                            <p className="text-xs sm:text-xs md:text-sm py-4">
                                Experience top-notch customer service and let us guide you on your property journey.
                            </p>
                        </div>
                        <ContactUsButton />
                    </div>

                    <div className="h-[0.5px] border-t-0 bg-neutral-200 my-8 "></div>

                    <div className="flex justify-between gap-8 mb-8">
                        <div className="flex flex-col items-start text-neutral-200">
                            <img 
                                className="h-16 md:h-20 rounded-xl w-max"
                                src="/Images/HomeEase_Logo_No_Background.png" 
                                alt="HomeEase logo"
                            />
                            <p className="text-xs sm:text-xs md:text-sm max-w-xs pb-4">
                                A cutting-edge real estate agent that offers a seamless and immersive experience for finding your dream home.
                            </p>

                            <Email_Sub_Button />
                        </div>

                        <div className="md:flex justify-end items-center gap-2">
                            <SocialButton 
                                name="Instagram"
                                source="Instagram_Logo_No_Background.svg"
                                link="https://www.google.com/"
                            />
                            <SocialButton 
                                name="Facebook"
                                source="Facebook_Logo_No_Background.svg"
                                link="https://www.google.com/"
                            />
                            <SocialButton 
                                name="X"
                                source="X_Logo_No_Background.svg"
                                link="https://www.google.com/"
                            />
                            <SocialButton 
                                name="LinkedIn"
                                source="LinkedIn_Logo_No_Background.svg"
                                link="https://www.google.com/"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}