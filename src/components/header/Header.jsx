import React, {useState} from "react";
import logo from "../../assets/images/logo-1.webp";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu.jsx";
import './__header.scss';
import '../BurgerMenu/__BurgerMenu.scss'




const Header = () => {

  const [isOpen, setIsOpen] = useState(false);
    
  const openBurger = () => {
    console.log("open");
      setIsOpen(true);
  };

  const closeBurger = () => {
      setIsOpen(false);
  };


  return (
    <>
      <div className="main-body-overlay">
        <div className="body-overlay" id="body-overlay"></div>
      </div>
      {/* Header Area */}
      <header className="headerMain">
        <nav className="nav" style={{ backgroundColor: "#EEF6FF" }}>
          <div className="inner-container custom-container container d-flex justify-content-between align-items-center">
            <div className="nav-logo">
              <img src={logo} alt="" />
            </div>
            <div className="nav-menu d-none d-sm-none d-md-none d-lg-block ">
              <ul className="nav-menu-list d-flex justify-content-between align-items-center gap-5 m-0">
                <li className="nav-menu-list-item">
                  <a href="index.html">Home</a>
                  <ul className="home-dropdown fs-6">
                    <li className="home-dropdown-list-item py-1">
                      <a href="#">Home Version 1</a>
                    </li>
                    <li className="home-dropdown-list-item py-1">
                      <a href="#">Home Version 2</a>
                    </li>
                    <li className="home-dropdown-list-item py-1">
                      <a href="#">Home Version 3</a>
                    </li>
                    <li className="home-dropdown-list-item py-1">
                      <a href="#">Home Version 4</a>
                    </li>
                    <li className="home-dropdown-list-item py-1">
                      <a href="#">Home Version 5</a>
                    </li>
                    <li className="home-dropdown-list-item py-1">
                      <a href="#">Home Version 6</a>
                    </li>
                    <li className="home-dropdown-list-item py-1">
                      <a href="#">Home Version 7</a>
                    </li>
                    <li className="home-dropdown-list-item py-1">
                      <a href="#">Home Version 8</a>
                    </li>
                    <li className="home-dropdown-list-item py-1">
                      <a href="#">Home Version 9</a>
                    </li>
                    <li className="home-dropdown-list-item py-1">
                      <a href="#">Home Version 10</a>
                    </li>
                  </ul>
                </li>
                <li className="nav-menu-list-item ">
                  <a href="shop.html">Shop</a>
                  <ul
                    className="home-dropdown d-flex justify-content-between gap-4 fs-6"
                    style={{ left: "-200px", width: " 60vw" }}
                  >
                    <div className="home-dropdown-list-item-shop  w-25">
                      Shop Layout
                      <hr />
                      <li className="home-dropdown-list-item py-1">
                        <a href="shop.html">Standard Style</a>
                      </li>
                      <li className="home-dropdown-list-item py-1">
                        <a href="#">Standard Style 2</a>
                      </li>
                      <li className="home-dropdown-list-item py-1">
                        <a href="#">Shop 2 Column</a>
                      </li>
                      <li className="home-dropdown-list-item py-1">
                        <a href="#">Shop No Sidebar</a>
                      </li>
                      <li className="home-dropdown-list-item py-1">
                        <a href="#">Shop Fullwide</a>
                      </li>
                    </div>
                    <div className="home-dropdown-list-item-shop w-25">
                      Shop Layout
                      <hr />
                      <li className="home-dropdown-list-item py-1">
                        <a href="#">Fullwide No Sidebar</a>
                      </li>
                      <li className="home-dropdown-list-item py-1">
                        <a href="#">List Style</a>
                      </li>
                      <li className="home-dropdown-list-item py-1">
                        <a href="#">List 2 Column</a>
                      </li>
                      <li className="home-dropdown-list-item py-1">
                        <a href="#">List No Sidebar</a>
                      </li>
                    </div>
                    <div className="home-dropdown-list-item-shop  w-25">
                      Product Details
                      <hr />
                      <li className="home-dropdown-list-item py-1">
                        <a href="shop.html">Standard Style</a>
                      </li>
                      <li className="home-dropdown-list-item py-1">
                        <a href="#">Standard Style 2</a>
                      </li>
                      <li className="home-dropdown-list-item py-1">
                        <a href="#">Tab Style 1</a>
                      </li>
                      <li className="home-dropdown-list-item py-1">
                        <a href="#">Tab Style 2</a>
                      </li>
                      <li className="home-dropdown-list-item py-1">
                        <a href="#">Tab Style 3</a>
                      </li>
                    </div>
                    <div className="home-dropdown-list-item-shop  w-25">
                      Product Details
                      <hr />
                      <li className="home-dropdown-list-item py-1">
                        <a href="#">Gallery Style</a>
                      </li>
                      <li className="home-dropdown-list-item py-1">
                        <a href="#">Sticky Style</a>
                      </li>
                      <li className="home-dropdown-list-item py-1">
                        <a href="#">Slider Style</a>
                      </li>
                      <li className="home-dropdown-list-item py-1">
                        <a href="#">Affiliate Style</a>
                      </li>
                    </div>
                  </ul>
                </li>
                <li className="nav-menu-list-item">
                  <a href="">Men</a>
                </li>
                <li className="nav-menu-list-item">
                  <a href="">Pages</a>
                  <ul className="home-dropdown fs-6">
                    <li className="home-dropdown-list-item py-1">
                      <a href="#">About Us</a>
                    </li>
                    <li className="home-dropdown-list-item py-1">
                      <a href="#">Cart Page</a>
                    </li>
                    <li className="home-dropdown-list-item py-1">
                      <a href="checkout.html">Checkout</a>
                    </li>
                    <li className="home-dropdown-list-item py-1">
                      <a href="wishlist.html">Wishlist</a>
                    </li>
                    <li className="home-dropdown-list-item py-1">
                      <a href="#">My Account</a>
                    </li>
                    <li className="home-dropdown-list-item py-1">
                      <a href="contact.html">Contact Us</a>
                    </li>
                    <li className="home-dropdown-list-item py-1">
                      <a href="login.html">Login/Register</a>
                    </li>
                  </ul>
                </li>
                <li className="nav-menu-list-item">
                  <a href="">Blog</a>
                  <ul className="home-dropdown fs-6">
                    <li className="home-dropdown-list-item py-1">
                      <a href="#">Standard Style</a>
                    </li>
                    <li className="home-dropdown-list-item py-1">
                      <a href="#">Blog 2 Column</a>
                    </li>
                    <li className="home-dropdown-list-item py-1">
                      <a href="#">Blog Sidebar</a>
                    </li>
                    <li className="home-dropdown-list-item py-1">
                      <a href="#">Blog Details</a>
                    </li>
                  </ul>
                </li>
                <li className="nav-menu-list-item">
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </div>
            <div className="nav-basket d-flex align-items-center gap-3">
              <a href="checkout.html" style={{ color: "black" }}>
                <i className="fa-solid fa-cart-shopping fs-5"></i>
              </a>
              <h5 id="items-count" className="m-0">
                2 Items
              </h5>
              <i className="fa-solid fa-magnifying-glass fs-4 d-none d-sm-none d-md-none d-lg-block"></i>
              <i
                id="burger-menu-icon" onClick={openBurger}
                className="fa-solid fa-burger d-block d-sm-block d-md-block d-lg-none fs-4"
                style={{ color: "#FF6541" }}
              ></i>
              <BurgerMenu closeBurger={closeBurger} isOpen={isOpen}/>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
