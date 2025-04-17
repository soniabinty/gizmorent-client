import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaStar } from "react-icons/fa";
import { useSelector } from "react-redux";
import Swal from "sweetalert";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Reviews = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const axiosPublic = useAxiosPublic();
    const [allReviews, setAllReviews] = useState([]);
    const [hasReviewed, setHasReviewed] = useState(false);
    const [loading, setLoading] = useState(false);
    const { user } = useSelector((state) => state.auth);
    const userId = user?.email;

    useEffect(() => {
        const fetchAllReviews = async () => {
            try {
                setLoading(true);
                const res = await axiosPublic.get("/websitereview");
                setAllReviews(res.data);

                // Check if the logged-in user has already reviewed
                const alreadyReviewed = res.data.some(review => review.userId === userId);
                setHasReviewed(alreadyReviewed);
            } catch (error) {
                console.error("Error fetching reviews:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchAllReviews();
    }, [axiosPublic, userId]);

    const onSubmit = async (data) => {
        if (!userId) {
            Swal("Error!", "You must be logged in to submit a review.", "error");
            return;
        }

        if (hasReviewed) {
            Swal("Oops!", "You have already submitted a review.", "info");
            return;
        }

        try {
            const review = {
                userId,
                name: user?.displayName,
                photo: user?.photoURL,
                rating: parseInt(data.rating, 10),
                comment: data.comment,
            };

            await axiosPublic.post("/reviews", review);
            Swal("Success!", "Your review has been submitted.", "success");

            // Refetch all reviews
            const res = await axiosPublic.get("/websitereview");
            setAllReviews(res.data);
            setHasReviewed(true);
            reset();
        } catch (error) {
            console.error("Error submitting review:", error);
            Swal("Error!", "Failed to submit your review.", "error");
        }
    };

    return (
        <div className="space-y-10 w-11/12 mx-auto max-w-7xl py-14">
            <h2 className="text-3xl font-semibold text-center mb-6">Submit Your Review</h2>

            {hasReviewed ? (
                <div className="text-center text-green-600 font-medium bg-base-200 py-4 px-6 rounded-lg mb-8">
                    ✅ You’ve already submitted a review. Thank you!
                </div>
            ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 bg-white p-6 rounded-lg max-w-3xl mx-auto shadow-md mb-12">
                    {/* Rating Input */}
                    <div className="form-control">
                        <label className="label font-bold">Rating (out of 5)</label>
                        <select
                            {...register("rating", { required: "Rating is required" })}
                            className="select select-bordered w-full"
                        >
                            <option value="">Select Rating</option>
                            {[1, 2, 3, 4, 5].map((rating) => (
                                <option key={rating} value={rating}>
                                    {rating} Star{rating > 1 && "s"}
                                </option>
                            ))}
                        </select>
                        {errors.rating && <p className="text-red-500">{errors.rating.message}</p>}
                    </div>

                    {/* Comment Input */}
                    <div className="form-control">
                        <label className="label font-bold">Comment</label>
                        <textarea
                            {...register("comment", { required: "Comment is required" })}
                            className="textarea textarea-bordered w-full"
                            rows="4"
                            placeholder="Write your review here..."
                        ></textarea>
                        {errors.comment && <p className="text-red-500">{errors.comment.message}</p>}
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="btn bg-Primary text-white w-full">
                        Submit Review
                    </button>
                </form>
            )}

            <h3 className="text-2xl font-semibold mt-12 mb-4">Recent Reviews</h3>

            {loading ? (
                <p className="text-center">Loading reviews...</p>
            ) : allReviews.length > 0 ? (
                <div className="mt-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {allReviews.map((review) => (
                            <div key={review._id} className="max-w-sm mx-auto bg-base-200 shadow-lg rounded-lg p-6 text-center relative">
                                {review.photo && (
                                    <img
                                        className="w-20 h-20 object-cover rounded-full border-4 border-white shadow-md absolute -top-8 left-1/2 transform -translate-x-1/2"
                                        src={review.photo}
                                        alt={review.name}
                                    />
                                )}

                                <div className="mt-10">
                                    {/* Star Rating */}
                                    <div className="flex justify-center mb-2">
                                        {[...Array(5)].map((_, index) => (
                                            <FaStar
                                                key={index}
                                                className={`mr-1 text-xl ${index < review.rating ? "text-yellow-400" : "text-gray-300"}`}
                                            />
                                        ))}
                                    </div>

                                    {/* Comment */}
                                    <p className="text-gray-600">
                                        <span className="text-yellow-500 text-2xl font-bold">“</span>
                                        {review.comment}
                                        <span className="text-yellow-500 text-2xl font-bold">”</span>
                                    </p>

                                    {/* Name */}
                                    <h3 className="mt-4 font-semibold text-lg text-gray-800">{review.name}</h3>

                                    {/* Timestamp */}
                                    <p className="text-gray-500 text-sm">
                                        {review.timestamp && new Date(review.timestamp).toLocaleDateString()}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <p className="text-center">No reviews available.</p>
            )}
        </div>
    );
};

export default Reviews;
