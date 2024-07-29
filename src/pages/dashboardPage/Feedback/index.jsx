import React, {useState} from "react";
import DashboardSection from "../../../layouts/dashboard_section/Template";
import { NavLink } from "react-router-dom";
import image1 from "../../../assets/dashboard-image/Rectangle7.svg";
import image2 from "../../../assets/dashboard-image/Rectangle8.svg";
import editIcon from "../../../assets/icons/edit_icon.svg";
import deleteIcon from "../../../assets/icons/delete_icon.svg";
import postEcopedia from "../../../assets/icons/postEcopedia_icon.svg";
import questionPerson from "../../../assets/icons/icon_questionperson.svg";
import closeIcon from "../../../assets/icons/close_icon.svg";
import iconMata from "../../../assets/icons/icon_Mata.svg";

// Define the Modal within the same file
const Modal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-12 rounded-lg shadow-lg w-700 h-96 flex flex-col justify-center items-center">
      <button onClick= {onClose} className="ml-[575px] bg-transparent border-none">
      <img src={closeIcon} alt="Close" />
       </button>
        <h1 className="text-center text-primary-2 text-2xl font-bold">Apakah Kamu Yakin akan Menghapus</h1>
        <h1 className="text-center text-primary-2 text-2xl font-bold mb-4">Postingan?</h1>
        <img src={questionPerson} style={{ width: "200px", height: "200px" }}></img>
        <div className="flex justify-center">
          <button onClick={onClose} className="bg-primary-2 text-white font-semibold py-2 px-20 rounded mr-4">Batal</button>
          <button onClick={onConfirm} className="mr-4 bg-white text-primary-2 font-semibold py-2 px-20 rounded border border-primary-2">Hapus</button>
        </div> 
      </div>
    </div>
  );
};

const articles = [
  {
    id: 1,
    email: "Raihan@gmail.com",
    description: "Saya akan bekerjasama apakah ada kontak lebih lanjut?",
    date: "10 November 2024",
  },
  
  {
    id: 2,
    email: "jipeng@gmail.com",
    description: "Saya akan bekerjasama apakah ada kontak lebih lanjut?",
    date: "10 Oktober 2024"
  },
  // Add more articles here
];

const EcopediaPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const openModal = (article) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleDelete = () => {
    console.log("Delete Article:", selectedArticle);
    // Handle the deletion logic here
    setIsModalOpen(false);
  };

  return (
    <DashboardSection titleField="Feedback">
      <hr className="border-b-3 border-primary-2" />
      <table className="w-full">
        <thead>
          <tr className="border-b-1 border-primary-2">
            <th className="w-1/5 text-left text-xs  text-primary-1 py-4">Email</th>
            <th className="w-4/12 text-left text-xs  text-primary-1 py-4">Message</th>
            <th className="w-1/5 text-left text-xs  text-primary-1 py-4">Tanggal</th>
            <th className="w-1/5 text-left text-xs  text-primary-1 py-4 px-10">Action</th>
            <th className="w-1/5"></th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article) => (
            <tr key={article.id} className="border-b-1 border-primary-2">
              <td className="px-4">
                <p className=" text-primary-1 text-sm py-2">{article.email}</p>
                </td>
              <td className="px-4">
                <p className=" text-primary-1 text-sm py-2">{article.description}</p>
              </td>
              <td className=" text-primary-1 text-sm font-bold">{article.date}</td>
              <td className="px-4">
                    <img src={iconMata} alt="Edit" />
              </td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal isOpen={isModalOpen} onClose={closeModal} onConfirm={handleDelete} />
    </DashboardSection>
  );
};

export default EcopediaPage;