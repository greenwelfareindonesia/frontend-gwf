import { useState } from "react";

import { Link } from "react-router-dom";

import DashboardSection from "../../../layouts/dashboard_section/Template";
import { useDeleteGallery, useGetGalleries } from "../../../features/gallery/service";

import editIcon from "../../../assets/icons/edit_icon.svg";
import deleteIcon from "../../../assets/icons/delete_icon.svg";
import postFoto from "../../../assets/icons/postFoto_icon.svg";
import questionPerson from "../../../assets/icons/icon_questionperson.svg";
import closeIcon from "../../../assets/icons/close_icon.svg";

import convertDateValue from "../../../utils/ConvertDate";

const Modal = ({ isOpen, onClose, selectedArticle }) => {
  const { mutate } = useDeleteGallery();

  if (!isOpen) return null;

  const onSubmit = (event) => {
    event.preventDefault();

    mutate(selectedArticle);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="flex flex-col items-center justify-center p-12 bg-white rounded-lg shadow-lg w-700 h-96">
        <button onClick={onClose} className="ml-[575px] bg-transparent border-none">
          <img src={closeIcon} alt="Close" />
        </button>
        <h1 className="text-2xl font-bold text-center text-primary-2">Apakah Kamu Yakin akan Menghapus</h1>
        <h1 className="mb-4 text-2xl font-bold text-center text-primary-2">Postingan?</h1>
        <img src={questionPerson} style={{ width: "200px", height: "200px" }}></img>
        <form onSubmit={onSubmit} className="flex justify-center">
          <button type="button" onClick={onClose} className="px-20 py-2 mr-4 font-semibold text-white rounded bg-primary-2">
            Batal
          </button>
          <button type="submit" className="px-20 py-2 mr-4 font-semibold bg-white border rounded text-primary-2 border-primary-2">
            Hapus
          </button>
        </form>
      </div>
    </div>
  );
};

const GalleryDashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const { data } = useGetGalleries();

  const openModal = (article) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <DashboardSection titleField="Gallery">
      <Link to="/dashboard/gallery/post">
        <button className="absolute top-0 right-0 mt-24 bg-transparent border-none mr-9">
          <img src={postFoto} alt="Dashboard" />
        </button>
      </Link>
      <table className="w-full border-t text-primary-1 border-primary-2">
        <thead>
          <tr className="text-left border-b border-primary-2">
            <th className="p-4 w-60">Photo</th>
            <th className="p-4">Alt Image</th>
            <th className="p-4">Post Date</th>
            <th className="p-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((article) => (
            <tr key={article?.ID} className="border-b border-primary-2">
              <td className="px-4">
                {article?.fileNames?.[0] && <img src={article?.fileNames?.[0]} alt="" className="object-cover w-56 py-2 h-36" />}
              </td>
              <td className="px-4">
                <p className="py-2 mb-2 font-medium">{article?.alt}</p>
              </td>
              <td className="px-4 text-sm">{convertDateValue(article?.createdAt)}</td>
              <td className="px-4">
                <div className="flex items-center gap-2">
                  <Link to={`/dashboard/gallery/edit/${article?.slug}`}>
                    <img src={editIcon} alt="Edit" />
                  </Link>
                  <button className="p-0 bg-transparent border-none" onClick={() => openModal(article?.ID)}>
                    <img src={deleteIcon} alt="Delete" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal isOpen={isModalOpen} onClose={closeModal} selectedArticle={selectedArticle} />
    </DashboardSection>
  );
};

export default GalleryDashboard;
