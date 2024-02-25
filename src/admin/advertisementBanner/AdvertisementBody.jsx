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
            <td>{x.title}</td>
            <td>{x.description}</td>
            <td>
              <img src={x.imgPath} alt="img" width="100px" height="100px" />
            </td>
            <td>{x.discount}</td>
            <td>
              <Link
                to={`AdvertisementBannerEdit/${x.id}`}
                className="btn btn-success"
              >
                Edit
              </Link>
            </td>
            <td>
              <button
                className="btn btn-danger"
                onClick={() => DeleteClick(x.id)}
              >
                Delete
              </button>
            </td>
          </>
        )}
      </tr>
    </tbody>
  );
};

export default AdvertisementBody;
