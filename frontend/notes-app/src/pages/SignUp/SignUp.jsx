import React, { useState } from "react";
import Navbar from "../../components/NavBar/Navbar";
import PasswordInput from "../../components/Input/PasswordInput";
import { Link, useNavigate } from "react-router-dom";
import { validateEmail } from "../../utils/helper";
import axiosInstance from "../../utils/axiosInstance";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!name || name.trim() === "") {
      setError("Please enter your name!");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!password) {
      setError("Please Enter a password");
      return;
    }
    setError("")
    try {
      const response = await axiosInstance.post("/create-account",{
        fullName : name,
        email : email,
        password : password 
      })
      if(response.data && response.data.error){
        setError(response.data.message)
        return;
      }
      if(response.data && response.data.accessToken){
        localStorage.setItem("token",response.data.accessToken);
        navigate("/")
      }
    } catch (error) {
      if(error.response && error.response.data && error.response.data.message){
        setError(error.response.data.message)
      }else{
        setError("An unexpected error occured.Please try again!")
      }
    }
  };

  return (
    <>

      <div className="flex items-center justify-center mt-28">
        <div className="w-96 rounded  bg-white px-7 py-10 drop-shadow-md">
          <form onSubmit={handleSignUp} action="">
            <h4 className="text-2xl mb-7">SignUp</h4>
            <input
              type="text"
              value={name}
              placeholder="Name"
              className="input-box"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              value={email}
              placeholder="Email"
              className="input-box"
              onChange={(e) => setEmail(e.target.value)}
            />
            <PasswordInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="text-xs text-red-500 pb-1">{error}</p>}
            <button type="submit" className="btn-primary">
              Create Account
            </button>
            <p className="text-sm text-center mt-4">
              Already have an account?&nbsp;
              <Link
                to={"/login"}
                className="font-medium text-primary underline"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
