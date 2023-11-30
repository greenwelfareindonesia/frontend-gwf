import gwficon from "../../assets/adminlogin-image/gwflogo.svg";
import adminBg from "../../assets/adminlogin-image/admin-bg.svg";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

export default function AdminLogin() {
  const form = useForm();
  const { register, control } = form;

  return (
    <section className="bg-[#3E3E08] flex h-screen">
      {/* Left Side */}
      <div className="w-1/2 h-screen px-28 py-28 ">
        <div className="bg-white w-full h-full mx-auto rounded-[3rem] flex flex-col items-center justify-center relative">
          <img src={gwficon} alt="gwf logo" className="absolute top-4 left-8" />
          <h2 className="text-[#3E3E08] font-semibold text-xl text-center ">
            Welcome GWF Team!
          </h2>
          <form action="post" className="flex flex-col mt-8 mb-6">
            <label htmlFor="email" className="text-[#3E3E08] font-semibold">
              Username/Email Address:
            </label>
            <input
              type="email"
              id="email"
              className="h-[3rem] w-[20rem] px-2 border-[#3E3E08] border-[1px] rounded-lg font-light text-xs mb-3"
              placeholder="Username/Email Address"
              {...register("email")}
            />
            <label htmlFor="password" className="text-[#3E3E08] font-semibold">
              Password:
            </label>
            <input
              type="password"
              id="password"
              className="h-[3rem] w-[20rem] px-2 border-[#3E3E08] border-[1px] rounded-lg font-light text-xs mb-3"
              placeholder="Password"
              {...register("password")}
            />
            <div className="flex items-center mb-8">
              <input
                type="checkbox"
                id="remember"
                {...register("remember")}
                className="mr-1"
              />
              <label htmlFor="remember" className="text-xs">
                Remember Me
              </label>
              <p className="text-xs ml-auto font-extralight hover:cursor-pointer hover:underline">
                Forgot Your Password?
              </p>
            </div>
            <button
              className="h-[3rem] border-[#3E3E08] border-[1px] first-letter rounded-lg text-sm font-medium hover:bg-[#3E3E08]
            hover:text-white ease-in-out duration-300"
              type="submit"
            >
              Submit
            </button>
          </form>
          <DevTool control={control} />
          <div className="bg-blue-gray-500"></div>
          <p className="font-medium text-xs absolute bottom-2">
            ©2023 by Green Welfare Indonesia
          </p>
        </div>
      </div>
      {/* Right Side */}
      <div
        className="w-1/2 bg-cover flex justify-center items-center"
        style={{ backgroundImage: `url(${adminBg})` }}
      >
        <div className="bg-[#3E3E08] bg-opacity-50 w-fit px-16 pt-6 pb-28 rounded-3xl">
          <h1 className="text-white font-bold text-5xl text-center leading-[4rem] mb-16">
            {" "}
            Green <br /> Welfare <br /> Indonesia
          </h1>
          <p className="text-white text-center font-light text-lg w-[31rem]">
            Fostering eco-social change by empowering young changemakers through
            climate education and food security
          </p>
        </div>
      </div>
    </section>
  );
}
