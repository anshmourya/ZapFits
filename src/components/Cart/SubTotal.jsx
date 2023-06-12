import { useContext, useEffect, useState } from "react";
import { CartData } from "../../hooks/CartHook";
import { Link } from "react-router-dom";
const SubTotal = () => {
  const { carItems } = useContext(CartData);
  const [totalItem, setTotalItem] = useState(0);
  const [totalPrices, setTotalPrices] = useState(0);

  useEffect(() => {
    let itemTotal = 0;
    let priceTotal = 0;

    carItems.forEach((item) => {
      itemTotal += item.quantity;
      priceTotal += item.price * item.quantity;
    });

    setTotalItem(itemTotal);
    setTotalPrices(priceTotal);
  }, [carItems]);
  return (
    <>
      {carItems && (
        <div className="fixed p-6 mt-6 bg-white border rounded-lg shadow-md md:mt-0 md:w-1/3 top-15 right-14">
          <div className="flex justify-between mb-2">
            <p className="text-gray-700">Total Item</p>
            <p className="text-gray-700">{totalItem}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-700">Subtotal</p>
            <p className="text-gray-700"> &#8377; {totalPrices.toFixed(2)}</p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            <div className="">
              <p className="mb-1 text-lg font-bold">
                &#8377; {totalPrices.toFixed(2)} INR
              </p>
              <p className="text-sm text-gray-700">including VAT</p>
            </div>
          </div>
          <Link to={"/checkout"}>
            {" "}
            <button className="mt-6 w-full rounded-md bg-orange-400 py-1.5 font-medium text-white hover:shadow-md">
              Check out
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

export default SubTotal;
