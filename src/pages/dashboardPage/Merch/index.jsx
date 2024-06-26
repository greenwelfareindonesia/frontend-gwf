import { useState, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import DashboardSection from "../../../layouts/dashboard_section/Template";
import editIcon from "../../../assets/icons/edit_icon.svg";
import deleteIcon from "../../../assets/icons/delete_icon.svg";
import postFoto from "../../../assets/icons/post.svg";
import API from "../../../libs/api";

const MerchDashboard = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [selectedProduk, setSelectedProduk] = useState(null); // State for selected payment


  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await API.get("/products/", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setProducts(response.data.data);
      console.log(response.data);
    } catch (error) {
      console.error("Failed to fetch products", error);
    }
  };

  const handleDelete = async (product) => {
    try {
      await API.delete(`/products/${product.id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setProducts(products.filter((p) => p.id !== product.id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleUpdateProduct = async (productID) => {
    try {
      const response = await API.post(
        `/products/${productID}`,
        {
          name: name,
          stock: stock,
          price : price
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log("updated product sucess:", response.data);
      // Optionally update the state to reflect the new status ekspedisi
      setProductUpdate(""); // Clear the input field
      setSelectedProduk(null); // Clear the selected payment
    } catch (error) {
      console.error("Error updated product:", error);
    }
  };

  return (
    <DashboardSection titleField="Merch">
      <NavLink to="/dashboard/merch/post">
        <button className="absolute top-0 right-0 mt-24 bg-transparent border-none mr-9">
          <img src={postFoto} alt="Dashboard" />
        </button>
      </NavLink>
      <hr className="border-b-2 border-primary-2" />
      <table className="w-full">
        <thead>
          <tr className="border-b-2 border-primary-2">
            <th className="w-1/5 px-3 py-4 text-xs text-left text-primary-1">Photos</th>
            <th className="w-1/6 py-4 text-xs text-left text-primary-1">Product Name</th>
            <th className="w-1/6 py-4 text-xs text-left text-primary-1">Price</th>
            <th className="w-1/6 py-4 text-xs text-left text-primary-1">Stock</th>
            <th className="w-1/12 py-4 text-xs text-left text-primary-1">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border-b-2 border-primary-2">
              <td>{product.file_names && <img src={product.file_names[0]} alt="" className="object-cover w-56 py-2 h-36" />}</td>
              <td className="px-2">
                <p className="py-2 mb-2 text-lg font-bold text-primary-1">{product.name}</p>
              </td>
              <td className="text-sm font-bold text-primary-1">{product.price}</td>
              <td className="px-2">
                <p className="py-2 mb-2 text-lg font-bold text-primary-1">{product.stock}</p>
              </td>
              <td>
                <Link to={`/dashboard/merch/edit/${product.id}`}>
                <button className="mt-2 bg-transparent border-none mr-7" >
                  <img src={editIcon} alt="Edit" />
                </button>
                </Link>
                <button className="p-0 bg-transparent border-none" onClick={() => handleDelete(product)}>
                  <img src={deleteIcon} alt="Delete" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </DashboardSection>
  );
};

export default MerchDashboard;
