import useReview from '../../Hooks/useReview';


import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReview] = useReview()
    console.log(reviews);
    return (
      <div className="grid grid-cols-3 gap-y-8 my-10 justify-items-center">
        {reviews.map((review) => (
          <Review key={review.id} review={review}></Review>
        ))}
      </div>
    );
};

export default Reviews;