import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import Logo from "../../../assets/gwf.png";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)

export default function ModalPayment({
  modalIsOpen,
  setIsOpen,
  saveRespMidtrans,
}) {
  let subtitle;
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    return `${hrs}h ${mins}m ${secs}s`;
  };

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="my-4 text-center w-[100%] m-auto p-5 rounded-xl space-y-4 ">
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
            <div className="font-bold text-2xl">
              Rp.{saveRespMidtrans?.gross_amount.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  })}   
            </div>
            <div className="text-2xl">
              Pay within <span>{formatTime(timeLeft)}</span>
            </div>
            {saveRespMidtrans &&
              saveRespMidtrans.va_numbers &&
              saveRespMidtrans.va_numbers.map((item) => (
                <div className="font-semibold text-2xl">{item?.bank.toUpperCase()}</div>
              ))}
            <hr className="border-t-1 border-gray-500 w-full" />
            <div className="text-lg">
              Complete payment from BCA to the virtual account number below.
            </div>
            <div className="flex justify-between items-center">
              <div className="space-y-1">
                <div>Virtual account number</div>
                {saveRespMidtrans &&
                  saveRespMidtrans.va_numbers &&
                  saveRespMidtrans.va_numbers.map((item) => (
                    <div className="font-semibold">{item?.va_number}</div>
                  ))}
              </div>
              <button
                onClick={() =>
                  copyToClipboard(saveRespMidtrans.va_numbers[0]?.va_number)
                }
              >
                <div className="text-blue-gray-500 hover:text-blue-gray-900">
                  Copy
                </div>
              </button>
            </div>
            <button className="p-2 bg-green-600 hover:bg-green-800 w-full rounded-2xl text-white font-bold">
              Check Status
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
