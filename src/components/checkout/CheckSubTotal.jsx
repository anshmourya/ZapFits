import { useState, useEffect } from "react";

const CheckSubTotal = ({ carItems }) => {
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
      {" "}
      <div className="py-2 mt-6 border-t border-b">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-gray-900">Subtotal</p>
          <p className="font-semibold text-gray-900">&#8377; {totalPrices}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-gray-900">Shipping</p>
          <p className="font-semibold text-gray-900">&#8377; 8.00</p>
        </div>
      </div>
      <div className="flex items-center justify-between mt-6">
        <p className="text-sm font-medium text-gray-900">Total</p>
        <p className="text-2xl font-semibold text-gray-900">
          &#8377; {totalPrices + 8}
        </p>
      </div>
    </>
  );
};

export default CheckSubTotal;
