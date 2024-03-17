import React, {useState} from "react";
import {Link, Navigate, useNavigate} from "react-router-dom";
import axios from "axios";

function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: ""
  });

  const history = useNavigate();

  const handleSignup = () => {
    console.log("heleolololo");
    console.log("Sending login request with data:", formData);
    fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
        .then(response => {
          if (!response.ok) {
            throw new Error("Failed to signup");
          }
          return response.json();
        })
        .then(responseData => {
          console.log("Login response:", responseData);
          if (responseData.message === "successful") {
            console.log("Sign up  successful. Redirecting...");
            history("/HomePage"); // Redirect to Navbar page
          } else {
            console.log("Login failed. Server response:", responseData);
            // Handle login failure, such as displaying an error message to the user
          }
        })
        .catch(error => {
          console.error("Error occurred during login:", error);
          // Handle network errors or other exceptions
        });
  }
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <video
        src="/bg_vid.mp4"
        autoPlay
        loop
        muted
        style={{ width: "100%", height: "100%" }}
      />
      <div className="absolute top-[20%] left-[17%]">
        <div className="w-[500px] h-[500px] border absolute bg-[#FCFBFC] rounded opacity-75 shadow-2xl ml-[480px]">
          <form className="flex flex-col space-y-4 ml-[50px]">
            <label htmlFor="username" className="text-lg font-semibold font-mono">
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Your username"
              className="p-2 border-2 rounded w-[400px]"
              required
              onChange={handleChange}
            />

            <label
              htmlFor="password"
              className="text-lg font-semibold font-mono"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Your password"
              className="p-2 border-2 rounded w-[400px]"
              required
              onChange={handleChange}
            />
            <label htmlFor="email" className="text-lg font-semibold font-mono">
              Email:
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Your email"
              className="p-2 border-2 rounded w-[400px]"
              required
              onChange={handleChange}
            />
            <button
              type="button"
              className="bg-[#008080] text-white py-2 rounded font-mono w-[200px] ml-[100px]"
              onClick={handleSignup}
            >
              SignUp
            </button>
          </form>
          <p className="text-blue text-[15px] underline font-mono text-center mt-[15px]">
            Forgot Password?
          </p>

        </div>
        <div className="w-[500px] h-[400px] absolute shadow-2xl mt-[50px]">
          <img src="/assets/tai.jpeg" />
        </div>
      </div>
    </div>
  );
}

export default SignUp;
