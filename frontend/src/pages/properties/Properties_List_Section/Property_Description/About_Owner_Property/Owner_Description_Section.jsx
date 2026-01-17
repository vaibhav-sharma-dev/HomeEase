import React from "react";


export default function OwnerDescription() {
    return (
        <div className="flex flex-col text-left m-4 flex-1 ">
            <h1 className="font-semibold text-[#282828] text-lg sm:text-lg md:text-xl lg:text-2xl mb-4">
                About Tushar
            </h1>

            <p className="text-neutral-500 text-sm sm:text-sm md:text-md lg:text-lg font-normal">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae quia laboriosam minus tempora exercitationem, nemo sequi ratione laborum, commodi ab repellendus velit repudiandae animi. Quas, iste. Officia atque consequuntur distinctio veniam numquam. Corporis repudiandae doloribus, ullam, quibusdam dolorem ea magnam ducimus quisquam nobis soluta repellendus eos veritatis nulla eveniet. Error totam inventore sit ad sint laboriosam libero eos, minus quo blanditiis, cum voluptatum ipsam corrupti dolor facilis eligendi. Nobis, magni!
            </p>

            <button
                className="bg-[#B28A5B] text-neutral-200 font-semibold mt-4 py-3 px-4 rounded-lg hover:bg-amber-500 transition-colors duration-300 text-md sm:text-md md:text-lg lg:text-xl"
                // onClick={}
            >
                Chat With The Owner
            </button>
        </div>
    )
}