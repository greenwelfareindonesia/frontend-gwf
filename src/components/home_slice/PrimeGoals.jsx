import { image_prime_goals } from "../../assets/image";

const PrimeGoals = () => {
  return (
    <div className="flex items-center justify-center w-full h-full my-20 bg-white">
      <div className="relative flex items-center w-full h-full max-w-screen-lg">
        <img src={image_prime_goals} className="w-full max-w-xl bg-cover h-max" alt="" />
        <div className="mx-20 bg-[#3E3E08] p-12 max-w-md w-full absolute left-[40%]">
          <h5 className="text-2xl font-light leading-[10rem] text-white md:text-lg">Prime Goals</h5>
          <p className="py-2 mt-8 text-sm leading-7 text-white font-extralight">
            Achieve Food Security, Ensure Sustainable Agriculture and Promote Climate Education
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrimeGoals;
