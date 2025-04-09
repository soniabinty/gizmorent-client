import { useState } from "react";
import { useSelector } from "react-redux";

const CartTotal = () => {
  const { checkoutProduct, bookingDetails } = useSelector(
    (state) => state.checkout
  );

  const months = bookingDetails?.months || 1;
  const quantity = bookingDetails?.quantity || 1;
  const [products, setProducts] = useState(checkoutProduct);

  // Calculate Subtotal based on quantity and months
  const subtotal = products.reduce(
    (total, product) => total + product.price * months * quantity,
    0
  );

  // Shipping Cost (fixed $5 fee)
  const shipping = products.length > 0 ? 5.0 : 0;

  // Discount (placeholder)
  const discount = 0;

  // Final Total
  const total = subtotal + shipping - discount;

  return (
    <div className="">
      <h3 className="text-xl font-semibold mb-4">Cart Total</h3>
      <div className="space-y-3">
        <div className="flex justify-between">
          <h4 className="font-semibold">Item</h4>
          <p className="font-semibold">Price</p>
        </div>
        {products.map((product) => (
          <div key={product._id} className="flex justify-between w-full gap-6">
            <div>
              <h4 className="font-semibold">{product.name}</h4>
              {/* <p className="font-semibold">${product.price}/month</p>
              <p className="text-gray-600">Months: {months}</p>
              <p className="text-gray-600">Quantity: {quantity}</p> */}
            </div>
            <div>
              <p className=" font-semibold">
                {product.price} * {quantity} * {months} =$
                {quantity * months * product.price}
              </p>
            </div>
          </div>
        ))}

        <div className="flex">
          <input
            className="w-full p-2 border border-gray-300"
            placeholder="Discount code"
            type="text"
          />
          <button className="bg-primary px-5 py-2 text-white cursor-pointer">
            Apply
          </button>
        </div>

        <div className="flex justify-between border-t border-gray-300">
          <p>Subtotal</p>
          <p className="font-semibold">${subtotal.toFixed(2)}</p>
        </div>
        <div className="flex justify-between">
          <p>Shipping</p>
          <p className="font-semibold">${shipping.toFixed(2)}</p>
        </div>
        <div className="flex justify-between">
          <p>Discount</p>
          <p className="font-semibold">${discount.toFixed(2)}</p>
        </div>
        <div className="flex justify-between border-t border-gray-300">
          <p className="font-semibold">Total</p>
          <p className="font-semibold">${total.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
