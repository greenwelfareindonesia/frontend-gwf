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
import addToCartDisabled from "../../assets/icons/addToCartDisabled.png"

export default function MerchDetail() {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1);
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

                        <p className="mt-14 text-4xl font-bold">Write a review?</p>
                        <a href="/login" className="mt-2 text-lg text-primary-1 hover:font-bold py-2 rounded inline-block">
                            Login/sign up
                        </a>
                        
                    </div>
                </div>
            
                <div className="flex-1 flex items-center justify-start">
                    {/* Content for the right side */}

                    <div className="border-1 border-primary-1 rounded-lg" style={{ width: "600px", height: "850px", marginTop: "-80px"}}>
                    <p className=" pl-5 pt-6 text-primary-2 text-3xl">GWF Tumblr</p>
                    <p className=" pl-5 text-primary-2 text-6xl font-bold">Rp30.000</p> 
                    <p className=" pl-5 pt-6 text-primary-2 text-2xl font-bold">Detail</p>
                    <p className=" pl-5 text-xl text-justify pr-6">
                        Lorem ipsum dolor sit amet consectetur. Semper magna congue pellentesque in sollicitudin at sem.Suspendisse cras id cursus auctor porta. 
                        Integer tempor sagittis nibh tristique eget lorem congue cursus. Sit quam quam quam aliquam velit augue scelerisque.
                    </p>

                    <div>
                        <p className="pl-5 pt-6 text-primary-2 text-xl font-bold">Colors</p>
                        <div className="flex mt-3 pl-5 ">
                            <button className="w-28 h-28 flex items-center justify-center rounded-md">
                                <img src={colorGrey} alt="color grey" className="w-28 h-28" />
                            </button>
                            <button className="w-28 h-28 flex items-center justify-center rounded-md ml-3">
                                <img src={colorBlue} alt="color blue" className="w-28 h-28" />
                            </button>
                            <button className="w-28 h-28 flex items-center justify-center rounded-md ml-3">
                                <img src={colorGreen} alt="color green" className="w-28 h-28" />
                            </button>
                        </div>
                    </div>
                    
                    <div>
                        <p className="pl-5 pt-6 text-primary-2 text-xl font-bold">Size</p>
                            <div className="flex mt-3 pl-5">
                                <button className="w-28 h-12 bg-gray-200 mr-3 rounded-md">650 ml</button>
                                <button className="w-28 h-12 bg-gray-200 mr-3 rounded-md">300 ml</button>
                                <button className="w-28 h-12 bg-gray-200 rounded-md">250 ml</button>
                            </div>
                    </div>

                    <div>
                        <p className="pl-5 pt-6 text-primary-2 text-xl font-bold">Quantity</p>
                        <div className="flex items-center mt-3 pl-5">
                            <button className="flex items-center justify-center">
                                <img src={hapusPesanan} alt="hapus Pesanan" className="w-10 h-10"/>
                            </button>
                            <button className="flex items-center justify-center ml-3">
                                <img src={kurangPesanan} alt="kurang Pesanan" className="w-10 h-10"/>
                            </button>
                            <p className="mx-4 text-xl font-bold">{0}</p>
                            <button className="flex items-center justify-center ml-3">
                                <img src={tambahPesanan} alt="tambah Pesanan" className="w-10 h-10"/>
                            </button>
                        </div>
                    </div>

                    <button className="flex items-center justify-center rounded-md mt-10 mr-16 ml-16">
                            <img src={addToCartDisabled} alt="color green" className="" />
                    </button>
                    
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
