import React from "react";


export default function useSignUp() {
    const [formData, setFormData] = React.useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [formError, setFormError] = React.useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        default: "",
    })

    const [loading, setLoading] = React.useState(false);

    const handleChange = (event) => {
        setFormData((prevData) => {
            return {
                ...prevData,
                [event.target.name]: event.target.value
            }
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        let inputError = {
            fullName: "",
            email: "",
            password: "",
            confirmPassword: "",
            default: "",
        }

        const namePatterns = /[!@#$%^&*()-_=+{};:'",<.>?1234567890]/;
        const emailPatterns = /\S+@\S+\.\S+/;

        if (!formData.fullName && !formData.email && !formData.password) {
            setFormError({
                ...inputError,
                fullName: "Please enter your name",
                email: "Please enter your email",
                password: "Please provide a strong password"
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

        // if (namePatterns.test(formData.fullName)) {
        //   setFormError({
        //     ...inputError,
        //     fullName: "Please enter a valid name",
        //   })

        //   return;
        // }

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

        if (!formData.password) {
                setFormError({
                ...inputError,
                password: "Please provide a strong password",
            });

            return
        }

        if (formData.confirmPassword !== formData.password) {
                setFormError({
                ...inputError,
                confirmPassword: "Password and Confirm Password do not match",
            });

            return;
        }

        setFormError(inputError);

        // try {
        //     const res = await axios.post("/api/v1/auth/sign-up", formData, {
        //     headers: {
        //         'Content-Type': 'multipart/form-data'
        //     }
        //     });

        //     const data = res.data;    }

        // catch (error) {
        //     // Handle any errors that occurred during the request
        //     console.log("Nahi chala", error)
        // }

        try {
            setLoading(true);

            const res = await fetch("/api/v1/auth/sign-up", {
                method: "Post",
                headers: {
                    'Content-Type': 'application/json' 
                },
                body: JSON.stringify(formData),
            })

            const data = await res.json();

            setLoading(false);
            navigate("/");
        }

        catch(error) {
            setFormError({
                ...inputError, 
                default: error,
            })
        }
    }


    return {formData, formError, loading, handleChange, handleSubmit};
}