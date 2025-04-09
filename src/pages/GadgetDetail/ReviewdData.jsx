import React, { useEffect } from "react";
import ReviewBox from "./ReviewBox";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchReviews } from "../../Redux/Feature/reviewSlice";

const ReviewdData = ({ productId }) => {
  const dispatch = useDispatch();
  const { reviews, loading, error } = useSelector((state) => state.reviews);

  useEffect(() => {
    if (productId) {
      dispatch(fetchReviews(productId));
    }
  }, [dispatch, productId]);

  // Loading state
  if (loading) return <p>Loading reviews...</p>;

  // Error state
  if (error) return <p>Error: {error}</p>;

  if (reviews.length === 0) return <p>No reviews yet for this product.</p>;

  // Calculate average rating
  const averageRating =
    reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

  return (
    <div>
      <h2 className="text-2xl pt-6">Customer Reviews</h2>
      <div className="mb-6 flex gap-3 items-center">
        <Rating
          style={{ maxWidth: 120 }}
          value={averageRating}
          readOnly
          className="my-3"
        />
        <p className="text-Primary">({reviews.length} reviews)</p>
      </div>

      {reviews.map((review) => (
        <ReviewBox key={review._id} review={review} />
      ))}
    </div>
  );
};

export default ReviewdData;
