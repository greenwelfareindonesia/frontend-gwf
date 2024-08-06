import React from 'react';
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import tumbler from "../../assets/merch-image/tumbler.png";
import { delete_icon_cart, plus_icon_cart, minus_icon_cart } from "../../assets/icons";
import { notes } from '../../assets/merch-image';

export default function Cart() {

  const [products, setProducts] = React.useState([
    {
      namaProduk: 'GWF Tumbler 1',
      img: tumbler,
      harga: 20000,
      quantity: 1,
      notes: '',
      sizes: ['650ml', '800ml'],
      colors: ['White', 'Black'],
    },
    {
      namaProduk: 'GWF Tumbler 2',
      img: tumbler,
      harga: 15000,
      quantity: 1,
      notes: '',
      sizes: ['500ml', '750ml'],
      colors: ['White', 'Black'],
    },
    {
      namaProduk: 'GWF Tumbler 3',
      img: tumbler,
      harga: 30000,
      quantity: 1,
      notes: '',
      sizes: ['600ml', '900ml'],
      colors: ['White', 'Black'],
    }
  ]);

  const [checkedItems, setCheckedItems] = React.useState(products.map(() => false));
  const [selectAll, setSelectAll] = React.useState(false);
  const [showNotesInput, setShowNotesInput] = React.useState(products.map(() => false));

  const handleDelete = (index) => {
    const newProducts = products.filter((_, i) => i !== index);
    setProducts(newProducts);
    setCheckedItems(checkedItems.filter((_, i) => i !== index));
    setShowNotesInput(showNotesInput.filter((_, i) => i !== index));
  };

  const handleQuantityChange = (index, delta) => {
    const newProducts = products.map((product, i) => 
      i === index ? { ...product, quantity: Math.max(1, product.quantity + delta) } : product
    );
    setProducts(newProducts);
  };

  const handleCheckboxChange = (index) => {
    const newCheckedItems = checkedItems.map((checked, i) => i === index ? !checked : checked);
    setCheckedItems(newCheckedItems);
    if (newCheckedItems.every(item => item)) {
      setSelectAll(true);
    } else {
      setSelectAll(false);
    }
  };

  const handleSelectAllChange = () => {
    const newCheckedItems = products.map(() => !selectAll);
    setCheckedItems(newCheckedItems);
    setSelectAll(!selectAll);
  };

  const handleToggleNotes = (index) => {
    const newShowNotesInput = showNotesInput.map((show, i) => i === index ? !show : show);
    setShowNotesInput(newShowNotesInput);
  };

  const handleNotesChange = (index, notes) => {
    const newProducts = products.map((product, i) => 
      i === index ? { ...product, notes } : product
    );
    setProducts(newProducts);
  };

  const totalItems = checkedItems.reduce((total, checked, index) => 
    checked ? total + products[index].quantity : total, 0);

  const totalPrice = checkedItems.reduce((total, checked, index) => 
    checked ? total + products[index].harga * products[index].quantity : total, 0);

  return (
    <div>
      <Navbar />

      <h1 className="font-bold text-primary-2 text-4xl mx-20 mt-20 my-10">Your Cart</h1>
      <div className='border-2 border-primary-2 rounded-lg mx-20 px-5'>
        <div className="flex items-center mt-3">
          <input 
            type="checkbox" 
            className="appearance-none w-7 h-7 mr-4 border-2 border-primary-2 checked:bg-primary-2 rounded-md"
            checked={selectAll}
            onChange={handleSelectAllChange}
          />
          <h1 className="text-primary-2 text-xl my-2">Select All ({products.length})</h1>
        </div>
        
        <div className=" mt-2">
          {products.map((product, index) => (
            <div key={index} className="relative bg-primary-1 bg-opacity-20 border-2 border-primary-2 p-4 mb-4 rounded-lg flex items-center">
              <input 
                type="checkbox" 
                className="appearance-none w-7 h-7 mr-4 border-2 border-primary-2 checked:bg-primary-2 rounded-md" 
                checked={checkedItems[index]} 
                onChange={() => handleCheckboxChange(index)}
              />
              <img src={product.img} alt={product.namaProduk} className="w-32 h-20 mr-4 rounded-md" />
              <div className="text-primary-2">
                <h2 className="font-semibold text-xl">{product.namaProduk}</h2>
                <h2 className="">{product.harga.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</h2>
                <div className="grid grid-cols-2">
                  <select className="border-1 mr-2 rounded-md my-2 p-2 w-20 h-5 border-filter-5">
                    {product.sizes.map((size, i) => (
                      <option key={i} value={size}>{size}</option>
                    ))}
                  </select>
                  <select className="border-1 mr-2 rounded-md my-2 p-2 w-20 h-5 border-filter-5">
                    {product.colors.map((color, i) => (
                      <option key={i} value={color}>{color}</option>
                    ))}
                  </select>
                </div>
                {showNotesInput[index] ? (
                  <input
                    type="text"
                    className="border-1 rounded-md p-1 w-full border-filter-5"
                    value={product.notes}
                    onChange={(e) => handleNotesChange(index, e.target.value)}
                    placeholder="Add notes"
                  />
                ) : (
                  <button
                    onClick={() => handleToggleNotes(index)}
                    className="flex text-primary-3"
                  >
                    <img src={notes} className='mr-2'/>
                    Add notes
                  </button>
                )}
              </div>
              <div className="absolute flex items-center right-24">
                <button onClick={() => handleDelete(index)} className="ml-2 p-4">
                  <img src={delete_icon_cart} alt="Delete Icon" className="w-10 h-10"/>
                </button>
                <button onClick={() => handleQuantityChange(index, -1)} className="ml-2 p-2 mr-3">
                  <img src={minus_icon_cart} alt="Minus Icon" className="w-10 h-10"/>
                </button>
                <p className="mx-2 font-semibold text-2xl">{product.quantity}</p>
                <button onClick={() => handleQuantityChange(index, 1)} className="ml-2 p-2">
                  <img src={plus_icon_cart} alt="Plus Icon" className="w-10 h-10"/>
                </button>
              </div>
            </div>
          ))}
        </div>
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
