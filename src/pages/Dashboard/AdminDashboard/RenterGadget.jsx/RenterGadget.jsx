import Swal from "sweetalert2";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import useRenterGadget from "../../../../Hooks/useRenterGadget";

const RenterGadget = () => {
  const [renterGadgets, refetch] = useRenterGadget();
  const axiosPubic = useAxiosPublic();
  const handleGadgetApprove = async (gadget) => {
    const updatedGadget = { ...gadget, status: "approved" };
    await axiosPubic.put(`/renter-gadgets/${gadget._id}`, updatedGadget);
    const { _id, ...rest } = updatedGadget;
    const newGadget = { ...rest, gadgetId: _id };
    
    const res = await axiosPubic.post("/gadgets", newGadget);
    console.log(res.data);
    refetch();
  };
  const handleReject = async (gadget) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, reject it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const updatedGadget = { ...gadget, status: "rejected" };
        await axiosPubic.put(`/renter-gadgets/${gadget._id}`, updatedGadget);
        refetch();
        Swal.fire({
          title: "Rejected!",
          text: `${gadget.name} gadget has been rejected.`,
          icon: "success",
        });
      }
    });
  };
  return (
    <div className="pt-14">
      <h3 className="text-3xl">Renter Gadget Approval</h3>
      <div className="overflow-x-auto w-full mt-5">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Image</th>
              <th>Gadget Name</th>
              <th>Company Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {renterGadgets?.map((gadget) => (
              <tr key={gadget._id}>
                <td>
                  <img
                    src={gadget.image}
                    alt={gadget.name}
                    className="w-16 h-16 rounded"
                  />
                </td>
                <td>{gadget.name}</td>
                <td>{gadget?.company}</td>
                <td>${gadget.price}</td>
                <td>{gadget.quantity}</td>
                <td>{gadget.status}</td>
                <td>
                  <button
                    onClick={() => handleGadgetApprove(gadget)}
                    className="btn bg-Primary text-white"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleReject(gadget)}
                    className="btn bg-Secondary text-white ml-2"
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RenterGadget;
