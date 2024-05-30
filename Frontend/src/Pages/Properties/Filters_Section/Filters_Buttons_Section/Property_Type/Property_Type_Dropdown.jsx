import React from "react";
import { FiltersContext } from "../../Filters_Section";
import { PropertyType } from "./Property_Type_Data";


export default function PropertyTypeDropdown(props) {

    const {formData, handleFormDataChange} = React.useContext(FiltersContext);
    const [isDropDown, setIsDropDown] = React.useState(true);
    // const isDropDownRef = React.useRef(null);

    const toggleDropDown = () => {
        // console.log(dropDownRef);
        setIsDropDown(!isDropDown);
        // dropDownRef.current.isDropDown = !dropDownRef.current.isDropDown;
        // dropDownRef.current = !dropDownRef.current;
    }

    const renderPropertyTypeButtons = PropertyType.map((property) => {
        return (
            // <button
            //     name="propertyType"
            //     value={property.name}
            //     onClick={handleFormDataChange}
            //     className="flex items-center gap-4 mb-2 text-md sm:text-sm md:text-md lg:text-lg"
            // >
            //     <img
            //         src={`/Images/${property.imgSrc}`}
            //         alt="Apartment Icon"
            //         className="w-8 max-w-10 min-w-8 shadow-2xl "
            //     />
            //     {property.name}
            // </button>

            <fieldset className="flex items-center gap-4">
                <input 
                    type="checkbox"
                    id={property._id}
                    name="propertyType"
                    value={property.name}
                    onChange={handleFormDataChange}
                    checked={formData.propertyType[property.name]}
                    style={{ display: 'none' }}
                />

                <img
                    src={`/Images/${property.imgSrc}`}
                    alt={`${property.name} Icon`}
                    className="w-8 max-w-10 min-w-8 shadow-2xl mb-2.5"
                    // onClick={handleFormDataChange}
                />

                <label 
                    className="mb-2.5 text-md sm:text-sm md:text-md lg:text-lg"
                    htmlFor={property.name}
                >
                    {property.name.charAt(0).toUpperCase() + property.name.slice(1)}
                </label>
            </fieldset>
        )
    })

    return (
        <div className="relative inline-block">
            <div className="flex items-center justify-between mb-4 ">
                <button
                    className="flex items-center justify-between w-full text-left text-md sm:text-sm md:text-md lg:text-lg font-semibold"
                    onClick={toggleDropDown}
                >
                    Property Type
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

                {formData.propertyType && props.clearFormButton}
            </div>

            {isDropDown && (renderPropertyTypeButtons)}
        </div>
    )
}

