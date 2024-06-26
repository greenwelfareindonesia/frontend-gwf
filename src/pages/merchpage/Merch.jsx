import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import API from "../../libs/api";

import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Card from "../../components/card";
import Container from "../../components/container";

import header_merch from "../../assets/image/header_merch.png";
import tambahkeranjang_merch from "../../assets/icons/tambahkeranjang_merch.png";

export default function Merch() {
  const [cartItemCount, setCartItemCount] = useState(0);
  const [products, setProducts] = useState([]);

  const handleAddToCart = (product) => {
    setCartItemCount(cartItemCount + 1);
    // Tambahkan produk ke keranjang di sini jika diperlukan
  };

  // Fungsi untuk mendapatkan semua produk
  const fetchProducts = async () => {
    try {
      const response = await API.get("products/");
      setProducts(response.data.data); // Sesuaikan dengan struktur respons API Anda
    } catch (error) {
      console.error("Failed to fetch products", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  
  return (
    <>
      <Navbar />
      <img src={header_merch} alt="Header Merch" />
      <Container className="grid grid-cols-4 gap-6 !max-w-screen-xl">
        {products.map((item) => (
          <Card
            key={item.id}
            product={{
              ...item,
              image: item.file_names[0], // Mengambil gambar pertama dari file_names
              productname: item.name,
              price: item.price,
            }}
            onAddToCart={() => handleAddToCart(item)}
          />
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
