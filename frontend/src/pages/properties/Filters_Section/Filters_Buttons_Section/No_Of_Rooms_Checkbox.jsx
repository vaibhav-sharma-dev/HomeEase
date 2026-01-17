import React from "react";
import { FiltersContext } from "../Filters_Section";


export default function LocationDropDown(props) {

    const {formData, handleFormDataChange} = React.useContext(FiltersContext);
    const [isDropDown, setIsDropDown] = React.useState(true);

    const toggleDropDown = () => {
        setIsDropDown(!isDropDown);
    }

    // const [boxChecked, setBoxChecked] = React.useState(false);

  

    const rooms = ["1", "2", "3", "4 or more."];

    const renderNoOfRoomsCheckboxes = rooms.map((room) => {

        // React.useEffect(() => {
        //     // const handleCheckBoxChange = () => {
        //         if (formData.noOfRooms?.[room])
        //             setBoxChecked(true);
    
        //         else setBoxChecked(false);
        //     }
        // , [boxChecked])
      

        return (
            <fieldset className="flex items-center gap-4 mb-1">
                <input
                    type="checkbox"
                    id={room}
                    name="noOfRooms"
                    value={room}
                    onChange={handleFormDataChange}
                    checked={formData.noOfRooms?.[room]}  // need to fix this to select multiple checkboxes
                    className=""
                />
    
                <label 
                    className="text-[#282828]"
                    htmlFor={room}
                >
                    {room}
                </label>
            </fieldset>
        )
    })

    return (
        <div className="relative inline-block">
            <div className="flex items-center justify-between mb-4 ">
                <button
                    className="flex items-center justify-between w-full text-md sm:text-sm md:text-md lg:text-lg font-semibold"
                    onClick={toggleDropDown}
                >
                    No. Of Rooms
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

                {formData.noOfRooms && props.clearFormButton}
            </div>

            {isDropDown && renderNoOfRoomsCheckboxes}
        </div>
    )
}