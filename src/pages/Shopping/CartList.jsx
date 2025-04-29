import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {
  fetchCart,
  removeFromCart,
  updateCartQuantity,
} from "../../Redux/Feature/cartSlice";
import { setCheckoutProduct } from "../../Redux/Feature/checkoutSlice";

const CartList = () => {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.cart);
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.email) {
      dispatch(fetchCart(user.email));
    }
  }, [dispatch, user?.email]);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This gadget will be removed from your cart.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(removeFromCart(_id));
        Swal.fire(
          "Removed!",
          "The gadget was removed from your cart.",
          "success"
        );
      }
    });
  };

  const handleQuantityChange = (_id, newQty) => {
    if (newQty < 1 || !user?.email) return;

    dispatch(
      updateCartQuantity({
        _id,
        userEmail: user.email,
        quantity: newQty,
      })
    );
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Calculate total price
  const totalPrice = items.reduce((total, item) => {
    let price = item.price;
    if (typeof price === "string") {
      price = price.replace("TK ", "").replace(",", "");
    }
    return total + parseFloat(price) * item.quantity;
  }, 0);

  const handleProceedToCheckout = () => {
    dispatch(setCheckoutProduct(items));
    console.log(items);

    navigate("/checkout");
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-Primary mb-6">YOUR CART</h1>
      <p className="text-Secondary mb-6">PRODUCT({items.length})</p>

      {items.length === 0 ? (
        <p className="text-Secondary">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {items.map((item) => (
            <div
              key={item._id}
              className="flex items-center justify-between p-4 border border-gray-300 rounded-lg"
            >
              <div className="flex items-center space-x-4">
                <div className="hidden md:block">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-Secondary">
                    {item.name}
                  </h2>
                  <p className="text-gray-600">{item.description}</p>
                  <p className="text-gray-600">{item.category}</p>
                  <p className="text-gray-600">${item.price}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() =>
                      handleQuantityChange(item._id, item.quantity - 1)
                    }
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    onChange={(e) =>
                      handleQuantityChange(
                        item._id,
                        Math.max(1, parseInt(e.target.value) || 1)
                      )
                    }
                    className="w-12 text-center"
                  />
                  <button
                    onClick={() =>
                      handleQuantityChange(item._id, item.quantity + 1)
                    }
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => handleDelete(item._id)}
                  className="text-red-500 hover:text-red-700"
                >
                  REMOVE
                </button>
              </div>
            </div>
          ))}
          <div className="text-right">
            <p className="text-xl font-bold text-Secondary">
              Total: {totalPrice ? `USD ${totalPrice.toLocaleString()}` : "USD 0"}
            </p>
            <button
              onClick={handleProceedToCheckout}
              className="mt-4 inline-block bg-Primary text-white px-6 py-2 rounded-lg hover:bg-Primary/90"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartList;
