import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import image_merch from "../../assets/image/image_merch.png";
import back from "../../assets/icons/back.png";
import tambahPesanan from "../../assets/icons/tambahPesanan.png";
import kurangPesanan from "../../assets/icons/kurangPesanan.png";
import hapusPesanan from "../../assets/icons/hapusPesanan.png";
import checkOut from "../../assets/icons/checkOut.png";
import checkOut1 from "../../assets/icons/checkOut1.png";
import addToCart from "../../assets/icons/addToCart.png";
import addToCart1 from "../../assets/icons/addToCart1.png";
import closeTab from "../../assets/icons/closeTab.png";
import tambahkeranjang_merch from "../../assets/icons/tambahkeranjang_merch.png";
import berhasilditambahkan from "../../assets/image/berhasilditambahkan.png";
import sizeS from "../../assets/icons/sizeS.png";
import sizeSHover from "../../assets/icons/sizeSHover.png";
import sizeSOverlay from "../../assets/icons/sizeSOverlay.png";
import sizeSOverlayHover from "../../assets/icons/sizeSOverlayHover.png";
import sizeM from "../../assets/icons/sizeM.png";
import sizeMHover from "../../assets/icons/sizeMHover.png";
import sizeMOverlay from "../../assets/icons/sizeMOverlay.png";
import sizeMOverlayHover from "../../assets/icons/sizeMOverlayHover.png";
import sizeL from "../../assets/icons/sizeL.png";
import sizeLHover from "../../assets/icons/sizeLHover.png";
import sizeLOverlay from "../../assets/icons/sizeLOverlay.png";
import sizeLOverlayHover from "../../assets/icons/sizeLOverlayHover.png";
import sizeXL from "../../assets/icons/sizeXL.png";
import sizeXLHover from "../../assets/icons/sizeXLHover.png";
import sizeXLOverlay from "../../assets/icons/sizeXLOverlay.png";
import sizeXLOverlayHover from "../../assets/icons/sizeXLOverlayHover.png";
import sizeXXL from "../../assets/icons/sizeXXL.png";
import sizeXXLHover from "../../assets/icons/sizeXXLHover.png";
import sizeXXLOverlay from "../../assets/icons/sizeXXLOverlay.png";
import sizeXXLOverlayHover from "../../assets/icons/sizeXXLOverlayHover.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function MerchDetail() {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(0);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);
  const [showOverlay, setShowOverlay] = useState(false);

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleReset = () => {
    setQuantity(0);
  };

  const handleAddToCart = () => {
    if (quantity > 0) {
      setCartItemCount(cartItemCount + quantity);
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 2000); // Hide message after 2 seconds
    }
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
  };

  const handleAddToCartMobileOrShowMessage = () => {
    if (selectedSize) {
      handleAddToCart();
    } else {
      setShowOverlay(true);
    }
  };

  const handleCloseOverlay = () => {
    setShowOverlay(false);
  };

  const handleAddToCartOverlay = () => {
    if (quantity > 0) {
      setCartItemCount(cartItemCount + quantity);
      setShowOverlay(false);
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 4000); // Hide message after 2 seconds
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="relative">
        <img src={back} alt="Back" className="absolute w-20 cursor-pointer top-4 left-4" onClick={handleBackClick} />
      </div>

      <div className="flex flex-col flex-1 px-8 mt-8 sm:flex-row">
        <div className="flex items-start justify-center flex-1 sm:pr-4">
          <div className="block w-full mt-4 sm:hidden">
            <Slider {...sliderSettings} className="w-full">
              <div>
                <img src={image_merch} alt="Image Merch1" className="w-full h-80" />
              </div>
              <div>
                <img src={image_merch} alt="Image Merch2" className="w-full h-80" />
              </div>
              <div>
                <img src={image_merch} alt="Image Merch3" className="w-full h-80" />
              </div>
              <div>
                <img src={image_merch} alt="Image Merch4" className="w-full h-80" />
              </div>
            </Slider>
          </div>
          <div className="hidden sm:block">
            <img src={image_merch} alt="Image Merch" className="w-full mt-16" />
            <div className="flex mt-3">
              <img src={image_merch} alt="Image Merch1" className="w-48 h-36" />
              <img src={image_merch} alt="Image Merch2" className="w-48 ml-3" />
              <img src={image_merch} alt="Image Merch3" className="w-48 ml-3" />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-start flex-1 md:mt-16">
          <div className="p-0 border-0 lg:border lg:border-primary-1 lg:rounded-lg lg:p-6" style={{ maxWidth: "600px", height: "auto" }}>
            <p className="hidden sm:block sm:text-3xl text-primary-2">GWF Tumblr</p>
            <p className="hidden text-6xl font-bold sm:block sm:text-primary-2">Rp30.000</p>
            <p className="hidden text-2xl font-bold sm:block sm:pt-6 text-primary-2">Detail</p>
            <p className="hidden text-xl text-justify sm:block">
              Lorem ipsum dolor sit amet consectetur. Semper magna congue pellentesque in sollicitudin at sem. Suspendisse cras id cursus auctor
              porta. Integer tempor sagittis nibh tristique eget lorem congue cursus. Sit quam quam quam aliquam velit augue scelerisque.
            </p>

            <div>
              <div className="flex items-center">
                <p className="pt-0 pt-6 ml-6 text-xl font-bold lg:ml-0 text-primary-2">Sizes</p>
                {(selectedSize === "sizeS" || selectedSize === "sizeL" || selectedSize === "sizeXXL") && (
                  <p className="pt-6 text-lg text-red-500 pl-60">in stock</p>
                )}
                {(selectedSize === "sizeM" || selectedSize === "sizeXL") && <p className="pt-6 text-lg text-red-500 pl-60">low stock</p>}
              </div>
              <div className="flex mt-3 ml-6 lg:ml-0 ">
                <button
                  className={`w-16 h-16 flex items-center justify-center rounded-md ${selectedSize === "sizeS" ? "" : ""}`}
                  onClick={() => handleSizeSelect("sizeS")}
                >
                  <img src={selectedSize === "sizeS" ? sizeSHover : sizeS} alt="size S" className="w-16 h-16" />
                </button>
                <button
                  className={`w-16 h-16 flex items-center justify-center rounded-md ml-3 ${selectedSize === "sizeM" ? "" : ""}`}
                  onClick={() => handleSizeSelect("sizeM")}
                >
                  <img src={selectedSize === "sizeM" ? sizeMHover : sizeM} alt="size M" className="w-16 h-16" />
                </button>
                <button
                  className={`w-16 h-16 flex items-center justify-center rounded-md ml-3 ${selectedSize === "sizeL" ? "" : ""}`}
                  onClick={() => handleSizeSelect("sizeL")}
                >
                  <img src={selectedSize === "sizeL" ? sizeLHover : sizeL} alt="size L" className="w-16 h-16" />
                </button>
                <button
                  className={`w-16 h-16 flex items-center justify-center rounded-md ml-3 ${selectedSize === "sizeXL" ? "" : ""}`}
                  onClick={() => handleSizeSelect("sizeXL")}
                >
                  <img src={selectedSize === "sizeXL" ? sizeXLHover : sizeXL} alt="size XL" className="w-16 h-16" />
                </button>
                <button
                  className={`w-16 h-16 flex items-center justify-center rounded-md ml-3 ${selectedSize === "sizeXXL" ? "" : ""}`}
                  onClick={() => handleSizeSelect("sizeXXL")}
                >
                  <img src={selectedSize === "sizeXXL" ? sizeXXLHover : sizeXXL} alt="size XXL" className="w-16 h-16" />
                </button>
              </div>
            </div>

            <p className="block mt-6 text-4xl font-bold sm:hidden text-primary-2">Rp30.000</p>
            <p className="block mt-3 sm:hidden text-primary-2">GWF Tumblr</p>
            <p className="block pt-6 text-2xl font-bold sm:hidden text-primary-2">Detail</p>
            <p className="block text-xl text-justify sm:hidden">
              Lorem ipsum dolor sit amet consectetur. Semper magna congue pellentesque in sollicitudin at sem. Suspendisse cras id cursus auctor
              porta. Integer tempor sagittis nibh tristique eget lorem congue cursus. Sit quam quam quam aliquam velit augue scelerisque.
            </p>

            <div>
              <p className="pt-6 text-xl font-bold text-primary-2">Quantity</p>
              <div className="flex items-center mt-3">
                <button className="flex items-center justify-center" onClick={handleReset} disabled={!selectedSize}>
                  <img src={hapusPesanan} alt="Hapus Pesanan" className="w-10 h-10" />
                </button>
                <button className="flex items-center justify-center ml-3" onClick={handleDecrease} disabled={!selectedSize}>
                  <img src={kurangPesanan} alt="Kurang Pesanan" className="w-10 h-10" />
                </button>
                <p className="mx-4 text-xl font-bold">{quantity}</p>
                <button className="flex items-center justify-center" onClick={handleIncrease} disabled={!selectedSize}>
                  <img src={tambahPesanan} alt="Tambah Pesanan" className="w-10 h-10" />
                </button>
                {selectedSize && selectedSize !== "sizeM" && selectedSize !== "sizeXL" && (
                  <p className="pl-10 text-lg text-primary-2">Stok tersedia: 25</p>
                )}
                {(selectedSize === "sizeM" || selectedSize === "sizeXL") && <p className="pl-10 text-lg text-red-500">Stok hanya tersisa 5</p>}
              </div>
            </div>
            <button className="flex-col items-center justify-center hidden mx-auto mt-10 rounded-md lg:block lg:flex" onClick={handleAddToCart}>
              <img src={addToCart} alt="Add To Cart" className="mb-2" />
              <img src={checkOut} alt="Check Out" />
            </button>

            <button
              className="flex flex-row items-center justify-center block mx-auto mt-10 space-x-2 rounded-md lg:hidden"
              onClick={handleAddToCartMobileOrShowMessage}
            >
              <img src={addToCart1} alt="Add To Cart" className="w-52" />
              <img src={checkOut1} alt="Check Out" className="w-52" />
            </button>
          </div>
        </div>
      </div>

      <div className="relative justify-end hidden mt-10 mr-24 lg:block lg:flex">
        <button onClick={handleAddToCart} className="absolute right-4">
          <img src={tambahkeranjang_merch} alt="Keranjang tambah produk" className="w-16 sm:w-24 lg:w-32" />
          {cartItemCount > 0 && (
            <div className="absolute top-0 right-0 z-10 flex items-center justify-center w-6 h-6 text-xs font-bold rounded-full shadow-lg bg-button-1 sm:text-lg sm:w-10 sm:h-10 lg:w-12 lg:h-12">
              {cartItemCount}
            </div>
          )}
        </button>
      </div>

      {showMessage && (
        <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
          <div className="w-64 sm:w-80 lg:w-96">
            <img src={berhasilditambahkan} alt="Berhasil Ditambahkan" />
          </div>
        </div>
      )}

      {showOverlay && (
        <>
          <div className="fixed inset-0 z-40 bg-black bg-opacity-40"></div>
          <div className="fixed bottom-0 left-0 z-50 flex flex-col w-full text-black bg-white h-2/3 rounded-2xl">
            <div className="flex items-center p-6">
              <img src={closeTab} alt="Close Tab" className="w-8 h-8 cursor-pointer" onClick={handleCloseOverlay} />
              <p className="ml-4 text-2xl font-bold text-primary-2">Choose Variants</p>
            </div>
            <div className="flex flex-col ml-8">
              <img src={image_merch} alt="Merch Image" className="w-32 h-24 rounded-md" />
              <p className="mt-4 text-xl font-bold text-primary-2">Size:</p>
              <div className="flex flex-col">
                <div className="flex mt-2">
                  <button onClick={() => handleSizeSelect("sizeS")}>
                    <img src={selectedSize === "sizeS" ? sizeSOverlayHover : sizeSOverlay} alt="Size S" className="mr-2" />
                  </button>
                  <button onClick={() => handleSizeSelect("sizeM")}>
                    <img src={selectedSize === "sizeM" ? sizeMOverlayHover : sizeMOverlay} alt="Size M" className="mr-2" />
                  </button>
                  <button onClick={() => handleSizeSelect("sizeL")}>
                    <img src={selectedSize === "sizeL" ? sizeLOverlayHover : sizeLOverlay} alt="Size L" className="mr-2" />
                  </button>
                </div>
                <div className="flex mt-2">
                  <button onClick={() => handleSizeSelect("sizeXL")}>
                    <img src={selectedSize === "sizeXL" ? sizeXLOverlayHover : sizeXLOverlay} alt="Size XL" className="mr-2" />
                  </button>
                  <button onClick={() => handleSizeSelect("sizeXXL")}>
                    <img src={selectedSize === "sizeXXL" ? sizeXXLOverlayHover : sizeXXLOverlay} alt="Size XXL" className="" />
                  </button>
                </div>
              </div>
              <p className="mt-6 text-xl font-bold text-primary-2">Quantity:</p>
              <div className="flex items-center mt-2">
                <button className="flex items-center justify-center" onClick={handleReset} disabled={!selectedSize}>
                  <img src={hapusPesanan} alt="Hapus Pesanan" className="w-10 h-10" />
                </button>
                <button className="flex items-center justify-center ml-3" onClick={handleDecrease} disabled={!selectedSize}>
                  <img src={kurangPesanan} alt="Kurang Pesanan" className="w-10 h-10" />
                </button>
                <p className="mx-4 text-xl font-bold">{quantity}</p>
                <button className="flex items-center justify-center" onClick={handleIncrease} disabled={!selectedSize}>
                  <img src={tambahPesanan} alt="Tambah Pesanan" className="w-10 h-10" />
                </button>
              </div>
              <div className="flex items-center justify-between mx-auto mt-4 space-x-4">
                <button className="flex items-center justify-center space-x-2 rounded-md" onClick={handleAddToCartOverlay}>
                  <img src={addToCart1} alt="Add To Cart" className="w-48" />
                </button>
                <button className="flex items-center justify-center space-x-2 rounded-md" onClick={handleAddToCartOverlay}>
                  <img src={checkOut1} alt="Check Out" className="w-48" />
                </button>
              </div>
            </div>
        </div>
    </>
)}     
            <Footer />
        </div>
    );
}
