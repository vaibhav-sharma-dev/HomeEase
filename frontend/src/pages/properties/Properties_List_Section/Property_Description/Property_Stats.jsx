import React from "react";
import ReviewStars from "../../../../Components/Review_Stars";


export default function PropertyStats() {
    return (
        <div className="mt-32 md:mt-16 md:ml-16 flex-grow flex flex-col text-[#282828] text-left font-semibold">
            <h1 className="mt-4 text-3xl sm:text-3xl md:text-4xl lg:text-5xl">
                For Sale | Rent 
            </h1>

            <h1 className="mt-4 text-xl sm:text-xl md:text-2xl lg:text-3xl">
                Property Type | Villa
            </h1>

            <div className="mt-4">
                <ReviewStars stars={5} />
            </div>

            <h1 className="mt-4 text-xl sm:text-xl md:text-2xl lg:text-3xl">
                Price | $
            </h1>

            <p className="mt-4 text-neutral-500 text-md sm:text-md md:text-lg lg:text-xl">
                Size: 777 sq. ft
            </p>

            <div className="flex gap-4 mt-4 text-neutral-500 text-md sm:text-md md:text-lg lg:text-xl">
                <p>No of Rooms</p>

                <div className="h-5 min-h-[1em] w-[0.5px] self-stretch bg-[#282828]  mt-0.5"></div>

                <p>No of Baths</p>
            </div>

            <p className="mt-4 flex gap-4 items-center text-neutral-500 text-md sm:text-md md:text-lg lg:text-xl">
                <img
                    src={`/Images/${true ? "Parking_Icon.png" : "No_Parking_Icon.png"}`}
                    alt="Parking Icon"
                    className="w-10 rounded-full"
                />
                Personal Parking
            </p>

            <p className="mt-4 flex gap-5 items-center text-neutral-500 text-md sm:text-md md:text-lg lg:text-xl">
                <img
                    src={`/Images/${true ? "Furnished_Icon.png" : "Not_Furnished_Icon.png"}`}
                    alt="Furniture Icon"
                    className="w-9"
                />
                {true ? "Fully Furnished" : "Not Furnished"}
            </p>

            <h1 className="mt-4 flex gap-5 items-center text-neutral-500 text-md sm:text-md md:text-lg lg:text-xl">
                <img
                    src="/Images/Location_Icon.png"
                    alt="Location Icon"
                    className="w-9"
                />
                Location
            </h1>

            <button
                className="flex items-center justify-center gap-2 bg-[#B28A5B] text-neutral-200 font-semibold mt-8 py-3 px-4 rounded-lg hover:bg-amber-500 transition-colors duration-300 text-md sm:text-md md:text-lg lg:text-xl"
                // onClick={() => navigate("properties")}
            >
                Add To Cart
                <img
                    src="/Images/Add_To_Cart_Icon.png"
                    alt="Add to Cart Icon"
                    className="w-8"
                />
            </button>

            <button
                className="bg-[#B28A5B] text-neutral-200 font-semibold mt-4 py-3 px-4 rounded-lg hover:bg-amber-500 transition-colors duration-300 text-md sm:text-md md:text-lg lg:text-xl"
                // onClick={() => navigate("properties")}
            >
                Buy Now
            </button>
        </div>
    )
}