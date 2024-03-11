import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { apiUrl } from "../../assets/constants/ApiUrl";

const AddEntity = ({ entityName, propertyNames }) => {
  const navigate = useNavigate();

  const initialFormData = propertyNames.reduce((acc, propertyName) => {
    acc[propertyName] = "";
    return acc;
  }, {});

  const [formData, setFormData] = useState(initialFormData);
  const [validationErrors, setValidationErrors] = useState({});

  const handleInput = (e) => {
    setFormData((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${apiUrl}/${entityName}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const res = await response.json();
        if (!res.success) {
          const updatedErrorMessages = {};
          propertyNames.forEach((prop) => {
            const dataIndex = res.data.indexOf(prop);
            if (dataIndex !== -1) {
              updatedErrorMessages[prop] = res.messages[dataIndex];
            } else {
              updatedErrorMessages[prop] = "";
            }
          });
          setValidationErrors((prevValues) => ({
            ...prevValues,
            ...updatedErrorMessages,
          }));
        } else {
          navigate(`/admin/${entityName}`);
          console.log("Data added successfully");
        }
      } else {
        console.error("Error adding data:", response.statusText);
      }
    } catch (error) {
      console.error("Error adding data:", error);
    }
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="card shadow-lg border-0 rounded-lg mt-5">
              <div className="card-header">
                <h3 className="text-center font-weight-light my-4">
                  {`Add ${entityName}`}
                </h3>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="row mb-3">
                    <div className="col-md-12">
                      {propertyNames.map((propertyName) => (
                        <div className="form mb-3 mb-md-3" key={propertyName}>
                          <label htmlFor={propertyName}>{propertyName}</label>
                          {propertyName === "ImgPath" ? (
                            <input
                              type="file"
                              id={propertyName}
                              name={propertyName}
                              value={
                                formData[
                                  propertyName.charAt(0).toLowerCase() +
                                    propertyName.slice(1)
                                ]
                              }
                              onChange={handleInput}
                              className="form-control"
                              placeholder={`enter ${propertyName}`}
                            />
                          ) : propertyName === "Discount" ||
                            propertyName === "StockCount" ||
                            propertyName === "Price" ||
                            propertyName === "SalePrice" ||
                            propertyName === "CategoryID" ? (
                            <input
                              type="number"
                              id={propertyName}
                              name={propertyName}
                              value={
                                formData[
                                  propertyName.charAt(0).toLowerCase() +
                                    propertyName.slice(1)
                                ]
                              }
                              onChange={handleInput}
                              className="form-control"
                              placeholder={`enter ${propertyName}`}
                            />
                          ) : (
                            <input
                              type="text"
                              id={propertyName}
                              name={propertyName}
                              value={
                                formData[
                                  propertyName.charAt(0).toLowerCase() +
                                    propertyName.slice(1)
                                ]
                              }
                              onChange={handleInput}
                              className="form-control"
                              placeholder={`enter ${propertyName}`}
                            />
                          )}
                          <span style={{ color: "red" }}>
                            {validationErrors[propertyName]}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 mb-0">
                    <button className="btn btn-success" type="submit">
                      Save
                    </button>
                    <Link
                      to={`/admin/${entityName}`}
                      className="btn btn-danger ms-3"
                    >
                      Cancel
                    </Link>
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
