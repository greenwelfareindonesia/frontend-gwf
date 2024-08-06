import { useState } from "react";

import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Card from "../../components/card";

import header_merch from "../../assets/image/header_merch.png";
import image_merch from "../../assets/image/image_merch.png";
import tambahkeranjang_merch from "../../assets/icons/tambahkeranjang_merch.png";
import berhasilditambahkan from "../../assets/image/berhasilditambahkan.png";

export default function Merch() {
  const [cartItemCount, setCartItemCount] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  const handleAddToCart = () => {
    setCartItemCount(cartItemCount + 1);
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 2000); // Hide message after 2 seconds
  };

  const merchs = [
    {
      id: 1,
      productname: "GWF Tumblr",
      price: "Rp 30.000",
      image: image_merch,
    },
    {
      id: 2,
      productname: "GWF Totebag",
      price: "Rp 50.000",
      image: image_merch,
    },
    {
      id: 3,
      productname: "Merch 1",
      price: "Rp 100.000",
      image: image_merch,
    },
    {
      id: 4,
      productname: "Merch 2",
      price: "Rp 100.000",
      image: image_merch,
    },
    {
      id: 5,
      productname: "Merch 3",
      price: "Rp 100.000",
      image: image_merch,
    },
    {
      id: 6,
      productname: "Merch 4",
      price: "Rp 100.000",
      image: image_merch,
    },
    {
      id: 7,
      productname: "Merch 5",
      price: "Rp 100.000",
      image: image_merch,
    },
    {
      id: 8,
      productname: "Merch 6",
      price: "Rp 100.000",
      image: image_merch,
    },
    // Add more merch here if needed
  ];

  return (
    <div className="">
      <Navbar />
      <img src={header_merch} alt="Header Merch" className="object-cover w-full h-32 md:h-48 lg:h-64" />
      <div className="grid grid-cols-2 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:p-8 lg:p-20">
        {merchs.map((merch) => (
          <Card key={merch.id} product={merch} onAddToCart={handleAddToCart} />
        ))}
      </div>

      <div className="relative flex justify-end p-4">
        <button onClick={handleAddToCart} className="absolute bottom-8 right-4">
          <img src={tambahkeranjang_merch} alt="Keranjang tambah produk" className="w-16 sm:w-24 lg:w-32" />
          {cartItemCount > 0 && (
            <div className="absolute top-0 right-0 z-10 flex items-center justify-center w-6 h-6 text-xs font-bold rounded-full shadow-lg bg-button-1 sm:text-lg sm:w-10 sm:h-10 lg:w-12 lg:h-12">
              {cartItemCount}
            </div>
          )}
        </button>
      </div>

      {showMessage && (
        <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
          <div className="w-64 sm:w-80 lg:w-96">
            <img src={berhasilditambahkan} alt="Berhasil Ditambahkan" />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
