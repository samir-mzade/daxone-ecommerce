import React from "react";
import AddEntity from "../components/AddEntity";

const Add = () => {
 const properties = ["title", "imgPath", "discount", "description"];
 return (
   <AddEntity
     apiUrl={"https://localhost:7046/api"}
     entityName={"AdvertisementBanner"}
     propertyNames={properties}
   />
 );
};

export default Add;
