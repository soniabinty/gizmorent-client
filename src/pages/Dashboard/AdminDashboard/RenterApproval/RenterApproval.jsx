import React, { useState } from "react";
import Swal from "sweetalert2";


const BuyerHome = () => {

  const [modalData, setModalData] = useState(null);

 
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Approve Renter</h1>


   

      {/* Submissions Table */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 px-4 py-2">#</th>
              <th className="border border-gray-300 px-4 py-2">Company Name</th>
              <th className="border border-gray-300 px-4 py-2">Renter Name</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
         
              <tr
              
                className="hover:bg-gray-100 transition duration-200"
              >
                <td className="border border-gray-300 px-4 py-2 text-center">
                <h2>1</h2>
                </td>
              
                <td className="border border-gray-300 px-4 py-2">  <h2>renovo</h2></td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                <h2>John Smith</h2>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <div className="flex flex-wrap gap-2 justify-center">
                 
                    {/* <button
                      onClick={() => updateStatus(task, "approve")}
                      className={`btn-sm max-sm:btn-xs text-white px-4 py-1 rounded ${
                        task.status === "approve"
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-green-500 hover:bg-green-600"
                      }`}
                      disabled={task.status === "approve"}
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => updateStatus(task, "rejected")}
                      className={`btn-sm max-sm:btn-xs text-white px-4 py-1 rounded ${
                        task.status === "rejected"
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-red-500 hover:bg-red-600"
                      }`}
                      disabled={task.status === "rejected"}
                    >
                      Reject
                    </button> */}
                  </div>
                </td>
              </tr>
          
          </tbody>
        </table>
      </div>

      {/* Modal for Submission Details */}
      {modalData && (
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center"
          onClick={() => setModalData(null)}
        >
          <div
            className="bg-white rounded-lg p-6 w-11/12 md:w-1/2"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-bold mb-4">Submission Details</h3>
            <p><strong>Worker Name:</strong> {modalData.worker_name}</p>
            <p><strong>Task Title:</strong> {modalData.title}</p>
            <p><strong>Amount:</strong> ${modalData.amount}</p>
            <p><strong>Details:</strong> {modalData.submission_detail || "No details provided"}</p>
            <button
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              onClick={() => setModalData(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BuyerHome;