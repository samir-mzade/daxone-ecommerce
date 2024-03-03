import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TableEntity = ({ data, deleteClick, entityName }) => {
  const [propertyNames, setPropertyNames] = useState([]);

  useEffect(() => {
    if (data.length > 0) {
      setPropertyNames(
        Object.keys(data[0]).filter(
          (name) => name !== "id" && name !== "deleted"
        )
      );
    }
  }, [data]);

  return (
    <div className="container-fluid">
      <h1 className="h3 mb-2 text-gray-800 mt-4">{entityName}</h1>

      <Link
        to={`/admin/${entityName}Add`} // Assuming your route for adding entities is "/admin/{entityName}Add"
        className="btn btn-primary"
      >
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
                    <th key={propertyName}>
                      {propertyName.charAt(0).toUpperCase() +
                        propertyName.slice(1)}
                    </th>
                  ))}
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {data.length > 0 &&
                  data.map((item, index) => (
                    <tr key={index}>
                      {propertyNames.map((propertyName, idx) => (
                        <React.Fragment key={idx}>
                          {propertyName === "imgPath" ? (
                            <td key={idx}>
                              <img
                                src={item[propertyName]}
                                alt="img"
                                width="100px"
                                height="100px"
                              />
                            </td>
                          ) : (
                            <td key={idx}>{item[propertyName]}</td>
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
