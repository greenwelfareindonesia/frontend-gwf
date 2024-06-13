import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import foundingLeft from "../../assets/team-image/founding-left.png";
import { delete_icon_cart, plus_icon_cart, minus_icon_cart } from "../../assets/icons";

export default function Cart() {
  const [products, setProducts] = React.useState([
    {
      namaProduk: "GWF Tumbler 1",
      img: foundingLeft,
      harga: 20000,
      quantity: 1,
    },
    {
      namaProduk: "GWF Tumbler 2",
      img: foundingLeft,
      harga: 15000,
      quantity: 1,
    },
    {
      namaProduk: "GWF Tumbler 3",
      img: foundingLeft,
      harga: 30000,
      quantity: 1,
    },
  ]);

  const [checkedItems, setCheckedItems] = React.useState(products.map(() => false));

  const handleDelete = (index) => {
    const newProducts = products.filter((_, i) => i !== index);
    setProducts(newProducts);
    setCheckedItems(checkedItems.filter((_, i) => i !== index));
  };

  const handleQuantityChange = (index, delta) => {
    const newProducts = products.map((product, i) => (i === index ? { ...product, quantity: Math.max(1, product.quantity + delta) } : product));
    setProducts(newProducts);
  };

  const handleCheckboxChange = (index) => {
    const newCheckedItems = checkedItems.map((checked, i) => (i === index ? !checked : checked));
    setCheckedItems(newCheckedItems);
  };

  const totalItems = checkedItems.reduce((total, checked, index) => (checked ? total + products[index].quantity : total), 0);

  const totalPrice = checkedItems.reduce((total, checked, index) => (checked ? total + products[index].harga * products[index].quantity : total), 0);

  return (
    <>
      <Navbar />

      <h1 className="mx-20 mt-20 text-4xl font-bold text-primary-2">Keranjang Merch</h1>
      <h1 className="mx-20 mt-10 text-xl text-primary-2">Pilih semua ({products.length})</h1>

      <div className="mx-20 mt-2">
        {products.map((product, index) => (
          <div key={index} className="flex items-center p-4 mb-4 border-2 rounded-lg bg-primary-1 bg-opacity-20 border-primary-2">
            <input
              type="checkbox"
              className="mr-4 border-2 rounded-md appearance-none w-7 h-7 border-primary-2 checked:bg-primary-2"
              checked={checkedItems[index]}
              onChange={() => handleCheckboxChange(index)}
            />
            <img src={product.img} alt={product.namaProduk} className="w-32 h-20 mr-4 rounded-md border-1 border-primary-2" />
            <div className="flex-1 text-primary-2">
              <h2 className="text-xl font-semibold">{product.namaProduk}</h2>
              <h2 className="">{product.harga.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</h2>
            </div>
            <div className="flex items-center">
              <button onClick={() => handleDelete(index)} className="p-4 ml-2">
                <img src={delete_icon_cart} alt="Delete Icon" className="w-10 h-10" />
              </button>
              <button onClick={() => handleQuantityChange(index, -1)} className="p-2 ml-2 mr-3">
                <img src={minus_icon_cart} alt="Minus Icon" className="w-10 h-10" />
              </button>
              <p className="mx-2 text-2xl font-semibold">{product.quantity}</p>
              <button onClick={() => handleQuantityChange(index, 1)} className="p-2 ml-2">
                <img src={plus_icon_cart} alt="Plus Icon" className="w-10 h-10" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between p-8 m-20 mb-4 border-2 rounded-lg bg-primary-2 bg-opacity-30 border-primary-2">
        <div>
          <p className="pb-2 text-2xl font-semibold text-primary-2">Ringkasan belanja ({totalItems} item)</p>
          <p className="text-primary-2">{totalPrice.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</p>
        </div>
        <button className="p-3 px-20 text-3xl text-light-1 rounded-xl bg-primary-1">Beli</button>
      </div>

      <Footer />
    </>
  );
}
