import axios from "axios";
import { useEffect, useState } from "react";

const useReview = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios.get("review.json").then((data) => setReviews(data.data));
  }, [reviews]);

  return [reviews, setReviews];
};

export default useReview;
