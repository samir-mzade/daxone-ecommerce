import React, { useState } from "react";
import logo from "../../assets/images/logo-1.webp";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu.jsx";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const jwt = localStorage.getItem("token");

  const openBurger = () => {
    setIsOpen(true);
  };

  const closeBurger = () => {
    setIsOpen(false);
  };

  const handleLogOut = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <>
      <div className="main-body-overlay">
        <div className="body-overlay" id="body-overlay"></div>
      </div>
      {/* Header Area */}
      <header class="headerMain">
        <nav class="nav second">
          <div class="inner-container container d-flex justify-content-between align-items-center">
            <div class="nav-logo">
              <img src={logo} alt="" />
            </div>
            <div class="nav-menu d-none d-sm-none d-md-none d-lg-block ">
              <ul class="nav-menu-list d-flex justify-content-between align-items-center gap-5 m-0">
                <li class="nav-menu-list-item">
                  <Link to={"/"}>Home</Link>
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
                  <Link to={"shop"}>Shop</Link>
                  <ul
                    class="home-dropdown d-flex justify-content-between gap-4 fs-6"
                    style={{ left: "-200px", width: "60vw" }}
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
                      <Link to={"checkout"}>Checkout</Link>
                    </li>
                    <li class="home-dropdown-list-item py-1">
                      <a href="wishlist.html">Wishlist</a>
                    </li>
                    <li class="home-dropdown-list-item py-1">
                      <a href="#">My Account</a>
                    </li>
                    <li class="home-dropdown-list-item py-1">
                      <Link to={"contact"}>Contact Us</Link>
                    </li>
                    <li class="home-dropdown-list-item py-1">
                      {/* <a href="#">Login/Register</a> */}
                      {!jwt ? (
                        <div class="d-flex flex-column">
                          <Link to={"login"}>Login</Link>
                          <Link to={"register"}>Sign up</Link>
                        </div>
                      ) : (
                        <div class="d-flex flex-column">
                          <Link to={"/"}>Account Settings</Link>
                          <Link to={"/"} onClick={handleLogOut}>
                            Log Out
                          </Link>
                        </div>
                      )}
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
                  <Link to={"contact"}>Contact</Link>
                </li>
              </ul>
            </div>
            <div class="nav-basket d-flex align-items-center gap-xl-5 gap-3">
              <a class="sec-icons" href="wishlist.html">
                <i class="fa-regular fa-heart d-sm-block d-none"></i>
              </a>
              <a class="sec-icons" href="login.html">
                <i class="fa-regular fa-user d-sm-block d-none"></i>
              </a>
              <a class="sec-icons fs-4 d-none d-sm-none d-md-none d-lg-flex align-items-center gap-1">
                <span class="d-sm-block d-none">$240</span>
                <Link to={"checkout"} style={{ color: "black" }}>
                  <i className="fa-solid fa-cart-shopping fs-5"></i>
                </Link>
              </a>
              <i
                id="burger-menu-icon"
                onClick={openBurger}
                className="fa-solid fa-burger d-block d-sm-block d-md-block d-lg-none fs-4"
                style={{ color: "#FF6541" }}
              ></i>
              <BurgerMenu closeBurger={closeBurger} isOpen={isOpen} />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
