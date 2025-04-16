import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchorders, updateOrderStatus } from '../../../../Redux/Feature/OrderSlice';

const statusOptions = ['pending', 'ordered', 'on the way', 'delivered', 'way to return', 'returned'];

const statusColors = {
  pending: 'border-yellow-500',
  ordered: 'border-blue-500',
  'on the way': 'border-purple-500',
  delivered: 'border-green-500',
 'way to return': 'border-orange-500',
  returned: 'border-red-500',
};

const selectedStatusColors = {
  pending: 'bg-yellow-500 border-yellow-500',
  ordered: 'bg-blue-500 border-blue-500',
  'on the way': 'bg-purple-500 border-purple-500',
  delivered: 'bg-green-500 border-green-500',
  'way to return': 'border-orange-500 bg-orange-500',
  returned: 'bg-red-500 border-red-500',
};

const AllOrder = () => {
  const dispatch = useDispatch();
  const { orders, loading, error } = useSelector((state) => state.order);
  const [selectedStatuses, setSelectedStatuses] = useState({});

  useEffect(() => {
    dispatch(fetchorders());
  }, [dispatch]);

  const handleStatusChange = (orderId, status) => {
    const currentIndex = statusOptions.indexOf(selectedStatuses[orderId] || orders.find(o => o._id === orderId)?.status);
    const newIndex = statusOptions.indexOf(status);
    if (newIndex < currentIndex) return; 

    setSelectedStatuses((prev) => ({
      ...prev,
      [orderId]: status,
    }));

    dispatch(updateOrderStatus({ orderId, newStatus: status }));
  };

  const getSelectedStatusesUpTo = (status) => {
    const index = statusOptions.indexOf(status);
    return statusOptions.slice(0, index + 1);
  };

  if (loading) return <p>Loading orders...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">All Orders</h2>
      {orders.length > 0 ? (
        <div className="grid grid-cols-1 gap-4">
          {orders.map((order) => {
            const selectedStatus = selectedStatuses[order._id] || order.status;
            const filledStatusList = getSelectedStatusesUpTo(selectedStatus);

            return (
              <div key={order._id} className="border border-gray-300 flex gap-4 flex-col p-4 rounded shadow">
                <div className='flex gap-6'>
                  <img
                    src={order.product_img}
                    alt={order.product_name}
                    className="w-48 h-auto object-cover rounded mb-2"
                  />
                  <div className='flex flex-col justify-between'>
                    <div>
                      <h3 className="text-lg font-bold">{order.product_name}</h3>
                      <p><strong>Customer:</strong> {order.customer_name}</p>
                      <p><strong>Email:</strong> {order.email}</p>
                      <p><strong>Phone:</strong> {order.customer_phone}</p>
                      <p><strong>Address:</strong> {order.customer_address}</p>
                      <p><strong>Amount:</strong> ${order.amount}</p>
                      <p><strong>Quantity:</strong> {order.quantity}</p>
                      <p><strong>Renting Time:</strong> <br />From: {order.renting_time}</p>
                      <p>To: {order.returning_time}</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 flex-wrap justify-center">
                  {statusOptions.map((status) => {
                    const isFilled = filledStatusList.includes(status);
                    return (
                      <label key={status} className="flex items-center gap-1 cursor-pointer">
                        <input
                          type="radio"
                          name={`status-${order._id}`}
                          checked={selectedStatus === status}
                          onChange={() => handleStatusChange(order._id, status)}
                          className={`radio w-6 h-6 rounded-full border-2 transition-colors duration-300
                            ${isFilled ? selectedStatusColors[status] : 'bg-white border-gray-400'}`}
                        />
                        <span className="capitalize">{status}</span>
                      </label>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  );
};

export default AllOrder;
