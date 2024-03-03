import React from "react";
import { useEffect, useState } from "react";
import TableEntity from "../components/TableEntity";
const AdvertisementBanner = () => {
  const [data, setData] = useState({});
  const [Update, setUpdate] = useState(0);

  const updateFunction = (x) => {
    setUpdate(Update + 1);
    console.log(x);
  };

  const deleteClick = async (id) => {
    try {
      await fetch(`https://localhost:7046/api/AdvertisementBanner/${id}`, {
        method: "DELETE",
      });
      updateFunction();
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://localhost:7046/api/AdvertisementBanner"
        );
        const jsonData = await response.json();
        if (jsonData) {
          // Check if jsonData is truthy before updating the state
          setData(jsonData);
          console.log(jsonData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [Update]);

  return (
     <TableEntity
      data={data}
      deleteClick={deleteClick}
      entityName="AdvertisementBanner"
    />
  );
};

export default AdvertisementBanner;
