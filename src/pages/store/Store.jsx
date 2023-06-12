import { useContext } from "react";
import { StoreData } from "../../hooks/StoreHook";
import Nav from "../../components/GeneralCoponents/nav/Nav";
import StoreCard from "../../components/store/StoreCard";
import ProductNav from "../../components/ProductNav/ProductNav";
import BannerSlider from "../../components/GeneralCoponents/banner/BannerSlider";

const Store = () => {
  const navData = ["Near to Far", "Far to Near", "Asc to Desc", "Desc to Asc"];
  const { store, ApplyFilter, storeFilterData } = useContext(StoreData);
  const dataToMap = storeFilterData || store;
  return (
    <>
      <Nav />
      <BannerSlider />
      <ProductNav navData={navData} lifun={ApplyFilter} />
      <div className="flex flex-col items-center justify-center content">
        {dataToMap.map((item) => {
          return <StoreCard key={item.id} data={item} />;
        })}
      </div>
    </>
  );
};

export default Store;
