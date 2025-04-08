import React from "react";
import { FaHeart, FaRegStar } from "react-icons/fa";
import { LuUsers } from "react-icons/lu";
import { MdOutlineEventNote } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "../Redux/wishlistSlice";



const Card = ({ gadget }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const user = useSelector((state) => state.auth.user); 

  const handleAddToWishlist = () => {
    const isAlreadyWishlisted = wishlistItems.some((item) => item._id === gadget._id);
  
    if (isAlreadyWishlisted) {
      Swal.fire({
        icon: "info",
        title: "Already in Wishlist",
        text: "This item is already in your wishlist!",
      });
      return;
    }
  
    if (!user?.email) {
      Swal.fire({
        icon: "error",
        title: "Login Required",
        text: "Please log in to add items to your wishlist.",
      });
      return;
    }
  
    // ✅ Pass both gadget and email
    dispatch(addToWishlist({ gadget, email: user?.email }));

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Item added to wishlist",
      showConfirmButton: false,
      timer: 1500,
    });
  
    navigate("/wishlist");
  };
  
  return (
    <div className="flex flex-grow">
      <div className="bg-sky-100 rounded-lg p-4 flex flex-col grow h-full">
        <div className="flex justify-between items-center">
          <div>
            <h4 className="text-2xl font-bold">{gadget.name}</h4>
            <p>{gadget.category}</p>
          </div>

          <div>
            <FaHeart onClick={handleAddToWishlist} className="text-xl text-red-600 mb-4 cursor-pointer" />
          </div>
        </div>

        <div className="flex-grow flex items-center justify-center">
          <img className="w-50 mx-auto" src={gadget.image} alt={gadget.name} />
        </div>

        <div className="flex gap-7 my-3">
          <div className="font-bold flex items-center gap-2">
            <FaRegStar className="text-xl" />
            <p>4.8</p>
          </div>

          <div className="font-bold flex items-center gap-2">
            <MdOutlineEventNote className="text-xl" />
            <p>Available</p>
          </div>

          <div className="font-bold flex items-center gap-2">
            <LuUsers className="text-xl" />
            <p>13</p>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <h6 className="font-bold">
            {gadget.price}.00/<span className="text-sm font-normal">day</span>
          </h6>

          <Link to={`/gadgetdetail/${gadget._id}`}>
            <button className="bg-Primary py-2 px-5 rounded-lg text-white font-bold">
              Rent Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
