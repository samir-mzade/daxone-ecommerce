import React, { useRef, useEffect } from "react";

import { useNavigate } from "react-router-dom";

const Add = () => {
  const Title = useRef(null);
  const Discount = useRef(null);
  const ImgPath = useRef(null);
  const Description = useRef(null);

  const navigate = useNavigate();

  const addAdvertisementHandler = async () => {
    const model = {
      Title: Title.current.value,
      Discount: Discount.current.value,
      ImgPath: ImgPath.current.value,
      Description: Description.current.value,
    };

    try {
      const response = await fetch(
        "https://localhost:7046/api/AdvertisementBanner",
        {
          method: "POST",
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
      navigate("/admin/AdvertisementBanner");
    } catch (error) {
      console.error("Error adding advertisement:", error);
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
                  Add Advertisement
                </h3>
              </div>
              <div className="card-body">
                <div className="row mb-3">
                  <div className="col-md-12">
                    <div className="form mb-3 mb-md-3">
                      <label htmlFor="inputTitle">Title</label>
                      <input
                        type="text"
                        className="form-control"
                        id="title"
                        placeholder="enter Title"
                        ref={Title}
                      />
                      <span style={{ color: "red" }}></span>
                    </div>
                    <div className="form mb-3 mb-md-3">
                      <label htmlFor="inputDiscount">Discount </label>
                      <input
                        type="number"
                        className="form-control"
                        id="discount"
                        placeholder="enter Discount"
                        ref={Discount}
                      />
                      <span style={{ color: "red" }}></span>
                    </div>
                    <div className="form mb-3 mb-md-3">
                      <label htmlFor="inputLeaveDate">ImgPath</label>
                      <input
                        type="file"
                        className="form-control"
                        id="imgPath"
                        placeholder="enter ImgPath"
                        ref={ImgPath}
                      />
                      <span style={{ color: "red" }}></span>
                    </div>
                    <div className="form mb-3 mb-md-3">
                      <label htmlFor="inputDescription">Description </label>
                      <textarea
                        type="text"
                        className="form-control"
                        id="description"
                        placeholder="enter Description"
                        ref={Description}
                      ></textarea>
                      <span style={{ color: "red" }}></span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 mb-0">
                  <button
                    onClick={addAdvertisementHandler}
                    className="btn btn-success"
                  >
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

export default Add;
