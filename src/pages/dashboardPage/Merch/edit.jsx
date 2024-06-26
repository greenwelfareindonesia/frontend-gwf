import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DashboardSection from "../../../layouts/dashboard_section/Template";
import closeIcon from "../../../assets/icons/close_icon.svg";
import API from "../../../libs/api";
import cameraIcon from "../../../assets/icons/camera_icon.svg";


const EditMerch = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [photo, setPhoto] = useState("");

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
        if (product.file_names && product.file_names.length > 0) {
          setPhoto(product.file_names[0]); // Set the first image as the photo
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleBack = () => {
    navigate(-1);
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
        navigate("/dashboard/merch"); // Navigate to a different page after success
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
        <div className="mb-4 text-xl font-bold text-primary-1">Name</div>
        <input
          className="w-full px-3 py-2 mb-4 border rounded-md border-primary-2 sm:text-sm"
          placeholder="Your Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="mb-4 text-xl font-bold text-primary-2">Price</div>
        <input
          className="w-full px-3 py-2 mb-4 border rounded-md border-primary-2 focus:outline-none sm:text-sm"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <div className="mb-4 text-xl font-bold text-primary-1">Stock</div>
        <input
          className="w-full px-3 py-2 mb-4 border rounded-md border-primary-2 sm:text-sm"
          placeholder="Stock"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
        />

        <div className="flex flex-col flex-1 py-2">
          <p className="my-2 text-xl font-bold text-primary-2">Photo</p>
          {photo ? (
            <img src={photo} style={{ width: "200px", height: "100px" }} alt="Product" />
          ) : (
            <p>Photos cannot be updated</p>
          )}
        </div>

        <div className="flex justify-center mt-20">
          <button type="button" onClick={handleBack} className="px-48 py-2 mr-4 font-semibold bg-white border rounded text-primary-2 border-primary-2">Batal</button>
          <button type="submit" className="px-48 py-2 font-semibold text-white rounded bg-primary-2">Simpan</button>
        </div>
      </form>
    </DashboardSection>
  );
};

export default EditMerch;
