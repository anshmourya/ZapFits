import React from "react";

const Intro = () => {
  return (
    <>
      <div className="flex items-center justify-between ">
        <div>
          <h1 className="my-3 text-lg font-bold text-gray-700">
            Cafe Sifarish (Halal)
          </h1>
          <span className="text-sm font-semibold text-gray-400">23 Km</span>
          <span className="block text-sm font-semibold text-gray-400">
            200 In stock
          </span>
        </div>
        <p className="bg-orange-500 text-white text-sm font-semibold inline-flex items-center p-1.5 rounded">
          8.7
        </p>
      </div>
      <div className="w-full my-3 tracking-[30px] border border-dashed "></div>
    </>
  );
};

export default Intro;
