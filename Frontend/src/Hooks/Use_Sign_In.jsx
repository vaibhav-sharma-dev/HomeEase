import React from "react";
import { useNavigate } from "react-router-dom";


export default function useSignIn() {

    const navigate = useNavigate();

    const [formData, setFormData] = React.useState({
        email: "",
        password: "",
    });

    const [formError, setFormError] = React.useState({
        email: "",
        password: "",
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
            email: "",
            password: "",
            default: "",
        }
    
        const emailPatterns = /\S+@\S+\.\S+/;
    
        if (!formData.email && !formData.password) {
            setFormError({
                ...inputError,
                email: "Please enter your email",
                password: "Please enter your password"
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
    
        if (!formData.password) {
          setFormError({
            ...inputError,
            password: "Please enter your password",
          });
    
          return
        }
    
        setFormError(inputError);

        try {
            setLoading(true);

            const res = await fetch("/api/v1/auth/sign-in", {
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