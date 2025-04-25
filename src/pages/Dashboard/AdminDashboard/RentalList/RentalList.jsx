import { useEffect, useState } from "react";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";

export default function RentalList() {
  const axiosPublic = useAxiosPublic();
  const [renters, setRenters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosPublic.get("/renter")
      .then(res => {
        setRenters(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch renters:", err);
        setLoading(false);
      });
  }, [axiosPublic]);

  if (loading) return <p className="p-4">Loading renters...</p>;

  if (renters.length === 0) return <p className="p-4">No renters found.</p>;

  return (
    <div className="py-12">
      <h2 className="text-2xl font-bold mb-4">All Renters</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-xl shadow">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Renter Code</th>
            </tr>
          </thead>
          <tbody>
            {renters.map((renter, idx) => (
              <tr key={idx} className="border-t">
                <td className="p-3">{renter.name}</td>
                <td className="p-3">{renter.email}</td>
                <td className="p-3 font-mono text-blue-600">{renter.renterCode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
