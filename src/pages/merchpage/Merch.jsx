import React, { useState } from 'react';
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Card from "../../components/card/index";
import header_merch from "../../assets/image/header_merch.png";
import image_merch from "../../assets/image/image_merch.png";
import keranjang_merch from "../../assets/icons/keranjang_merch.png";
import tambahkeranjang_merch from "../../assets/icons/tambahkeranjang_merch.png";

export default function Merch() {
    const [cartItemCount, setCartItemCount] = useState(0);

    const handleAddToCart = () => {
        setCartItemCount(cartItemCount + 1);
    };

    const merchs = [
        {
            id: 1,
            productname: "GWF Tumblr",
            price: "Price: 30.000",
            image: image_merch
        },
        {
            id: 2,
            productname: "GWF Totebag",
            price: "Price: 50.000",
            image: image_merch
        },
        {
            id: 3,
            productname: "Merch 1",
            price: "Price: 100.000",
            image: image_merch
        },
        {
          id: 4,
          productname: "Merch 2",
          price: "Price: 100.000",
          image: image_merch
        },
        {
          id: 5,
          productname: "Merch 3",
          price: "Price: 100.000",
          image: image_merch
        },
        {
          id: 6,
          productname: "Merch 4",
          price: "Price: 100.000",
          image: image_merch
        },
        {
          id: 7,
          productname: "Merch 5",
          price: "Price: 100.000",
          image: image_merch
        },
        {
          id: 8,
          productname: "Merch 6",
          price: "Price: 100.000",
          image: image_merch
        },

        // Add more merch here if needed
    ];

    return (
        <div className="">
            <Navbar />
            <img src={header_merch} alt="Header Merch" />
            
            <div className="grid grid-cols-4 gap-6 m-20">
                {merchs.map((merch) => (
                    <Card key={merch.id} product={merch} onAddToCart={handleAddToCart} />
                ))}
            </div>

            <div className="flex justify-end mr-24 relative">
                <button onClick="" className="ml-2 p-4 relative">
                    <img src={tambahkeranjang_merch} alt="Keranjang tambah produk" className="w-32"/>
                    {cartItemCount > 0 && (
                        <div className="absolute top-5 right-0 bg-button-1 text-lg font-bold rounded-full w-12 h-12 flex items-center justify-center shadow-lg z-10">
                            {cartItemCount}
                        </div>
                    )}
                </button>
            </div>
            <Footer />
        </div>
    );
}
