import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddEntity = ({ apiUrl, entityName, propertyNames }) => {
  const navigate = useNavigate();

  const initialFormData = propertyNames.reduce((acc, propertyName) => {
    acc[propertyName] = "";
    return acc;
  }, {});

  const [formData, setFormData] = useState(initialFormData);
  const [validationErrors, setValidationErrors] = useState({});

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${apiUrl}/${entityName}`, formData)
      .then(() => {
        navigate(`/admin/${entityName}`);
      })
      .catch((err) => {
        if (err.response.data && err.response.status === 400) {
          setValidationErrors(err.response.data.errors);
        } else {
          console.error("Error:", err.message);
        }
      });
  };

  useEffect(() => {
    console.log(validationErrors); // Log validationErrors when it changes
  }, [validationErrors]);

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="card shadow-lg border-0 rounded-lg mt-5">
              <div className="card-header">
                <h3 className="text-center font-weight-light my-4">
                  {`Add${entityName}`}
                </h3>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="row mb-3">
                    <div className="col-md-12">
                      {propertyNames.map((propertyName) => (
                        <div className="form mb-3 mb-md-3" key={propertyName}>
                          <label htmlFor={propertyName}>
                            {propertyName.charAt(0).toUpperCase() +
                              propertyName.slice(1)}
                          </label>
                          {propertyName === "imgPath" ? (
                            <input
                              type="file"
                              id={propertyName}
                              name={propertyName}
                              value={formData[propertyName]}
                              onChange={handleInput}
                              className="form-control"
                              placeholder={`enter ${propertyName}`}
                            />
                          ) : propertyName === "discount" ||
                            propertyName === "stockCount" ||
                            propertyName === "price" ||
                            propertyName === "salePrice" ? (
                            <input
                              type="number"
                              id={propertyName}
                              name={propertyName}
                              value={formData[propertyName]}
                              onChange={handleInput}
                              className="form-control"
                              placeholder={`enter ${propertyName}`}
                            />
                          ) : (
                            <input
                              type="text"
                              id={propertyName}
                              name={propertyName}
                              value={formData[propertyName]}
                              onChange={handleInput}
                              className="form-control"
                              placeholder={`enter ${propertyName}`}
                            />
                          )}
                          {validationErrors[propertyName] && (
                            <span style={{ color: "red" }}>
                              {validationErrors[propertyName]}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 mb-0">
                    <button className="btn btn-success" type="submit">
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddEntity;
