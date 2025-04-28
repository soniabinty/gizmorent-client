import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import useAxiosPublic from '../../Hooks/useAxiosPublic';

const Testimonial = () => {
    const [reviews, setReviews] = useState([]);
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const res = await axiosPublic.get('/websitereview');
                const shuffled = res.data.sort(() => 0.5 - Math.random());
                setReviews(shuffled);
            } catch (err) {
                console.error('Error fetching reviews:', err);
            }
        };

        fetchReviews();
    }, [axiosPublic]);

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-800">15k+ Clients Loves Exposure</h2>
                    <button className="text-blue-600 font-semibold hover:underline">View All</button>
                </div>

                <Swiper
                    modules={[Navigation]}
                    navigation
                    spaceBetween={30}
                    slidesPerView={1}
                    className="mySwiper"
                >
                    {reviews.map((review) => (
                        <SwiperSlide key={review._id}>
                            <div className="bg-base-200 rounded-lg shadow-lg flex flex-col md:flex-row p-6 items-center">
                                {/* Left - Photo */}
                                <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
                                    <img
                                        src={review.photo}
                                        alt={review.name}
                                        className="rounded-lg w-80 h-80 object-cover"
                                    />
                                </div>

                                {/* Right - Content */}
                                <div className="w-full md:w-1/2 pl-0 md:pl-8 text-center md:text-left">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-4">“Smooth And Comfortable”</h3>
                                    <div className="flex justify-center md:justify-start mb-4">
                                        {[...Array(5)].map((_, index) => (
                                            <FaStar
                                                key={index}
                                                className={`mr-1 text-xl ${index < review.rating ? "text-yellow-400" : "text-gray-300"}`}
                                            />
                                        ))}
                                    </div>

                                    <p className="text-gray-600 mb-6">

                                        {review.comment} ...

                                        <span className="text-blue-600 font-semibold hover:underline cursor-pointer">
                                            Read More
                                        </span>
                                    </p>

                                    <div>
                                        <h4 className="text-lg font-bold text-gray-800">{review.name}</h4>
                                        {review.timestamp && (
                                            <p className="text-gray-500 text-sm">
                                                {new Date(review.timestamp).toLocaleDateString()}
                                            </p>
                                        )}
                                        <p className="text-gray-500 text-sm">CEO of Louis Vuitton</p> {/* You can make this dynamic if you have it */}
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonial;
