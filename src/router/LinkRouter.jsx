import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../pages/HomePage/Home";
import ShopPage from "../pages/ShopPage/ShopPage";
import ContactPage from '../pages/ContactPage/ContactPage'
import { CheckoutPage } from '../pages/ChekoutPage/CheckoutPage'
import AdminPanelLayout from "../admin/adminPanelLayout/layout/Layout";
import Admin from "../admin/adminPanel/Admin";
import AdvertisementBanner from "../admin/advertisementBanner/AdvertisementBanner";
import AdvertisementBannerAdd from "../admin/advertisementBanner/AdvertisementBannerAdd";
import AdvertisementBannerEdit from "../admin/advertisementBanner/AdvertisementBannerEdit";
import Crud from "../admin/advertisementBanner/Crud";

const LinkRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="/" element={<Home />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path='/contact' element={ <ContactPage/>} />
        <Route path='/checkout' element={ <CheckoutPage/>} />
      </Route>

      <Route path="/admin" element={<AdminPanelLayout />}>
        <Route index path="/admin" element={<Admin />} />
        <Route
          path="/admin/advertisementBanner"
          element={<AdvertisementBanner />}
        />
        <Route
          path="/admin/advertisementBanner/AdvertisementBannerAdd"
          element={<AdvertisementBannerAdd />}
        />
        <Route
          path="/admin/advertisementBanner/AdvertisementBannerEdit/:id"
          element={<AdvertisementBannerEdit />}
        />
        <Route path="/admin/advertisementBanner/Crud" element={<Crud />} />
      </Route>
    </Routes>
  );
};

export default LinkRouter;
