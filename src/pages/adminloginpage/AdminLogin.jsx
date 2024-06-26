import * as React from "react";
import API from "../../libs/api";
import gwficon from "../../assets/adminlogin-image/gwflogo.svg";
import adminBg from "../../assets/adminlogin-image/admin-bg.svg";

import { useForm } from "react-hook-form";

import Input from "../../components/input";
import Button from "../../components/button";
import Background from "../../components/background";

export default function AdminLogin() {
  const { register, handleSubmit } = useForm();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onSubmit = async (data) => {
    try {
      await API.post("/user/login", data)
        .then((response) => {
          console.log(response.data)
          localStorage.setItem("token", response.data.data.Token);          
          window.location.href = "/";
        })
        .catch((error) => {
          const message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          alert(message);
        });
    } catch (error) {
      console.error("Login failed", error);
      alert("Login failed");
    }
  };
  
  

  return (
    <section className={`flex h-screen bg-primary-2`}>
      {/* Left Side */}
      <div className="flex items-center justify-center flex-1">
        <div className="relative flex flex-col items-center justify-center px-8 py-8 mx-auto overflow-hidden duration-300 bg-white sm:px-24 rounded-3xl">
          <img
            src={gwficon}
            alt="gwf logo"
            className="absolute top-0 left-0 hidden sm:block"
          />
          <h2 className="text-xl font-semibold text-center text-primary-2">
            Welcome GWF Team!
          </h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col w-full my-8 space-y-4 sm:w-72"
          >
            <div className="input-field">
              <Input
                required
                register={register}
                defaultValue={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                title="Email"
                placeholder="input your email"
                type="text"
              />
            </div>
            <div className="input-field">
              <Input
                required
                register={register}
                defaultValue={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                title="Password"
                placeholder="input your password"
                type="password"
              />
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="mr-1"
              />
              <label htmlFor="remember" className="text-xs">
                Remember Me
              </label>
            </div>
            <Button type="submit" className="!w-full rounded-lg">
              Submit
            </Button>
            <p className="text-[12px]">Need an account? <span><a href="/register">Signup here</a></span></p>

          </form>
          <p className="absolute text-xs font-medium bottom-2">
            ©2023 by Green Welfare Indonesia
          </p>
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
