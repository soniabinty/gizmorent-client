import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaUsers } from 'react-icons/fa';
import { MdAttachMoney, MdOutlineBorderColor, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { fetchorders } from '../../../../Redux/Feature/OrderSlice';
import { useDispatch, useSelector } from 'react-redux';

const Stat = () => {
  const dispatch = useDispatch();
  const [gadgets, setGadgets] = useState([]);
  const [users, setUsers] = useState([]);
  const [amount , setAmount] = useState([])
  const { orders } = useSelector((state) => state.order);
  const [totalRevenue, setTotalRevenue] = useState(0);

 
  useEffect(() => {
    dispatch(fetchorders());
  }, [dispatch]);

  useEffect(() => {
    const fetchGadgets = async () => {
      try {
        const res = await axios.get("http://localhost:5000/gadgets");
        setGadgets(res.data);
      } catch (err) {
        console.error("Error fetching gadgets:", err);
      }
    };

    fetchGadgets(); 
  }, []);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("http://localhost:5000/user");
        setUsers(res.data); // assuming your backend returns an array of users
      } catch (err) {
        console.error("Error fetching users:", err);
      }
    };

    fetchUsers(); 
  }, []);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const res = await axios.get("http://localhost:5000/payments");
        console.log('Fetched payments:', res.data);
        setAmount(res.data);
        const total = res.data.reduce((sum, payment) => sum + payment.amount, 0);
        const totalPrice = total / 1000
        const totalAmount = Math.floor(totalPrice);
        setTotalRevenue(totalAmount);
      } catch (err) {
        console.error("Error fetching Payments:", err);
      }
    };
    fetchPayments();
  }, []);
  
  


  return (
    <div className='md:flex gap-8'>
      <div className='flex p-4 gap-6 items-center justify-between shadow-xl rounded-lg'>
        <div>
          <h5 className='text-xl'>Total Products</h5>
          <h3 className='text-3xl font-bold'>{gadgets.length}+</h3>
        </div>
        <div className='bg-blue-400 rounded-full h-16 w-16 justify-center flex items-center'>
          <MdOutlineProductionQuantityLimits className='text-3xl text-white' />
        </div>
      </div>

      <div className='flex p-4 gap-6 items-center justify-between shadow-xl rounded-lg'>
        <div>
          <h5 className='text-xl'>Total Orders</h5>
          <h3 className='text-3xl font-bold'>{orders.length}+</h3>
        </div>
        <div className='bg-purple-500 rounded-full h-16 w-16 justify-center flex items-center'>
          <MdOutlineBorderColor className='text-3xl text-white' />
        </div>
      </div>

      <div className='flex p-4 gap-6 items-center justify-between shadow-xl rounded-lg'>
        <div>
          <h5 className='text-xl'>Total Revenue</h5>
          <h3 className='text-3xl font-bold'>{totalRevenue}K+</h3>
        </div>
        <div className='bg-green-400 rounded-full h-16 w-16 justify-center flex items-center'>
          <MdAttachMoney className='text-3xl text-white' />
        </div>
      </div>

      <div className='flex p-4 gap-6 items-center justify-between shadow-xl rounded-lg'>
        <div>
          <h5 className='text-xl'>Total Users</h5>
          <h3 className='text-3xl font-bold'>{users.length}+</h3>
        </div>
        <div className='bg-red-400 rounded-full h-16 w-16 justify-center flex items-center'>
          <FaUsers className='text-3xl text-white' />
        </div>
      </div>
    </div>
  );
};

export default Stat;
