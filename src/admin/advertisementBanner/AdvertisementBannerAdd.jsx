// import React, { useRef, useEffect } from "react";
// import axios, { Axios } from "axios";
// import { useState } from "react";

// import { useNavigate } from "react-router-dom";

// const Add = () => {
//   const navigate = useNavigate();
//   const [post, setPost] = useState({
//     title: "",
//     discount: "",
//     imgpath: "",
//     description: "",
//   });
//   const handleInput = (event) => {
//     // console.log(event.target.name);
//     // console.log(event.target.value);
//     setPost({ ...post, [event.target.name]: event.target.value });

//     console.log(post);
//   };

//   function handleSubmit(event) {
//     event.preventDefault();
//     axios
//       .post("https://localhost:7046/api/AdvertisementBanner", { post })
//       .then((response) => console.log(response))
//       .catch((err) => console.log(err));
//     navigate("/admin/AdvertisementBanner");
//   }

//   const api = axios.create({
//     baseURL: "https://localhost:7046/api/AdvertisementBanner",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//   });

//   return (
//     <>
//       <div className="container">
//         <div className="row justify-content-center">
//           <div className="col-lg-7">
//             <div className="card shadow-lg border-0 rounded-lg mt-5">
//               <div className="card-header">
//                 <h3 className="text-center font-weight-light my-4">
//                   Add Advertisement
//                 </h3>
//               </div>
//               <div className="card-body">
//                 <form method="post" onSubmit={handleSubmit}>
//                   <div className="row mb-3">
//                     <div className="col-md-12">
//                       <div className="form mb-3 mb-md-3">
//                         <label htmlFor="inputTitle">Title</label>
//                         <input
//                           type="text"
//                           className="form-control"
//                           id="title"
//                           placeholder="enter Title"
//                           onChange={handleInput}
//                           name="title"
//                           // ref={Title}
//                         />
//                         <span style={{ color: "red" }}></span>
//                       </div>
//                       <div className="form mb-3 mb-md-3">
//                         <label htmlFor="inputDiscount">Discount </label>
//                         <input
//                           type="number"
//                           className="form-control"
//                           id="discount"
//                           placeholder="enter Discount"
//                           onChange={handleInput}
//                           name="discount"
//                           // ref={Discount}
//                         />
//                         <span style={{ color: "red" }}></span>
//                       </div>
//                       <div className="form mb-3 mb-md-3">
//                         <label htmlFor="inputLeaveDate">ImgPath</label>
//                         <input
//                           type="file"
//                           className="form-control"
//                           id="imgPath"
//                           placeholder="enter ImgPath"
//                           onChange={handleInput}
//                           name="imgpath"
//                           // ref={ImgPath}
//                         />
//                         <span style={{ color: "red" }}></span>
//                       </div>
//                       <div className="form mb-3 mb-md-3">
//                         <label htmlFor="inputDescription">Description </label>
//                         <textarea
//                           type="text"
//                           className="form-control"
//                           id="description"
//                           placeholder="enter Description"
//                           onChange={handleInput}
//                           name="description"
//                           // ref={Description}
//                         ></textarea>
//                         <span style={{ color: "red" }}></span>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="mt-4 mb-0">
//                     <button
//                       // onClick={addAdvertisementHandler}
//                       className="btn btn-success"
//                     >
//                       Save
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Add;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    discount: "",
    imgpath: "",
    description: "",
  });

  const [data, setData] = useState([]);

  const { title, discount, imgpath, description } = formData;

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && discount && imgpath && description) {
      axios
        .post("https://localhost:7046/api/AdvertisementBanner", formData)
        .then((res) => {
          setData([...data, res.data]);
          setFormData({
            title: "",
            discount: "",
            imgpath: "",
            description: "",
          });
        })
        .catch((err) => console.log(err));
      navigate("/admin/AdvertisementBanner");
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
                <form onSubmit={handleSubmit}>
                  <div className="row mb-3">
                    <div className="col-md-12">
                      <div className="form mb-3 mb-md-3">
                        <label htmlFor="inputTitle">Title</label>
                        <input
                          type="text"
                          className="form-control"
                          id="title"
                          placeholder="enter Title"
                          onChange={handleInput}
                          value={title}
                          name="title"
                        />
                        <span style={{ color: "red" }}></span>
                      </div>
                      <div className="form mb-3 mb-md-3">
                        <label htmlFor="inputDiscount">Discount</label>
                        <input
                          type="number"
                          className="form-control"
                          id="discount"
                          placeholder="enter Discount"
                          onChange={handleInput}
                          value={discount}
                          name="discount"
                        />
                        <span style={{ color: "red" }}></span>
                      </div>
                      <div className="form mb-3 mb-md-3">
                        <label htmlFor="inputImgPath">ImgPath</label>
                        <input
                          type="file"
                          className="form-control"
                          id="imgPath"
                          onChange={handleInput}
                          value={imgpath}
                          name="imgpath"
                        />
                        <span style={{ color: "red" }}></span>
                      </div>
                      <div className="form mb-3 mb-md-3">
                        <label htmlFor="inputDescription">Description</label>
                        <textarea
                          className="form-control"
                          id="description"
                          placeholder="enter Description"
                          onChange={handleInput}
                          value={description}
                          name="description"
                        ></textarea>
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

export default Add;
