import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const MyGadget = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useSelector((state) => state.auth);
  const [myGadgets, setMyGadgets] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (user && user.email) {
      const fetchGadgets = async () => {
        try {
          const response = await axiosPublic.get("/gadgets");
          const filteredGadgets = response.data.filter(
            (gadget) => gadget.email === user.email
          );
          setMyGadgets(filteredGadgets);
        } catch (error) {
          console.error("Error fetching gadgets:", error);
        }
      };

      fetchGadgets();
    }
  }, [axiosPublic, user]);

  const handleDelete = async (id) => {
    Swal({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        try {
          await axiosPublic.delete(`/gadgets/${id}`);
          setMyGadgets(myGadgets.filter((gadget) => gadget._id !== id));
          Swal("Deleted!", "Your gadget has been deleted.", "success");
        } catch (error) {
          console.error("Error deleting gadget:", error);
        }
      }
    });
  };

  const handleUpdate = (id) => {
    navigate(`/update-gadget/${id}`);
  };

  return (
    <div className="pt-14">
      <h2 className="text-3xl font-semibold">My Gadget</h2>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 mt-6">
        <table className="table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {myGadgets.map((gadget) => (
              <tr key={gadget._id}>
                <td>
                  <img className="w-16 h-16 p-1" src={gadget.image} alt="" />
                </td>
                <td>{gadget.name}</td>
                <td>{gadget.category}</td>
                <td>{gadget.price}</td>
                <td>{gadget.quantity}</td>
                <td>
                  <button
                    className="bg-Primary px-3 py-1 rounded-lg text-white cursor-pointer"
                    onClick={() => handleUpdate(gadget._id)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className="bg-Primary px-3 py-1 rounded-lg text-white cursor-pointer"
                    onClick={() => handleDelete(gadget._id)}
                  >
                    Delete
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

export default MyGadget;