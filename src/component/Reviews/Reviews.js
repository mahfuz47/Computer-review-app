import useReview from "../../Hooks/useReview";

import Review from "../Review/Review";

const Reviews = () => {
  const [reviews] = useReview();

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 my-12 px-4 xs:grid-cols-1">
      {reviews.map((review) => (
        <Review key={review.id} review={review}></Review>
      ))}
    </div>
  );
};

export default Reviews;
