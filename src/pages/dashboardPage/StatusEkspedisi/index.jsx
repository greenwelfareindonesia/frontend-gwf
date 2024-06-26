import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom"; // Import useNavigate hook
import DashboardSection from "../../../layouts/dashboard_section/Template";
import editIcon from "../../../assets/icons/edit_icon.svg";
import deleteIcon from "../../../assets/icons/delete_icon.svg";
import postFoto from "../../../assets/icons/postFoto_icon.svg";
import questionPerson from "../../../assets/icons/icon_questionperson.svg";
import closeIcon from "../../../assets/icons/close_icon.svg";
import API from "../../../libs/api";

// Define the Modal within the same file
const Modal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="flex flex-col items-center justify-center p-12 bg-white rounded-lg shadow-lg w-700 h-96">
        <button onClick={onClose} className="ml-[575px] bg-transparent border-none">
          <img src={closeIcon} alt="Close" />
        </button>
        <h1 className="text-2xl font-bold text-center text-primary-2">Apakah Kamu Yakin akan Menghapus</h1>
        <h1 className="mb-4 text-2xl font-bold text-center text-primary-2">Postingan?</h1>
        <img src={questionPerson} style={{ width: "200px", height: "200px" }} alt="Question Person" />
        <div className="flex justify-center">
          <button onClick={onClose} className="px-20 py-2 mr-4 font-semibold text-white rounded bg-primary-2">
            Batal
          </button>
          <button onClick={onConfirm} className="px-20 py-2 mr-4 font-semibold bg-white border rounded text-primary-2 border-primary-2">
            Hapus
          </button>
        </div>
      </div>
    </div>
  );
};

const MerchDashboard = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await API.get("/products/", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setProducts(response.data);
        console.log(response)
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);



  const fetchProducts = async () => {
    try {
      const response = await API.get("products/");
      setProducts(response.data.data); // Sesuaikan dengan struktur respons API Anda
    } catch (error) {
      console.error("Failed to fetch products", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleDelete = async () => {
    try {
      await API.delete(`/products/${selectedProduct.id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setProducts(products.filter((product) => product.id !== selectedProduct.id));
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleEdit = (product) => {
    navigate(`/dashboard/merch/edit/`);
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
            <th className="w-1/3 py-4 text-xs text-left text-primary-1">Product Name</th>
            <th className="w-1/6 py-4 text-xs text-left text-primary-1">Price</th>
            <th className="w-1/12 py-4 text-xs text-left text-primary-1">Created At</th>
            <th className="w-1/12 py-4 text-xs text-left text-primary-1">Updated At</th>
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
              <td className="text-sm font-bold text-primary-1">{new Date(product.created_at).toLocaleDateString()}</td>
              <td className="text-sm font-bold text-primary-1">{new Date(product.updated_at).toLocaleDateString()}</td>
              <td>
              <button className="mt-2 bg-transparent border-none mr-7" onClick={() => handleEdit(product)}>
                  <img src={editIcon} alt="Edit" />
                </button>
                <button className="p-0 bg-transparent border-none" onClick={() => openModal(product)}>
                  <img src={deleteIcon} alt="Delete" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal isOpen={isModalOpen} onClose={closeModal} onConfirm={handleDelete} />
    </DashboardSection>
  );
};

export default MerchDashboard;

