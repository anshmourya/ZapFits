import { useContext } from "react";
import { CartData } from "../../hooks/CartHook";

const CartCard = ({ data }) => {
  const { addToCart, removeFromCart } = useContext(CartData);
  const { title, price, quantity, image, brand } = data;

  const handleAddToCart = () => {
    addToCart(data);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(data);
  };

  return (
    <div className="rounded-lg md:w-2/3">
      <div className="justify-between p-6 mb-6 bg-white rounded-lg shadow-md sm:flex sm:justify-start">
        <img
          src={image}
          className="object-contain w-full rounded-lg sm:w-40 sm:h-20"
          alt={title}
        />
        <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
          <div className="mt-5 sm:mt-0">
            <h2 className="text-lg font-bold text-gray-900">{title}</h2>
            <p className="mt-1 text-xs text-gray-700">{brand}</p>
          </div>
          <div className="flex items-center justify-between mt-4 sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
            <div className="flex items-center border-gray-100">
              <span
                className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-orange-400 hover:text-blue-50"
                onClick={handleRemoveFromCart}
              >
                -
              </span>
              <input
                className="w-8 h-8 text-xs text-center bg-white border outline-none"
                type="number"
                value={quantity}
                min="1"
              />
              <span
                className="px-3 py-1 duration-100 bg-gray-100 rounded-r cursor-pointer hover:bg-orange-400 hover:text-blue-50"
                onClick={handleAddToCart}
              >
                +
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <p className="text-sm">&#8377; {price}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5 duration-150 cursor-pointer hover:text-red-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
