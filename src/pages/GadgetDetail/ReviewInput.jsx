import React, { useState } from "react";
import "@smastrom/react-rating/style.css";
import { Rating } from "@smastrom/react-rating";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
const selectUser = createSelector(
  (state) => state.auth.user,
  (user) => ({ ...user })
);
const ReviewInput = () => {
  const axiosPubic = useAxiosPublic();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const user = useSelector(selectUser);
  const { gadgetDetails } = useSelector((state) => state.gadgets);
  const { displayName, email, photoURL } = user;

  const handleReview = async () => {
    if (!rating || !comment.trim()) {
      alert("Please provide a rating and a comment.");
      return;
    }

    const newReview = {
      productId: gadgetDetails._id,
      user: displayName,
      email: email,
      image: photoURL,
      rating,
      comment,
      date: new Date(),
    };
    console.log(newReview);

    try {
      const response = await axiosPubic.post("/product-review", newReview);
      if (response.status === 200 || response.status === 201) {
        alert("Review added successfully!");
        setRating(0);
        setComment("");
      }
    } catch (error) {
      console.error("Failed to add review:", error);
      alert("Something went wrong. Please try again.");
    }
  };
  return (
    <div className=" px-6 ">
      <div className="mx-auto rounded-md mt-5">
        <h2 className="text-2xl ">Add Review</h2>
        <h2 className="mb-2">Give Your Review For Our Service</h2>

        <Rating value={rating} onChange={setRating} style={{ maxWidth: 180 }} />

        <div className="relative md:w-[22rem]  mt-3 space-y-5">
          {/* Textarea for review */}
          <div className="relative w-full ">
            <textarea
              rows="5"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="peer min-h-[50px] w-full !resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50 border-Primary"
              placeholder="Write your review..."
            ></textarea>
            <label className="hidden md:flex before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Write your review
            </label>
          </div>

          <div className="flex w-full justify-between py-1.5">
            <button
              onClick={handleReview}
              className="select-none rounded-md bg-Primary py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Post Review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewInput;
