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
    const isAlreadyWishlisted = wishlistItems.some(
      (item) => item._id === gadget._id
    );

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
      position: "center",
      icon: "success",
      title: "Item added to wishlist",
      showConfirmButton: false,
      timer: 1500,
    });

  
  };

  return (
    <div className="flex flex-grow">
      <div className="bg-white rounded-lg p-2 py-2  grow h-full">
  
        <div className="flex-grow  items-center justify-center relative ">
          <img className="w-50 h-40 mx-auto rounded-lg mt-2" src={gadget.image} alt={gadget.name} />
           <div className="absolute top-2 right-2">
            <FaHeart onClick={handleAddToWishlist} className="text-md text-red-600 mb-4 cursor-pointer" />

          </div>
        </div>

        <div className="px-2 mt-3 flex flex-col flex-grow">
            <h4 className="text-sm font-medium mb-1 flex-grow">{gadget.name}</h4>
            <p className="text-xs">{gadget.category}</p>
          </div>
          <div className="font-bold flex items-center mt-2 px-2 gap-2">
            <FaRegStar className="text-xs" />
            <p className="text-xs">{gadget?.averageRating || 0}</p>
          </div>

      

        <div className="flex justify-between mt-1 grow items-center px-2">
          <h6 className="font-medium text-Primary">
            ${gadget.price}.00/<span className="text-sm font-normal">day</span>
          </h6>

          <Link to={`/gadgetdetail/${gadget._id}`}>
            <button className="bg-Primary py-2 text-xs px-4  rounded-lg text-white font-medium">
              Rent Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
