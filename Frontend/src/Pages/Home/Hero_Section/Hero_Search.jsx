import React from "react";
import Slider from "react-slider";


export default function SearchBox() {

    const [formType, setFormType] = React.useState("Buy")
    
    const [formData, setFormData] = React.useState({
        propertyType: "",
        location: "",
        priceRange: [1000, 7000],
    })


    const handleFormTypeChange = (value) => {
        setFormType(value.button);

        // reset form state
        setFormData({
            propertyType: "",
            location: "",
            priceRange: [1000, 7000],
          });
    }

    const handleFormDataChange = (event) => {
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    const handlePriceRangeChange = (value) => {
        setFormData((prevFormData) => ({
          ...prevFormData,
          priceRange: value,
        }));
      };
    

    const buttonOptions = ["Buy", "Rent", "Sell"];
    const renderButtons = buttonOptions.map((button, index) => {     
        return (
            <button
                key={button}
                className={`${
                    formType === button
                      ? 'bg-neutral-200 text-black'
                      : 'bg-zinc-500 text-white hover:bg-zinc-600'
                  } 
                  py-2 px-4 ${index === 0 ? 'rounded-l-lg' : ''} 
                  ${index === buttonOptions.length - 1 ? 'rounded-r-lg' : ''}
                `}
                onClick={() => handleFormTypeChange({button})}
            >
                {button}
            </button>
        )
    })


    const SelectedOption = () => {
        return (
            <>
                <select
                    name="propertyType"
                    value={formData.propertyType}
                    className="py-2 px-4 rounded-l-lg border border-gray-300 bg-neutral-200 text-black font-montserrat focus:outline-none focus:ring-2 focus:ring-blue-500 w-1/3"
                    onChange={handleFormDataChange}
                >
                    <option value="" disabled>Select Property Type</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Cottage">Cottage</option>
                    <option value="Mansion">Mansion</option>
                    <option value="Villa">Villa</option>
                </select>

                <select
                    name="location"
                    value={formData.location}
                    placeholder="e.g Gambir, Jakarta Pusat"
                    className="py-2 px-4 border border-gray-300 bg-neutral-200 text-black font-montserrat focus:outline-none focus:ring-2 focus:ring-blue-500 w-1/3"
                    onChange={handleFormDataChange}
                >
                    <option value="" disabled>Select Location</option>
                    <option value="Australia">Australia</option>
                    <option value="China">China</option>
                    <option value="Germany">Germany</option>
                    <option value="India">India</option>
                    <option value="Japan">Japan</option>
                    <option value="UK">UK</option>
                    <option value="USA">USA</option>
                </select>
            
                {/* Slider not rendering on screen */}
                {/* <div className="w-full h-8">
                    <Slider 
                        range
                        min={1000}
                        max={7000}
                        step={100}
                        value={formData.priceRange}
                        onChange={handlePriceRangeChange}
                        placeholder="Min. Price - Max. Price"
                        className="py-2 px-4 rounded-r-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-1/3"
                    />

                    <div>
                        <span>{formData.priceRange[0]}</span>
                        <span>{formData.priceRange[1]}</span>
                    </div>
                </div> */}
            </>
        )
    }

    const renderSelectedOption = () => {
            switch(formType) {
                case 'Rent':
                    return <SelectedOption />

                case 'Sell':
                    return <SelectedOption />

                default: return <SelectedOption />
            }
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitted");
    }


    return (
        <div 
            className="relative flex flex-col justify-center items-center px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48"
            onSubmit={handleSubmit}
        >
            <div className="flex flex-wrap items-center mr-4 mb-0 md:mb-0">
                {renderButtons}
            </div>

            <div className="flex justify-center items-center w-full">
                {formType && (renderSelectedOption())}

                <button className="bg-[#282828] text-white py-2 px-4 rounded-lg hover:bg-black">
                    Search
                </button>
            </div>

        </div>
    )
};


{/* <div className="flex flex-wrap justify-center items-center bg-white rounded-lg shadow-md p-4 mb-8 w-full md:w-3/4 lg:w-2/3">
<div className="flex items-center mr-4 mb-2 md:mb-0">
  <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded-l-lg hover:bg-gray-300">Buy</button>
  <button className="bg-gray-200 text-gray-700 py-2 px-4 hover:bg-gray-300">Rent</button>
  <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded-r-lg hover:bg-gray-300">Sell</button>
</div>
<div className="flex items-center mr-4 mb-2 md:mb-0">
  <select className="py-2 px-4 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
    <option value="">Select Property Type</option>

  </select>
  <input
    type="text"
    placeholder="e.g Gambir, Jakarta Pusat"
    className="py-2 px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
  <input
    type="text"
    placeholder="Min. Price - Max. Price"
    className="py-2 px-4 rounded-r-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
</div>
<button className="bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800">Search</button>
</div> */}
       