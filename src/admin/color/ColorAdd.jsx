import React from "react";
import AddEntity from "../components/AddEntity";

const ColorAdd = () => {
  const properties = ["name", "colorCode"];
  return (
    <AddEntity
      apiUrl={"https://localhost:7046/api"}
      entityName={"Color"}
      propertyNames={properties}
    />
  );
};

export default ColorAdd;
