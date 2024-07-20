import uploadIcon from "../../../assets/icons/cloud-icon/https_/lottiefiles.com/animations/upload-QShqflcTLk.png";

const Add = ({ visible }) => {
  if (!visible) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="p-10 bg-white rounded-lg w-600">
        <img src={uploadIcon} alt="Upload Icon" className="mb-4 ml-40" />
        <p className="ml-20">Tarik lalu lepas file Foto yang ingin diupload</p>
        <button className="h-10 px-4 mt-4 text-white rounded ml-52 bg-primary-2" type="button">
          Pilih Foto
        </button>
      </div>
    </div>
  );
};

export default Add;
