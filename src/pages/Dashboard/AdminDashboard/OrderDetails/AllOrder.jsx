import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchorders } from '../../../../Redux/Feature/OrderSlice';

const AllOrder = () => {
  const dispatch = useDispatch();

  const orderState = useSelector((state) => state.order); 
  const orders = orderState?.orders || [];
  const loading = orderState?.loading;
  const error = orderState?.error;

  useEffect(() => {
    dispatch(fetchorders());
  }, [dispatch]);

  if (loading) return <p>Loading orders...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">All Orders</h2>
      {orders.length > 0 ? (
        <div className="grid grid-cols-1 gap-4">
          {orders.map((order) => (
            <div key={order._id} className="border border-gray-300 items-center flex justify-between p-4 rounded shadow">
             
             <div className='flex '>
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
              <p><strong>Renting Time:<br>
              </br></strong>From: {order.renting_time}
              </p>
              <p>To: {order.returning_time}</p>
                </div>
              
              
              
              </div>
           
              </div>
            
               <div>
             <input type="radio" name="radio-4" className="radio radio-primary" defaultChecked />
<input type="radio" name="radio-4" className="radio radio-primary" />
               </div>
             
            </div>
          ))}
        </div>
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  );
};

export default AllOrder;
