import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import { delete_icon_cart, plus_icon_cart, minus_icon_cart } from "../../assets/icons";
import API from "../../libs/api";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);
  const [orderId, setOrderId] = useState(null);
  

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await API.get("cart/", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setCartItems(response.data.data);
      } catch (error) {
        console.error("Error fetching cart items: ", error);
      }
    };

    fetchCartItems();
  }, []);

  const handleDelete = async (index) => {
    const itemToDelete = cartItems[index];
    try {
      const token = localStorage.getItem("token");
      await API.delete(`cart/delete/${itemToDelete.id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const newCartItems = cartItems.filter((_, i) => i !== index);
      setCartItems(newCartItems);
      setCheckedItems(checkedItems.filter((_, i) => i !== index));
    } catch (error) {
      console.error("Error deleting cart item: ", error);
    }
  };

  const handleQuantityChange = async (index, delta) => {
    const item = cartItems[index];
    const newQuantity = Math.max(1, item.quantity + delta);
    try {
      const token = localStorage.getItem("token");
      console.log(`Updating item ${item.id} to new quantity: ${newQuantity}`);
      await API.put(`cart/${item.id}`, { quantity: newQuantity }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const newCartItems = cartItems.map((item, i) =>
        i === index ? { ...item, quantity: newQuantity } : item
      );
      setCartItems(newCartItems);
      console.log(`Item ${item.id} successfully updated to new quantity: ${newQuantity}`);
    } catch (error) {
      console.error("Error updating cart item quantity: ", error);
    }
  };

  const handleCheckboxChange = (index) => {
    const newCheckedItems = checkedItems.includes(index)
      ? checkedItems.filter((i) => i !== index)
      : [...checkedItems, index];
    setCheckedItems(newCheckedItems);
  };

  const handleCreateOrder = async (e) => {
    e.preventDefault()
    const selectedCartIds = checkedItems.map((index) => cartItems[index].id);
    try {
      const token = localStorage.getItem("token");
      const response = await API.post("order/", { cart_ids: selectedCartIds }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log("Order created: ", response.data);
      const newOrderId = response.data.data.id; // Pastikan ini sesuai dengan struktur respons API Anda
      setOrderId(newOrderId);
      window.location.href = `/order/${newOrderId}`
    } catch (error) {
      console.error("Error creating order: ", error);
    }
  };

  const totalItems = cartItems.reduce((total, item, index) =>
    checkedItems.includes(index) ? total + item.quantity : total, 0);

  const totalPrice = cartItems.reduce((total, item, index) =>
    checkedItems.includes(index) ? total + item.product.price * item.quantity : total, 0);

  return (
    <>
      <Navbar />

      <h1 className="mx-20 mt-20 text-4xl font-bold text-primary-2">Keranjang Merch</h1>
      <h1 className="mx-20 mt-10 text-xl text-primary-2">Pilih semua ({cartItems.length})</h1>

      <div className="mx-20 mt-2">
        {cartItems.map((item, index) => (
          <div key={index} className="flex items-center p-4 mb-4 border-2 rounded-lg bg-primary-1 bg-opacity-20 border-primary-2">
            <input
              type="checkbox"
              className="mr-4 border-2 rounded-md appearance-none w-7 h-7 border-primary-2 checked:bg-primary-2"
              checked={checkedItems.includes(index)}
              onChange={() => handleCheckboxChange(index)}
            />
            <img src={item.product.file_names[0]} alt={item.product.name} className="w-32 h-20 mr-4 rounded-md border-1 border-primary-2" />
            <div className="flex-1 text-primary-2">
              <h2 className="text-xl font-semibold">{item.product.name}</h2>
              <h2 className="">{item.product.price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</h2>
            </div>
            <div className="flex items-center">
              <button onClick={() => handleDelete(index)} className="p-4 ml-2">
                <img src={delete_icon_cart} alt="Delete Icon" className="w-10 h-10" />
              </button>
              <button onClick={() => handleQuantityChange(index, -1)} className="p-2 ml-2 mr-3">
                <img src={minus_icon_cart} alt="Minus Icon" className="w-10 h-10" />
              </button>
              <p className="mx-2 text-2xl font-semibold">{item.quantity}</p>
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
        
        <button onClick={handleCreateOrder} className="p-3 px-20 text-3xl text-light-1 rounded-xl bg-primary-1">
          Beli
        </button>
      </div>

      <Footer />
    </>
  );
}
