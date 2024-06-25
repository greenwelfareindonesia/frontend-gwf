import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import image_merch from "../../assets/image/image_merch.png";
import back from "../../assets/icons/back.png";
import savemuch3 from "../../assets/image/savemuch3.png";
import savemuch4 from "../../assets/image/savemuch4.png";
import colorGrey from "../../assets/icons/colorGrey.png";
import colorBlue from "../../assets/icons/colorBlue.png";
import colorGreen from "../../assets/icons/colorGreen.png";
import tambahPesanan from "../../assets/icons/tambahPesanan.png"
import kurangPesanan from "../../assets/icons/kurangPesanan.png"
import hapusPesanan from "../../assets/icons/hapusPesanan.png"
import addToCart from "../../assets/icons/addToCart.png"
import whatTheySay from "../../assets/image/whatTheySay.png";
import colorGreyHover from "../../assets/icons/colorGreyHover.png";
import colorBlueHover from "../../assets/icons/colorBlueHover.png";
import colorGreenHover from "../../assets/icons/colorGreenHover.png";

export default function MerchDetail() {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1);
    };

    const [quantity, setQuantity] = useState(0);
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);

    const handleIncrease = () => {
        if (selectedColor && selectedSize) {
            setQuantity(quantity + 1);
        }
    };

    const handleDecrease = () => {
        if (selectedColor && selectedSize && quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    const handleReset = () => {
        if (selectedColor && selectedSize) {
            setQuantity(0);
        }
    };

    const handleColorSelect = (color) => {
        setSelectedColor(color);
    };

    const handleSizeSelect = (size) => {
        setSelectedSize(size);
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="relative">
                <img
                    src={back}
                    alt="Back"
                    className="absolute top-4 left-4 w-20 cursor-pointer"
                    onClick={handleBackClick}
                />
            </div>

            <div className="flex flex-1">
                <div className="flex-1 flex items-center justify-start pl-14">
                    {/* Content for the left side */}
                    <div>
                        <img src={image_merch} alt="Image Merch" className= "w-600 mt-16" />
                        <div className="flex mt-3">
                            <img src={image_merch} alt="Image Merch1" className="w-48 h-36" />
                            <img src={image_merch} alt="Image Merch2" className="w-48 ml-3" />
                            <img src={image_merch} alt="Image Merch2" className="w-48 ml-3" />
                        </div>

                        <p className="mt-14 text-5xl font-bold">SAVE MUCH, SAVE SMART!</p>
                        <div className="flex mt-4 space-x-4">
                            <div className="flex flex-col">
                                <img src={savemuch4} alt="" className="w-44" />
                                <p className="mt-2 text-primary-2">Bundle 1</p>
                                <p className=" text-primary-2 font-bold text-lg">Rp90.000</p>
                            </div>
                            <div className="flex flex-col">
                                <img src={savemuch4} alt="" className="w-44 ml-5" />
                                <p className="mt-2 pl-5">Bundle 2</p>
                                <p className="pl-5 text-primary-2 font-bold text-lg">Rp90.000</p>
                            </div>
                            <div className="flex flex-col">
                                <img src={savemuch3} alt="" className="w-44 ml-5" />
                                <p className="mt-2 pl-5">Bundle 3</p>
                                <p className="pl-5 text-primary-2 font-bold text-lg">Rp90.000</p>
                            </div>
                        </div>

                        <p className="mt-14 text-4xl font-bold">What they say!</p>
                        <img src={whatTheySay} alt=""className=""/>

                    </div>
                </div>
            
                <div className="flex-1 flex items-center justify-start">
                    {/* Content for the right side */}

                    <div className="border-1 border-primary-1 rounded-lg" style={{ width: "600px", height: "850px", marginTop: "-370px"}}>
                        <p className=" pl-5 pt-6 text-primary-2 text-3xl">GWF Tumblr</p>
                        <p className=" pl-5 text-primary-2 text-6xl font-bold">Rp30.000</p> 
                        <p className=" pl-5 pt-6 text-primary-2 text-2xl font-bold">Detail</p>
                        <p className=" pl-5 text-xl text-justify pr-6">
                            Lorem ipsum dolor sit amet consectetur. Semper magna congue pellentesque in sollicitudin at sem.Suspendisse cras id cursus auctor porta. 
                            Integer tempor sagittis nibh tristique eget lorem congue cursus. Sit quam quam quam aliquam velit augue scelerisque.
                        </p>

                        <div>
                            <div className="flex items-center">
                                <p className="pl-5 pt-6 text-primary-2 text-xl font-bold">Colors</p>
                                {(selectedColor === 'grey' || selectedColor === 'blue') && (<p className="pl-56 pt-6 text-red-500 text-lg">in stock</p>)}
                                {selectedColor === 'green' && (<p className="pl-52 pt-6 text-red-500 text-lg">low stock</p>)}
                            </div>
                            <div className="flex mt-3 pl-5">
                                <button
                                    className={`w-28 h-28 flex items-center justify-center rounded-md ${selectedColor === 'grey' ? '' : ''}`}
                                    onClick={() => handleColorSelect('grey')}>
                                    <img src={selectedColor === 'grey' ? colorGreyHover : colorGrey} alt="color grey" className="w-28 h-28" />
                                </button>
                                <button
                                className={`w-28 h-28 flex items-center justify-center rounded-md ml-3 ${selectedColor === 'blue' ? '' : ''}`}
                                onClick={() => handleColorSelect('blue')}>
                                <img src={selectedColor === 'blue' ? colorBlueHover : colorBlue} alt="color blue" className="w-28 h-28" />
                                </button>
                                <button
                                className={`w-28 h-28 flex items-center justify-center rounded-md ml-3 ${selectedColor === 'green' ? '' : ''}`}
                                onClick={() => handleColorSelect('green')}>
                                <img src={selectedColor === 'green' ? colorGreenHover : colorGreen} alt="color green" className="w-28 h-28" />
                                </button>
                            </div>
                        </div>

                    
                        <div>
                            <div className="flex items-center">
                                <p className="pl-5 pt-6 text-primary-2 text-xl font-bold">Size</p>
                                {selectedSize === '650 ml' && (<p className="pl-56 pt-6 text-red-500 text-lg">low stock</p>)}
                                {(selectedSize === '300 ml' || selectedSize === '250 ml') && (<p className="pl-60 pt-6 text-red-500 text-lg">in stock</p>)}
                            </div>
                            <div className="flex mt-3 pl-5">
                                <button
                                    className={`w-28 h-12 bg-gray-200 mr-3 rounded-md ${selectedSize === '650 ml' ? 'font-bold' : ''}`}
                                    onClick={() => handleSizeSelect('650 ml')}>
                                    650 ml
                                </button>
                                <button
                                    className={`w-28 h-12 bg-gray-200 mr-3 rounded-md ${selectedSize === '300 ml' ? 'font-bold' : ''}`}
                                    onClick={() => handleSizeSelect('300 ml')}>
                                    300 ml
                                </button>
                                <button
                                    className={`w-28 h-12 bg-gray-200 rounded-md ${selectedSize === '250 ml' ? 'font-bold' : ''}`}
                                    onClick={() => handleSizeSelect('250 ml')}>
                                    250 ml
                                </button>
                            </div>
                        </div>

                        <div>
                            <p className="pl-5 pt-6 text-primary-2 text-xl font-bold">Quantity</p>
                            <div className="flex items-center mt-3 pl-5">
                                <button
                                    className="flex items-center justify-center"
                                    onClick={handleReset}
                                    disabled={!selectedColor || !selectedSize}>
                                    <img src={hapusPesanan} alt="hapus Pesanan" className="w-10 h-10"/>
                                </button>
                                <button
                                    className="flex items-center justify-center ml-3"
                                    onClick={handleDecrease}
                                    disabled={!selectedColor || !selectedSize}>
                                    <img src={kurangPesanan} alt="kurang Pesanan" className="w-10 h-10" />
                                </button>
                                <p className="mx-4 text-xl font-bold">{quantity}</p>
                                <button
                                    className="flex items-center justify-center"
                                    onClick={handleIncrease}
                                    disabled={!selectedColor || !selectedSize}>
                                    <img src={tambahPesanan} alt="tambah Pesanan" className="w-10 h-10"/>
                                </button>
                                {(selectedColor && selectedSize) && (selectedColor !== 'green' || selectedSize !== '650 ml') && (<p className="pl-10 text-primary-2 text-lg">Stok tersedia: 25</p>)}
                                {(selectedColor === 'green' && selectedSize === '650 ml') && (<p className="pl-10 text-red-500 text-lg">Stok hanya tersisa 5</p>)}
                            </div>
                        </div>

                        <button
                            className="flex items-center justify-center rounded-md mt-10 mr-16 ml-16"
                            disabled={!selectedColor || !selectedSize}>
                            <img src={addToCart} alt="Add to Cart" className="" />
                        </button>
                    
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}