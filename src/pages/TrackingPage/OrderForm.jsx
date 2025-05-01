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
    <div className="px-6 min-h-screen bg-gray-100">
      <div className=" bg-gray-100 p-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">My Orders</h2>

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
          <div className="overflow-x-auto rounded-lg border border-gray-300 shadow-sm  p-4">
            <table className="table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Renting Time</th>
                  <th>Returning Time</th>

                  <th>Update</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order._id}>
                    <td>
                      <img
                        className="w-16 h-16 p-1"
                        src={order.product_img}
                        alt=""
                      />
                    </td>
                    <td>{order.product_name}</td>
                    <td>{order.amount}</td>
                    <td>{new Date(order.renting_time).toLocaleDateString()}</td>
                    <td>
                      {new Date(order.returning_time).toLocaleDateString()}
                    </td>
                    <td>
                      <button
                        className="bg-Primary px-3 py-1 rounded-lg text-white cursor-pointer"
                        onClick={() =>
                          navigate("/tracking-page", { state: { order } })
                        }
                      >
                        Track
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          !loading && <p className="text-gray-600">No orders found.</p>
        )}
      </div>
    </div>
  );
}
