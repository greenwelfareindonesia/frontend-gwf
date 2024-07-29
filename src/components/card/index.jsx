import React from 'react';
import keranjang_merch from "../../assets/icons/keranjang_merch.png";

export default function Card({ product, onAddToCart }) {
    return (
        <div className="flex flex-col bg-primary-1 bg-opacity-10 border border-primary-1 rounded-2xl p-4 mb-6 sm:mb-8 md:mb-10">
            <img src={product.image} alt={product.productname} className="w-full h-40 sm:h-40 md:h-44 rounded-md border border-primary-2" />
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-base sm:text-lg md:text-xl mt-4">{product.productname}</h2>
                    <h2 className="font-semibold text-lg sm:text-xl md:text-2xl">{product.price}</h2>
                </div>
                <button onClick={onAddToCart} className="mt-4">
                    <img src={keranjang_merch} alt="Tambah Produk" className="w-14 sm:w-16 md:w-20" />
                </button>
            </div>
        </div>
    );
}
