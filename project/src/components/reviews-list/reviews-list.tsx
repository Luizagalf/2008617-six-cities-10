import { Review } from '../../types/review';
import ReviewOne from '../review-one/review-one';

type ReviewsListProps = {
  reviews: Review[];
};

const ReviewsList = ({ reviews }: ReviewsListProps): JSX.Element => (
  <ul className="reviews__list">
    {reviews.map((review: Review) => (
      <ReviewOne review={review} key={review['id']} />
    ))}
  </ul>
);

export default ReviewsList;
