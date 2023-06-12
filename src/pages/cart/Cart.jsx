import { useContext } from "react";
import { CartData } from "../../hooks/CartHook";

import CartCard from "../../components/Cart/CartCard";
import SubTotal from "../../components/Cart/SubTotal";

export const Cart = () => {
  const { carItems } = useContext(CartData);
  return (
    <>
      {carItems && (
        <div className="sbg-gray-100 container content relative">
          <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
          <div className="flex justify-around items-start">
            <div className="a flex-1">
              {carItems.map((item) => {
                return <CartCard key={item.id} data={item} />;
              })}
            </div>

            <SubTotal />
          </div>
        </div>
      )}
    </>
  );
};
