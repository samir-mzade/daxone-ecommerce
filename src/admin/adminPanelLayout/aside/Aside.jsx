import React from "react";
import { Link } from "react-router-dom";

const Aside = () => {
  return (
    <div className="sidebar sidebar-dark sidebar-fixed" id="sidebar">
      <div className="sidebar-brand d-none d-md-flex">
        <h2>DAXONE</h2>
      </div>
      <ul className="sidebar-nav" data-coreui="navigation" data-simplebar="">
        <li className="nav-item">
          <Link className="nav-link" to="/admin">
            <i className="fa-solid fa-user-tie pe-3"></i>Admin
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="AdvertisementBanner">
            <i className="fa-solid fa-rectangle-ad pe-3"></i>Advertisement
            Banner
          </Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="index.html">
            <i className="fa-solid fa-layer-group pe-3"></i>
            Category
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="index.html">
            <i className="fa-solid fa-palette pe-3"></i>
            Color
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="index.html">
            <i className="fa-solid fa-chair pe-3"></i>
            Product
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="index.html">
            <i className="fa-solid fa-car-battery pe-3"></i>
            ProductStatus
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="index.html">
            <i className="fa-solid fa-tags pe-3"></i>
            SeasonDiscount
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="index.html">
            <i className="fa-solid fa-expand pe-3"></i>
            Size
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="index.html">
            <i className="fa-solid fa-sitemap pe-3"></i>
            SubCategory
          </a>
        </li>
      </ul>
      <button
        className="sidebar-toggler"
        type="button"
        data-coreui-toggle="unfoldable"
      ></button>
    </div>
  );
};

export default Aside;
