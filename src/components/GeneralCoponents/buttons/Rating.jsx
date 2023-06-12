import { AiFillStar } from "react-icons/ai";

const Rating = ({ rating }) => {
  return (
    <span className="flex items-center w-10 text-center text-white bg-green-400 justify-evenly">
      <AiFillStar />
      {rating}
    </span>
  );
};

export default Rating;
