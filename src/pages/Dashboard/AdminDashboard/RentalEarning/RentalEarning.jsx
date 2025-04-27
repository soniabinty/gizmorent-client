import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchorders } from "../../../../Redux/Feature/OrderSlice";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";

export default function RentalEarning() {
  const dispatch = useDispatch();
  const axiosPublic = useAxiosPublic();
  const { orders } = useSelector((state) => state.order);
  const [summaries, setSummaries] = useState([]);
  const [filteredSummaries, setFilteredSummaries] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState("");
  const [minEarnings, setMinEarnings] = useState("");

  // Fetch orders
  useEffect(() => {
    dispatch(fetchorders());
  }, [dispatch]);


  useEffect(() => {
    const fetchSummaries = async () => {
      if (!orders || orders.length === 0) return;

      const renterIds = [...new Set(orders.map((order) => order.renterId))];

      try {
        const summaryPromises = renterIds.map((id) =>
          axiosPublic.get(`/renter-orders-summary/${id}`).then((res) => ({
            renterId: id,
            ...res.data,
          }))
        );

        const allSummaries = await Promise.all(summaryPromises);
        setSummaries(allSummaries);
        setFilteredSummaries(allSummaries);
      } catch (err) {
        console.error("Error fetching summaries:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSummaries();
  }, [orders, axiosPublic]);

  // Apply filters
  useEffect(() => {
    let filtered = summaries;

    if (searchTerm) {
      filtered = filtered.filter((item) =>
        item?.renterId?.toLowerCase?.().includes(searchTerm.toLowerCase())
      );
    }

    if (minEarnings) {
      filtered = filtered.filter(
        (item) => Number(item.renterEarnings) >= Number(minEarnings)
      );
    }

    setFilteredSummaries(filtered);
  }, [searchTerm, minEarnings, summaries]);

  if (loading) return <p className="p-4">Loading renter earnings...</p>;
  if (!filteredSummaries.length)
    return <p className="p-4">No earnings data available.</p>;

  return (
    <div className="py-12">
      <h2 className="text-2xl font-bold mb-4">Rental Earnings</h2>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by renter ID..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 rounded-md w-full md:w-1/3"
        />
        <input
          type="number"
          placeholder="Min Earnings"
          value={minEarnings}
          onChange={(e) => setMinEarnings(e.target.value)}
          className="border p-2 rounded-md w-full md:w-1/3"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-xl shadow">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-3">Renter ID</th>
              <th className="p-3">Total Orders</th>
              <th className="p-3">Total Revenue</th>
              <th className="p-3">Renter Earnings (90%)</th>
              <th className="p-3">Admin Commission (10%)</th>
            </tr>
          </thead>
          <tbody>
            {filteredSummaries.map((summary) => (
              <tr key={summary.renterId} className="border-t">
                <td className="p-3">{summary.renterId}</td>
                <td className="p-3">{summary.totalOrders}</td>
                <td className="p-3">${summary.totalRevenue}</td>
                <td className="p-3 text-green-600">${summary.renterEarnings}</td>
                <td className="p-3 text-red-500">${summary.adminCommission}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
