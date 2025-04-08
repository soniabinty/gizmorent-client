import React from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { format } from "date-fns";

const ReviewBox = ({ review }) => {
  return (
    <div className="mb-5 border-b pb-4">
      <div className="md:flex gap-4 md:gap-5">
        {/* Profile Image */}
        <div>
          <img
            className="md:w-20 md:h-20 h-12 w-12  rounded-full md:mx-auto"
            src={review.image}
            alt={review.user}
          />
        </div>

        {/* Review Content */}
        <div className="flex-1">
          <div className="flex justify-between items-center">
            {/* Name & Rating */}
            <div>
              <h6 className="text-lg mb-1 font-semibold">{review.user}</h6>
              <div>
                <Rating
                  style={{ maxWidth: 120 }}
                  value={review.rating}
                  readOnly
                />
              </div>
            </div>

            {/* Review Date */}
            <div className="p-2 rounded-lg border text-gray-600 text-sm">
              <h6>
                {review?.date && format(new Date(review?.date), "dd/MM/yyyy")}
              </h6>
            </div>
          </div>

          {/* Review Text */}
          <p className="mt-2 text-gray-700">{review.comment}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewBox;
