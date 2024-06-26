import React from "react";
import keranjang_merch from "../../assets/icons/keranjang_merch.png";
import API from "../../libs/api";
import { Link } from "react-router-dom";

export default function index({ product, onAddToCart }) {
  const formattedPrice = product.price.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  const addToCart = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await API.post(
        `/cart/${product.id}`,
        { quantity: 1 },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // Lakukan sesuatu setelah produk berhasil ditambahkan ke keranjang
      console.log("Product added to cart:", response.data);
      onAddToCart(); // Panggil fungsi onAddToCart untuk memperbarui jumlah item di keranjang
    } catch (error) {
      console.error("Failed to add product to cart:", error);
      // Tampilkan pesan kesalahan atau lakukan penanganan kesalahan lainnya
    }
  };

  return (
    <div className="flex flex-col bg-primary-1 bg-opacity-10 border-1 border-primary-1 rounded-2xl p-4 mb-10">
    <Link to={`/merch/${product.id}`}>
    <img
        src={product.image}
        alt={product.productname}
        className="w-full h-44 mb-4 rounded-md border-1 border-primary-2"
      />
      </Link>
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-[16px] h-14">{product.productname}</h2>
          <h2 className="font-semibold text-lg">{formattedPrice}</h2>
        </div>
        <button onClick={addToCart} className="mt-2 p-2">
          <img src={keranjang_merch} alt="Tambah Produk" className="w-20" />
        </button>
      </div>
    </div>
  );
}
