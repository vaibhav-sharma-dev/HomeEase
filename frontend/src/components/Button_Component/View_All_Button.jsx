import React from "react";
import { Link } from "react-router-dom";


export default function ViewAllButton() {

    return (
        <Link to={"properties"}>
            <button className="bg-[#B28A5B] text-neutral-200 font-bold mt-2 py-2 px-4 rounded-lg hover:bg-amber-500 transition-colors duration-300">
                View All

                <span className="ml-2">&#8594;</span> {/* arrow on submit button */}
            </button>
        </Link>
    )
}