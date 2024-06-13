
import React from 'react';
import keranjang_merch from "../../assets/icons/keranjang_merch.png";

export default function index({ product, onAddToCart }) {
    return (
        <div className="flex flex-col bg-primary-1 bg-opacity-10 border-1 border-primary-1 rounded-2xl p-4 mb-10">
            <img src={product.image} alt={product.productname} className="w-full h-44 mb-4 rounded-md border-1 border-primary-2" />
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-lg h-10">{product.productname}</h2>
                    <h2 className="font-semibold text-xl">{product.price}</h2>
                </div>
                <button onClick={onAddToCart} className="mt-2 p-2">
                    <img src={keranjang_merch} alt="Tambah Produk" className="w-20"/>
                </button>
            </div>
        </div>
    );
}

