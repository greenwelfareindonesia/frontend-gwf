import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DashboardSection from "../../../layouts/dashboard_section/Template";
import closeIcon from "../../../assets/icons/close_icon.svg";
import image1 from "../../../assets/dashboard-image/Rectangle7.svg";
import API from "../../../libs/api";

const EditStatusEkspedisi = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const { id } = useParams(); // Get the id from the URL parameters

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  // Fetch current product data
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await API.get(`/products/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const product = response.data;
        setName(product.name);
        setPrice(product.price);
        setStock(product.stock);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleBack = () => {
    navigate(-1); // Use navigate with -1 to go back to the previous page
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const payload = {
      name,
      price: parseInt(price),
      stock: parseInt(stock),
    };

    try {
      const response = await API.put(`/products/${id}`, payload, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200 || response.status === 204) {
        console.log("Product updated successfully!");
        navigate("/dashboard/merch/post"); // Navigate to a different page after success
      } else {
        console.error("Error updating product:", response.status, response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <DashboardSection titleField="Edit Post">
      <button onClick={handleBack} className="absolute top-0 right-0 mt-24 bg-transparent border-none mr-9">
        <img src={closeIcon} alt="Close" />
      </button>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 text-xl font-bold text-primary-1">Judul</div>
        <input
          className="w-full px-3 py-2 mb-4 border rounded-md border-primary-2 sm:text-sm"
          placeholder="Tulis judul disini"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="mb-4 text-xl font-bold text-primary-2">Judul Event</div>
        <input
          className="w-full px-3 py-2 mb-4 border rounded-md border-primary-2 focus:outline-none sm:text-sm"
          placeholder="Event 1"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <div className="mb-4 text-xl font-bold text-primary-1">Deskripsi</div>
        <input
          className="w-full px-3 py-2 mb-4 border rounded-md border-primary-2 sm:text-sm"
          placeholder="Tulis deskripsi disini"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
        />

        <div className="flex flex-col flex-1 py-2">
          <p className="my-2 text-xl font-bold text-primary-2">Photo</p>
          <img src={image1} style={{ width: "200px", height: "100px" }} alt="Product"></img>
        </div>

        {/* Container for the buttons */}
        <div className="flex justify-center mt-20">
          <button type="button" onClick={handleBack} className="px-48 py-2 mr-4 font-semibold bg-white border rounded text-primary-2 border-primary-2">Batal</button>
          <button type="submit" className="px-48 py-2 font-semibold text-white rounded bg-primary-2">Simpan</button>
        </div>
      </form>
    </DashboardSection>
  );
};

export default EditStatusEkspedisi;
