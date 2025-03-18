const CartTotal = () => {
  return (
    <div className="">
      <h3 className="text-xl font-semibold mb-4">Cart Total</h3>
      <div className="space-y-3">
        <div className="flex w-full gap-6">
          <img
            className="w-16 h-16 border border-gray-300 p-2"
            src="https://i.ibb.co.com/C5mbRDz0/Adobe-Express-file-11.png"
            alt=""
          />
          <div>
            <h4 className="font-semibold">SmartWatch</h4>
            <p className="font-semibold">$20.00</p>
          </div>
        </div>
        <div className="flex w-full gap-6">
          <img
            className="w-16 h-16 border border-gray-300 p-2"
            src="https://i.ibb.co.com/C5mbRDz0/Adobe-Express-file-11.png"
            alt=""
          />
          <div>
            <h4 className="font-semibold">SmartWatch</h4>
            <p className="font-semibold">$20.00</p>
          </div>
        </div>
        <div className=" flex">
          <input
            className="w-full p-2 border-1 border-gray-300"
            placeholder="Discount code"
            type="text"
          />
          <button className="bg-Primary px-5 py-2 border-1 text-white cursor-pointer">
            Apply
          </button>
        </div>
        {/* <div className="divider"></div> */}
        <div className="flex justify-between border-t-1 border-gray-300">
          <p>SubTotal</p>
          <p className="font-semibold">$20.00</p>
        </div>
        <div className="flex justify-between">
          <p>Shipping</p>
          <p className="font-semibold">$5.00</p>
        </div>
        <div className="flex justify-between">
          <p>Discount</p>
          <p className="font-semibold">$5.00</p>
        </div>
        {/* <div className="divider"></div> */}
        <div className="flex justify-between border-t-1 border-gray-300">
          <p className="font-semibold">Total</p>
          <p className="font-semibold">$25.00</p>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
