import { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../../layouts/dashboard_section/Template";
import Dummy1 from "../../../assets/workshop-image/dummy1.png";
import Dummy2 from "../../../assets/workshop-image/dummy2.png";
import { edit_icon, delete_icon } from "../../../assets/icons";
import Delete from "./delete";

const Workshop = () => {
  const [showDeletePopOut, setShowDeletePopOut] = useState(false);
  const elements = [
    {
      judul: "GYT #4: Achieving Eco-Leadership..",
      deskripsi:
        "With the rise of environmental issues, Indonesian youths are more proactive in voicing and taking roles for environmental sustainability. Together with 6 universities from various regions in Indonesia, Green Green YOUth Talks #5 has a me.",
      tanggal_post: "10 November 2024",
      tanggal_event: "10 November 2024 - 14 November 2024",
      img: Dummy1,
      link_event: "LinkGYT4",
    },
    {
      judul: "GYT #4: Achieving Eco-Leadership..",
      deskripsi:
        "With the rise of environmental issues, Indonesian youths are more proactive in voicing and taking roles for environmental sustainability. Together with 6 universities from various regions in Indonesia, Green Green YOUth Talks #5 has a me.",
      tanggal_post: "10 November 2024",
      tanggal_event: "10 November 2024 - 14 November 2024",
      img: Dummy2,
      link_event: "LinkGYT4",
    },
  ];

  return (
    <Sidebar titleField={"Workshop"}>
      <div className="absolute flex items-center justify-between mb-4 top-24 right-9">
        <Link to="/dashboard/workshop/post">
          <button className="font-semibold bg-primary-2 w-36 h-9 rounded-3xl text-light-1">Post Workshop</button>
        </Link>
      </div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-left table-fixed text-primary-2">
          <thead>
            <tr className="border-b-1 border-t-1 border-primary-2">
              <th className="p-4">Workshop</th>
              <th className="p-4 w-80">Judul dan Deskripsi</th>
              <th className="p-4">Tanggal Post</th>
              <th className="p-4">Tanggal Event</th>
              <th className="p-4">Link Peserta</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {elements.map((element, index) => (
              <tr key={index} className="border-b-1 border-primary-2">
                <td className="py-4">
                  <div className="overflow-hidden">
                    <img src={element.img} alt="Gambar Workshop" className="object-cover w-auto h-auto max-w-full" />
                  </div>
                </td>
                <td className="p-4">
                  <div className="overflow-hidden">
                    <p className="text-sm font-semibold align-text-top">{element.judul}</p>
                    <p className="text-xs">{element.deskripsi}</p>
                  </div>
                </td>
                <td className="p-4">
                  <div className="text-sm font-semibold">{element.tanggal_post}</div>
                </td>
                <td className="p-4">
                  <div className="text-sm font-semibold">{element.tanggal_event}</div>
                </td>
                <td className="p-4">
                  <div className="text-sm font-semibold">{element.link_event}</div>
                </td>
                <td className="p-4">
                  <div className="container flex gap-2 overflow-hidden">
                    <Link to="/dashboard/workshop/edit">
                      <button>
                        <img src={edit_icon} alt="Edit" />
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
      </div>
      <Delete visible={showDeletePopOut} setVisible={setShowDeletePopOut} />
    </Sidebar>
  );
};

export default Workshop;
