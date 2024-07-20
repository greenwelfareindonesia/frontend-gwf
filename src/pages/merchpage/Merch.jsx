import { useState } from "react";
import { Link } from "react-router-dom";

import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Card from "../../components/card";
import Container from "../../components/container";

import header_merch from "../../assets/image/header_merch.png";
import image_merch from "../../assets/image/image_merch.png";
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
      image: image_merch,
    },
    {
      id: 2,
      productname: "GWF Totebag",
      price: "Price: 50.000",
      image: image_merch,
    },
    {
      id: 3,
      productname: "Merch 1",
      price: "Price: 100.000",
      image: image_merch,
    },
    {
      id: 4,
      productname: "Merch 2",
      price: "Price: 100.000",
      image: image_merch,
    },
    {
      id: 5,
      productname: "Merch 3",
      price: "Price: 100.000",
      image: image_merch,
    },
    {
      id: 6,
      productname: "Merch 4",
      price: "Price: 100.000",
      image: image_merch,
    },
    {
      id: 7,
      productname: "Merch 5",
      price: "Price: 100.000",
      image: image_merch,
    },
    {
      id: 8,
      productname: "Merch 6",
      price: "Price: 100.000",
      image: image_merch,
    },

    // Add more merch here if needed
  ];

  return (
    <>
      <Navbar />
      <img src={header_merch} alt="Header Merch" />

      <Container className="grid grid-cols-4 gap-6 !max-w-screen-xl">
        {merchs.map((merch) => (
          <Card key={merch.id} product={merch} onAddToCart={handleAddToCart} />
        ))}
      </Container>

      <Container className="relative flex justify-end !max-w-screen-xl">
        <Link className="relative" to="/cart">
          <img src={tambahkeranjang_merch} alt="Keranjang tambah produk" className="w-24" />
          {cartItemCount > 0 && (
            <p className="absolute z-10 flex items-center justify-center w-10 h-10 font-bold rounded-full shadow-lg -top-2 -right-2 bg-light-2">
              {cartItemCount}
            </p>
          )}
        </Link>
      </Container>
      <Footer />
    </>
  );
}
