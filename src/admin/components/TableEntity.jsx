import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiUrl } from "../../assets/constants/ApiUrl";

const TableEntity = ({entityName, propertyNames }) => {
  const [data, setData] = useState([]);
  const [update, setUpdate] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}/${entityName}`);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [update]);

  const updateFunction = () => {
    setUpdate(update + 1);
  };

  const deleteClick = async (id) => {
    try {
      await fetch(`${apiUrl}/${entityName}/${id}`, {
        method: "DELETE",
      });
      updateFunction();
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  return (
    <div className="container-fluid">
      <h1 className="h3 mb-2 text-gray-800 mt-4">{entityName}</h1>

      <Link to={`/admin/${entityName}Add`} className="btn btn-primary">
        Add New
      </Link>

      <div className="card shadow mb-4 mt-3">
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered table-striped"
              id="dataTable"
              width="100%"
              cellSpacing="0"
            >
              <thead>
                <tr>
                  {propertyNames.map((propertyName) => (
                    <th key={propertyName}>{propertyName}</th>
                  ))}
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {data.length > 0 &&
                  data.map((item, index) => (
                    <tr key={index}>
                      {propertyNames.map((propertyName) => (
                        <React.Fragment key={propertyName}>
                          {propertyName === "ImgPath" ? (
                            <td key={propertyName}>
                              <img
                                src={
                                  item[
                                    propertyName.charAt(0).toLowerCase() +
                                      propertyName.slice(1)
                                  ]
                                }
                                alt="img"
                                width="100px"
                                height="100px"
                              />
                            </td>
                          ) : (
                            <td key={propertyName}>
                              {
                                item[
                                  propertyName.charAt(0).toLowerCase() +
                                    propertyName.slice(1)
                                ]
                              }
                            </td>
                          )}
                        </React.Fragment>
                      ))}
                      <td>
                        <Link
                          to={`/admin/${entityName}Edit/${item.id}`}
                          className="btn btn-success"
                        >
                          Edit
                        </Link>
                      </td>
                      <td>
                        <button
                          onClick={() => deleteClick(item.id)}
                          className="btn btn-danger"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableEntity;
