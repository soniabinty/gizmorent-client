import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrdersByEmail } from "../../Redux/Feature/OrderSlice";

export default function OrderForm() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const orders = useSelector((state) => state.order.orders); // Correct state reference

  useEffect(() => {
    if (user?.email) {
      dispatch(fetchOrdersByEmail(user.email));  // Fetch orders based on the logged-in user's email
    }
  }, [dispatch, user?.email]);

  // Filter the orders by the user's email
  const filteredOrders = orders.filter((order) => order.customer_email === user?.email);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center min-h-screen bg-gray-100 p-8">
        <h2 className="text-2xl font-semibold mb-6">My Orders</h2>

        {filteredOrders.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
            {filteredOrders.map((order) => (
              <div key={order._id} className="bg-white p-4 rounded shadow border border-gray-300">
                <h3 className="text-lg font-bold mb-2">{order.product_name}</h3>
                <img
                  src={order.product_img}
                  alt={order.product_name}
                  className="w-full h-48 object-cover rounded mb-3"
                />
                <p><strong>Amount:</strong> ₹{order.amount}</p>
                <p><strong>Quantity:</strong> {order.quantity}</p>
                <p><strong>Status:</strong> <span className="capitalize">{order.status}</span></p>
                <p><strong>Renting:</strong> {order.renting_time} → {order.returning_time}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">No orders found.</p>
        )}
      </div>
    </div>
  );
}
