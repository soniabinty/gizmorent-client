import { FaClosedCaptioning } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const OfferModal = ({ setIsModalOpen }) => {
  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="flex justify-center items-center p-8 min-h-screen">
      <div className="relative border shadow-2xl  ">
        <img
          className="w-72 "
          src="https://i.ibb.co.com/pvkvR7wP/Blue-Modern-Simple-Ramadan-Sale-Instagram-Post.png"
          alt=""
        />
        <div
          onClick={handleModalClose}
          className="absolute top-2 right-2 bg-white p-2 rounded-full cursor-pointer"
        >
          <IoClose />
        </div>
      </div>
    </div>
  );
};

export default OfferModal;
