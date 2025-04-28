import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaStar } from "react-icons/fa";
import { useSelector } from "react-redux";
import Swal from "sweetalert";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const fetchAllReviews = async (axiosPublic) => {
    const { data } = await axiosPublic.get("/websitereview");
    return data;
};

const submitReview = async (axiosPublic, review) => {
    await axiosPublic.post("/reviews", review);
};

const Reviews = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const axiosPublic = useAxiosPublic();
    const queryClient = useQueryClient();
    const { user } = useSelector((state) => state.auth);
    const userId = user?.email;
    const [charCount, setCharCount] = useState(0);

    const handleInputChange = (e) => {
        setCharCount(e.target.value.length);
    };

    // Fetch all reviews using react-query
    const { data: allReviews = [], isLoading } = useQuery({
        queryKey: ["reviews"],
        queryFn: () => fetchAllReviews(axiosPublic),
        refetchInterval: 10000, // Auto-refresh every 10 seconds
    });

    // Mutation to submit a review
    const mutation = useMutation({
        mutationFn: (review) => submitReview(axiosPublic, review),
        onSuccess: () => {
            queryClient.invalidateQueries(["reviews"]);
            Swal("Success!", "Your review has been submitted.", "success");
            reset();
            setCharCount(0);
        },
        onError: () => {
            Swal("Error!", "Failed to submit your review.", "error");
        },
    });

    const onSubmit = (data) => {
        if (!userId) {
            Swal("Error!", "You must be logged in to submit a review.", "error");
            return;
        }

        const alreadyReviewed = allReviews.some((review) => review.userId === userId);
        if (alreadyReviewed) {
            Swal("Oops!", "You have already submitted a review.", "info");
            return;
        }

        const review = {
            userId,
            name: user?.displayName,
            photo: user?.photoURL,
            rating: parseInt(data.rating, 10),
            comment: data.comment,
            timestamp: new Date().toISOString(),
        };

        mutation.mutate(review);
    };

    return (
        <div className="space-y-10 w-11/12 mx-auto max-w-7xl py-14">
            <h2 className="text-3xl font-semibold text-center mb-6">Submit Your Review</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 bg-white p-6 rounded-lg max-w-3xl mx-auto shadow-md mb-12">
                {/* Rating */}
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

                {/* Comment */}
                <div className="form-control">
                    <label className="label font-bold">Comment</label>
                    <textarea
                        {...register("comment", {
                            required: "Comment is required",
                            minLength: {
                                value: 45,
                                message: "Comment must be at least 45 characters",
                            },
                            maxLength: {
                                value: 140,
                                message: "Comment cannot exceed 140 characters",
                            },
                        })}
                        className="textarea textarea-bordered w-full"
                        rows="4"
                        placeholder="Write your review here..."
                        onChange={handleInputChange}
                    ></textarea>

                    <div className="text-sm mt-1 text-gray-500">
                        {charCount} / 140 characters
                    </div>

                    {errors.comment && <p className="text-red-500">{errors.comment.message}</p>}
                </div>

                {/* Submit */}
                <button type="submit" className="btn bg-Primary text-white w-full" disabled={mutation.isLoading}>
                    {mutation.isLoading ? "Submitting..." : "Submit Review"}
                </button>
            </form>

            <h3 className="text-2xl font-semibold mt-12 mb-4">Recent Reviews</h3>

            {isLoading ? (
                <p className="text-center">Loading reviews...</p>
            ) : allReviews.length > 0 ? (
                <div className="mt-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
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
                                    <div className="flex justify-center mb-2">
                                        {[...Array(5)].map((_, index) => (
                                            <FaStar
                                                key={index}
                                                className={`mr-1 text-xl ${index < review.rating ? "text-yellow-400" : "text-gray-300"}`}
                                            />
                                        ))}
                                    </div>

                                    <p className="text-gray-600">
                                        <span className="text-yellow-500 text-2xl font-bold">“</span>
                                        {review.comment}
                                        <span className="text-yellow-500 text-2xl font-bold">”</span>
                                    </p>

                                    <h3 className="mt-4 font-semibold text-lg text-gray-800">{review.name}</h3>
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
