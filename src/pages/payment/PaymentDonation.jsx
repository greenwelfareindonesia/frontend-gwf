import React, { useEffect, useState } from "react";
import ImageBca from "../../assets/payment-method/bca.png";
import ImageMandiri from "../../assets/payment-method/mandiri.png";
import ImageCimb from "../../assets/payment-method/cimb.png";
import ImageBri from "../../assets/payment-method/bri.png";
import ImageBni from "../../assets/payment-method/bni.png";

import API from "../../libs/api";
import { useParams } from "react-router-dom"
import ModalPayment from "./modalPayment/ModalPayment";

const PaymentDonation = () => {
  const [selectedBank, setSelectedBank] = useState("");
  const { makeDonationID } = useParams();
  const [saveRespMidtrans, setSaveRespMidtrans] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);

  const handlePayment = async () => {
    if (!selectedBank) {
      alert("Please select a bank");
      return;
    }

    const data = {
      bank_transfer: selectedBank,
      payment_type: "bank_transfer",
    };

    try {
      const response = await API.post(`/payments/${makeDonationID}`, data);
      setSaveRespMidtrans(response.data);
      console.log("Payment submitted", response);
    } catch (error) {
      console.error("Error submitting payment", error);
    }
  };

  useEffect(() => {
    if (saveRespMidtrans) {
      setIsOpen(true);
    }
  }, [saveRespMidtrans]);

  return (
    <div className="my-4 text-center border-2 border-filter-5 w-[60%] m-auto p-5 rounded-xl space-y-4 bg-[#F4F7F9]">
      <div className=" text-2xl font-bold">Enter Your Payment Details</div>
      <div className="bg-[#F4F7F9] text-[20px]">
        <div>Total Price</div>
        <div>20.000</div>
      </div>
      <div className="font-bold text-[20px]">Bank Virtual Account</div>
      <div className="flex flex-col gap-5 items-center justify-center">
        <div className="flex justify-center items-center gap-2">
          <button
            className={`hover:bg-[#dce3e7] w-full ${
              selectedBank === "bca" ? "bg-green-200" : ""
            }`}
            onClick={() => setSelectedBank("bca")}
          >
            <div className="border-2 border-filter-5 rounded-2xl p-2 w-full h-[30%]">
              <div className="text-[20px] font-semibold p-2">BCA</div>
              <img
                src={ImageBca}
                alt=""
                className="w-[50%] py-4 object-contain m-auto"
              />
            </div>
          </button>
          <button
            className={`hover:bg-[#dce3e7] w-full ${
              selectedBank === "bri" ? "bg-green-200" : ""
            }`}
            onClick={() => setSelectedBank("bri")}
          >
            <div className="border-2 border-filter-5 rounded-2xl p-2 w-full h-[30%]">
              <div className="text-[20px] font-semibold p-2">BRI</div>
              <img
                src={ImageBri}
                alt=""
                className="w-[40%] object-contain m-auto"
              />
            </div>
          </button>
        </div>
        <div className="flex justify-center items-center gap-2">
          <button
            className={`hover:bg-[#dce3e7] w-full ${
              selectedBank === "cimb" ? "bg-green-200" : ""
            }`}
            onClick={() => setSelectedBank("cimb")}
          >
            <div className="border-2 border-filter-5 rounded-2xl p-1 w-full">
              <div className="text-[20px] font-semibold p-2">Cimb</div>
              <img
                src={ImageCimb}
                alt=""
                className="w-[40%] object-contain m-auto"
              />
            </div>
          </button>
          <button
            className={`hover:bg-[#dce3e7] w-full ${
              selectedBank === "bni" ? "bg-green-200" : ""
            }`}
            onClick={() => setSelectedBank("bni")}
          >
            <div className="border-2 border-filter-5 rounded-2xl p-1 w-full">
              <div className="text-[20px] font-semibold p-2">BNI</div>
              <img
                src={ImageBni}
                alt=""
                className="w-[40%] object-contain m-auto"
              />
            </div>
          </button>
        </div>
        <button
          onClick={handlePayment}
          className="bg-green-700 text-black p-3 rounded-2xl w-full font-bold hover:bg-green-900"
        >
          Submit
        </button>
      </div>
      <ModalPayment modalIsOpen={modalIsOpen} setIsOpen={true} saveRespMidtrans={saveRespMidtrans} />
    </div>
  );
};

export default PaymentDonation;