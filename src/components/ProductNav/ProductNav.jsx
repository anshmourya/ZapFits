import React from "react";
import NavList from "../GeneralCoponents/nav/Navlist";

const ProductNav = ({ navData, lifun }) => {
  return (
    <>
      <nav className="my-5 ">
        <ul className="flex items-center justify-around flex-1 py-2 border-b content">
          {navData.map((data, index) => {
            return (
              <li
                key={index}
                className="flex items-center justify-around gap-2 text-sm font-semibold text-gray-500 transition-all cursor-pointer hover:text-orange-400"
                onClick={() => lifun(data)}
              >
                {data}
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default ProductNav;
