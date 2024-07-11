import * as React from "react";

import gwficon from "../../assets/adminlogin-image/gwflogo.svg";
import adminBg from "../../assets/adminlogin-image/admin-bg.svg";

import { useForm } from "react-hook-form";

import Input from "../../components/input";
import Button from "../../components/button";
import Background from "../../components/background";
import { useRegister } from "../../features/auth/service";
import { useNavigate } from "react-router-dom";

export default function AdminRegister() {
  const [input, setInput] = React.useState({
    Username: "",
    Email: "",
    Password: "",
    isChecked: false,
  });
  const [successMessage, setSuccessMessage] = React.useState(""); // State variable for success message

  const { handleSubmit, register } = useForm();
  const navigate = useNavigate()

  const { mutate: registerMutate } = useRegister();

  const onSubmit = async (data) => {
    const { Username, Email, Password } = data;
    if (input.isChecked && Username !== "" && Email !== "" && Password !== "") {
      sessionStorage.setItem("Username", Username);
      sessionStorage.setItem("Email", Email);
      sessionStorage.setItem("Password", Password);
      sessionStorage.setItem("isChecked", input.isChecked);
    }
  
    try {
      const response = await fetch('https://servicegwf-production.up.railway.app/api/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: Username,
          email: Email,
          password: Password
        })
      });
  
      if (response.ok) {
        // Handle successful registration
        console.log('Registration successful');
        setSuccessMessage("Account successfully registered!"); // Update success message
        navigate("/login")
      } else {
        // Handle registration failure
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error registering user: ', error);
    }
  };
  

  return (
    <section className={`flex h-screen bg-primary-2`}>
      {/* Left Side */}
      <div className="flex items-center justify-center flex-1">
        <div className="relative flex flex-col items-center justify-center px-8 py-8 mx-auto overflow-hidden duration-300 bg-white sm:px-24 rounded-3xl">
          <img src={gwficon} alt="gwf logo" className="absolute top-0 left-0 hidden sm:block" />
          <h2 className="text-xl font-semibold text-center text-primary-2">Welcome GWF Team!</h2>
          {successMessage && (
            <div className="mb-4 text-green-600">{successMessage}</div> // Conditionally render success message
          )}
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full my-8 space-y-4 sm:w-72">
            <Input
              required
              register={register}
              defaultValue={input.Username || ""}
              name="Username"
              title="Username"
              placeholder="Input your username"
              type="text"
            />
            <Input
              required
              register={register}
              defaultValue={input.Email || ""}
              name="Email"
              title="Email"
              placeholder="Input your email"
              type="email"
            />
            <Input
              required
              register={register}
              defaultValue={input.Password || ""}
              name="Password"
              title="Password"
              placeholder="Input your password"
              type="password"
            />
            <div className="flex items-center">
              <input
                type="checkbox"
                defaultChecked={input.isChecked}
                onChange={(e) => setInput({ ...input, isChecked: e.target.checked })}
                id="remember"
                className="mr-1"
              />
              <label htmlFor="remember" className="text-xs">
                Remember Me
              </label>
            </div>
            <Button type="submit" className="!w-full rounded-lg">
              Register
            </Button>
            <p className="text-[12px]">Already have an account? <span><a href="/login">Login here</a></span></p>
          </form>
          <p className="absolute text-xs font-medium bottom-2">©2023 by Green Welfare Indonesia</p>
        </div>
      </div>
      {/* Right Side */}
      <Background src={adminBg} className="items-center justify-center flex-1 hidden lg:!flex">
        <div className="max-w-lg p-8 space-y-8 text-center bg-opacity-50 bg-primary-2 rounded-3xl">
          <h1 className="text-5xl font-bold leading-tight text-center text-light-1">
            Green <br /> Welfare <br /> Indonesia
          </h1>
          <p className="text-lg font-light text-center text-light-1">
            Fostering eco-social change by empowering young change makers through climate education and food security
          </p>
        </div>
      </Background>
    </section>
  );
}
