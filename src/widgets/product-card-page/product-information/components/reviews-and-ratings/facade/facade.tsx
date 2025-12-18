import { UiReviewsAndRatings } from "../ui/Layout"

interface ReviewsAndRatingsProps {
  onWriteReviewClick: () => void;
}

export const ReviewsAndRatings = ({ onWriteReviewClick }: ReviewsAndRatingsProps) => {
    return <UiReviewsAndRatings onWriteReviewClick={onWriteReviewClick} />
}
