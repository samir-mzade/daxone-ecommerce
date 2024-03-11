import React from "react";
import TableEntity from "../components/TableEntity";

const Product = () => {
  const properties = [
    "Name",
    "CategoryID",
    "IsSale",
    "Price",
    "SalePrice",
    "ImgPath",
    "Model",
    "StockCount",
    "Description",
  ];
  return <TableEntity entityName={"Product"} propertyNames={properties} />;
};

export default Product;
