import React from 'react';

const Review = (props) => {
  const { name, opinion, Ratings,img} = props.review;
  return (
    <div className="review-container w-96 h-96 border border-gray-400 rounded-xl p-1 text-center">
      <img className="w-96 rounded-xl" src={img} alt="" />
      <h1>{name}</h1>
      <h2>opinion: {opinion}</h2>
      <h3>ratings:{Ratings}</h3>
    </div>
  );
};

export default Review;