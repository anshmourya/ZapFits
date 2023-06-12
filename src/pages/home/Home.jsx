import { useContext } from "react";
import BannerSlider from "../../components/GeneralCoponents/banner/BannerSlider";
import Nav from "../../components/GeneralCoponents/nav/Nav";
import ProductNav from "../../components/ProductNav/ProductNav";
import ProductCard from "../../components/product/ProductCard";
import { DataContext } from "../../hooks/DataHook";

const Home = () => {
  const { ApplyFilter } = useContext(DataContext);
  const navData = [
    "relavance",
    "rating",
    "Cost: High to Low",
    "Cost: Low to High",
  ];
  return (
    <>
      <Nav />
      <BannerSlider />
      <ProductNav navData={navData} lifun={ApplyFilter} />
      <ProductCard />
    </>
  );
};

export default Home;
