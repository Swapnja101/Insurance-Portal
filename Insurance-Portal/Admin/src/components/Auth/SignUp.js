// SignUp.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleSignUp } from "./auth";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    email: "",
    age: "",
    gender: "",
    address: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignUpClick =  async () => {  try {
    //console.log("Form Data:", formData);
    if (!formData.firstname || !formData.lastname || !formData.username || !formData.password || !formData.email) {
      setError("Please fill out all required fields");
      return;
    }
    await handleSignUp(formData, setError, navigate);
  } catch (error) {
    console.error("Error signing up:", error.message);
    setError(error.message || "Failed to sign up. Please try again.");
  }
   // console.log("Form Data:", formData); // Add this line for debugging
    //handleSignUp(formData, setError, navigate);
   
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Admin SignUp</h1>
      <div className="w-64">
        {Object.keys(formData).map((field) => (
          <input
            key={field}
            type={field === "password" ? "password" : "text"}
            name={field}
            value={formData[field]}
            onChange={handleChange}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            className="w-full px-4 py-2 mb-2 rounded border"
          />
        ))}
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button
          onClick={handleSignUpClick}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignUp;
