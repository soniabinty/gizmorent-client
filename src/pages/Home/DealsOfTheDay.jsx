import { useState, useEffect } from "react";
import useAxiosPublic from "../../hooks/useaxiosPublic";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { addToCart } from "../../Redux/Feature/cartSlice";
import { Rating } from "@smastrom/react-rating";
import { IoIosCheckmark } from "react-icons/io";

const DealsOfTheDay = () => {
  const axiosPublic = useAxiosPublic();
  const dispatch = useDispatch();
  const [productsData, setProductsData] = useState([]);
  const [countdowns, setCountdowns] = useState({});
  const initialCountdown = 10800; 

  const user = useSelector((state) => state.auth.user);
  const cartItems = useSelector((state) => state.cart.items);

  useEffect(() => {
    axiosPublic.get("/best-deals").then((res) => {
      setProductsData(res.data);

      const initialTimes = {};
      res.data.forEach((product) => {
        initialTimes[product._id] = product.countdown || initialCountdown;
      });
      setCountdowns(initialTimes);
    });
  }, [axiosPublic]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdowns((prev) => {
        const updated = {};
        for (const id in prev) {
          updated[id] = Math.max(prev[id] - 1, 0);
        }
        return updated;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  const handleAddToCart = (product) => {
    const isAlreadyInCart = cartItems.some(
      (item) => item.gadgetId === product._id
    );

    if (isAlreadyInCart) {
      Swal.fire({
        icon: "info",
        title: "Already in Cart",
        text: "This item is already in your cart!",
      });
      return;
    }

    if (user?.email) {
      dispatch(addToCart({ gadget: product, email: user?.email, quantity: 1 }));
      Swal.fire("Success", "Item added to cart!", "success");
    } else {
      Swal.fire("Error", "You need to log in first.", "error");
    }
  };

  return (
    <section className="p-2">
      <h2 className="text-2xl font-bold mb-6">Deals of the Day</h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {/* Banner */}
        <div className="col-span-1 bg-gradient-to-b from-sky-700 to-sky-500 rounded-xl text-white flex flex-col justify-center items-center p-4">
          <p className="text-sm mb-1">END OF SEASON</p>
          <h1 className="text-2xl font-extrabold text-center">BLACK FRIDAY</h1>
        </div>

        {/* Products */}
        <div className="md:col-span-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          {productsData.map((product) => {
            const timeLeft = countdowns[product._id] || 0;
            const percentElapsed = 100 - (timeLeft / initialCountdown) * 10;
            const discountedPrice = (product.price * 0.8).toFixed(2);

            return (
              <div
                key={product._id}
                className="flex flex-col lg:flex-row p-4 rounded-xl shadow-sm bg-white"
              >
                {/* Left: Image & Info */}
                <div className="lg:w-1/2">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-32 md:h-40 mx-auto mb-4"
                  />
                  <h3 className="font-semibold min-h-[3rem] line-clamp-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center my-2">
                    <span className="text-yellow-400 mr-2">
                      <Rating
                        style={{ maxWidth: 80 }}
                        value={product.averageRating}
                        readOnly
                        className="my-3"
                      />
                    </span>
                    <span className="text-sm text-gray-500">
                      {product.reviewCount || 0} reviews
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-xl font-bold text-Primary">
                      ${discountedPrice}
                    </span>
                    <span className="line-through text-gray-400">
                      ${product.price.toFixed(2)}
                    </span>
                    <span className="text-xs text-white bg-red-500 px-2 py-0.5 rounded">
                      -20%
                    </span>
                  </div>
                </div>

                {/* Right: Countdown & CTA */}
                <div className="lg:w-1/2 mt-4 md:mt-0 md:pl-4 flex flex-col justify-between">
                  <div className="min-h-[130px] flex flex-col justify-between grow">
                    <ul className="text-sm text-gray-600 space-y-1 mb-3">
                      {product.specifications?.slice(0, 4).map((spec, index) => (
                        <li className="flex items-start gap-1" key={index}>
                          <IoIosCheckmark className="text-green-600 text-xl shrink-0" />
                          <span className="text-gray-800 text-sm">{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-sm text-Primary font-semibold">
                    ⏳ {formatTime(timeLeft)} left
                  </p>

                  <div className="h-2 bg-gray-200 rounded-full mt-3">
                    <div
                      className="h-full bg-Primary rounded-full transition-all duration-1000"
                      style={{ width: `${percentElapsed}%` }}
                    ></div>
                  </div>

                  <button
                    onClick={() => handleAddToCart(product)}
                    className="mt-4 bg-Primary text-white w-full py-2 rounded-lg transition hover:opacity-90"
                    disabled={timeLeft === 0}
                  >
                    {timeLeft === 0 ? "Deal Expired" : "Add to Cart"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DealsOfTheDay;
