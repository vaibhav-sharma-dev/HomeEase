import React from "react";
import BuyRentButton from "./Filters_Buttons_Section/Buy_Rent_Button";
import PropertyTypeDropdown from "./Filters_Buttons_Section/Property_Type/Property_Type_Dropdown";
import LocationDropDown from "./Filters_Buttons_Section/Location_Dropdown";
import NoOfRoomsCheckbox from "./Filters_Buttons_Section/No_Of_Rooms_Checkbox";
import PropertyFurnishedCheckbox from "./Filters_Buttons_Section/Property_Furnished_Checkbox"
import PriceRangeSlider from "./Filters_Buttons_Section/Price_Range_Slider";
import CustomerRatingsStars from "./Filters_Buttons_Section/Customer_Ratings_Stars";
import ClearFormButton from "./Filters_Buttons_Section/Clear_Form_Button";


const FiltersContext = React.createContext();

export default function FiltersSection() {

    const [formData, setFormData] = React.useState({
        buy: false,
        rent: false,
        propertyType: {
            apartment: false,
            cottage: false,
            mansion: false,
            villa: false
        },
        location: {
            australia: false,
            china: false,
            germany: false,
            india: false,
            japan: false,
            uk: false,
            usa: false
        },
        noOfRooms: {
            one: false,
            two: false,
            three: false,
            fourOrMore: false
        },
        furnished: false,
        priceRange: "",
        customerReview: "",
    });

    const handleFormDataChange = (event) => {
        console.log(event.target.value)
        const {name, type, checked, value} = event.target;
        const inputValue = type === 'checkbox' ? checked : value;

        if (type === 'checkbox') {
          setFormData(prevFormData => ({
            ...prevFormData,
            [name]: {
              ...prevFormData[name],
              [value]: checked
            }
          }));
        } 
        
        // else if (name === "buy" || name === "rent" || name === "furnished")
            // [name]: checked

        else {
          setFormData(prevFormData => ({
            ...prevFormData,
            [name]: inputValue
          }));
        }
    }

    const handleFormDataClear = (event) => {
        const {name, type, checked, value} = event.target;

        // clear the respective formData: logic
        console.log("Cleared!");
    }

    return (
        <FiltersContext.Provider value={{formData, setFormData, handleFormDataChange, handleFormDataClear}}>
            <div className="hidden lg:block bg-[#dddbdb] rounded-xl mt-2 mb-16 ml-2 w-[360px] max-w-full">
                <div className="flex flex-col mx-4 font-montserrat text-[#282828]">
                    <h1 className="text-[#282828] text-left text-2xl sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-8">
                        Filters
                    </h1>

                    <div className="h-[0.5px] border-t-0 bg-[#282828] my-4 "></div>

                    {/* <form> */}
                        <BuyRentButton />
                        <div className="h-[0.5px] border-t-0 bg-[#282828] my-4 "></div>

                        <PropertyTypeDropdown clearFormButton={<ClearFormButton />} />
                        <div className="h-[0.5px] border-t-0 bg-[#282828] my-4 "></div>

                        <LocationDropDown clearFormButton={<ClearFormButton />} />
                        <div className="h-[0.5px] border-t-0 bg-[#282828] my-4 "></div>

                        <NoOfRoomsCheckbox clearFormButton={<ClearFormButton />} />
                        <div className="h-[0.5px] border-t-0 bg-[#282828] my-4 "></div>

                        <PropertyFurnishedCheckbox />
                        <div className="h-[0.5px] border-t-0 bg-[#282828] my-4 "></div>

                        <PriceRangeSlider clearFormButton={<ClearFormButton />} />
                        <div className="h-[0.5px] border-t-0 bg-[#282828] my-4 "></div>

                        <CustomerRatingsStars clearFormButton={<ClearFormButton />} />
                    {/* </form> */}
                </div>
            </div>
        </FiltersContext.Provider>
    )
}


export {FiltersContext};