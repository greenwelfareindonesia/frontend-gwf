import { useState } from "react";
import { Link } from "react-router-dom";

import DashboardSection from "../../../layouts/dashboard_section/Template";

import editIcon from "../../../assets/icons/edit_icon.svg";
import deleteIcon from "../../../assets/icons/delete_icon.svg";
import questionPerson from "../../../assets/icons/icon_questionperson.svg";
import closeIcon from "../../../assets/icons/close_icon.svg";

import convertDateValue from "../../../utils/ConvertDate";
import { useDeleteStudy, useGetStudy } from "../../../features/study/service";

// Define the Modal within the same file
const Modal = ({ isOpen, onClose, selectedArticle }) => {
  const { mutate } = useDeleteStudy();

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

const StudyDashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const { data } = useGetStudy();

  const openModal = (article) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <DashboardSection titleField="Study">
      <Link to="/dashboard/report/post">
        <button className="absolute top-0 right-0 px-5 py-1.5 mt-24 mr-4 rounded-3xl bg-primary-2 text-light-1">Post Study</button>
      </Link>
      <table className="w-full border-t border-primary-2 text-primary-1">
        <thead>
          <tr className="text-left border-b border-primary-2">
            <th className="p-4 w-60">Study Image</th>
            <th className="p-4">Title</th>
            <th className="p-4">Post Date</th>
            <th className="p-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((study) => (
            <tr key={study?.ID} className="border-b border-primary-2">
              <td className="px-4 py-2 w-96">{study?.Images && <img src={study?.Images?.[0]?.FileName} alt={study?.Title} className="object-cover w-full h-auto max-w-full" />}</td>
              <td className="px-4 w-96">
                <p className="text-lg font-bold line-clamp-2">{study?.Title}</p>
              </td>
              <td className="px-4 text-sm font-bold">{convertDateValue(study?.created_at)}</td>
              <td className="px-4">
                <div className="flex items-center gap-2">
                  <Link to={`/dashboard/report/edit/${study?.Slug}`}>
                    <img src={editIcon} alt="Edit" />
                  </Link>
                  <button className="p-0 bg-transparent border-none" onClick={() => openModal(study?.Slug)}>
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

export default StudyDashboard;
