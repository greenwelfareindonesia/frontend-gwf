import { useState } from "react";
import DashboardSection from "../../../layouts/dashboard_section/Template";
import questionPerson from "../../../assets/icons/icon_questionperson.svg";
import closeIcon from "../../../assets/icons/close_icon.svg";
import iconMata from "../../../assets/icons/icon_Mata.svg";

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
        <img src={questionPerson} style={{ width: "200px", height: "200px" }}></img>
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
    date: "10 Oktober 2024",
  },
];

const FeedbackPage = () => {
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
            <th className="w-1/5 py-4 text-xs text-left text-primary-1">Email</th>
            <th className="w-4/12 py-4 text-xs text-left text-primary-1">Message</th>
            <th className="w-1/5 py-4 text-xs text-left text-primary-1">Tanggal</th>
            <th className="w-1/5 px-10 py-4 text-xs text-left text-primary-1">Action</th>
            <th className="w-1/5"></th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article) => (
            <tr key={article.id} className="border-b-1 border-primary-2">
              <td className="px-4">
                <p className="py-2 text-sm text-primary-1">{article.email}</p>
              </td>
              <td className="px-4">
                <p className="py-2 text-sm text-primary-1">{article.description}</p>
              </td>
              <td className="text-sm font-bold text-primary-1">{article.date}</td>
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

export default FeedbackPage;
