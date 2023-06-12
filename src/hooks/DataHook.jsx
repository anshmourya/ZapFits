import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [storeFilterData, setstoreFilterData] = useState();
  const Data = JSON.parse(localStorage.getItem("allproducts"));

  // Apply filter based on the selected filter type
  const ApplyFilter = (filterType) => {
    console.log(filterType);
    if (Data && filterType) {
      // Create a copy of the data array
      const sortedData = [...Data];

      if (filterType === "Cost: Low to High") {
        sortedData.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
      } else if (filterType === "Cost: High to Low") {
        sortedData.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
      } else if (filterType === "rating") {
        sortedData.sort(
          (a, b) => parseFloat(b.rating.rate) - parseFloat(a.rating.rate)
        );
      }

      setstoreFilterData(sortedData);
    }
  };

  // const AddtoCart = (id) => {};

  return (
    <DataContext.Provider value={{ ApplyFilter, storeFilterData }}>
      {children}
    </DataContext.Provider>
  );
};
