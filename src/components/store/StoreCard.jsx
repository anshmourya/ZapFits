import { useContext, useState } from "react";
import { StoreData } from "../../hooks/StoreHook";
import Rating from "../GeneralCoponents/buttons/Rating";
import { Link } from "react-router-dom";
import ReviewModal from "../Modal/ReviewModal";

const StoreCard = ({ data }) => {
  const { setReviewModal } = useContext(StoreData);
  const { storeName, rating, image, km, reviews, id } = data;

  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

  const handleSeeReview = () => {
    setReviewModal(true);
    setIsReviewModalOpen(true);
  };

  const handleCloseModal = () => {
    setReviewModal(false);
    setIsReviewModalOpen(false);
  };

  return (
    <>
      <div className="relative flex items-center w-full gap-5 px-2 py-2 my-3 border rounded-lg cursor-pointer">
        <Link to={`/store/${id}`}>
          <img
            src={image}
            alt={storeName}
            className="object-contain rounded-lg w-[150px] aspect-ratio: auto;"
          />
        </Link>
        <div>
          <span className="inline-block my-3">
            <Link to={`/store/${id}`}>{storeName}</Link>
          </span>
          <Rating rating={rating} />
        </div>
        <div className="absolute right-6 top-6">
          <span className="block my-1">{km} Km</span>
          <button
            type="button"
            className="w-32 rounded-full bg-orange-400 py-1.5 font-medium text-white hover:shadow-md text-sm"
            onClick={handleSeeReview}
          >
            See Review
          </button>
        </div>
      </div>
      {isReviewModalOpen && (
        <ReviewModal
          openModal={isReviewModalOpen}
          closeModal={handleCloseModal}
          data={reviews}
        />
      )}
    </>
  );
};

export default StoreCard;
