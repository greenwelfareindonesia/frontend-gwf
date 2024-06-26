import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DashboardSection from "../../../layouts/dashboard_section/Template";
import closeIcon from "../../../assets/icons/close_icon.svg";
import API from "../../../libs/api";

const PostResiInfo = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const { paymentID, userID } = useParams(); // Get paymentID and userID from URL parameters
  const [resiInfo, setResiInfo] = useState(""); // State to hold the resi info

  const handleBack = () => {
    navigate(-1); // Use navigate with -1 to go back to the previous page
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await API.post(`/status-ekspedisi/${paymentID}/${userID}`, {
        resi_info: resiInfo,
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (response.status === 200) {
        alert("Resi info has been posted successfully!");
        navigate(-1); // Navigate back after successful post
      } else {
        alert("Failed to post resi info. Please try again.");
      }
    } catch (error) {
      console.error("Error posting resi info:", error);
      alert("An error occurred while posting resi info. Please try again.");
    }
  };

  return (
    <DashboardSection titleField="Add Resi Info">
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
        {/* Container for the button */}
        <div className="flex justify-center mt-16">
          <button type="submit" className="py-2 font-semibold text-white rounded bg-primary-2 px-96">
            Post Resi
          </button>
        </div>
      </form>
    </DashboardSection>
  );
};

export default PostResiInfo;
