import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const categories = [
  {
    name: "Handset & Tablets",
    img: "https://i.ibb.co.com/ymq1PSjj/Adobe-Express-file-7.png",
  },
  {
    name: "Computer",
    img: "https://i.ibb.co.com/jv6t5FBN/Adobe-Express-file-9.png",
  },
  {
    name: "Cameras",
    img: "https://i.ibb.co.com/fdxdcJyh/Adobe-Express-file-8.png",
  },
  {
    name: "Gaming & VR",
    img: "https://i.ibb.co.com/gnhBhVf/Adobe-Express-file-10.png",
  },
  {
    name: "Audio & Music",
    img: "https://i.ibb.co.com/jvbVYsWs/Adobe-Express-file-6.png",
  },
  {
    name: "Wearables",
    img: "https://i.ibb.co.com/C5mbRDz0/Adobe-Express-file-11.png",
  },
  {
    name: "Handset & Tablets",
    img: "https://i.ibb.co.com/ymq1PSjj/Adobe-Express-file-7.png",
  },
  {
    name: "Computer",
    img: "https://i.ibb.co.com/jv6t5FBN/Adobe-Express-file-9.png",
  },
  {
    name: "Cameras",
    img: "https://i.ibb.co.com/fdxdcJyh/Adobe-Express-file-8.png",
  },
];

const CategorySlider = () => {
  return (
    <div className="relative mt-10">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold mb-4">Top Categories</h2>
        <div>
          <button className="prev-btn -translate-y-1/2 mr-3 bg-[#ffd166] p-2 shadow-lg rounded-full z-10">
            {/* <ChevronLeft className="w-6 h-6" /> */}
            <FaChevronLeft />
          </button>

          <button className="next-btn -translate-y-1/2 bg-[#ffd166] p-2 shadow-lg rounded-full z-10">
            {/* <ChevronRight className="w-6 h-6" /> */}
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* Swiper Container */}
      <div className="">
        <Swiper
          modules={[Navigation]}
          slidesPerView={4}
          spaceBetween={15}
          navigation={{
            nextEl: ".next-btn",
            prevEl: ".prev-btn",
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
        >
          {categories.map((category, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center bg-[#FFD166] p-4 rounded-lg">
                <img
                  src={category.img}
                  alt={category.name}
                  className="w-24 h-24 object-contain"
                />
                <p className=" text-center font-medium">{category.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
export default CategorySlider;
