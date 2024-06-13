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
    title: "GYT #4: Achieving Eco-Leadership..",
    description: "With the rise of environmental issues, Indonesian youths are more proactive in voicing and taking roles for environmental sustainability. Together with 6 universities from various regions in Indonesia, Green Green YOUth Talks #5 has a me.",
    date: "10 November 2024",
    image: image1
  },
  
  {
    id: 2,
    title: "GYT #3: Gerakan Menuju Sekolah y..",
    description: "Green Youth Talks #3 talks about the urgency and importance in implementing environmental friendly schools in this determining era and aims to create a space for young student council leaders to discuss their roles in shifting their...",
    date: "5 Juli 2024",
    image: image2
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
    <DashboardSection titleField="Ecopedia">
      <NavLink to='/addEcopedia'> 
      <button className="absolute top-0 right-0 mt-24 mr-9 bg-transparent border-none">
          <img src={postEcopedia} alt="Dashboard" />
        </button>
      </NavLink>
      <hr className="border-b-2 border-primary-2" />
      <table className="w-full">
        <thead>
          <tr className="border-b-2 border-primary-2">
            <th className="w-1/5 text-left text-xs  text-primary-1 py-4">Postingan</th>
            <th className="w-4/12 text-left text-xs  text-primary-1 py-4">Judul dan Deskripsi</th>
            <th className="w-1/5 text-left text-xs  text-primary-1 py-4">Tanggal Post</th>
            <th className="w-1/5 text-left text-xs  text-primary-1 py-4 px-10">Action</th>
            <th className="w-1/5"></th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article) => (
            <tr key={article.id} className="border-b-2 border-primary-2">
              <td className="px-4">
                {article.image && <img src={article.image} alt="" className="w-56 h-36 object-cover py-2" />}</td>
              <td className="px-4">
                <p className=" text-primary-1 text-lg font-bold mb-2 py-2">{article.title}</p>
                <p className=" text-primary-1 text-sm py-2">{article.description}</p>
              </td>
              <td className=" text-primary-1 text-sm font-bold">{article.date}</td>
              <td className="px-4">
                <NavLink to= {`/editEcopedia`}>
                  <button className="bg-transparent border-none p-0 mr-4" onClick={() => console.log("Edit button clicked")}>
                    <img src={editIcon} alt="Edit" />
                  </button>
                  </NavLink>
                  <button className="bg-transparent border-none p-0" onClick={() => openModal(article)}>
                    <img src={deleteIcon} alt="Delete" />
                  </button>
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