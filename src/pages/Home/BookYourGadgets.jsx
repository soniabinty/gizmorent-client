import gadget from "./../../assets/gadget1.png";
const BookYourGadgets = () => {
  return (
    <div className="bg-gray-100 md:flex">
      <div>
        <img src={gadget} alt="" />
      </div>
      <div>
        <h3 className="text-4xl font-semibold text-center">
          Book Your Gadgets
        </h3>
        <p className="text-center">
          {" "}
          Get the latest tech at your fingertips! Browse, select, and book your
          favorite gadgets with ease. Whether it's smartphones, laptops,
          cameras, or gaming gear
        </p>
        <div className="card w-full">
          <div className="card-body">
            <fieldset className="fieldset">
              {/* <label className="fieldset-label">Email</label> */}
              <input type="text" className="input w-full" placeholder="Name*" />
              {/* <label className="fieldset-label">Password</label> */}
              <input
                type="number"
                className="input w-full"
                placeholder="Phone Number*"
              />
              <input
                type="email"
                className="input w-full"
                placeholder="Email*"
              />
              <input
                type="text"
                className="input w-full"
                placeholder="Product Code*"
              />
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookYourGadgets;
