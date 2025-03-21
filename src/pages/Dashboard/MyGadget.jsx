const MyGadget = () => {
  const myGadgets = [
    {
      id: 1,
      name: "iPhone 15 Pro",
      email: "buyer1@example.com",
      phone: "9876543210",
      category: "Smartphone",
      price: 1199.99,
      quantity: 10,
      image: "https://i.ibb.co.com/C5mbRDz0/Adobe-Express-file-11.png",
    },
    {
      id: 2,
      name: "Samsung Galaxy S24 Ultra",
      email: "buyer2@example.com",
      phone: "8765432109",
      category: "Smartphone",
      price: 1299.99,
      quantity: 7,
      image: "https://i.ibb.co.com/fdxdcJyh/Adobe-Express-file-8.png",
    },
    {
      id: 3,
      name: "Sony WH-1000XM5",
      email: "buyer3@example.com",
      phone: "7654321098",
      category: "Headphones",
      price: 399.99,
      quantity: 15,
      image: "https://i.ibb.co.com/jvbVYsWs/Adobe-Express-file-6.png",
    },
    {
      id: 4,
      name: "Dell XPS 15",
      email: "buyer4@example.com",
      phone: "6543210987",
      category: "Laptop",
      price: 1899.99,
      quantity: 5,
      image: "https://i.ibb.co.com/ymq1PSjj/Adobe-Express-file-7.png",
    },
  ];

  return (
    <div>
      <h2 className="text-3xl font-semibold">My Gadget</h2>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 mt-6">
        <table className="table">
          {/* head */}
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
              <tr key={gadget.id}>
                <td>
                  <img className="w-16 h-16 p-1" src={gadget.image} alt="" />
                </td>
                <td>{gadget.name}</td>
                <td>{gadget.category}</td>
                <td>{gadget.price}</td>
                <td>{gadget.quantity}</td>
                <td>
                  <button className="bg-Primary px-3 py-1 rounded-lg text-white">
                    Update
                  </button>
                </td>
                <td>
                  <button className="bg-Primary px-3 py-1 rounded-lg text-white">
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
