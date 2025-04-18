import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { RiSendPlane2Line, RiWhatsappFill } from "react-icons/ri";

const WhatsAppWidget = () => {
  const [message, setMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSend = () => {
    if (!message.trim()) return;
    const phoneNumber = "8801912697508";
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, "_blank");
  };
  const handleModalOpen = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div className="fixed bottom-20 right-5 z-50">
      {isModalOpen && (
        <div className="bg-white relative rounded-lg shadow-xl w-80 overflow-hidden ">
          <div className="bg-Primary text-white px-4 py-2 font-semibold">
            GizmoRent
            <span className="text-sm block">
              Typically replies within a minute
            </span>
          </div>
          <div className="p-4 bg-[url('https://i.ibb.co.com/BV2cYycg/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-cover text-sm text-gray-900">
            <div className="bg-white p-2 rounded-lg shadow w-fit">
              <p className="font-bold">GizmoRent Support</p>
              <p>Hi there 👋</p>
              <br />
              <p>How can I help you?</p>
            </div>
          </div>
          <div className="flex items-center border-t px-2 py-2">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none text-sm"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              onClick={handleModalOpen}
              className="top-2 right-4 absolute bg-white flex justify-center items-center w-8 h-8 rounded-full"
            >
              <IoMdClose className="font-bold" />
            </button>
            <button
              onClick={handleSend}
              className="bg-Primary  text-white px-4 py-3 rounded-r-md"
            >
              <RiSendPlane2Line />
            </button>
          </div>
        </div>
      )}
      <div>
        {!isModalOpen && (
          <button
            className="px-6 py-3 bg-white border font-semibold rounded-3xl flex items-center gap-1"
            onClick={handleModalOpen}
          >
            <RiWhatsappFill className="text-green-600 text-2xl" /> Chat with Us
          </button>
        )}
      </div>
    </div>
  );
};

export default WhatsAppWidget;
