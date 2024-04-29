import React from "react";
import DashboardSection from "../../../layouts/dashboard_section/Template";
import { NavLink } from "react-router-dom";
import image1 from "../../../assets/dashboard-image/Rectangle7.svg";
import image2 from "../../../assets/dashboard-image/Rectangle8.svg";
import editIcon from "../../../assets/icons/edit_icon.svg";
import deleteIcon from "../../../assets/icons/delete_icon.svg";
import postFoto from "../../../assets/icons/postFoto_icon.svg";

const articles = [
  {
    id: 1,
    title: "GYT #4: Achieving Eco-Leadership..",
    description: "With the rise of environmental issues, Indonesian youths are more proactive in voicing and taking roles for environmental sustainability. Together with 6 universities from various regions in Indonesia, Green Green YOUth Talks #5 has a me.",
    date: "10 November 2024",
    image: image1,
    eventTitle: "Event 1",
    likes: "30", 
    share: "5",
  },
  
  {
    id: 2,
    title: "GYT #3: Gerakan Menuju Sekolah y..",
    description: "Green Youth Talks #3 talks about the urgency and importance in implementing environmental friendly schools in this determining era and aims to create a space for young student council leaders to discuss their roles in shifting their...",
    date: "5 Juli 2024",
    image: image2,
    eventTitle: "Event 2",
    likes: "30",
    share: "14",
  },
  // Add more articles here
];

const GalleryPage = () => {
  return (
    <DashboardSection titleField="Gallery">
      <NavLink to="/addGallery"> 
      <button className="absolute top-0 right-0 mt-24 mr-9 bg-transparent border-none" onClick={() => console.log("Button clicked")}>
          <img src={postFoto} alt="Dashboard" />
        </button>
        </NavLink>
      <hr className="border-b-2 border-primary-2" />
      <table className="w-full">
        <thead>
          <tr className="border-b-2 border-primary-2">
            <th className="w-1/5 text-left text-xs  text-primary-1 py-4 px-3">Foto</th>
            <th className="w-1/3 text-left text-xs  text-primary-1 py-4">Judul dan Deskripsi</th>
            <th className="w-1/6 text-left text-xs  text-primary-1 py-4">Tanggal Post</th>
            <th className="w-1/12 text-left text-xs  text-primary-1 py-4">Judul Event</th>
            <th className="w-1/12 text-left text-xs  text-primary-1 py-4">Suka</th>
            <th className="w-1/12 text-left text-xs  text-primary-1 py-4">Share</th>
            <th className="w-4/5 text-left text-xs  text-primary-1 py-4 px-10">Action</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article) => (
            <tr key={article.id} className="border-b-2 border-primary-2">
              <td className="">
                {article.image && <img src={article.image} alt="" className="w-56 h-36 object-cover py-2" />}</td>
              <td className="px-2">
                <p className=" text-primary-1 text-lg font-bold mb-2 py-2">{article.title}</p>
                <p className=" text-primary-1 text-sm py-2">{article.description}</p>
              </td>
              <td className=" text-primary-1 text-sm font-bold">{article.date}</td>
              <td className = "text-primary-1 text-sm font-bold">{article.eventTitle}</td>
              <td className = "text-primary-1 text-sm font-bold">{article.likes}</td>
              <td className = "text-primary-1 text-sm font-bold">{article.share}</td>
              <td className="">
                <NavLink to={`/editGallery`}>
                  <button className="bg-transparent border-none p-0 mr-4" onClick={() => console.log("Edit button clicked")}>
                    <img src={editIcon} alt="Edit" />
                  </button>
                  <button className="bg-transparent border-none p-0" onClick={() => console.log("Delete button clicked")}>
                    <img src={deleteIcon} alt="Delete" />
                  </button>
                </NavLink>
              </td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </DashboardSection>
  );
};

export default GalleryPage;