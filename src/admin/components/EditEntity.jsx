import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const EditEntity = ({apiUrl, entityName, propertyNames}) => {
  // Get the ID parameter from the URL
  const { id } = useParams();

  const navigate = useNavigate();

  const [data, setData] = useState({});

  const Name = useRef(null);

  const editHandler = async () => {
    const model = {
      Name: Name.current.value,
    };

    try {
      const response = await fetch(
        `${apiUrl}/${entityName}/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(model),
        }
      );

      if (response.ok) {
        const jsonData = await response.json();
        console.log(jsonData); // Optionally, do something with the response data
      } else {
        console.error(
          "Failed to add advertisement. Server responded with status:",
          response.status
        );
      }
      navigate("/admin/Category");
    } catch (error) {
      console.error("Error adding advertisement:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${apiUrl}/${id}`
        );

        if (response.ok) {
          const jsonData = await response.json();
          setData(jsonData);
          Name.current.value = jsonData.name;
        } else {
          console.error(
            "Failed to fetch advertisement. Server responded with status:",
            response.status
          );
        }
      } catch (error) {
        console.error("Error fetching advertisement:", error);
      }
    };

    fetchData();
  }, [id]); // Include 'id' as a dependency

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="card shadow-lg border-0 rounded-lg mt-5">
              <div className="card-header">
                <h3 className="text-center font-weight-light my-4">
                  Edit Category
                </h3>
              </div>
              <div className="card-body">
                <div className="row mb-3">
                  <div className="col-md-12">
                    <div className="form mb-3 mb-md-3">
                      <label htmlFor="inputTitle">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="enter Name"
                        ref={Name}
                      />
                      <span style={{ color: "red" }}></span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 mb-0">
                  <button onClick={editHandler} className="btn btn-success">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditEntity;
