import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import DashboardSection from "../../../layouts/dashboard_section/Template";
import editIcon from "../../../assets/icons/edit_icon.svg";
import deleteIcon from "../../../assets/icons/delete_icon.svg";
import postEcopedia from "../../../assets/icons/post.svg";
import API from "../../../libs/api";

// Define the Modal within the same file
const Modal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="flex flex-col items-center justify-center p-12 bg-white rounded-lg shadow-lg w-96">
        <button onClick={onClose} className="absolute top-0 right-0 mt-2 mr-2 bg-transparent border-none">
          <img src={closeIcon} alt="Close" />
        </button>
        <h1 className="text-2xl font-bold text-center text-primary-2">Apakah Kamu Yakin akan Menghapus</h1>
        <h1 className="mb-4 text-2xl font-bold text-center text-primary-2">Postingan?</h1>
        <img src={questionPerson} style={{ width: "200px", height: "200px" }} alt="Question" />
        <div className="flex justify-center mt-4">
          <button onClick={onClose} className="px-20 py-2 mr-4 font-semibold text-white rounded bg-primary-2">
            Batal
          </button>
          <button onClick={onConfirm} className="px-20 py-2 font-semibold bg-white border rounded text-primary-2 border-primary-2">
            Hapus
          </button>
        </div>
      </div>
    </div>
  );
};

// Define the StatusOrderDashboard component
const StatusOrderDashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [statusOrders, setStatusOrders] = useState([]);

  useEffect(() => {
    const getStatusOrders = async () => {
      try {
        const response = await API.get('/status-ekspedisi/ekspedisis', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        console.log(response.data);
        if (response.data && Array.isArray(response.data.data)) {
          setStatusOrders(response.data.data);
        } else {
          console.error("Unexpected response data format:", response.data);
          setStatusOrders([]);
        }
      } catch (error) {
        console.error("Error fetching status orders:", error);
        setStatusOrders([]);
      }
    };

    getStatusOrders();
  }, []);

  const openModal = (order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleDelete = async () => {
    try {
      await API.delete(`/status-ekspedisi/${selectedOrder.id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setStatusOrders(statusOrders.filter(order => order.id !== selectedOrder.id));
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error deleting status order:", error);
    }
  };

  return (
    <DashboardSection titleField="Status Order">
      <NavLink to="/dashboard/ecopedia/post">
        <button className="absolute top-0 right-0 mt-24 bg-transparent border-none mr-9">
          <img src={postEcopedia} alt="Dashboard" />
        </button>
      </NavLink>
      <hr className="border-b-2 border-primary-2" />
      <table className="w-full text-left table-fixed">
        <thead>
          <tr className="border-b-2 border-primary-2">
            <th className="p-4 ">Product Name</th>
            <th className="p-4">Username</th>
            <th className="p-4">Total Price</th>
            <th className="p-4">Resi Info</th>
            <th className="p-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {statusOrders.map((orders) => (
            <tr key={orders.id} className="border-b-2 border-primary-2">
              <td className="p-4">
                {orders.order.items.map((item) => (
                  <div key={item.ID} className="overflow-hidden">
                    <p className="text-sm font-semibold align-text-top">
                      {"-"} {item.product.name}
                    </p>
                  </div>
                ))}
              </td>
              <td className="p-4">
                <div className="text-sm font-semibold">
                  {orders.user.Username}
                </div>
              </td>
              <td className="p-4">
                <div className="text-sm font-semibold">
                  {orders.order.total_price.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  })}
                </div>
              </td>
              <td className="p-4">
                <div className="text-sm font-semibold">
                  {orders.resi_info}
                </div>
              </td>
              <td>
                <Link to={`/dashboard/ecopedia/edit/${orders.id}`}>
                  <button className="mt-2 bg-transparent border-none ml-5">
                    <img src={editIcon} alt="Edit" />
                  </button>
                </Link>
                {/* <button className="p-0 bg-transparent border-none" onClick={() => openModal(orders)}>
                  <img src={deleteIcon} alt="Delete" />
                </button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal isOpen={isModalOpen} onClose={closeModal} onConfirm={handleDelete} />
    </DashboardSection>
  );
};

export default StatusOrderDashboard;
