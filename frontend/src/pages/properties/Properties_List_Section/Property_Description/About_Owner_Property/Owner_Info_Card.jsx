import React from "react";


export default function OwnerInforCard(props) {
    return (
        <div className="rounded-2xl flex bg-[#282828] m-4 text-neutral-200 font-montserrat ">
            <div className="flex flex-col items-center flex-grow gap-4 m-12 mb-8">
                <div className="relative inline-block">
                    <img
                        src="/Images/Property_Owner_Tushar.png"
                        alt="Property Onwer Image"
                        className="rounded-full w-36"
                    />

                    <img
                        src="/Images/Secured_Icon.png"
                        alt="HomeEase Certified Icon"
                        className="rounded-full w-8 absolute left-[114px] bottom-5"
                    />
                </div>
 
                <h1 className="mt-3 text-center font-semibold text-lg sm:text-lg md:text-xl lg:text-2xl ">
                    Tushar Lohia
                </h1>
            </div>

            <div className="flex flex-col m-12">
                <p className="flex flex-col text-lg sm:text-lg md:text-xl lg:text-2xl font-semibold">
                    15 

                    <span className="text-xs sm:text-xs md:text-sm lg:text-md font-normal">
                        Reviews
                    </span>
                </p>

                <div className="h-[0.5px] border-t-0 bg-neutral-200 my-4 "></div>

                <div className="flex flex-col">
                    <p className="flex gap-1 items-center text-lg sm:text-lg md:text-xl lg:text-2xl font-semibold">
                        4

                        <img 
                            src="/Images/Star_Filled_Icon.png"
                            alt="Star Icon"
                            className="w-5 md:w-8 h-auto"
                        />
                    </p>

                    <p className="text-xs sm:text-xs md:text-sm lg:text-md font-normal">
                        Rating
                    </p>
                </div>

                <div className="h-[0.5px] border-t-0 bg-neutral-200 my-4 "></div>

                <div className="flex gap-2 items-center">
                    <img
                        src="/Images/HomeEase_Icon.png"
                        alt="HomeEase Icon"
                        className="w-12 md:w-16 rounded-2xl border border-neutral-200"
                    />

                    <p className="hidden md:block text-xs sm:text-xs md:text-sm lg:text-md font-semibold">
                        HomeEase Certified
                    </p>
                </div>
            </div>
        </div>
    )
}