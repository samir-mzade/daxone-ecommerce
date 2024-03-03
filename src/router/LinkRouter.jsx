import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../pages/HomePage/Home";
import ShopPage from "../pages/ShopPage/ShopPage";
import ContactPage from "../pages/ContactPage/ContactPage";
import { CheckoutPage } from "../pages/ChekoutPage/CheckoutPage";
import AdminPanelLayout from "../admin/adminPanelLayout/layout/Layout";
import Admin from "../admin/adminPanel/Admin";
import AdvertisementBanner from "../admin/advertisementBanner/AdvertisementBanner";
import AdvertisementBannerAdd from "../admin/advertisementBanner/AdvertisementBannerAdd";
import AdvertisementBannerEdit from "../admin/advertisementBanner/AdvertisementBannerEdit";
import Category from "../admin/category/Category";
import CategoryAdd from "../admin/category/CategoryAdd";
import CategoryEdit from "../admin/category/CategoryEdit";
import Color from "../admin/color/Color";
import ColorAdd from "../admin/color/ColorAdd";
import ColorEdit from "../admin/color/ColorEdit";
import Product from "../admin/product/Product";
import ProductAdd from "../admin/product/ProductAdd";
import ProductEdit from "../admin/product/ProductEdit";

const LinkRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="/" element={<Home />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Route>

      <Route path="/admin" element={<AdminPanelLayout />}>
        <Route index path="/admin" element={<Admin />} />
        <Route
          path="/admin/advertisementBanner"
          element={<AdvertisementBanner />}
        />
        <Route
          path="/admin/advertisementBannerAdd"
          element={<AdvertisementBannerAdd />}
        />
        <Route
          path="/admin/AdvertisementBannerEdit/:id"
          element={<AdvertisementBannerEdit />}
        />
        <Route path="/admin/Category" element={<Category />} />
        <Route path="/admin/CategoryAdd" element={<CategoryAdd />} />
        <Route path="/admin/CategoryEdit/:id" element={<CategoryEdit />} />

        <Route path="/admin/Color" element={<Color />} />
        <Route path="/admin/ColorAdd" element={<ColorAdd />} />
        <Route path="/admin/ColorEdit" element={<ColorEdit />} />

        <Route path="/admin/Product" element={<Product />} />
        <Route path="/admin/ProductAdd" element={<ProductAdd />} />
        <Route path="/admin/ProductEdit" element={<ProductEdit />} />
      </Route>
    </Routes>
  );
};

export default LinkRouter;
