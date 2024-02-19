import React from "react";
import { Link } from "react-router-dom";

const Aside = () => {
  return (
    <div class="sidebar sidebar-dark sidebar-fixed" id="sidebar">
      <div class="sidebar-brand d-none d-md-flex">
        <h2>DAXONE</h2>
      </div>
      <ul class="sidebar-nav" data-coreui="navigation" data-simplebar="">
        <li class="nav-item">
          <Link class="nav-link" to="/admin">
            <i class="fa-solid fa-user-tie pe-3"></i>Admin
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="AdvertisementBanner">
            <i class="fa-solid fa-rectangle-ad pe-3"></i>Advertisement Banner
          </Link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="index.html">
            <i class="fa-solid fa-layer-group pe-3"></i>
            Category
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="index.html">
            <i class="fa-solid fa-palette pe-3"></i>
            Color
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="index.html">
            <i class="fa-solid fa-chair pe-3"></i>
            Product
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="index.html">
            <i class="fa-solid fa-car-battery pe-3"></i>
            ProductStatus
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="index.html">
            <i class="fa-solid fa-tags pe-3"></i>
            SeasonDiscount
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="index.html">
            <i class="fa-solid fa-expand pe-3"></i>
            Size
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="index.html">
            <i class="fa-solid fa-sitemap pe-3"></i>
            SubCategory
          </a>
        </li>
      </ul>
      <button
        class="sidebar-toggler"
        type="button"
        data-coreui-toggle="unfoldable"
      ></button>
    </div>
  );
};

export default Aside;
