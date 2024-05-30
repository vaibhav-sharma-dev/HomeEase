import React from "react";


export default function usePropertyDetails() {

    const [formData, setFormData] = React.useState({
        sell: false,
        rent: false,
        propertyType: "",
        country: "",
        city: "",
        size: "",
        noOfRooms: "",
        noOfBaths: "",
        furnished: false,
        parking: false,
        price: "",
        images: [],
    });

    const [formError, setFormError] = React.useState({
        sellOrRent: "",
        propertyType: "",
        country: "",
        city: "",
        size: "",
        noOfRooms: "",
        noOfBaths: "",
        price: "",
        images: "",
    })

    const handleChange = (event) => {
        event.preventDefault();
        const {name, checked, value} = event.target;

        if (name==="sell") {
            setFormData((prevFormData) => {
                return {
                    ...prevFormData,
                    sell: true,
                    rent: false,  
                }
            })
        }

        else if (name==="rent") {
            setFormData((prevFormData) => {
                return {
                    ...prevFormData,
                    rent: true,
                    sell: false,  
                }
            })
        }

        if (name==="size" || name==="noOfRooms" || name==="noOfBaths" || name==="price") {
            setFormData((prevFormData) => {
                return {
                    ...prevFormData,
                    [name]: value,
                }
            })
        }

        if (name==="furnished" || name==="parking") {
            setFormData((prevFormData) => {
                return {
                    ...prevFormData,
                    [name]: checked,
                }
            })
        }
    }

    const handleSelectMenuChange = (field, option) => {
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [field]: option,
            }
        })
    }

    const handleFilesUpload = (event) => {
        event.preventDefault();
        
        const uploadedImages = [...formData.images];
        const files = Array.from(event.target.files);

        if (uploadedImages.length + files.length > 4) {
            setFormError((prevFormError) => {
                return {
                    ...prevFormError,
                    images: "Maximum 4 images allowed",
                }
            })

            return;
        }
        
        uploadedImages.push(files);
        
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                images: uploadedImages,
            }
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        let inputErrors = {
            sellOrRent: "",
            propertyType: "",
            country: "",
            city: "",
            size: "",
            noOfRooms: "",
            noOfBaths: "",
            price: "",
            images: "",
        }

        if (!formData.sell && !formData.rent && !formData.propertyType && !formData.country && !formData.city && !formData.size && !formData.noOfRooms && ! formData.noOfBaths && !formData.price && formData.images.length===0) {
            setFormError({
                ...inputErrors,
                sellOrRent: "Please select any one of the above options",
                propertyType: "Please select the property type that you want to list",
                country: "Please select the desired country",
                city: "Please select the desired city",
                size: "Please select the property size",
                noOfRooms: "Please select the no. of rooms in your property",
                noOfBaths: "Please select the no. of baths in your property",
                price: "Please enter the approx. price of your property",
                images: "Please upload atleast 1 image of your property",
            })

            return;
        }

        if (!formData.sell && !formData.rent) {
            setFormError({
                ...inputErrors,
                sellOrRent: "Please select any one of the above options",
            })

            return;
        }

        if (!formData.propertyType) {
            setFormError({
                ...inputErrors,
                propertyType: "Please select the property type that you want to list",
            })

            return;
        }

        if (!formData.country) {
            setFormError({
                ...inputErrors,
                country: "Please select the desired country",
            })

            return;
        }

        if (!formData.city) {
            setFormError({
                ...inputErrors,
                city: "Please select the desired city",
            })

            return;
        }

        if (!formData.size) {
            setFormError({
                ...inputErrors,
                size: "Please select the property size",
            })

            return;
        }

        if (!formData.noOfRooms) {
            setFormError({
                ...inputErrors,
                noOfRooms: "Please select the no. of rooms in your property",
            })

            return;
        }

        if (!formData.noOfBaths) {
            setFormError({
                ...inputErrors,
                noOfBaths: "Please select the no. of baths in your property",
            })

            return;
        }

        if (!formData.price) {
            setFormError({
                ...inputErrors,
                price: "Please enter the approx. price of your property",
            })

            return;
        }

        if (formData.images.length === 0) {
            setFormError({
                ...inputErrors,
                images: "Please upload atleast 1 image of your property"
            })
        }
    }

    return {formData, formError, handleChange, handleSelectMenuChange, handleFilesUpload, handleSubmit};
}