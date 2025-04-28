import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPaymentDetails } from "../../Redux/Feature/checkoutSlice";

const CartTotal = () => {
  const { checkoutProduct, bookingDetails } = useSelector(
    (state) => state.checkout
  );
  const dispatch = useDispatch();

  // const months = bookingDetails?.months || 1;
  // const quantity = bookingDetails?.quantity || 1;
  const [products, setProducts] = useState(checkoutProduct);
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [error, setError] = useState("");
  const validCoupons = {
    GIZ_EID_30: 30,
  };
  console.log("Products:", products);
  const handleApplyCoupon = () => {
    const upperCode = couponCode.trim().toUpperCase();
    if (validCoupons[upperCode]) {
      setDiscount(validCoupons[upperCode]);
      setError("");
    } else {
      setDiscount(0);
      setError("Invalid coupon code");
    }
  };

  // Calculate Subtotal based on quantity and months
  const subtotal = products.reduce((total, product) => {
    const quantity = bookingDetails?.quantity || product?.quantity || 1;
    // const months = bookingDetails?.months || product?.months || 1;
    return total + product.price * quantity;
  }, 0);
  console.log("Subtotal:", subtotal);

  const shipping = products.length > 0 ? 5.0 : 0;

  const discountAmount = (subtotal * discount) / 100;

  // Final Total
  const total = subtotal + shipping - discountAmount;

  useEffect(() => {
    dispatch(
      setPaymentDetails({
        products,
        subtotal,
        shipping,
        discount: discountAmount,
        total,
        coupon: couponCode,
      })
    );
  }, [
    products,
    bookingDetails,
    discountAmount,
    couponCode,
    subtotal,
    shipping,
    total,
    dispatch,
  ]);

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
            </div>
            <div>
              <p className=" font-semibold">
                {product.price} * {product?.quantity} * {product?.months || 1}{" "}
                =$
                {subtotal}
              </p>
            </div>
          </div>
        ))}

        <div className="flex">
          <input
            className="w-full p-2 border border-gray-300"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            placeholder="Discount code"
            type="text"
          />
          <button
            onClick={handleApplyCoupon}
            className="bg-primary px-5 py-2 text-white cursor-pointer"
          >
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
          <p className="font-semibold">${discountAmount.toFixed(2)}</p>
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
