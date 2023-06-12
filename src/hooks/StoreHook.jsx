import Data from "../store.json";
import { createContext, useState } from "react";

export const StoreData = createContext();

export const StoreDataProvider = ({ children }) => {
  const [reviewModal, setReviewModal] = useState(false);

  const [store, setStore] = useState(Data);
  const [storeFilterData, setstoreFilterData] = useState();

  // Apply filter based on the selected filter type
  const ApplyFilter = (filterType) => {
    console.log(filterType);
    if (store && filterType) {
      // Create a copy of the data array
      const sortedData = [...store];

      if (filterType === "Near to Far") {
        sortedData.sort((a, b) => parseFloat(a.km) - parseFloat(b.km));
      } else if (filterType === "Far to Near") {
        sortedData.sort((a, b) => parseFloat(b.km) - parseFloat(a.km));
      } else if (filterType === "Asc to Desc") {
        sortedData.sort((a, b) =>
          a.storeName.toLowerCase() > b.storeName.toLowerCase() ? 1 : -1
        );
      } else if (filterType === "Desc to Asc") {
        sortedData.sort((a, b) =>
          a.storeName.toLowerCase() < b.storeName.toLowerCase() ? 1 : -1
        );
      }

      setstoreFilterData(sortedData);
    }
  };

  return (
    <StoreData.Provider
      value={{
        store,
        ApplyFilter,
        reviewModal,
        setReviewModal,
        storeFilterData,
      }}
    >
      {children}
    </StoreData.Provider>
  );
};
