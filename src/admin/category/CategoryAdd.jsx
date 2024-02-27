import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CategoryAdd = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
  });

  const [data, setData] = useState([]);

  const { name } = formData;

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      axios
        .post("https://localhost:7046/api/Category", formData)
        .then((res) => {
          setData([...data, res.data]);
          setFormData({
            name: "",
          });
        })
        .catch((err) => console.log(err));
      navigate("/admin/Category");
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
                  Add Category
                </h3>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="row mb-3">
                    <div className="col-md-12">
                      <div className="form mb-3 mb-md-3">
                        <label htmlFor="inputTitle">Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="enter Name"
                          onChange={handleInput}
                          value={name}
                          name="name"
                        />
                        <span style={{ color: "red" }}></span>
                      </div>
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

export default CategoryAdd;
