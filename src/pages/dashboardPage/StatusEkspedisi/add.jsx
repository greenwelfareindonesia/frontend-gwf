import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardSection from "../../../layouts/dashboard_section/Template";
import cameraIcon from "../../../assets/icons/camera_icon.svg";
import closeIcon from "../../../assets/icons/close_icon.svg";
import API from "../../../libs/api";

const PostStatusEkspedisi = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [photos, setPhotos] = useState([]);
  const [photoMessage, setPhotoMessage] = useState("");

  const handleBack = () => {
    navigate(-1); // Use navigate with -1 to go back to the previous page
  };

  const handleFileChange = (event) => {
    const newFiles = Array.from(event.target.files);
    setPhotos((prevPhotos) => {
      const updatedPhotos = [...prevPhotos, ...newFiles];
      setPhotoMessage(
        updatedPhotos.length === 1 ? "One file added" : `${updatedPhotos.length} files added`
      );
      return updatedPhotos;
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("stock", stock);

    photos.forEach((photo, index) => {
      formData.append(`file${index + 1}`, photo);
    });

    try {
      const response = await API.post("/products/", formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200 || response.status === 201) {
        // Handle successful response
        console.log("Post created successfully!");
        navigate("/dashboard/merch/post"); // Navigate to a different page after success
      } else {
        // Handle error response
        console.error("Error creating post:", response.status, response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <DashboardSection titleField="Add Post">
      <button onClick={handleBack} className="absolute top-0 right-0 mt-24 bg-transparent border-none mr-9">
        <img src={closeIcon} alt="Close" />
      </button>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 text-xl font-bold text-primary-2">Name</div>
        <input
          className="w-full px-3 py-2 mb-4 border rounded-md border-primary-2 focus:outline-none sm:text-sm"
          placeholder="Add Your Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="mb-4 text-xl font-bold text-primary-2">Price</div>
        <input
          className="w-full px-3 py-2 mb-4 border rounded-md border-primary-2 focus:outline-none sm:text-sm"
          placeholder="10.000"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <div className="mb-4 text-xl font-bold text-primary-2">Stock</div>
        <input
          className="w-full px-3 py-2 mb-4 border rounded-md border-primary-2 focus:outline-none sm:text-sm"
          placeholder="Product Stock"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
        />
        <div className="flex flex-col flex-1 py-2">
          <p className="my-2 text-xl font-bold text-primary-2">Add Photo</p>
          <label
            htmlFor="photo-upload"
            className="flex flex-col items-center justify-center p-4 my-2 rounded-md cursor-pointer w-60 border-1 border-primary-2 h-36"
          >
            <div className="text-center">
              <img src={cameraIcon} className="duration-75 hover:scale-150" alt="Upload" />
            </div>
            <input
              id="photo-upload"
              type="file"
              className="hidden"
              multiple
              onChange={handleFileChange}
            />
          </label>
          {photoMessage && (
            <div className="text-center mt-2 text-primary-2">
              {photoMessage}
            </div>
          )}
        </div>

        {/* Container for the button */}
        <div className="flex justify-center mt-10">
          <button type="submit" className="py-2 font-semibold text-white rounded bg-primary-2 px-96">
            Post Event
          </button>
        </div>
      </form>
    </DashboardSection>
  );
};

export default PostStatusEkspedisi;
