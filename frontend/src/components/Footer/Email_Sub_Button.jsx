import React from 'react';


export default function Email_Sub_Button() {

  const [formEmail, setFormEmail] = React.useState("");
  const [formError, setFormError] = React.useState("");

  const handleChange = (event) => {
    setFormEmail(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const emailPatterns = /\S+@\S+\.\S+/;
    const inputError = "";

    if (!formEmail) {
      setFormError("Please enter your email first");
      return;
    }

    // if (emailPatterns.test(formEmail)) {
    //   setFormError("Please enter a valid email address");
    //   return;
    // }

    setFormError(inputError);
  }
  

  return (
    <div>
      <form 
        onSubmit={handleSubmit}
        className="flex items-center bg-[#282828] border border-neutral-200 rounded-xl overflow-hidden"  
      >
        <input 
          name="formEmail"
          value={formEmail}
          type="email"
          placeholder="Write your email here"
          onChange={handleChange}
          className=" py-1 px-2 text-neutral-200 text-sm bg-[#282828] outline-none"
        />

        <button
          type="submit"
          className="relative bg-[#B28A5B] text-neutral-200 text-sm sm:text-sm md:text-md my-2 mr-2 md:my-4 md:mr-4 py-2 px-4 rounded-lg hover:bg-amber-500 transition-colors duration-300"
        >
          Submit
          <span className="ml-2">&#8594;</span>
        </button>

      </form>

      <p className="text-red-600 text-sm sm:text-sm md:text-md mt-2">
        {formError}
      </p>
    </div>
  )
}