import React from "react";
import { Link } from "react-router-dom";
import useReview from "../../Hooks/useReview";
import Review from "../Review/Review";

import "./Home.css";

const Home = () => {
  const [reviews] = useReview();

  return (
    <div>
      <div className="home my-8">
        <div className="md: flex justify-around items-center">
          <div className="px-3 text-side">
            <h1 className="text-5xl font-semibold header">
              <span className="text-purple-600">
                THE MAJOR PURPOSE OF THIS SITE
              </span>
            </h1>
            <h2 className="header text-4xl font-semibold">
              <span className="text-purple-700">
                IS TO MAKE YOUR DICISION EASY.
              </span>
            </h2>

            <p className=" text-gray-600 font-semibold w-50 mt-2">
              We have colleced most pricious reviews on computers from the
              world's best tech exparts so that you can take a dicision in a
              easy way and choose the better one. Go through the review section
              and see the review of these devices.
            </p>
            <button className="bg-gradient-to-r from-violet-500 to-fuchsia-500 py-3 px-5 rounded-xl mt-8 text-white font-semibold">
              <Link to="/dashboard">Live Demo</Link>
            </button>
          </div>
          <div className="header-img px-1">
            <img
              className="w-full rounded-lg"
              src={require("./Header-img.jpg")}
              alt=""
            />
          </div>
        </div>
      </div>
      {/*
-
-
-
 Review Section
-
-
-
-  */}
      <div className="my-10 py-10">
        <h2 className="header text-4xl text-center text-gray-600 ">
          CUSTOMER REVIEWS(3)
        </h2>
        <div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 my-12 px-4 xs:grid-cols-1">
            {reviews.slice(0, 3).map((review) => (
              <Review key={review.id} review={review}></Review>
            ))}
          </div>
          <div className="text-center">
            <button className="bg-gradient-to-r from-violet-500 to-fuchsia-500 py-2 px-7 rounded-xl mt-8 font-semibold text-white">
              <Link to="/reviews">See All Review</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
