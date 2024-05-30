import React from "react";
import { Link } from "react-router-dom";
import useScrollPosition from "../../Hooks/Use_Scroll_Position";


export default function Navbar() {

    const isFixed = useScrollPosition();

    const [isDropDown, setIsDropDown] = React.useState(false);
    // const isDropDownRef = React.useRef();

    const toggleDropDown = () => {
        setIsDropDown(!isDropDown);
    }

    // console.log("Changed!")
    // const closeDropdown = () => {
    //     setIsDropDown(false);
    //   };

    // React.useEffect(() => {
    //     const handleClickOutside = (event) => {
    //         if (!isDropDownRef.current.contains(event.target))
    //             closeDropdown();
    //     }

    //         if (isDropDown)
    //             document.addEventListener("click", handleClickOutside, {capture: true});

    //         return () => {
    //             document.removeEventListener("click", handleClickOutside, {capture: true});
    //         }
    // }, [isDropDown]);


    return (
        <nav className={`bg-neutral-200 rounded-xl shadow-xl ${isFixed ? "fixed top-0 left-0 right-0 z-10" : "relative"}`}>
            <div className="flex justify-between items-center max-w-[1536px] ml-auto mr-auto">
                <Link to={"/"}>
                    <img 
                        className="w-48 max-w-full rounded-xl shadow-2xl m-4 cursor-pointer"
                        src="/Images/HomeEase_Logo.png" 
                        alt="HomeEase logo"
                    />
                </Link>

                <ul className="flex gap-6 text-zinc-800 font-montserrat font-bold m-4">
                    <Link to={"properties"}>
                        <li className="hover:bg-[#282828] hover:text-white py-2 px-4 rounded-full transition-colors duration-300">
                            Properties
                        </li>
                    </Link>

                    <div className="relative inline-block">
                        <button
                            className={`flex items-center bg-neutral-200 hover:bg-[#282828] hover:text-white ${isDropDown && "bg-[#282828] text-white"} py-2 px-4 rounded-full transition-colors duration-300`}
                            onClick={toggleDropDown}
                        >
                            More
                            <span className="pl-4">
                                <svg
                                    width={20}
                                    height={20}
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="fill-current"
                                >
                                    <path d="M10 14.25C9.8125 14.25 9.65625 14.1875 9.5 14.0625L2.3125 7C2.03125 6.71875 2.03125 6.28125 2.3125 6C2.59375 5.71875 3.03125 5.71875 3.3125 6L10 12.5312L16.6875 5.9375C16.9688 5.65625 17.4063 5.65625 17.6875 5.9375C17.9687 6.21875 17.9687 6.65625 17.6875 6.9375L10.5 14C10.3437 14.1563 10.1875 14.25 10 14.25Z" />
                                </svg>
                            </span>
                        </button>

                        {
                            isDropDown && (
                                <ul className="flex flex-col flex-grow absolute left-0 z-40 mt-1 w-[120%] text-left bg-[#282828] font-montserrat font-bold text-white rounded-xl">
                                    <Link to={"about-us"}>
                                        <li className="px-4 pt-4 pb-2 hover:bg-black rounded-xl">
                                            About Us    
                                        </li>
                                    </Link>

                                    <Link to={"contact-us"}>
                                        <li className="px-4 pt-2 pb-4 hover:bg-black rounded-xl">
                                            Contact Us    
                                        </li>
                                    </Link>
                                </ul>
                            )
                        }
                    </div>

                    {/* Cart Icon */}

                    <Link to={"sign-in"}>
                        <button className="bg-[#282828] hover:bg-neutral-200 hover:text-[#282828] hover:border hover:border-[#282828] text-white transition-colors duration-300 py-2 px-4 rounded-full">
                            Sign In
                        </button>
                    </Link>
                </ul>
            </div>
        </nav>
    )
}