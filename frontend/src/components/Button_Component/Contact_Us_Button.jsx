import React from "react";
import { Link } from "react-router-dom";


export default function ContactUsButton() {

  return (
    <Link to={"contact-us"}>
      <button className="flex items-center justify-center bg-[#B28A5B] hover:bg-amber-500 transition-colors duration-300 text-neutral-200 font-bold py-2 px-4 rounded-full w-24 md:w-36 h-24 md:h-36">
        <span className="text-sm sm:text-sm md:text-lg">Contact Us</span>

        <span className="ml-2 text-lg sm:text-lg md:text-2xl">&#8594;</span>
      </button>
    </Link>
  )
}


