import React from "react";


export default function SelectMenuButton(props) {

    const [dropDownSearch, setDropDownSearch] = React.useState("");
    const [selectedOption, setSelectedOption] = React.useState("");
    const [isDropDown, setIsDropDown] = React.useState(false);

    const handleOptionClick = (option) => {
        if (option.toLowerCase() !== selectedOption.toLowerCase()) {
            setDropDownSearch("");
            setSelectedOption(option);
            props.onChange(option);
            setIsDropDown(false);
        }
    }


    return (
        <div className="w-60 rounded-lg bg-white text-neutral-500 font-montserrat relative inline-block">
            <div 
                className="bg-white flex justify-between items-center mx-4 my-2"
                onClick={() => setIsDropDown(!isDropDown)}    
            >
                <h1 className="">
                    {
                        selectedOption
                        ? selectedOption.length > 25
                            ? selectedOption.substring(0, 25) + "..."
                            : selectedOption
                        : `Select ${props.placeholder}`
                    }
                </h1>

                <span className={`${isDropDown && "rotate-180"}`}>
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
            </div>
            
            {
                isDropDown && (
                    <div className="bg-white absolute rounded-lg mt-2 z-40 w-60">
                        <ul className="flex flex-col h-[152px] overflow-hidden overflow-y-auto">
                            <div className="flex items-center gap-2">
                                <img 
                                    src="/Images/Search_Icon.png"
                                    alt="Search Icon"
                                    className="w-4 h-4 ml-4 mt-2"
                                />

                                <input
                                    type="text"
                                    value={dropDownSearch}
                                    placeholder={`Search ${props.placeholder}`}
                                    onChange={(event) => setDropDownSearch(event.target.value.toLowerCase())}
                                    className="placeholder:text-neutral-500 mr-4 mt-2"
                                />
                            </div>

                            {
                                props.options.map((option) => {
                                    return (
                                        <li 
                                            key={option}
                                            className={`
                                                px-4 py-2 hover:bg-[#B28A5B] hover:text-neutral-200 transition-colors duration-300
                                                ${option.toLowerCase().startsWith(dropDownSearch) ? "block" : "hidden"}
                                            `}
                                            name={props.name}
                                            onClick={() => handleOptionClick(option)}
                                        >
                                            {option}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                )
            }
        </div>
    )
}