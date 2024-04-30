import axios from "axios";

export const handleSignIn = async (
  username,
  password,
  setAuthenticated,
  setError,
  navigate
) => {
  try {
    const response = await axios.post("http://localhost:5000/auth/admin/login", {
      username,
      password,
    });

    if (response.data.token) {
      setError("");
      localStorage.setItem("token", response.data.token);
      setAuthenticated(true);
      navigate("/dashboard");
    } else {
      setError("Invalid username or password");
    }
  } catch (error) {
    console.error("Error signing in:", error);
    setError("An error occurred while signing in");
  }
};





export const handleSignUp = async (formData, setError, navigate) => {
  try {
    const response = await axios.post("http://localhost:5000/admin/create", formData);

    // Check if the response status is 201 (created) to indicate a successful signup
    if (response.status === 201) {
      setError("");
      console.log("Admin created successfully", response.data);
      window.alert("Admin registered successfully!");
      navigate("/signin");
    } else {
      // Handle other status codes indicating errors
      setError(response.data.error || "Failed to register admin. Please try again.");
    }
  } catch (error) {
    console.error("Error creating admin: ", error);
    setError("An error occurred while registering admin");
  }
};












