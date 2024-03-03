import React, { useEffect, useState } from "react";
import TableEntity from "../components/TableEntity";

const Category = () => {
  const [data, setData] = useState([]);
  const [update, setUpdate] = useState(0);

  const updateFunction = () => {
    setUpdate(update + 1);
  };

  const deleteClick = async (id) => {
    try {
      await fetch(`https://localhost:7046/api/Category/${id}`, {
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
        const response = await fetch("https://localhost:7046/api/Category");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [update]);

  return (
    <TableEntity
      data={data}
      deleteClick={deleteClick}
      entityName="Category"
    />
  );
};

export default Category;
