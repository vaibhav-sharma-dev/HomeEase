import React from "react";
import { Link } from "react-router-dom";
import useScrollPosition from "../../Hooks/Use_Scroll_Position";


export default function Sign_In_Navbar() {

    const isFixed = useScrollPosition();

    return (
        <nav className={`bg-neutral-200 rounded-xl shadow-xl ${isFixed ? "fixed top-0 left-0 right-0 z-10" : ""}`}>
            <div className="flex items-center justify-center max-w-[1536px] ml-auto mr-auto">
                <Link to={"/"}>
                    <img 
                        className="w-48 max-w-full  rounded-xl shadow-2xl ml-auto mr-auto my-4"
                        src="/Images/HomeEase_Logo.png" 
                        alt="HomeEase logo"
                    />
                </Link>
            </div>
        </nav>
    )
}