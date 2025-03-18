import React from 'react';
import ReviewBox from './ReviewBox';
import { Rating } from '@smastrom/react-rating';
import "@smastrom/react-rating/style.css";

const ReviewdData = () => {
  const reviews = [
    {
      name: "Adam Smit",
      image: "https://i.ibb.co.com/sMydcvR/profile-picture-smiling-successful-young-260nw-2040223583.webp",
      rating: 4,
      date: "2020-09-03",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Doloribus, omnis fugit corporis iste magnam ratione."
    },
    {
      name: "Emily Johnson",
      image: "https://i.ibb.co.com/sMydcvR/profile-picture-smiling-successful-young-260nw-2040223583.webp",
      rating: 5,
      date: "2024-03-10",
      review: "Fantastic experience! The service was top-notch and exceeded my expectations."
    },
    {
      name: "Michael Brown",
      image: "https://i.ibb.co.com/sMydcvR/profile-picture-smiling-successful-young-260nw-2040223583.webp",
      rating: 3,
      date: "2023-01-15",
      review: "Good but could be improved in terms of response time."
    }
  ];
  
  return (
    <div>

<h2 className='text-3xl  pt-6 '>Customer Reviews</h2>
<div className='mb-12 flex gap-3 items-center'>
              <Rating style={{ maxWidth: 120 }} readOnly
              className='my-3' />
              <p className='text-Primary'>(12 people)</p>
            </div>

      {

      reviews.map((review) =>
        <ReviewBox review={review} key={review.name}></ReviewBox>
      )

      }
      
    </div>
  );
};

export default ReviewdData;