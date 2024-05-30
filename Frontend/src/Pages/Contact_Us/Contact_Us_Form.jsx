import React from "react";


export default function ContactUsForm() {

    const [formData, setFormData] = React.useState({
        name: "",
        email: "",
        message: ""
    });

    const [formError, setFormError] = React.useState({
        name: "",
        email: "",
        message: ""
    })

    const [messageLength, setMessageLength] = React.useState("");
    const maxWords = 120;

    const handleChange = (event) => {
        setFormData((prevData) => {
            return {
                ...prevData,
                [event.target.name]: event.target.value
            }
        });

        setMessageLength(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        let inputError = {
            fullName: "",
            email: "",
            message: "",
        }

        const namePatterns = /[!@#$%^&*()-_=+{};:'",<.>?1234567890]/;
        const emailPatterns = /\S+@\S+\.\S+/;

        if (!formData.fullName && !formData.email && !formData.message) {
            setFormError({
              ...inputError,
              fullName: "Please enter your name",
              email: "Please enter your email",
              message: "Please enter your message"
            })
      
            return;
        }

        if (!formData.fullName) {
            setFormError({
              ...inputError,
              fullName: "Please enter your name",
            })
      
            return;
        }
    
        if (namePatterns.test(formData.fullName)) {
            setFormError({
                ...inputError,
                fullName: "Please enter a valid name",
            })
        
            return;
        }
    
        if (!formData.email) {
            setFormError({
                ...inputError,
                email: "Please enter your email address",
            })
        
            return;
        }
    
        // if (emailPatterns.test(formData.email)) {
        //   setFormError({
        //     ...inputError,
        //     email: "Please enter a valid email address",
        //   })
    
        //   return;
        // }

        if (!formData.message) {
            setFormError({
                ...inputError,
                message: "Please enter your message"
            })
        }

        setFormError(inputError);
    }
    
    
    return (
        <div className="flex-1 flex flex-col bg-[#282828] rounded-2xl mt-8 mb-16">
            <h1 className="text-neutral-200 text-2xl text-center sm:text-2xl md:text-4xl lg:text-5xl font-montserrat font-semibold mx-4 mt-8">
                Shoot Us An Email!
            </h1>

            <form
                className="flex flex-col m-12 text-neutral-200 font-montserrat"
                onSubmit={handleSubmit}
            >
                <label className="font-medium text-md sm:text-md md:text-lg lg:text-xl">
                    Your Name <span className="text-red-600">*</span>
                </label>
                <input 
                    type="text"
                    placeholder="Example: Tony Stark"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`rounded-sm flex-grow py-2 px-4 mt-2 ${formData.name ? "text-[#282828]" : "text-neutral-200"} text-sm`}
                />
                <p className="text-red-600 text-md mt-2 mb-8">
                    {formError.fullName}
                </p>

                <label className="font-medium text-md sm:text-md md:text-lg lg:text-xl">
                    Your Email <span className="text-red-600">*</span>
                </label>
                <input 
                    type="email"
                    placeholder="Example: msdhoni07@gmail.com"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`rounded-sm flex-grow py-2 px-4 mt-2 ${formData.email ? "text-[#282828]" : "text-neutral-200"} text-sm`}
                />
                <p className="text-red-600 text-md mt-2 mb-8">
                    {formError.email}
                </p>

                <label className="font-medium text-md sm:text-md md:text-lg lg:text-xl">
                    Your Message <span className="text-red-600">*</span>
                </label>
                <textarea 
                    placeholder="Share your thoughts with us here!"
                    name="message"
                    value={formData.message}
                    maxLength={maxWords}
                    onChange={handleChange}
                    className={`rounded-sm flex-grow py-2 px-4 mt-2 ${formData.message ? "text-[#282828]" : "text-neutral-200"} text-sm`}
                />
                <p className="text-red-600 text-md mt-2">
                    {formError.message}
                </p>
                <p className="text-[#B28A5B] text-md font-medium mt-2 mb-8">
                    {maxWords-messageLength.length} words left
                </p>

                <button
                    className="bg-[#B28A5B] text-neutral-200 font-bold mt-2 py-2 px-4 rounded-lg hover:bg-amber-500 transition-colors duration-300"
                    type="submit"
                >
                    Send
                </button>
            </form>
        </div>
    )
}