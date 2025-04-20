import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
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
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
                Testimonial
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-5 gap-16 mt-20">
                {reviews.map((review) => (
                    <div
                        key={review._id}
                        className="max-w-sm mx-auto bg-base-200 shadow-lg rounded-lg p-6 text-center relative"
                    >
                        {review.photo && (
                            <img
                                className="w-20 h-20 object-cover rounded-full border-4 border-white shadow-md absolute -top-8 left-1/2 transform -translate-x-1/2"
                                src={review.photo}
                                alt={review.name}
                            />
                        )}

                        <div className="mt-10">
                            <div className="flex justify-center mb-2">
                                {[...Array(5)].map((_, index) => (
                                    <FaStar
                                        key={index}
                                        className={`mr-1 text-xl ${index < review.rating ? "text-yellow-400" : "text-gray-300"
                                            }`}
                                    />
                                ))}
                            </div>

                            <p className="text-gray-600">
                                <span className="text-yellow-500 text-2xl font-bold">“</span>
                                {review.comment}
                                <span className="text-yellow-500 text-2xl font-bold">”</span>
                            </p>

                            <h3 className="mt-4 font-semibold text-lg text-gray-800">
                                {review.name}
                            </h3>

                            {review.timestamp && (
                                <p className="text-gray-500 text-sm">
                                    {new Date(review.timestamp).toLocaleDateString()}
                                </p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonial;
