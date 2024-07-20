import { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../../layouts/dashboard_section/Template";
import Dummy1 from "../../../assets/workshop-image/dummy1.png";
import Dummy2 from "../../../assets/workshop-image/dummy2.png";
import { edit_icon, delete_icon } from "../../../assets/icons";
import Delete from "./delete";

const Index = () => {
  const [showDeletePopOut, setShowDeletePopOut] = useState(false);
  const elemen = [
    {
      judul: 'GYT #4: Achieving Eco-Leadership..',
      deskripsi: 'With the rise of environmental issues, Indonesian youths are more proactive in voicing and taking roles for environmental sustainability. Together with 6 universities from various regions in Indonesia, Green Green YOUth Talks #5 has a me.',
      tanggal_post: '10 November 2024',
      tanggal_event: '10 November 2024 - 14 November 2024',
      img: Dummy1,
      link_event: 'LinkGYT4',
    },
    {
      judul: 'GYT #4: Achieving Eco-Leadership..',
      deskripsi: 'With the rise of environmental issues, Indonesian youths are more proactive in voicing and taking roles for environmental sustainability. Together with 6 universities from various regions in Indonesia, Green Green YOUth Talks #5 has a me.',
      tanggal_post: '10 November 2024',
      tanggal_event: '10 November 2024 - 14 November 2024',
      img: Dummy2,
      link_event: 'LinkGYT4',
    },
  ];

  return (
    <Sidebar titleField={"Events"}>
      <div className="flex absolute top-24 right-9 justify-between items-center mb-4">
        <Link to="/Post2">
          <button className="bg-primary-2 w-36 h-9 rounded-3xl font-semibold text-light-1">Post Events</button>
        </Link>
      </div>
      <table className="w-full table-fixed text-left text-primary-2">
        <thead>
          <tr className="border-b-1 border-t-1 border-primary-2">
            <th className="pt-3.5 pb-3.5 w-60">Workshop</th>
            <th className="pt-3.5 pb-3.5 w-72">Judul dan Deskripsi</th>
            <th className="pt-3.5 pb-3.5 w-44">Tanggal Post</th>
            <th className="pt-3.5 pb-3.5 w-48">Tanggal Event</th>
            <th className="pt-3.5 pb-3.5 w-32">Link Peserta</th>
            <th className="pt-3.5 pb-3.5">Action</th>
          </tr>
        </thead>
        <tbody>
          {elemen.map((elemens, index) => (
            <tr key={index} className="border-b-1 border-primary-2">
              <td className="pt-5 pb-5 w-[217px] h-[111px]">
                <div className="container w-[217px] h-[111px] overflow-hidden">
                  <img 
                    src={elemens.img} 
                    alt="Gambar Workshop" 
                    className="object-cover w-full h-full" 
                  />
                </div>
              </td>
              <td className="pt-3.5 pb-3.5">
                <div className="container w-64 overflow-hidden">
                  <p className="font-semibold text-sm align-text-top">{elemens.judul}</p>
                  <p className="text-xs">{elemens.deskripsi}</p>
                </div>
              </td>
              <td className="pt-3.5 pb-3.5">
                <div className="text-sm font-semibold">{elemens.tanggal_post}</div>
              </td>
              <td className="pt-3.5 pb-3.5">
                <div className="text-sm font-semibold">{elemens.tanggal_event}</div>
              </td>
              <td className="pt-3.5 pb-3.5">
                <div className="text-sm font-semibold">{elemens.link_event}</div>
              </td>
              <td className="pt-3.5 pb-3.5">
                <div className="container overflow-hidden flex gap-2">
                  <Link to="/Edit2">
                    <button>
                      <img src={edit_icon} alt="Edit"/>
                    </button>
                  </Link>
                  <div>
                    <button onClick={() => setShowDeletePopOut(true)}>
                      <img src={delete_icon} alt="Delete" />
                    </button>

                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Delete visible={showDeletePopOut}/>
    </Sidebar>
  );
};

export default Index;
