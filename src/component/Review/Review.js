import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Review.css";

const Review = (props) => {
  const { name, opinion, Ratings, img } = props.review;
  return (
    <div className="review-container h-100 border border-gray-400 rounded-xl p-1 text-center">
      <img className="w-full h-60 rounded-xl" src={img} alt="" />
      <h1 className=" font-semibold text-2xl font-mono">{name}</h1>
      <h2>
        <span className=" font-semibold font-mono">OPINION:</span> {opinion}
      </h2>
      <h3>
        <span className="font-bold">ratings: </span>
        {Ratings}{" "}
        <FontAwesomeIcon
          className=" text-orange-400"
          icon={faStar}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          className=" text-orange-400"
          icon={faStar}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          className=" text-orange-400"
          icon={faStar}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          className=" text-orange-400"
          icon={faStar}
        ></FontAwesomeIcon>
        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
      </h3>
    </div>
  );
};

export default Review;
