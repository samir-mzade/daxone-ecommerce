import React from "react";
import logo from "../../assets/images/logo-1.webp";

const Header = () => {
  return (
    <>
      <div class="main-body-overlay">
        <div class="body-overlay" id="body-overlay"></div>
      </div>
      {/* Header Area */}
      <header class="header">
        <nav class="nav" style={{ backgroundColor: "#EEF6FF" }}>
          <div class="inner-container custom-container container d-flex justify-content-between align-items-center">
            <div class="nav-logo">
              <img src={logo} alt="" />
            </div>
            <div class="nav-menu d-none d-sm-none d-md-none d-lg-block ">
              <ul class="nav-menu-list d-flex justify-content-between align-items-center gap-5 m-0">
                <li class="nav-menu-list-item">
                  <a href="index.html">Home</a>
                  <ul class="home-dropdown fs-6">
                    <li class="home-dropdown-list-item py-1">
                      <a href="#">Home Version 1</a>
                    </li>
                    <li class="home-dropdown-list-item py-1">
                      <a href="#">Home Version 2</a>
                    </li>
                    <li class="home-dropdown-list-item py-1">
                      <a href="#">Home Version 3</a>
                    </li>
                    <li class="home-dropdown-list-item py-1">
                      <a href="#">Home Version 4</a>
                    </li>
                    <li class="home-dropdown-list-item py-1">
                      <a href="#">Home Version 5</a>
                    </li>
                    <li class="home-dropdown-list-item py-1">
                      <a href="#">Home Version 6</a>
                    </li>
                    <li class="home-dropdown-list-item py-1">
                      <a href="#">Home Version 7</a>
                    </li>
                    <li class="home-dropdown-list-item py-1">
                      <a href="#">Home Version 8</a>
                    </li>
                    <li class="home-dropdown-list-item py-1">
                      <a href="#">Home Version 9</a>
                    </li>
                    <li class="home-dropdown-list-item py-1">
                      <a href="#">Home Version 10</a>
                    </li>
                  </ul>
                </li>
                <li class="nav-menu-list-item ">
                  <a href="shop.html">Shop</a>
                  <ul
                    class="home-dropdown d-flex justify-content-between gap-4 fs-6"
                    style={{ left: "-200px", width: " 60vw" }}
                  >
                    <div class="home-dropdown-list-item-shop  w-25">
                      Shop Layout
                      <hr />
                      <li class="home-dropdown-list-item py-1">
                        <a href="shop.html">Standard Style</a>
                      </li>
                      <li class="home-dropdown-list-item py-1">
                        <a href="#">Standard Style 2</a>
                      </li>
                      <li class="home-dropdown-list-item py-1">
                        <a href="#">Shop 2 Column</a>
                      </li>
                      <li class="home-dropdown-list-item py-1">
                        <a href="#">Shop No Sidebar</a>
                      </li>
                      <li class="home-dropdown-list-item py-1">
                        <a href="#">Shop Fullwide</a>
                      </li>
                    </div>
                    <div class="home-dropdown-list-item-shop w-25">
                      Shop Layout
                      <hr />
                      <li class="home-dropdown-list-item py-1">
                        <a href="#">Fullwide No Sidebar</a>
                      </li>
                      <li class="home-dropdown-list-item py-1">
                        <a href="#">List Style</a>
                      </li>
                      <li class="home-dropdown-list-item py-1">
                        <a href="#">List 2 Column</a>
                      </li>
                      <li class="home-dropdown-list-item py-1">
                        <a href="#">List No Sidebar</a>
                      </li>
                    </div>
                    <div class="home-dropdown-list-item-shop  w-25">
                      Product Details
                      <hr />
                      <li class="home-dropdown-list-item py-1">
                        <a href="shop.html">Standard Style</a>
                      </li>
                      <li class="home-dropdown-list-item py-1">
                        <a href="#">Standard Style 2</a>
                      </li>
                      <li class="home-dropdown-list-item py-1">
                        <a href="#">Tab Style 1</a>
                      </li>
                      <li class="home-dropdown-list-item py-1">
                        <a href="#">Tab Style 2</a>
                      </li>
                      <li class="home-dropdown-list-item py-1">
                        <a href="#">Tab Style 3</a>
                      </li>
                    </div>
                    <div class="home-dropdown-list-item-shop  w-25">
                      Product Details
                      <hr />
                      <li class="home-dropdown-list-item py-1">
                        <a href="#">Gallery Style</a>
                      </li>
                      <li class="home-dropdown-list-item py-1">
                        <a href="#">Sticky Style</a>
                      </li>
                      <li class="home-dropdown-list-item py-1">
                        <a href="#">Slider Style</a>
                      </li>
                      <li class="home-dropdown-list-item py-1">
                        <a href="#">Affiliate Style</a>
                      </li>
                    </div>
                  </ul>
                </li>
                <li class="nav-menu-list-item">
                  <a href="">Men</a>
                </li>
                <li class="nav-menu-list-item">
                  <a href="">Pages</a>
                  <ul class="home-dropdown fs-6">
                    <li class="home-dropdown-list-item py-1">
                      <a href="#">About Us</a>
                    </li>
                    <li class="home-dropdown-list-item py-1">
                      <a href="#">Cart Page</a>
                    </li>
                    <li class="home-dropdown-list-item py-1">
                      <a href="checkout.html">Checkout</a>
                    </li>
                    <li class="home-dropdown-list-item py-1">
                      <a href="wishlist.html">Wishlist</a>
                    </li>
                    <li class="home-dropdown-list-item py-1">
                      <a href="#">My Account</a>
                    </li>
                    <li class="home-dropdown-list-item py-1">
                      <a href="contact.html">Contact Us</a>
                    </li>
                    <li class="home-dropdown-list-item py-1">
                      <a href="login.html">Login/Register</a>
                    </li>
                  </ul>
                </li>
                <li class="nav-menu-list-item">
                  <a href="">Blog</a>
                  <ul class="home-dropdown fs-6">
                    <li class="home-dropdown-list-item py-1">
                      <a href="#">Standard Style</a>
                    </li>
                    <li class="home-dropdown-list-item py-1">
                      <a href="#">Blog 2 Column</a>
                    </li>
                    <li class="home-dropdown-list-item py-1">
                      <a href="#">Blog Sidebar</a>
                    </li>
                    <li class="home-dropdown-list-item py-1">
                      <a href="#">Blog Details</a>
                    </li>
                  </ul>
                </li>
                <li class="nav-menu-list-item">
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </div>
            <div class="nav-basket d-flex align-items-center gap-3">
              <a href="checkout.html" style={{ color: "black" }}>
                <i class="fa-solid fa-cart-shopping fs-5"></i>
              </a>
              <h5 id="items-count" class="m-0">
                2 Items
              </h5>
              <i class="fa-solid fa-magnifying-glass fs-4 d-none d-sm-none d-md-none d-lg-block"></i>
              <i
                id="burger-menu-icon"
                class="fa-solid fa-burger d-block d-sm-block d-md-block d-lg-none fs-4"
                style={{ color: "#FF6541" }}
              ></i>
              <div id="burger-menu" class="burger-menu">
                <div id="burger-menu-close" class="burger-menu-close">
                  <i class="fa-solid fa-xmark"></i>
                </div>
                <div class="burger-menu-input d-flex align-items-center">
                  <input
                    class="fs-8"
                    type="form form-control"
                    placeholder="Search entire store..."
                  />
                  <i class="fa-solid fa-magnifying-glass fs-6"></i>
                </div>
                <hr class="mt-5" />
                <div class="burger-menu-list-menu-container">
                  <ul class="burger-menu-list-menu d-flex flex-column gap-3">
                    <li
                      class="burger-menu-list-menu-item"
                      id="burger-menu-list-menu-item"
                    >
                      <div
                        id="burger-list-item"
                        class="burger-list-item w-100 d-flex justify-content-between align-items-center"
                      >
                        <a href="#">Home</a>
                        <span id="plus">
                          <i class="fa-solid fa-plus fs-6"></i>
                        </span>
                        <span class="plusMinusActive" id="minus">
                          <i class="fa-solid fa-minus"></i>
                        </span>
                      </div>
                      <div class="burger-dropdown " id="burger-dropdown">
                        <ul class="burger-dropdown-menu d-flex flex-column gap-2 p-4">
                          <li class="burger-dropdown-menu-list">
                            Home Version 1
                          </li>
                          <li class="burger-dropdown-menu-list">
                            Home Version 1
                          </li>
                          <li class="burger-dropdown-menu-list">
                            Home Version 1
                          </li>
                          <li class="burger-dropdown-menu-list">
                            Home Version 1
                          </li>
                          <li class="burger-dropdown-menu-list">
                            Home Version 1
                          </li>
                          <li class="burger-dropdown-menu-list">
                            Home Version 1
                          </li>
                          <li class="burger-dropdown-menu-list">
                            Home Version 1
                          </li>
                          <li class="burger-dropdown-menu-list">
                            Home Version 1
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="burger-menu-list-menu-item ">
                      <div
                        id="burger-list-item"
                        class="burger-list-item w-100 d-flex justify-content-between align-items-center"
                      >
                        <a href="#">Shop</a>
                        <span id="plus">
                          <i class="fa-solid fa-plus fs-6"></i>
                        </span>
                        <span class="plusMinusActive" id="minus">
                          <i class="fa-solid fa-minus"></i>
                        </span>
                      </div>
                      <div class="burger-dropdown">
                        <ul class="burger-dropdown-menu d-flex flex-column gap-2 p-4">
                          <li class="burger-dropdown-menu-list">
                            Home Version 1
                          </li>
                          <li class="burger-dropdown-menu-list">
                            Home Version 1
                          </li>
                          <li class="burger-dropdown-menu-list">
                            Home Version 1
                          </li>
                          <li class="burger-dropdown-menu-list">
                            Home Version 1
                          </li>
                          <li class="burger-dropdown-menu-list">
                            Home Version 1
                          </li>
                          <li class="burger-dropdown-menu-list">
                            Home Version 1
                          </li>
                          <li class="burger-dropdown-menu-list">
                            Home Version 1
                          </li>
                          <li class="burger-dropdown-menu-list">
                            Home Version 1
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="burger-menu-list-menu-item ">
                      <div
                        id="burger-list-item"
                        class="burger-list-item w-100 d-flex justify-content-between align-items-center"
                      >
                        <a href="#">Pages</a>
                        <span id="plus">
                          <i class="fa-solid fa-plus fs-6"></i>
                        </span>{" "}
                        <span class="plusMinusActive" id="minus">
                          <i class="fa-solid fa-minus"></i>
                        </span>
                      </div>
                      <div class="burger-dropdown">
                        <ul class="burger-dropdown-menu d-flex flex-column gap-2 p-4">
                          <li class="burger-dropdown-menu-list">
                            Home Version 1
                          </li>
                          <li class="burger-dropdown-menu-list">
                            Home Version 1
                          </li>
                          <li class="burger-dropdown-menu-list">
                            Home Version 1
                          </li>
                          <li class="burger-dropdown-menu-list">
                            Home Version 1
                          </li>
                          <li class="burger-dropdown-menu-list">
                            Home Version 1
                          </li>
                          <li class="burger-dropdown-menu-list">
                            Home Version 1
                          </li>
                          <li class="burger-dropdown-menu-list">
                            Home Version 1
                          </li>
                          <li class="burger-dropdown-menu-list">
                            Home Version 1
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="burger-menu-list-menu-item ">
                      <div
                        id="burger-list-item"
                        class="burger-list-item w-100 d-flex justify-content-between align-items-center"
                      >
                        <a href="#">Blog</a>
                        <span id="plus">
                          <i class="fa-solid fa-plus fs-6"></i>
                        </span>
                        <span class="plusMinusActive" id="minus">
                          <i class="fa-solid fa-minus"></i>
                        </span>
                      </div>
                      <div class="burger-dropdown">
                        <ul class="burger-dropdown-menu d-flex flex-column gap-2 p-4">
                          <li class="burger-dropdown-menu-list">
                            Home Version 1
                          </li>
                          <li class="burger-dropdown-menu-list">
                            Home Version 1
                          </li>
                          <li class="burger-dropdown-menu-list">
                            Home Version 1
                          </li>
                          <li class="burger-dropdown-menu-list">
                            Home Version 1
                          </li>
                          <li class="burger-dropdown-menu-list">
                            Home Version 1
                          </li>
                          <li class="burger-dropdown-menu-list">
                            Home Version 1
                          </li>
                          <li class="burger-dropdown-menu-list">
                            Home Version 1
                          </li>
                          <li class="burger-dropdown-menu-list">
                            Home Version 1
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li class="burger-menu-list-menu-item d-flex justify-content-between align-items-center">
                      <a href="#">Contact Us</a>
                    </li>
                  </ul>
                </div>
                <hr class="mt-5" />

                <div class="burger-menu-list-footer-container">
                  <ul class="burger-menu-list-footer d-flex flex-column gap-3">
                    <li class="burger-menu-list-menu-item d-flex justify-content-between align-items-center">
                      <a href="#">Language</a>
                      <span>
                        <i class="fa-solid fa-chevron-down"></i>
                      </span>
                    </li>
                    <li class="burger-menu-list-menu-item d-flex justify-content-between align-items-center">
                      <a href="#">Currency</a>
                      <span>
                        <i class="fa-solid fa-chevron-down"></i>
                      </span>
                    </li>
                    <li class="burger-menu-list-menu-item d-flex justify-content-between align-items-center">
                      <a href="#">My Account</a>
                      <span>
                        <i class="fa-solid fa-chevron-down"></i>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
