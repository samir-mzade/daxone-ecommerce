import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdvertisementBody from "./AdvertisementBody";
const AdvertisementBanner = (ArrayBody) => {
  const [data, setData] = useState({});
  const [Update, setUpdate] = useState(0);

  const updateFunction = (x) => {
    setUpdate(Update + 1);
    console.log(x);
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
    <div className="container-fluid">
      <h1 className="h3 mb-2 text-gray-800 mt-4">Advertisement Banner</h1>

      <Link to={"AdvertisementBannerAdd"} className="btn btn-primary">
        Add New
      </Link>

      <div className="card shadow mb-4 mt-3">
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered table-striped "
              id="dataTable"
              width="100%"
              cellSpacing="0"
            >
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>ImgPath</th>
                  <th>Discount</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              {data.length > 0 &&
                data.map((x) => {
                  return (
                    <AdvertisementBody x={x} updateFunction={updateFunction} />
                  );
                })}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertisementBanner;
