import { useDeleteEvent } from "../../../features/events/service";
import closeIcon from "../../../assets/icons/close_icon.svg";
import questionPerson from "../../../assets/icons/icon_questionperson.svg";

const Modal = ({ visible, closeDeleteModal, selectedEvent }) => {
  const { mutate } = useDeleteEvent();

  if (!visible) return null;

  const onSubmit = (event) => {
    event.preventDefault();

    mutate(selectedEvent);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative flex flex-col items-center justify-center p-12 bg-white rounded-lg shadow-lg w-700 h-96">
        <button onClick={closeDeleteModal} className="absolute bg-transparent border-none top-2 right-2">
          <img src={closeIcon} alt="Close" className="w-6 h-6" />
        </button>
        <h1 className="text-2xl font-bold text-center text-primary-2">Apakah Kamu Yakin akan Menghapus</h1>
        <h1 className="mb-4 text-2xl font-bold text-center text-primary-2">Event</h1>
        <img src={questionPerson} alt="Question" className="w-48 h-48 mx-auto" />
        <form onSubmit={onSubmit} className="flex justify-center mt-4">
          <button type="button" onClick={closeDeleteModal} className="px-20 py-2 mr-4 font-semibold text-white rounded bg-primary-2">
            Batal
          </button>
          <button type="submit" className="px-20 py-2 font-semibold bg-white border rounded text-primary-2 border-primary-2">
            Hapus
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
