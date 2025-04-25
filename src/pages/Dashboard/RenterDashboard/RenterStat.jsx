import {
  MdAttachMoney,
  MdOutlineBorderColor,
  MdOutlineProductionQuantityLimits,
  MdOutlineRateReview,
} from "react-icons/md";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import useUser from "../../../Hooks/useUser";
import { se } from "date-fns/locale/se";

const RenterStat = () => {
  const axiosPublic = useAxiosPublic();
  const [userData] = useUser();
  const [myGadgets, setMyGadgets] = useState([]);
  const [orders, setOrders] = useState([]);
  const [renterEarnings, setRenterEarnings] = useState(0);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    if (userData && userData.email) {
      const fetchGadgets = async () => {
        try {
          const response = await axiosPublic.get("/gadgets");
          const filteredGadgets = response.data.filter(
            (gadget) => gadget.email === userData.email
          );
          setMyGadgets(filteredGadgets);
        } catch (error) {
          console.error("Error fetching gadgets:", error);
        }
      };

      fetchGadgets();
    }
  }, [axiosPublic, userData]);

  useEffect(() => {
    if (!userData?.renterCode) return;

    axiosPublic
      .get(`/renter-orders-summary/${userData.renterCode}`)
      .then((res) => {
        setOrders(res.data.totalOrders); // this is a number
        setRenterEarnings(res.data.renterEarnings);
      })
      .catch((err) => {
        console.error("Failed to fetch renter order summary:", err);
      });
  }, [axiosPublic, userData?.renterCode]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosPublic.get(
          `/renter-orders-summary/${userData.renterCode}`
        );
        setRenterEarnings(response.data.renterEarnings);
      } catch (error) {
        console.error("Error fetching renter earnings:", error);
      }
    };

    fetchData();
  }, [axiosPublic, userData]);

  useEffect(() => {
    const fetchReview = async () => {
      try {
        const response = await axiosPublic.get(
          `/renter-review/${userData.email}`
        );
        setReviews(response.data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };
    fetchReview();
  }, [axiosPublic, userData]);

  return (
    <div className="md:flex gap-8">
      <div className="flex p-4 gap-6 items-center shadow-xl rounded-lg">
        <div>
          <h5 className="text-xl">Total Products</h5>
          <h3 className="text-3xl font-bold">{myGadgets.length}</h3>
        </div>
        <div className="bg-blue-400 rounded-full h-16 w-16 justify-center flex items-center">
          <MdOutlineProductionQuantityLimits className="text-3xl text-white" />
        </div>
      </div>

      <div className="flex p-4 gap-6 items-center shadow-xl rounded-lg">
        <div>
          <h5 className="text-xl">Total Orders</h5>
          <h3 className="text-3xl font-bold">{orders || 0}</h3>
        </div>
        <div className="bg-purple-500 rounded-full h-16 w-16 justify-center flex items-center">
          <MdOutlineBorderColor className="text-3xl text-white" />
        </div>
      </div>

      <div className="flex p-4 gap-6 items-center shadow-xl rounded-lg">
        <div>
          <h5 className="text-xl">Total Revenue</h5>
          <h3 className="text-3xl font-bold">{renterEarnings}</h3>
        </div>
        <div className="bg-green-400 rounded-full h-16 w-16 justify-center flex items-center">
          <MdAttachMoney className="text-3xl text-white" />
        </div>
      </div>

      <div className="flex p-4 gap-6 items-center shadow-xl rounded-lg">
        <div>
          <h5 className="text-xl">Total Review</h5>
          <h3 className="text-3xl font-bold">{reviews.length}</h3>
        </div>
        <div className="bg-red-400 rounded-full h-16 w-16 justify-center flex items-center">
          <MdOutlineRateReview className="text-3xl text-white" />
        </div>
      </div>
    </div>
  );
};

export default RenterStat;
