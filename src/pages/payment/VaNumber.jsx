import React from "react";
import Logo from "../../assets/gwf.png";

const VaNumber = () => {
  return (
    <div className="my-4 text-center border-2 border-filter-5 w-[30%] m-auto p-5 rounded-xl space-y-4 ">
      <div className="text-left space-y-4">
        <div className="flex items-center">
          <div>
            <img src={Logo} alt="" />
          </div>
          <div className="text-left font-bold text-3xl">
            Payment Green Welfare Indonesia
          </div>
        </div>
        <hr className="border-t-1 border-gray-500 w-full" />
        <div className="font-bold text-2xl">Rp. 20.000</div>
        <div className="text-2xl">
          Pay within <span>24 jam mundur</span>
        </div>
        <div className="text-2xl">Bank BCA</div>
        <hr className="border-t-1 border-gray-500 w-full" />
        <div className="text-lg">
          Complete payment from BCA to the virtual account number below.
        </div>
        <div className="flex justify-between items-center">
          <div className="space-y-1">
            <div>Virtual account number</div>
            <div className="font-semibold">07743873093</div>
          </div>
          <button>
            <div className="text-blue-gray-500">Copy</div>
          </button>
        </div>
        <button className="p-2 bg-green-600 hover:bg-green-800 w-full rounded-2xl text-white font-bold">
          Check Status
        </button>
      </div>
    </div>
  );
};

export default VaNumber;
