import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import CardOrder from "../../components/cards-order/index";
import { editIcon, tumbler, person, location, map2, warning } from "../../assets/merch-image";
import { useState } from "react";
import { Link } from "react-router-dom";

const OrderSummary = () => {
  const [isCompleteProfile, setIsCompleteProfile] = useState(false);
  // const [profile, setProfile] = useState(null);

  const productTotal = 90000;
  const deliveryFee = 10000;
  const totalPrice = productTotal + deliveryFee;

  const orders = [
    {
      image: tumbler,
      title: "GWF Tumbler",
      price: 30000,
      quantity: 2,
      note: "Note: Please add bubble wrap...",
      details: ["650ml", "Black"]
    },
    {
      image: tumbler,
      title: "GWF Tumbler",
      price: 30000,
      quantity: 1,
      note: "Note: Please add bubble wrap...",
      details: ["650ml", "Black"]
    },
    // Add more orders as needed
  ];

  return (
    <>
      <Navbar />
      <div className="mx-4 md:mx-20 mb-10 mt-20">
        <h1 className="font-semibold text-2xl md:text-4xl my-6">Order Summary</h1>
        {isCompleteProfile ? (
          <>
            <div className="bg-primary-1 w-full mx-auto my-6 grid grid-cols-1 md:grid-cols-5 gap-4 rounded-xl p-4 md:p-6">
              <div className="hidden md:flex justify-end items-end">
                <img src={map2} className="w-32 md:w-40 my-5 rounded-xl border-2 border-primary-2 self-end mx-6" />
              </div>
              <div className="grid-rows-2 space-y-5 my-auto col-span-4 md:col-span-3">
                <div className="flex space-x-3">
                  <img src={person} className="w-7 h-7" />
                  <div className="text-light-1 text-sm md:text-base">
                    <p>Alexander Rama Giofran</p>
                    {/* <p>{profile?.name}</p> */}
                    <p>ramaalex1221@gmail.com | (+62) 896430984532</p>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <img src={location} className="w-7 h-7" />
                  <div className="text-light-1 text-sm md:text-base">
                    <p>Jln Bunga Widara No 6A</p>
                    <p>Malang, Jawa Timur, ID 154684</p>
                  </div>
                </div>
              </div>
              <div className="self-start ml-10 my-auto">
                <Link to="/profile">
                  <img src={editIcon} className="w-10 mx-auto" />
                </Link>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="mt-5 mb-10">
              <div className="flex bg-primary-1 bg-opacity-30 py-2 px-2 rounded-lg border-2 border-primary-2">
                <img src={warning} className="w-5 h-5 my-auto mx-3" />
                <p>Please complete your profile data before buying this merch</p>
              </div>
              <div className="bg-primary-1 w-full mx-auto my-4 grid grid-cols-5 md:grid-cols-5 gap-4 rounded-lg p-4 md:p-6">
                <div className="hidden md:flex justify-end items-end">
                  <img src={map2} className="w-32 md:w-40 my-5 rounded-xl border-2 border-primary-2 self-end mx-6" />
                </div>
                <div className="grid-rows-2 space-y-5 my-auto col-span-4 md:col-span-3">
                  <div className="flex space-x-3">
                    <img src={person} className="w-7 h-7" />
                    <div className="text-light-1 text-sm md:text-base">
                      <p>-</p>
                      {/* <p>{profile?.name}</p> */}
                      <p>-</p>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <img src={location} className="w-7 h-7" />
                    <div className="text-light-1 text-sm md:text-base">
                      <p>-</p>
                      <p>-</p>
                    </div>
                  </div>
                </div>
                <div className="self-start my-auto">
                  <Link to="/profile">
                    <img src={editIcon} className="w-5 md:w-10 mx-auto" />
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
        {orders.map((order, index) => (
          <CardOrder
            key={index}
            image={order.image}
            title={order.title}
            quantity={order.quantity}
            price={order.price}
            note={order.note}
            details={order.details}
          />
        ))}
      </div>

      <div className="mx-4 md:mx-20">
        <div className="w-full flex justify-between mt-5 mb-2 text-sm md:text-base">
          <p>Product total</p>
          <p>Rp {productTotal.toLocaleString()}</p>
        </div>
        <hr className="border-t-1 border-gray-500 w-full" />
        <div className="w-full flex justify-between mt-5 mb-2 text-sm md:text-base">
          <p>Delivery Fee</p>
          <p>Rp {deliveryFee.toLocaleString()}</p>
        </div>
        <hr className="border-t-1 border-gray-500 w-full" />
        <div className="w-full flex justify-between mt-5 mb-2 font-semibold text-sm md:text-base">
          <p>Total Harga</p>
          <p>Rp {totalPrice.toLocaleString()}</p>
        </div>
        <hr className="border-t-1 border-gray-500 w-full mb-10" />

        <div className="bg-primary-2 bg-opacity-30 border-2 border-primary-2 p-4 md:p-8 mb-4 rounded-lg items-center flex justify-between flex-wrap">
          <div className="mb-4 md:mb-0 w-full md:w-auto text-center md:text-left text-sm md:text-base">
            <p className="text-lg font-semibold text-primary-2 pb-2">Total Harga</p>
            <p className="text-primary-2">Rp {totalPrice.toLocaleString()}</p>
          </div>
          <button className="text-base md:text-2xl text-light-1 p-2 md:p-3 px-10 md:px-20 rounded-xl bg-primary-1 w-full md:w-auto">Buy</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OrderSummary;
