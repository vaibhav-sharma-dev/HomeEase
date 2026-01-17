import React from "react";
import { SocialsData } from "./Socials_Data";


export default function SignInSocials() {

    const renderSocials = SocialsData.map((data) => {
        return (
            <img
                src={`/Images/${data.source}`}
                alt={data.name}
                className="rounded-full shadow-2xl cursor-pointer"
                // onClick={}
            />
        )
    })

    return (
        <div className="flex justify-center gap-4">
            {renderSocials}
        </div>
    )
}