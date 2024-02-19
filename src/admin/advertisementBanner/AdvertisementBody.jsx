import React from "react";
import { Link } from "react-router-dom";

const AdvertisementBody = ({ x, updateFunction }) => {
  const DeleteClick = async (id) => {
    try {
      const response = await fetch(
        `https://localhost:7046/api/AdvertisementBanner/${id}`,
        {
          method: "DELETE",
        }
      );
      const jsonData = await response.json();
      updateFunction(1);
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  return (
    <tbody>
      <tr>
        {x && (
          <>
            <th>{x.title}</th>
            <th>{x.description}</th>
            <th>{x.imgPath}</th>
            <th>{x.discount}</th>
            <th>
              <Link
                to={`AdvertisementBannerEdit/${x.id}`}
                className="btn btn-success"
              >
                Edit
              </Link>
            </th>
            <th>
              <button
                className="btn btn-danger"
                onClick={() => DeleteClick(x.id)}
              >
                Delete
              </button>
            </th>
          </>
        )}
      </tr>
    </tbody>
  );
};

export default AdvertisementBody;
