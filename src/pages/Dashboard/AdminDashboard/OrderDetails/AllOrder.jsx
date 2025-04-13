import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchorders, updateOrderStatus } from '../../../../Redux/Feature/OrderSlice';

const statusOptions = ['pending', 'ordered', 'on the way', 'delivered', 'returned'];

const statusColors = {
  pending: 'border-gray-400',
  ordered: 'border-blue-400',
  'on the way': 'border-yellow-400',
  delivered: 'border-green-400',
  returned: 'border-red-400',
};

const selectedStatusColors = {
  pending: 'bg-gray-500',
  ordered: 'bg-blue-500',
  'on the way': 'bg-yellow-500',
  delivered: 'bg-green-500',
  returned: 'bg-red-500',
};

const AllOrder = () => {
  const dispatch = useDispatch();
  const { orders, loading, error } = useSelector((state) => state.order);
  const [selectedStatuses, setSelectedStatuses] = useState({});

  useEffect(() => {
    dispatch(fetchorders());
  }, [dispatch]);

  const handleStatusChange = (orderId, status) => {
    setSelectedStatuses((prev) => ({
      ...prev,
      [orderId]: status,
    }));

    dispatch(updateOrderStatus({ orderId, newStatus: status }));
  };

  // Function to return all statuses up to the selected one (inclusive)
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
            const selectedStatusList = getSelectedStatusesUpTo(selectedStatus);

            // Ensure 'pending' is always included in the selected list
            const finalSelectedStatusList = selectedStatusList.includes('pending') 
              ? selectedStatusList 
              : ['pending', ...selectedStatusList];

            return (
              <div key={order._id} className="border border-gray-300 flex gap-4 flex-col p-4 rounded shadow">
                <div className='flex gap-6'>
                  <img
                    src={order.product_img}
                    alt={order.product_name}
                    className="w-50 object-cover rounded mb-2"
                  />
                  <div className='flex justify-between'>
                    <div>
                      <h3 className="text-lg font-bold">{order.product_name}</h3>
                      <p><strong>Customer:</strong> {order.customer_name}</p>
                      <p><strong>Email:</strong> {order.customer_email}</p>
                      <p><strong>Phone:</strong> {order.customer_phone}</p>
                      <p><strong>Address:</strong> {order.customer_address}</p>
                      <p><strong>Amount:</strong> {order.amount}</p>
                      <p><strong>Quantity:</strong> {order.quantity}</p>
                      <p><strong>Renting Time:<br /></strong>From: {order.renting_time}</p>
                      <p>To: {order.returning_time}</p>
                    </div>
                  </div>
                </div>

                <div className="flex  gap-3 flex-wrap">
                  <div className="radio-status-wrapper text-start">
                    {statusOptions.map((status) => {
                      const isSelected = finalSelectedStatusList.includes(status);
                      const borderClass = statusColors[status]; // Default border color
                      const selectedClass = isSelected ? selectedStatusColors[status] : ''; // Background when selected

                      return (
                        <label
                          key={status}
                          className={`radio-status flex items-center gap-2 p-2 rounded-full cursor-pointer ${borderClass}`}
                        >
                          <input
                            type="radio"
                            name={`status-${order._id}`}
                            checked={selectedStatus === status}
                            onChange={() => handleStatusChange(order._id, status)}
                            className={`form-radio h-5 w-5 ${selectedClass}`}
                          />
                          <span className="capitalize text-base">{status}</span>
                        </label>
                      );
                    })}
                  </div>
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
