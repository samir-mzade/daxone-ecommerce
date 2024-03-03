import React from "react";
import AddEntity from "../components/AddEntity";

const CategoryAdd = () => {
  const properties = ["name"];
  return (
    <AddEntity
      apiUrl={"https://localhost:7046/api"}
      entityName={"Category"}
      propertyNames={properties}
    />
  );
};

export default CategoryAdd;
