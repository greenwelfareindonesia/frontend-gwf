import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DashboardSection from "../../../layouts/dashboard_section/Template";
import closeIcon from "../../../assets/icons/close_icon.svg";
import API from "../../../libs/api";

const EditStatusOrder = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [resiInfo, setResiInfo] = useState("");

  const handleBack = () => {
    navigate(-1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.put(`/status-ekspedisi/${id}`, { resi_info: resiInfo }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      navigate(-1);
    } catch (error) {
      console.error("Error updating status order:", error);
    }
  };

  return (
    <DashboardSection titleField="Edit Resi Info">
      <button onClick={handleBack} className="absolute top-0 right-0 mt-24 bg-transparent border-none mr-9">
        <img src={closeIcon} alt="Close" />
      </button>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 text-xl font-bold text-primary-2">Resi Info</div>
        <input
          type="text"
          className="w-full px-3 py-2 mb-4 border rounded-md border-primary-2 sm:text-sm"
          placeholder="Tulis Resi Disini"
          value={resiInfo}
          onChange={(e) => setResiInfo(e.target.value)}
          required
        />
        <div className="flex justify-center mt-16">
          <button type="submit" className="py-2 font-semibold text-white rounded bg-primary-2 px-96">
            Edit Resi
          </button>
        </div>
      </form>
    </DashboardSection>
  );
};

export default EditStatusOrder;
