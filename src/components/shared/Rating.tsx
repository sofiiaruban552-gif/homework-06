import { Star } from "lucide-react";

interface RatingProps {
  rating: number;
}

const Rating = ({ rating }: RatingProps) => {
  return (
    <div className="rating">
      <Star size={18} className="rating__star" />
      <span className="rating__value">{rating}</span>
    </div>
  );
};

export default Rating;
