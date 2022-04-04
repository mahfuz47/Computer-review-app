import React from 'react';

const Review = (props) => {
  const { name, opinion, Ratings,img} = props.review;
  return (
    <div className="review-container w-96 h-100 border border-gray-400 rounded-xl p-1 text-center">
      <img className="w-96 rounded-xl" src={img} alt="" />
      <h1 className=" font-semibold text-2xl font-mono">{name}</h1>
      <h2>
        <span className=' font-semibold font-mono'>OPINION:</span> {opinion}
      </h2>
      <h3>ratings:{Ratings}</h3>
    </div>
  );
};

export default Review;