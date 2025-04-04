import React, { useEffect } from "react";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { fetchWishlist, removeFromWishlist } from "../../Redux/wishlistSlice";


const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.items);

  useEffect(() => {
    dispatch(fetchWishlist());
  }, [dispatch]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This will remove the item from your wishlist but keep it available in all gadgets.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(removeFromWishlist(id));
        Swal.fire("Removed!", "The gadget was removed from your wishlist.", "success");
      }
    });
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-Primary mb-6">YOUR WISHLIST</h1>
      <p className="text-Secondary mb-6">PRODUCT(S)</p>

      {status === "loading" && <p>Loading wishlist...</p>}
      {status === "failed" && <p>Error: {error}</p>}
      {wishlistItems.length === 0 && status === "succeeded" ? (
        <p className="text-Secondary">Your wishlist is empty.</p>
      ) : (
        <div className="space-y-6">
          {wishlistItems.map((item) => (
            <div
              key={item._id}
              className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div>
                  <h2 className="text-xl font-semibold text-Secondary">{item.name}</h2>
                  <p className="text-gray-600">{item.category}</p>
                  <p className="text-gray-600">${item.price}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button className="text-Accent hover:text-Primary">MOVE TO CART</button>
                <button onClick={() => handleDelete(item._id)} className="text-red-500 hover:text-red-700">
                  REMOVE
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
