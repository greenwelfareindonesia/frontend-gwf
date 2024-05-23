import React from 'react';
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import foundingLeft from "../../assets/team-image/founding-left.png";
import { delete_icon_cart, plus_icon_cart, minus_icon_cart } from "../../assets/icons";

export default function Cart() {
  const [products, setProducts] = React.useState([
    {
      namaProduk: 'GWF Tumbler',
      img: foundingLeft,
      harga: 20000,
      quantity: 1,
    },
    {
      namaProduk: 'GWF Tumbler',
      img: foundingLeft,
      harga: 15000,
      quantity: 1,
    },
    {
      namaProduk: 'GWF Tumbler',
      img: foundingLeft,
      harga: 30000,
      quantity: 1,
    }
  ]);

  const handleDelete = (index) => {
    const newProducts = products.filter((_, i) => i !== index);
    setProducts(newProducts);
  };

  const handleQuantityChange = (index, delta) => {
    const newProducts = products.map((product, i) => 
      i === index ? { ...product, quantity: Math.max(1, product.quantity + delta) } : product
    );
    setProducts(newProducts);
  };

  const totalItems = products.reduce((total, product) => total + product.quantity, 0);
  const totalPrice = products.reduce((total, product) => total + product.harga * product.quantity, 0);

  return (
    <div className="">
      <Navbar />

      <div className="flex justify-between items-center m-20">
        <h1 className="font-bold text-primary-2 text-4xl">Keranjang Merch</h1>
        <h1 className="font-normal text-primary-2 text-3xl mr-4">{totalItems} items</h1>
      </div>

      <div className="m-20">
        {products.map((product, index) => (
          <div key={index} className="bg-primary-1 bg-opacity-20 border-2 border-primary-2 p-4 mb-4 rounded-lg flex items-center">
            <input type="checkbox" className="appearance-none w-7 h-7 mr-4 border-2 border-primary-2 checked:bg-primary-2 rounded-md" />
            <img src={product.img} alt={product.namaProduk} className="w-32 h-20 mr-4 rounded-md border-1 border-primary-2" />
            <div className="text-primary-2 flex-1">
              <h2 className="font-semibold text-xl">{product.namaProduk}</h2>
              <h2 className="">{product.harga.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</h2>
            </div>
            <div className="flex items-center">
              <button onClick={() => handleDelete(index)} className="ml-2 p-4">
                <img src={delete_icon_cart} alt="Delete Icon" className="w-10 h-10"/>
              </button>
              <button onClick={() => handleQuantityChange(index, -1)} className="ml-2 p-2 mr-3">
                <img src={minus_icon_cart} alt="Minus Icon" className="w-10 h-10"/>
              </button>
              <span className="mx-2 font-normal text-2xl">{product.quantity}</span>
              <button onClick={() => handleQuantityChange(index, 1)} className="ml-2 p-2">
                <img src={plus_icon_cart} alt="Plus Icon" className="w-10 h-10"/>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className='m-20 bg-primary-2 bg-opacity-30 border-2 border-primary-2 p-8 mb-4 rounded-lg items-center flex justify-between'>
        <div>
          <p className="text-2xl font-semibold text-primary-2 pb-2">Ringkasan belanja ({totalItems} item)</p>
          <p className="text-primary-2">{totalPrice.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</p>
        </div>
        <button className='text-3xl text-light-1 p-3 px-20 rounded-xl bg-primary-1'>Beli</button>
      </div>

      <Footer />
    </div>
  );
}
