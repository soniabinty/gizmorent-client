import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrdersByEmail } from "../../Redux/Feature/OrderSlice";
import { useNavigate } from "react-router";

export default function OrderForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const { orders, loading, error } = useSelector((state) => state.order);

  useEffect(() => {
    if (user?.email) {
      console.log("DISPATCHING EMAIL:", user.email);
      dispatch(fetchOrdersByEmail(user.email));
    }
  }, [dispatch, user?.email]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center min-h-screen bg-gray-100 p-8">
        <h2 className="text-2xl font-semibold mb-6">My Orders</h2>

        {loading && (
          <div className="flex justify-center items-center">
            <div className="loader">Loading...</div>
          </div>
        )}

        {error && (
          <div className="text-red-500 mb-4">
            <p>Error: {error}</p>
          </div>
        )}

        {orders.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-7xl">
            {orders.map((order) => (
              <div
                onClick={() => navigate("/tracking-page", { state: { order } })}
                key={order._id}
                className="bg-white p-4 flex justify-between gap-6 items-center rounded shadow border border-gray-300"
              >
                <div>
                  <img
                    src={order.product_img}
                    alt={order.product_name}
                    className="w-full h-48 object-cover rounded mb-3"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">
                    {order.product_name}
                  </h3>
                  <p>
                    <strong>Amount:</strong> ₹{order.amount}
                  </p>
                  <p>
                    <strong>Quantity:</strong> {order.quantity}
                  </p>

                  <p>
                    <strong>
                      Renting:
                      <br />
                    </strong>{" "}
                    {order.renting_time} →<br /> {order.returning_time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          !loading && <p className="text-gray-600">No orders found.</p>
        )}
      </div>
    </div>
  );
}
