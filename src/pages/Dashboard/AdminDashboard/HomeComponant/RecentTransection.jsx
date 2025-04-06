
import { TbAdjustmentsSearch } from "react-icons/tb";
const Transection = [
  {
    id: 1,
   company: "Rentio GanZ”",
   amount: "$2399.00",
    status: "Pending",
    statusColor: "badge-warning",
  },
  {
    id: 2,
   company: "Gadget Ultra",
   amount: "$879.00",
    status: "Pending",
    statusColor: "badge-warning",
  },
  {
    id: 3,
  company: " Pro Max",
   amount: "$1869.00",
    status: "Success",
    statusColor: "badge-success",
  },
  {
    id: 4,
    company: "Maxixo Gadget",
   amount: "$1699.00",
   status: "Pending",
   statusColor: "badge-warning",
  },
  {
    id: 5,
    company: "IPhoneWala",
   amount: "$240.00",
    status: "Success",
    statusColor: "badge-success",
  },
];

const RecentTransection = () => {
  return (
    <div className="p-4 border border-gray-300 bg-white shadow-lg rounded-lg">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Recent Transections</h2>
       
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* Table Head */}
          <thead>
            <tr className="text-gray-500 text-sm">
              <th>Company</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody>
            {Transection.map((transection) => (
              <tr key={transection.id} className="hover:bg-gray-100">
               
                <td className="font-semibold">{transection.company}</td>
                <td className="font-semibold">{transection.amount}</td>
                <td>
                  <span className={`badge ${transection.statusColor} px-3 py-1 text-sm font-semibold`}>
                    {transection.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentTransection;
