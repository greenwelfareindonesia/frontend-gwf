import uploadIcon from "../../../assets/icons/delete-icon-2/lottiefiles.com/animations/question-ESUC7y16es.png";

const Delete = ({ visible, setVisible }) => {
  if (!visible) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="p-10 bg-white rounded-lg w-00">
        <h1 className="pb-5 text-3xl font-semibold text-primary-2">Apakah Kamu Yakin akan Menghapus Postingan?</h1>
        <img src={uploadIcon} alt="Upload Icon" className="mx-auto mb-4" />
        <div className="flex justify-center gap-4">
          <button className="px-4 py-2 text-xs text-white rounded-md bg-primary-2" onClick={() => setVisible(false)}>
            Batal
          </button>
          <button className="px-4 py-2 text-xs bg-white border rounded-md text-primary-2 border-primary-2">Hapus</button>
        </div>
      </div>
    </div>
  );
};

export default Delete;