import React from "react";
import Nav from "../../components/GeneralCoponents/nav/Nav";
import Intro from "./Intro";
import ProductCard from "../../components/product/ProductCard";
import Modal from "../../components/Modal/Modal";

const SingleStrore = () => {
  return (
    <>
      <Nav />
      <div className="container content py-7">
        <Intro />

        <ProductCard />
        <Modal />
      </div>
    </>
  );
};

export default SingleStrore;
