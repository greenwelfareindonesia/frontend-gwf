import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import image_merch from "../../assets/image/image_merch.png";
import back from "../../assets/icons/back.png";
import tambahPesanan from "../../assets/icons/tambahPesanan.png";
import kurangPesanan from "../../assets/icons/kurangPesanan.png";
import hapusPesanan from "../../assets/icons/hapusPesanan.png";
import addToCartDisabled from "../../assets/icons/addToCartDisabled.png";
import API from "../../libs/api";

export default function MerchDetail() {
  const navigate = useNavigate();
  const [cartItemCount, setCartItemCount] = useState(0);
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const handleBackClick = () => {
    navigate(-1);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await API.get(`products/${id}`);
        setProduct(response.data.data); // Assuming response.data.data is the product object
        console.log(response.data);
      } catch (error) {
        console.error("Failed to fetch product", error);
        // Redirect to error page or show error message
        navigate("/error");
      }
    };

    fetchProduct();
  }, [id, navigate]);

  if (!product) {
    return <p>Loading...</p>;
  }

  const addToCart = async (product, quantity) => {
    try {
      const token = localStorage.getItem("token");
      const response = await API.post(
        `/cart/${product.id}`,
        { quantity },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Product added to cart:", response.data);
      setCartItemCount(cartItemCount + quantity);
    //   navigate("/cart");
    } catch (error) {
      console.error("Failed to add product to cart:", error);
    }
  };

  const handleAddToCart = () => {
    addToCart(product, 1); // Add one item to cart
  };

  const handleRemoveFromCart = () => {
    addToCart(product, -1); // Remove one item from cart
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

      <div className="flex justify-between">
        <div className="flex items-center justify-start pl-14 w-[50%]">
          {/* Content for the left side */}
          <div>
            <img src={image_merch} alt="Image Merch" className="w-600 mt-16" />

            <p className="mt-14 text-5xl font-bold">SAVE MUCH, SAVE SMART!</p>
          </div>
        </div>

        <div className="flex items-center justify-between w-[50%]">
          {/* Content for the right side */}
          <div className="border-1 rounded-lg">
            {product && (
              <>
                <p className="pl-5 pt-6 text-primary-2 text-3xl">
                  {product.name}
                </p>
                <p className="pl-5 text-primary-2 text-6xl font-bold">
                  {product.price.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  })}
                </p>
                {/* Other details */}
                <p className="pl-5 pt-6 text-primary-2 text-2xl font-bold">
                  Detail
                </p>
                <p className="pl-5 text-xl text-justify pr-6">
                  {product.description}
                </p>
              </>
            )}

            <div>
              <p className="pl-5 pt-6 text-primary-2 text-xl font-bold">
                Quantity
              </p>
              <div className="flex items-center mt-3 pl-5">
                <button
                  className="flex items-center justify-center"
                  onClick={handleRemoveFromCart}
                >
                  <img
                    src={kurangPesanan}
                    alt="kurang Pesanan"
                    className="w-10 h-10"
                  />
                </button>
                <p className="mx-4 text-xl font-bold">{cartItemCount}</p>
                <button
                  className="flex items-center justify-center"
                  onClick={handleAddToCart}
                >
                  <img
                    src={tambahPesanan}
                    alt="tambah Pesanan"
                    className="w-10 h-10"
                  />
                </button>
                
              </div>
            </div>

<Link to={`/cart`}>

            <button
              className="flex items-center justify-start rounded-md mt-10 ml-5"
              onClick={() => handleAddToCart(product)}
            >
                
              <img
                src={addToCartDisabled}
                alt="color green"
                className="w-[50%]"
              />
            </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
