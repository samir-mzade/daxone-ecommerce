import React from "react";
import AddEntity from "../components/AddEntity";

const ProductAdd = () => {
  const properties = [
    "name",
    "categoryID",
    "isSale",
    "price",
    "salePrice",
    "imgPath",
    "model",
    "stockCount",
    "description",
  ];
  return (
    <AddEntity
      apiUrl={"https://localhost:7046/api"}
      entityName={"Product"}
      propertyNames={properties}
    />
  );
};

export default ProductAdd;
