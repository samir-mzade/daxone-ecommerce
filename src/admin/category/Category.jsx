import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Category = () => {
  const [data, setData] = useState([]);
  const [update, setUpdate] = useState(0);

  const updateFunction = () => {
    setUpdate(update + 1);
  };

  const deleteClick = async (id) => {
    try {
      await fetch(`https://localhost:7046/api/Category/${id}`, {
        method: "DELETE",
      });
      updateFunction();
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://localhost:7046/api/Category");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [update]);

  return (
    <div className="container-fluid">
      <h1 className="h3 mb-2 text-gray-800 mt-4">Category</h1>

      <Link to={"CategoryAdd"} className="btn btn-primary">
        Add New
      </Link>

      <div className="card shadow mb-4 mt-3">
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered table-striped"
              id="dataTable"
            >
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {data.map((x) => (
                  <tr key={x.id}>
                    <td>{x.name}</td>
                    <td>
                      <Link
                        to={`CategoryEdit/${x.id}`}
                        className="btn btn-success"
                      >
                        Edit
                      </Link>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteClick(x.id)}
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

export default Category;
