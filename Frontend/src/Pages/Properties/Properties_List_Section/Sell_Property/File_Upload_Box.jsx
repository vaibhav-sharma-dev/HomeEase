import React from "react";
import usePropertyDetails from "../../../../Hooks/Use_Property_Details";


export default function FileUploadBox() {

    const [displayImages, setDisplayImages] = React.useState([]);
    const {formData, formError, handleFilesUpload, handleSubmit} = usePropertyDetails();

    const handleDisplayImagesChange = (event) => {
        const files = event.target.files;
        const filesArray = Array.from(files);
       
        // for (let i=0; i<filesArray.length; i++) {
        //     setDisplayImages(URL.createObjectURL(filesArray[i]));
        // }
        // const imagesURLs = filesArray.map((file) => URL.createObjectURL(file));
        // setDisplayImages(imagesURLs);

        handleFilesUpload(event);
    }

    return(
        <div className="flex-1 bg-[#282828] rounded-2xl flex mt-8 mb-16">
            <div className="flex-grow m-8 rounded-2xl border-2 border-neutral-200 flex flex-col justify-center items-center font-montserrat text-neutral-200">
                <img
                    src="/Images/File_Upload_Icon.png"
                    alt="HomeEase File Upload Icon"
                    className="w-24 md:w-36 my-12"
                />

                <h1 className="text-md sm:text-md md:text-lg lg:text-2xl font-semibold text-center max-w-60">
                    Drop your Property Images here
                </h1>

                <h1 className="text-md sm:text-md md:text-lg lg:text-2xl font-semibold my-4">
                    Or
                </h1>

                <label
                    htmlFor="images"
                    className="flex"
                >
                    <input
                        type="file"
                        id="images"
                        name="images"
                        accept="image/*"
                        multiple
                        onChange={handleDisplayImagesChange}
                        className="hidden"
                    />

                    <button
                        className="flex gap-2 bg-[#B28A5B] text-neutral-200 font-semibold mt-2 py-2 px-8 mb-4 rounded-lg text-md sm:text-md md:text-lg lg:text-xl hover:bg-amber-500 transition-colors duration-300"
                        onClick={() => document.getElementById("images").click()}
                    >
                        Browse
                        <img
                            src="/Images/Browse_Files_Icon.png"
                            alt="Browse Files Icon"
                            className="w-6"
                        />
                    </button>
                </label>

                {
                    formData.images.length === 0 && (
                        <p className="text-xs sm:text-xs md:text-sm lg:text-md text-center mb-12">
                            Maximum 4 images allowed <span className="text-red-600">*</span>
                        </p>
                    )
                }

                {
                    formData.images.length>0 && formData.images.length<=4 && (
                        <div className="grid grid-rows-2 grid-cols-2 gap-6 mb-4">
                            {
                                formData.images.map((index, image) => {
                                    return (
                                        <div key={index} className="flex gap-2">
                                            <img
                                                src={displayImages}
                                                alt={image.name}
                                                className="w-12 h-auto rounded-lg shadow-xl"
                                            />

                                            <img 
                                                src="/Images/Delete_Icon.svg"
                                                alt="Delete Icon"
                                                className="w-6 h-6 cursor-pointer"
                                                // onClick={}
                                            />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                }

                <p className="text-red-600 text-xs mb-12 text-center">
                    {formError.images}
                </p>
            </div>
        </div>
    )
}