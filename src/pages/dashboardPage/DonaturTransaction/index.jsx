import { useEffect, useState } from "react";
import DashboardSection from "../../../layouts/dashboard_section/Template";
import { NavLink } from "react-router-dom";
import image1 from "../../../assets/dashboard-image/Rectangle7.svg";
import image2 from "../../../assets/dashboard-image/Rectangle8.svg";
import editIcon from "../../../assets/icons/edit_icon.svg";
import deleteIcon from "../../../assets/icons/delete_icon.svg";
import postFoto from "../../../assets/icons/postFoto_icon.svg";
import questionPerson from "../../../assets/icons/icon_questionperson.svg";
import closeIcon from "../../../assets/icons/close_icon.svg";

// Define the Modal within the same file
const Modal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="flex flex-col items-center justify-center p-12 bg-white rounded-lg shadow-lg w-700 h-96">
        <button
          onClick={onClose}
          className="ml-[575px] bg-transparent border-none"
        >
          <img src={closeIcon} alt="Close" />
        </button>
        <h1 className="text-2xl font-bold text-center text-primary-2">
          Apakah Kamu Yakin akan Menghapus
        </h1>
        <h1 className="mb-4 text-2xl font-bold text-center text-primary-2">
          Postingan?
        </h1>
        <img
          src={questionPerson}
          style={{ width: "200px", height: "200px" }}
        ></img>
        <div className="flex justify-center">
          <button
            onClick={onClose}
            className="px-20 py-2 mr-4 font-semibold text-white rounded bg-primary-2"
          >
            Batal
          </button>
          <button
            onClick={onConfirm}
            className="px-20 py-2 mr-4 font-semibold bg-white border rounded text-primary-2 border-primary-2"
          >
            Hapus
          </button>
        </div>
      </div>
    </div>
  );
};



const DonaturTransactionDashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const response = await fetch(
          "https://servicegwf-production.up.railway.app/api/payments/",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        const data = await response.json();
        if (data.status === 200) {
          setDonations(data.data);
        } else {
          console.error("Failed to fetch donations:", data.message);
          setDonations([]);
        }
      } catch (error) {
        console.error("Error fetching donations:", error);
        setDonations([]);
      }
    };

    fetchDonations();
  }, []);

  const openModal = (article) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleDelete = async () => {
    try {
      // Perform delete request
      console.log("Delete Article:", selectedArticle);
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error deleting article:", error);
    }
  };

  const simpleDateFormat = (dateString) => {
    // Konversi string tanggal menjadi objek Date
    const date = new Date(dateString);
  
    // Format tanggal berdasarkan preferensi
    const formattedDate = date.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
      
    });
  
    return formattedDate;
  };
  

  return (
    <DashboardSection titleField="Donatur Transaction">
      {/* <NavLink to="/dashboard/gallery/post">
        <button
          className="absolute top-0 right-0 mt-24 bg-transparent border-none mr-9"
          onClick={() => console.log("Button clicked")}
        >
          <img src={postFoto} alt="Dashboard" />
        </button>
      </NavLink> */}
      <hr className="border-b-2 border-primary-2" />
      <table className="w-full text-left ">
        <thead>
          <tr className="border-b-2 border-primary-2">
            <th className="p-4 w-80">Name</th>
            <th className="p-4 w-80">Amount</th>
            <th className="p-4 w-80 ">Message</th>
            <th className="p-4 w-80">Status Payment</th>
            <th className="p-4 w-80">Transaction Date</th>
            {/*  <th className="w-1/12 py-4 text-xs text-left text-primary-1">Suka</th>
            <th className="w-1/12 py-4 text-xs text-left text-primary-1">Share</th> */}
            {/* <th className="p-4 ">Action</th> */}
          </tr>
        </thead>
        <tbody>
          {donations.map((donation) => (
            <tr key={donation.ID} className="border-b-2 border-primary-2">
              <td className="text-sm font-bold text-primary-1 p-4">
                {donation.make_donation.name}
              </td>
              <td className="text-sm font-bold text-primary-1 p-4">
                {donation.make_donation.amount}
              </td>
              <td className="text-sm font-bold text-primary-1 p-4">
                {donation.make_donation.message}
              </td>

              <td className="text-sm font-bold text-primary-1 p-4">
                {donation.status_payment}
              </td>
              <td className="text-sm font-bold text-primary-1 p-4">
                {simpleDateFormat(donation.updated_at)}
              </td>
              {/* <td className="text-sm font-bold text-primary-1 p-4">{article.eventTitle}</td>
              <td className="text-sm font-bold text-primary-1">{article.likes}</td>
              <td className="text-sm font-bold text-primary-1">{article.share}</td> */}
              {/* <td className="p-4">
                <NavLink to="/dashboard/gallery/edit">
                  <button
                    className="p-0 mr-4 bg-transparent border-none"
                    onClick={() => console.log("Edit button clicked")}
                  >
                    <img src={editIcon} alt="Edit" />
                  </button>
                </NavLink>
                <button
                  className="p-0 bg-transparent border-none"
                  onClick={() => openModal(article)}
                >
                  <img src={deleteIcon} alt="Delete" />
                </button>
              </td> */}
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={handleDelete}
      />
    </DashboardSection>
  );
};

export default DonaturTransactionDashboard;
