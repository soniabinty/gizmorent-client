import React from "react";
import { Rating } from '@smastrom/react-rating';
import "@smastrom/react-rating/style.css";

const ReviewBox = ({ review }) => {
  return (
    <div className="mb-5 border-b pb-4">
    <div className="md:flex gap-6 md:gap-8">
      {/* Profile Image */}
      <div>
        <img className="w-24 h-24 rounded-full mx-auto" src={review.image} alt={review.name} />
      </div>
  
      {/* Review Content */}
      <div className="flex-1">
        <div className="flex justify-between items-center">
          {/* Name & Rating */}
          <div>
            <h6 className="text-2xl mb-1 font-semibold">{review.name}</h6>
            <div>
              <Rating style={{ maxWidth: 120 }} value={review.rating} readOnly />
            </div>
          </div>
  
          {/* Review Date */}
          <div className="p-2 rounded-lg border text-gray-600 text-sm">
            <h6>{review.date}</h6>
          </div>
        </div>
  
        {/* Review Text */}
        <p className="mt-2 text-gray-700">{review.review}</p>
      </div>
    </div>
  </div>
  
  );
};

export default ReviewBox;
