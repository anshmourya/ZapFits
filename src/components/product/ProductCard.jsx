import products from "../../Data.json";
import { useContext, useState, useEffect } from "react";
import { CartData } from "../../hooks/CartHook";
import Rating from "../GeneralCoponents/buttons/Rating";
import { DataContext } from "../../hooks/DataHook";

const ProductCard = () => {
  const { addToCart, setopenModal } = useContext(CartData);
  const { storeFilterData } = useContext(DataContext);

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("allproducts")) || products
  );

  useEffect(() => {
    if (data.length === 0) {
      const fetchData = async () => {
        setLoading(true);
        setData(products);
        localStorage.setItem("allproducts", JSON.stringify(products));
        setLoading(false);
      };
      fetchData();
    } else {
      localStorage.setItem("allproducts", JSON.stringify(products));
      setLoading(false);
    }
  }, [data]);

  const dataToMap = storeFilterData || data;

  return !loading && data ? (
    <div className="grid grid-cols-4 content">
      {dataToMap.map((product) => (
        <div
          key={product.id}
          className="max-w-[296px] max-h-[400px] p-3 product-card border border-transparent transition-all cursor-pointer my-3"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-[254px] h-[160px] object-contain m-auto rounded-md"
          />
          <span className="block my-2 text-lg font-semibold">
            {product.title}
          </span>
          <span className="block mb-5 text-sm text-gray-400">
            Lorem ipsum dolor, sit amet consectetur
          </span>
          <div className="flex items-center justify-between text-sm font-semibold text-gray-600">
            <Rating rating={product.rating.rate} />
            <span>{Math.floor(Math.random() * 31) + 50}%</span>{" "}
            <span>{product.rating.count} Stock</span>{" "}
          </div>
          <button
            className="text-blue-600 font-bold border-t w-[100%] my-6 p-2 cart transition-all"
            onClick={() => {
              addToCart(product);
              setopenModal(true);
            }}
          >
            ADD TO CART
          </button>
        </div>
      ))}
      {console.log(data)}
    </div>
  ) : (
    <div>loading...</div>
  );
};

export default ProductCard;
