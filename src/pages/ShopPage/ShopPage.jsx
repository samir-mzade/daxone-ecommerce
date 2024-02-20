import React from 'react'

const ShopPage = () => {
  return (
    <>
      
      <section class="bg-section">
            <div class="d-flex justify-content-center align-items-center flex-column">
                <h2>Shop Page</h2>
                <p><a href="index.html">Home</a><span class="ps-2 pe-2 fw-light"><i
                            class="fa-solid fa-slash fa-rotate-90"></i></span><span class="active">Shop</span></p>
            </div>
        </section>

       <section class="shop-main-section">
            <div class="custom-container">
                <div class="row flex-row-reverse">
                    <div class="col-lg-9">
                        <div class="shop-product-topbar row">
                            <div class="icons-container col-1 d-flex justify-content-between align-items-center">
                                <div class="active-btn pe-3"><a href="#shop1"
                                        onclick="changeContent('shop1');return false"><i
                                            class="fa-solid fa-table-cells"></i></a>
                                </div>
                                <div><a href="#shop2" onclick="changeContent('shop2'); return false"><i
                                            class="fa-solid fa-list"></i></a></div>
                            </div>
                            <div
                                class="topbar-info col-md-3 col-sm-7 col-12 offset-xl-0 offset-sm-1 offset-0 d-flex align-items-center justify-content-xl-center">
                                <p>Showing 1 - 20 of 30 results</p>
                            </div>
                            <div
                                class="product-sorting-part d-flex justify-content-between col-md-7 col-sm-12 flex-sm-row flex-column gap-3">
                                <div class="view-select">
                                    <label>View:</label>
                                    <select>
                                        <option value="0">20</option>
                                        <option value="1">23</option>
                                        <option value="2">30</option>
                                    </select>
                                </div>
                                <div class="sortby-select">
                                    <label>Sort by:</label>
                                    <select>
                                        <option value="0">Default</option>
                                        <option value="1">Name</option>
                                        <option value="2">Price</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div id="shop1" class="product-section shop1 active row">
                            <div class="product-area col-12">
                                <div class="product-boxs row">
                                    <div class="product-box all col-xl-4 col-sm-6 col-12">
                                        <div class="product-img position-relative">
                                            <img class="w-100" src="assets/images/products/pro-hm1-1.jpg"/>
                                            <div class="product-icons position-absolute">
                                                <div class="product-icon"><a href="#" title="Quick View" onclick="return false"><i
                                                            class="fa-solid fa-plus"></i></a></div>
                                                <div class="product-icon"><a href="wishlist.html" title="Wishlist"><i
                                                            class="fa-regular fa-heart"></i></a></div>
                                                <div class="product-icon"><a href="#" title="Compare"><i
                                                            class="fa-solid fa-retweet"></i></a></div>
                                            </div>
                                        </div>
                                        <div class="product-con">
                                            <p>Chair</p>
                                            <a href="#" class="pro-name">Golden Easy Spot Chair1.</a>
                                            <div class="d-flex justify-content-between">
                                                <div>
                                                    <p class="dollar">$<span class="product-cost">210.00</span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="product-addtocart plusBtn" onclick="return false"><a href="#">+ Add To Cart</a></div>
                                    </div>
                                    <div class="product-box all col-xl-4 col-sm-6 col-12">
                                        <div class="product-img position-relative">
                                            <img class="w-100" src="assets/images/products/pro-hm1-2.jpg"/>
                                            <div class="product-icons position-absolute">
                                                <div class="product-icon"><a href="#" title="Quick View" onclick="return false"><i
                                                            class="fa-solid fa-plus"></i></a></div>
                                                <div class="product-icon"><a href="wishlist.html" title="Wishlist"><i
                                                            class="fa-regular fa-heart"></i></a></div>
                                                <div class="product-icon"><a href="#" title="Compare"><i
                                                            class="fa-solid fa-retweet"></i></a></div>
                                            </div>
                                            <span class="badge position-absolute">-30%</span>
                                        </div>
                                        <div class="product-con">
                                            <p>Chair</p>
                                            <a href="#" class="pro-name">Golden Easy Spot Chair2.</a>
                                            <div class="d-flex align-items-center justify-content-between">
                                                <div>
                                                    <p class="dollar">$<span class="product-cost">250.00</span><span
                                                        class="old-cost">$270.00</span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="product-addtocart plusBtn" onclick="return false"><a href="#">+ Add To Cart</a></div>
                                    </div>
                                    <div class="product-box all col-xl-4 col-sm-6 col-12">
                                        <div class="product-img position-relative">
                                            <img class="w-100" src="assets/images/products/pro-hm1-3.jpg"/>
                                            <div class="product-icons position-absolute">
                                                <div class="product-icon"><a href="#" title="Quick View" onclick="return false"><i
                                                            class="fa-solid fa-plus"></i></a></div>
                                                <div class="product-icon"><a href="wishlist.html" title="Wishlist"><i
                                                            class="fa-regular fa-heart"></i></a></div>
                                                <div class="product-icon"><a href="#" title="Compare"><i
                                                            class="fa-solid fa-retweet"></i></a></div>
                                            </div>
                                        </div>
                                        <div class="product-con">
                                            <p>Chair</p>
                                            <a href="#" class="pro-name">Golden Easy Spot Chair3.</a>
                                            <div class="d-flex justify-content-between">
                                                <div>
                                                    <p class="dollar">$<span class="product-cost">200.00</span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="product-addtocart plusBtn" onclick="return false"><a href="#">+ Add To Cart</a></div>
                                    </div>
                                    <div class="product-box all col-xl-4 col-sm-6 col-12">
                                        <div class="product-img position-relative">
                                            <img class="w-100" src="assets/images/products/pro-hm1-4.jpg"/>
                                            <div class="product-icons position-absolute">
                                                <div class="product-icon"><a href="#" title="Quick View"><i
                                                            class="fa-solid fa-plus"></i></a></div>
                                                <div class="product-icon"><a href="wishlist.html" title="Wishlist"><i
                                                            class="fa-regular fa-heart"></i></a></div>
                                                <div class="product-icon"><a href="#" title="Compare"><i
                                                            class="fa-solid fa-retweet"></i></a></div>
                                            </div>
                                            <span class="badge fs-12 left position-absolute">NEW</span>
                                        </div>
                                        <div class="product-con">
                                            <p>Chair</p>
                                            <a href="#" class="pro-name">Golden Easy Spot Chair4.</a>
                                            <div class="d-flex align-items-center justify-content-between">
                                                <div>
                                                    <p class="dollar">$<span class="product-cost">220.00</span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="product-addtocart plusBtn" onclick="return false"><a href="#">+ Add To Cart</a></div>
                                    </div>
                                    <div class="product-box all col-xl-4 col-sm-6 col-12">
                                        <div class="product-img position-relative">
                                            <img class="w-100" src="assets/images/products/pro-hm1-5.jpg"/>
                                            <div class="product-icons position-absolute">
                                                <div class="product-icon"><a href="#" title="Quick View"><i
                                                            class="fa-solid fa-plus"></i></a></div>
                                                <div class="product-icon"><a href="wishlist.html" title="Wishlist"><i
                                                            class="fa-regular fa-heart"></i></a></div>
                                                <div class="product-icon"><a href="#" title="Compare"><i
                                                            class="fa-solid fa-retweet"></i></a></div>
                                            </div>
                                            <span class="badge fs-12 position-absolute">Stock <br/> Out</span>
                                        </div>
                                        <div class="product-con">
                                            <p>Chair</p>
                                            <a href="#" class="pro-name">Golden Easy Spot Chair5.</a>
                                            <div class="d-flex justify-content-between">
                                                <div>
                                                    <p class="dollar">$<span class="product-cost">250.00</span><span class="old-cost">$260.00</span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="product-addtocart plusBtn" onclick="return false"><a href="#">+ Add To Cart</a></div>
                                    </div>
                                    <div class="product-box all col-xl-4 col-sm-6 col-12">
                                        <div class="product-img position-relative">
                                            <img class="w-100" src="assets/images/products/pro-hm1-6.jpg"/>
                                            <div class="product-icons position-absolute">
                                                <div class="product-icon"><a href="#" title="Quick View"><i
                                                            class="fa-solid fa-plus"></i></a></div>
                                                <div class="product-icon"><a href="wishlist.html" title="Wishlist"><i
                                                            class="fa-regular fa-heart"></i></a></div>
                                                <div class="product-icon"><a href="#" title="Compare"><i
                                                            class="fa-solid fa-retweet"></i></a></div>
                                            </div>
                                        </div>
                                        <div class="product-con">
                                            <p>Chair</p>
                                            <a href="#" class="pro-name">Golden Easy Spot Chair6.</a>
                                            <div class="d-flex align-items-center justify-content-between">
                                                <div>
                                                    <p class="dollar">$<span class="product-cost">260.00</span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="product-addtocart plusBtn" onclick="return false"><a href="#">+ Add To Cart</a></div>
                                    </div>
                                    <div class="product-box all col-xl-4 col-sm-6 col-12">
                                        <div class="product-img position-relative">
                                            <img class="w-100" src="assets/images/products/pro-hm1-7.jpg"/>
                                            <div class="product-icons position-absolute">
                                                <div class="product-icon"><a href="#" title="Quick View"><i
                                                            class="fa-solid fa-plus"></i></a></div>
                                                <div class="product-icon"><a href="wishlist.html" title="Wishlist"><i
                                                            class="fa-regular fa-heart"></i></a></div>
                                                <div class="product-icon"><a href="#" title="Compare"><i
                                                            class="fa-solid fa-retweet"></i></a></div>
                                            </div>
                                            <span class="badge fs-12 left position-absolute">NEW</span>
                                        </div>
                                        <div class="product-con">
                                            <p>Chair</p>
                                            <a href="#" class="pro-name">Golden Easy Spot Chair7.</a>
                                            <div class="d-flex justify-content-between">
                                                <div>
                                                    <p class="dollar">$<span class="product-cost">240.00</span><span class="old-cost">$290.00</span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="product-addtocart plusBtn" onclick="return false"><a href="#">+ Add To Cart</a></div>
                                    </div>
                                    <div class="product-box all col-xl-4 col-sm-6 col-12">
                                        <div class="product-img position-relative">
                                            <img class="w-100" src="assets/images/products/pro-hm1-8.jpg"/>
                                            <div class="product-icons position-absolute">
                                                <div class="product-icon"><a href="#" title="Quick View"><i
                                                            class="fa-solid fa-plus"></i></a></div>
                                                <div class="product-icon"><a href="wishlist.html" title="Wishlist"><i
                                                            class="fa-regular fa-heart"></i></a></div>
                                                <div class="product-icon"><a href="#" title="Compare"><i
                                                            class="fa-solid fa-retweet"></i></a></div>
                                            </div>
                                        </div>
                                        <div class="product-con">
                                            <p>Chair</p>
                                            <a href="#" class="pro-name">Golden Easy Spot Chair8.</a>
                                            <div class="d-flex align-items-center justify-content-between">
                                                <div>
                                                    <p class="dollar">$<span class="product-cost">280.00</span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="product-addtocart plusBtn" onclick="return false"><a href="#">+ Add To Cart</a></div>
                                    </div>
                                    <div class="product-box all col-xl-4 col-sm-6 col-12">
                                        <div class="product-img position-relative">
                                            <img class="w-100" src="assets/images/products/pro-hm1-1.jpg"/>
                                            <div class="product-icons position-absolute">
                                                <div class="product-icon"><a href="#" title="Quick View"><i
                                                            class="fa-solid fa-plus"></i></a></div>
                                                <div class="product-icon"><a href="wishlist.html" title="Wishlist"><i
                                                            class="fa-regular fa-heart"></i></a></div>
                                                <div class="product-icon"><a href="#" title="Compare"><i
                                                            class="fa-solid fa-retweet"></i></a></div>
                                            </div>
                                        </div>
                                        <div class="product-con">
                                            <p>Chair</p>
                                            <a href="#" class="pro-name">Golden Easy Spot Chair1.</a>
                                            <div class="d-flex justify-content-between">
                                                <div>
                                                    <p class="dollar">$<span class="product-cost">210.00</span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="product-addtocart plusBtn" onclick="return false"><a href="#">+ Add To Cart</a></div>
                                    </div>
                                    <div class="product-box all col-xl-4 col-sm-6 col-12">
                                        <div class="product-img position-relative">
                                            <img class="w-100" src="assets/images/products/pro-hm1-2.jpg"/>
                                            <div class="product-icons position-absolute">
                                                <div class="product-icon"><a href="#" title="Quick View"><i
                                                            class="fa-solid fa-plus"></i></a></div>
                                                <div class="product-icon"><a href="wishlist.html" title="Wishlist"><i
                                                            class="fa-regular fa-heart"></i></a></div>
                                                <div class="product-icon"><a href="#" title="Compare"><i
                                                            class="fa-solid fa-retweet"></i></a></div>
                                            </div>
                                            <span class="badge position-absolute">-30%</span>
                                        </div>
                                        <div class="product-con">
                                            <p>Chair</p>
                                            <a href="#" class="pro-name">Golden Easy Spot Chair2.</a>
                                            <div class="d-flex align-items-center justify-content-between">
                                                <div>
                                                    <p class="dollar">$<span class="product-cost">250.00</span><span class="old-cost">$270.00</span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="product-addtocart plusBtn" onclick="return false"><a href="#">+ Add To Cart</a></div>
                                    </div>
                                    <div class="product-box all col-xl-4 col-sm-6 col-12">
                                        <div class="product-img position-relative">
                                            <img class="w-100" src="assets/images/products/pro-hm1-3.jpg"/>
                                            <div class="product-icons position-absolute">
                                                <div class="product-icon"><a href="#" title="Quick View"><i
                                                            class="fa-solid fa-plus"></i></a></div>
                                                <div class="product-icon"><a href="wishlist.html" title="Wishlist"><i
                                                            class="fa-regular fa-heart"></i></a></div>
                                                <div class="product-icon"><a href="#" title="Compare"><i
                                                            class="fa-solid fa-retweet"></i></a></div>
                                            </div>
                                        </div>
                                        <div class="product-con">
                                            <p>Chair</p>
                                            <a href="#" class="pro-name">Golden Easy Spot Chair3.</a>
                                            <div class="d-flex justify-content-between">
                                                <div>
                                                    <p class="dollar">$<span class="product-cost">200.00</span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="product-addtocart plusBtn" onclick="return false"><a href="#">+ Add To Cart</a></div>
                                    </div>
                                    <div class="product-box all col-xl-4 col-sm-6 col-12">
                                        <div class="product-img position-relative">
                                            <img class="w-100" src="assets/images/products/pro-hm1-4.jpg"/>
                                            <div class="product-icons position-absolute">
                                                <div class="product-icon"><a href="#" title="Quick View"><i
                                                            class="fa-solid fa-plus"></i></a></div>
                                                <div class="product-icon"><a href="wishlist.html" title="Wishlist"><i
                                                            class="fa-regular fa-heart"></i></a></div>
                                                <div class="product-icon"><a href="#" title="Compare"><i
                                                            class="fa-solid fa-retweet"></i></a></div>
                                            </div>
                                            <span class="badge fs-12 left position-absolute">NEW</span>
                                        </div>
                                        <div class="product-con">
                                            <p>Chair</p>
                                            <a href="#" class="pro-name">Golden Easy Spot Chair4.</a>
                                            <div class="d-flex align-items-center justify-content-between">
                                                <div>
                                                    <p class="dollar">$<span class="product-cost">220.00</span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="product-addtocart plusBtn" onclick="return false"><a href="#">+ Add To Cart</a></div>
                                    </div>
                                    <div class="product-box all col-xl-4 col-sm-6 col-12">
                                        <div class="product-img position-relative">
                                            <img class="w-100" src="assets/images/products/pro-hm1-5.jpg"/>
                                            <div class="product-icons position-absolute">
                                                <div class="product-icon"><a href="#" title="Quick View"><i
                                                            class="fa-solid fa-plus"></i></a></div>
                                                <div class="product-icon"><a href="wishlist.html" title="Wishlist"><i
                                                            class="fa-regular fa-heart"></i></a></div>
                                                <div class="product-icon"><a href="#" title="Compare"><i
                                                            class="fa-solid fa-retweet"></i></a></div>
                                            </div>
                                            <span class="badge fs-12 position-absolute">Stock <br/> Out</span>
                                        </div>
                                        <div class="product-con">
                                            <p>Chair</p>
                                            <a href="#" class="pro-name">Golden Easy Spot Chair5.</a>
                                            <div class="d-flex justify-content-between">
                                                <div>
                                                    <p class="dollar">$<span class="product-cost">250.00</span><span class="old-cost">$260.00</span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="product-addtocart plusBtn" onclick="return false"><a href="#">+ Add To Cart</a></div>
                                    </div>
                                    <div class="product-box all col-xl-4 col-sm-6 col-12">
                                        <div class="product-img position-relative">
                                            <img class="w-100" src="assets/images/products/pro-hm1-6.jpg"/>
                                            <div class="product-icons position-absolute">
                                                <div class="product-icon"><a href="#" title="Quick View"><i
                                                            class="fa-solid fa-plus"></i></a></div>
                                                <div class="product-icon"><a href="wishlist.html" title="Wishlist"><i
                                                            class="fa-regular fa-heart"></i></a></div>
                                                <div class="product-icon"><a href="#" title="Compare"><i
                                                            class="fa-solid fa-retweet"></i></a></div>
                                            </div>
                                        </div>
                                        <div class="product-con">
                                            <p>Chair</p>
                                            <a href="#" class="pro-name">Golden Easy Spot Chair6.</a>
                                            <div class="d-flex justify-content-between">
                                                <div>
                                                    <p class="dollar">$<span class="product-cost">210.00</span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="product-addtocart plusBtn" onclick="return false"><a href="#">+ Add To Cart</a></div>
                                    </div>
                                    <div class="product-box all col-xl-4 col-sm-6 col-12">
                                        <div class="product-img position-relative">
                                            <img class="w-100" src="assets/images/products/pro-hm1-7.jpg"/>
                                            <div class="product-icons position-absolute">
                                                <div class="product-icon"><a href="#" title="Quick View"><i
                                                            class="fa-solid fa-plus"></i></a></div>
                                                <div class="product-icon"><a href="wishlist.html" title="Wishlist"><i
                                                            class="fa-regular fa-heart"></i></a></div>
                                                <div class="product-icon"><a href="#" title="Compare"><i
                                                            class="fa-solid fa-retweet"></i></a></div>
                                            </div>
                                            <span class="badge fs-12 left position-absolute">NEW</span>
                                        </div>
                                        <div class="product-con">
                                            <p>Chair</p>
                                            <a href="#" class="pro-name">Golden Easy Spot Chair7.</a>
                                            <div class="d-flex justify-content-between">
                                                <div>
                                                    <p class="dollar">$<span class="product-cost">240.00</span><span class="old-cost">$290.00</span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="product-addtocart plusBtn" onclick="return false"><a href="#">+ Add To Cart</a></div>
                                    </div>
                                </div>
                            </div>
                            <div class="products-pagination col-sm-12 col-3 d-flex justify-content-center">
                                <ul class="d-flex gap-2">
                                    <li>
                                        <a class="prev" href="#"><i class="fa-solid fa-chevron-left"></i></a>
                                    </li>
                                    <li>
                                        <a href="#">01</a>
                                    </li>
                                    <li>
                                        <a href="#">02</a>
                                    </li>
                                    <li>
                                        <a class="active" href="#">03</a>
                                    </li>
                                    <li>
                                        <a href="#">04</a>
                                    </li>
                                    <li>
                                        <a href="#">05</a>
                                    </li>
                                    <li>
                                        <a href="#">06</a>
                                    </li>
                                    <li>
                                        <a class="next" href="#"><i class="fa-solid fa-chevron-right"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div id="shop2" class="product-section shop2 row">
                            <div class="products-wrap">
                                <div class="row">
                                    <div
                                        class="image-wrap position-relative col-xl-4 col-lg-5 col-md-6 col-sm-6 col-10">
                                        <div class="pro-img">
                                            <a href="#"><img class="w-100"
                                                    src="assets/images/products/pro-hm1-1.jpg"/></a>
                                        </div>
                                        <div class="pro-quickview position-absolute">
                                            <a href="#"><i class="fa-solid fa-plus"></i></a>
                                        </div>
                                    </div>
                                    <div class="product-info col-xl-8 col-lg-7 col-md-6 col-sm-6 col-10">
                                        <span>Chair</span>
                                        <h4>
                                            <a href="#"> Golden Easy Spot Chair.</a>
                                        </h4>
                                        <div class="pro-price">
                                            <span>$40.00</span>
                                            <span class="old-price">$50.00</span>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipic it, sed do eiusmod tempor
                                            labor incididunt ut et dolore magna aliqua. Ut enim ad minim veniam, quis
                                            nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                                        <div class="product-icons">
                                            <div class="product-icon"><a href="#" title="Wishlist"><i
                                                        class="fa-regular fa-heart"></i></a></div>
                                            <div class="product-icon"><a href="#" title="Compare"><i
                                                        class="fa-solid fa-retweet"></i></a></div>
                                            <div class="product-icon"><a href="#" title="Cart"><i
                                                        class="fa-solid fa-cart-shopping"></i></a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="products-wrap">
                                <div class="row">
                                    <div
                                        class="image-wrap position-relative col-xl-4 col-lg-5 col-md-6 col-sm-6 col-10">
                                        <div class="pro-img">
                                            <a href="#"><img class="w-100"
                                                    src="assets/images/products/pro-hm1-2.jpg"/></a>
                                        </div>
                                        <div class="pro-quickview position-absolute">
                                            <a href="#"><i class="fa-solid fa-plus"></i></a>
                                        </div>
                                    </div>
                                    <div class="product-info col-xl-8 col-lg-7 col-md-6 col-sm-6 col-10">
                                        <span>Chair</span>
                                        <h4>
                                            <a href="#"> Golden Easy Spot Chair.</a>
                                        </h4>
                                        <div class="pro-price">
                                            <span>$50.00</span>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipic it, sed do eiusmod tempor
                                            labor incididunt ut et dolore magna aliqua. Ut enim ad minim veniam, quis
                                            nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                                        <div class="product-icons">
                                            <div class="product-icon"><a href="#" title="Wishlist"><i
                                                        class="fa-regular fa-heart"></i></a></div>
                                            <div class="product-icon"><a href="#" title="Compare"><i
                                                        class="fa-solid fa-retweet"></i></a></div>
                                            <div class="product-icon"><a href="#" title="Cart"><i
                                                        class="fa-solid fa-cart-shopping"></i></a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="products-wrap">
                                <div class="row">
                                    <div
                                        class="image-wrap position-relative col-xl-4 col-lg-5 col-md-6 col-sm-6 col-10">
                                        <div class="pro-img">
                                            <a href="#"><img class="w-100"
                                                    src="assets/images/products/pro-hm1-3.jpg"/></a>
                                        </div>
                                        <div class="pro-quickview position-absolute">
                                            <a href="#"><i class="fa-solid fa-plus"></i></a>
                                        </div>
                                    </div>
                                    <div class="product-info col-xl-8 col-lg-7 col-md-6 col-sm-6 col-10">
                                        <span>Chair</span>
                                        <h4>
                                            <a href="#"> Golden Easy Spot Chair.</a>
                                        </h4>
                                        <div class="pro-price">
                                            <span>$40.00</span>
                                            <span class="old-price">$50.00</span>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipic it, sed do eiusmod tempor
                                            labor incididunt ut et dolore magna aliqua. Ut enim ad minim veniam, quis
                                            nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                                        <div class="product-icons">
                                            <div class="product-icon"><a href="#" title="Wishlist"><i
                                                        class="fa-regular fa-heart"></i></a></div>
                                            <div class="product-icon"><a href="#" title="Compare"><i
                                                        class="fa-solid fa-retweet"></i></a></div>
                                            <div class="product-icon"><a href="#" title="Cart"><i
                                                        class="fa-solid fa-cart-shopping"></i></a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="products-wrap">
                                <div class="row">
                                    <div
                                        class="image-wrap position-relative col-xl-4 col-lg-5 col-md-6 col-sm-6 col-10">
                                        <div class="pro-img">
                                            <a href="#"><img class="w-100"
                                                    src="assets/images/products/pro-hm1-4.jpg"/></a>
                                        </div>
                                        <div class="pro-quickview position-absolute">
                                            <a href="#"><i class="fa-solid fa-plus"></i></a>
                                        </div>
                                    </div>
                                    <div class="product-info col-xl-8 col-lg-7 col-md-6 col-sm-6 col-10">
                                        <span>Chair</span>
                                        <h4>
                                            <a href="#"> Golden Easy Spot Chair.</a>
                                        </h4>
                                        <div class="pro-price">
                                            <span>$90.00</span>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipic it, sed do eiusmod tempor
                                            labor incididunt ut et dolore magna aliqua. Ut enim ad minim veniam, quis
                                            nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                                        <div class="product-icons">
                                            <div class="product-icon"><a href="#" title="Wishlist"><i
                                                        class="fa-regular fa-heart"></i></a></div>
                                            <div class="product-icon"><a href="#" title="Compare"><i
                                                        class="fa-solid fa-retweet"></i></a></div>
                                            <div class="product-icon"><a href="#" title="Cart"><i
                                                        class="fa-solid fa-cart-shopping"></i></a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="products-wrap">
                                <div class="row">
                                    <div
                                        class="image-wrap position-relative col-xl-4 col-lg-5 col-md-6 col-sm-6 col-10">
                                        <div class="pro-img">
                                            <a href="#"><img class="w-100"
                                                    src="assets/images/products/pro-hm1-5.jpg"/></a>
                                        </div>
                                        <div class="pro-quickview position-absolute">
                                            <a href="#"><i class="fa-solid fa-plus"></i></a>
                                        </div>
                                    </div>
                                    <div class="product-info col-xl-8 col-lg-7 col-md-6 col-sm-6 col-10">
                                        <span>Chair</span>
                                        <h4>
                                            <a href="#"> Golden Easy Spot Chair.</a>
                                        </h4>
                                        <div class="pro-price">
                                            <span>$60.00</span>
                                            <span class="old-price">$80.00</span>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipic it, sed do eiusmod tempor
                                            labor incididunt ut et dolore magna aliqua. Ut enim ad minim veniam, quis
                                            nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                                        <div class="product-icons">
                                            <div class="product-icon"><a href="#" title="Wishlist"><i
                                                        class="fa-regular fa-heart"></i></a></div>
                                            <div class="product-icon"><a href="#" title="Compare"><i
                                                        class="fa-solid fa-retweet"></i></a></div>
                                            <div class="product-icon"><a href="#" title="Cart"><i
                                                        class="fa-solid fa-cart-shopping"></i></a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="products-wrap">
                                <div class="row">
                                    <div
                                        class="image-wrap position-relative col-xl-4 col-lg-5 col-md-6 col-sm-6 col-10">
                                        <div class="pro-img">
                                            <a href="#"><img class="w-100"
                                                    src="assets/images/products/pro-hm1-6.jpg"/></a>
                                        </div>
                                        <div class="pro-quickview position-absolute">
                                            <a href="#"><i class="fa-solid fa-plus"></i></a>
                                        </div>
                                    </div>
                                    <div class="product-info col-xl-8 col-lg-7 col-md-6 col-sm-6 col-10">
                                        <span>Chair</span>
                                        <h4>
                                            <a href="#"> Golden Easy Spot Chair.</a>
                                        </h4>
                                        <div class="pro-price">
                                            <span>$70.00</span>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipic it, sed do eiusmod tempor
                                            labor incididunt ut et dolore magna aliqua. Ut enim ad minim veniam, quis
                                            nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                                        <div class="product-icons">
                                            <div class="product-icon"><a href="#" title="Wishlist"><i
                                                        class="fa-regular fa-heart"></i></a></div>
                                            <div class="product-icon"><a href="#" title="Compare"><i
                                                        class="fa-solid fa-retweet"></i></a></div>
                                            <div class="product-icon"><a href="#" title="Cart"><i
                                                        class="fa-solid fa-cart-shopping"></i></a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="products-wrap">
                                <div class="row">
                                    <div
                                        class="image-wrap position-relative col-xl-4 col-lg-5 col-md-6 col-sm-6 col-10">
                                        <div class="pro-img">
                                            <a href="#"><img class="w-100"
                                                    src="assets/images/products/pro-hm1-7.jpg"/></a>
                                        </div>
                                        <div class="pro-quickview position-absolute">
                                            <a href="#"><i class="fa-solid fa-plus"></i></a>
                                        </div>
                                    </div>
                                    <div class="product-info col-xl-8 col-lg-7 col-md-6 col-sm-6 col-10">
                                        <span>Chair</span>
                                        <h4>
                                            <a href="#"> Golden Easy Spot Chair.</a>
                                        </h4>
                                        <div class="pro-price">
                                            <span>$50.00</span>
                                            <span class="old-price">$60.00</span>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipic it, sed do eiusmod tempor
                                            labor incididunt ut et dolore magna aliqua. Ut enim ad minim veniam, quis
                                            nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                                        <div class="product-icons">
                                            <div class="product-icon"><a href="#" title="Wishlist"><i
                                                        class="fa-regular fa-heart"></i></a></div>
                                            <div class="product-icon"><a href="#" title="Compare"><i
                                                        class="fa-solid fa-retweet"></i></a></div>
                                            <div class="product-icon"><a href="#" title="Cart"><i
                                                        class="fa-solid fa-cart-shopping"></i></a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="products-pagination col-sm-12 col-3 d-flex justify-content-center">
                                <ul class="d-flex gap-2">
                                    <li>
                                        <a class="prev" href="#"><i class="fa-solid fa-chevron-left"></i></a>
                                    </li>
                                    <li>
                                        <a href="#">01</a>
                                    </li>
                                    <li>
                                        <a href="#">02</a>
                                    </li>
                                    <li>
                                        <a class="active" href="#">03</a>
                                    </li>
                                    <li>
                                        <a href="#">04</a>
                                    </li>
                                    <li>
                                        <a href="#">05</a>
                                    </li>
                                    <li>
                                        <a href="#">06</a>
                                    </li>
                                    <li>
                                        <a class="next" href="#"><i class="fa-solid fa-chevron-right"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="shop-sidebar">
                            <div class="sidebar-wrapper search">
                                <h4 class="sidebar-title">Search</h4>
                                <div class="shop-search row">
                                    <input class="col-12" type="text" placeholder="Search here..."/>
                                    <button class="col-2"><i
                                            class="fa-solid fa-magnifying-glass fa-rotate-90"></i></button>
                                </div>
                            </div>
                            <div class="sidebar-wrapper category">
                                <h4 class="sidebar-title">Shop By Categories</h4>
                                <div class="shop-category">
                                    <ul>
                                        <li>
                                            <a class="category-name">Women Fashion<i
                                                    class="fa-solid fa-chevron-down"></i></a>
                                            <ul class="shop-subcategory">
                                                <li><a href="#">Dress</a></li>
                                                <li><a href="#">Shoes</a></li>
                                                <li><a href="#">Sunglasses</a></li>
                                                <li><a href="#">Sweater</a></li>
                                                <li><a href="#">Handbag</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a class="category-name">Men Fashion<i
                                                    class="fa-solid fa-chevron-down"></i></a>
                                            <ul class="shop-subcategory">
                                                <li><a href="#">Shirt</a></li>
                                                <li><a href="#">Shoes</a></li>
                                                <li><a href="#">Sunglasses</a></li>
                                                <li><a href="#">Sweater</a></li>
                                                <li><a href="#">Jacket</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a class="category-name">Furniture<i
                                                    class="fa-solid fa-chevron-down"></i></a>
                                            <ul class="shop-subcategory">
                                                <li><a href="#">Chair</a></li>
                                                <li><a href="#">Lift Chair</a></li>
                                                <li><a href="#">Bunk Bed</a></li>
                                                <li><a href="#">Computer Desk</a></li>
                                                <li><a href="#">Bookcase</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#">Lamp</a></li>
                                        <li><a href="#">Electronics</a></li>
                                        <li><a href="#">Accessories</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="sidebar-wrapper filter">
                                <h4 class="sidebar-title">Price Filter</h4>
                                <p class="range-init">Range: $100.00 - 1.300.00</p>
                                <div class="slider" id="slider">
                                    <div class="range"></div>
                                    <div class="thumb" id="thumb1">
                                        <div class="white-circle"></div>
                                    </div>
                                    <div class="thumb" id="thumb2">
                                        <div class="white-circle"></div>
                                    </div>
                                </div>
                                {/* <!-- <p>$0 - $800</p> --> */}
                                <div class="d-flex flex-column">
                                    <input id="amount" type="text" placeholder="Add Your Price"/>
                                    <button>Filter</button>
                                </div>
                            </div>
                            <div class="sidebar-wrapper checkbox refine">
                                <h4 class="sidebar-title">Refine By</h4>
                                <div class="shop-checkbox">
                                    <label class="checkbox-container"><a href="#">On Sale<span>4</span></a>
                                        <input type="checkbox"/>
                                        <span class="checkmark"></span>
                                    </label>

                                    <label class="checkbox-container"><a href="#">New<span>5</span></a>
                                        <input type="checkbox"/>
                                        <span class="checkmark"></span>
                                    </label>

                                    <label class="checkbox-container"><a href="#">In Stock<span>6</span></a>
                                        <input type="checkbox"/>
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                            </div>
                            <div class="sidebar-wrapper checkbox colour">
                                <h4 class="sidebar-title">Colour</h4>
                                <div class="shop-checkbox">
                                    <label class="checkbox-container"><a href="#">Green <span>7</span></a>
                                        <input type="checkbox"/>
                                        <span class="checkmark"></span>
                                    </label>

                                    <label class="checkbox-container"><a href="#">Cream <span>8</span></a>
                                        <input type="checkbox"/>
                                        <span class="checkmark"></span>
                                    </label>

                                    <label class="checkbox-container"><a href="#">Blue <span>9</span></a>
                                        <input type="checkbox"/>
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="checkbox-container"><a href="#">Black <span>3</span></a>
                                        <input type="checkbox"/>
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                            </div>
                            <div class="sidebar-wrapper checkbox size">
                                <h4 class="sidebar-title">Size</h4>
                                <div class="shop-checkbox">
                                    <label class="checkbox-container"><a href="#">XL<span>4</span></a>
                                        <input type="checkbox"/>
                                        <span class="checkmark"></span>
                                    </label>

                                    <label class="checkbox-container"><a href="#">L<span>5</span></a>
                                        <input type="checkbox"/>
                                        <span class="checkmark"></span>
                                    </label>

                                    <label class="checkbox-container"><a href="#">SM<span>6</span></a>
                                        <input type="checkbox"/>
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="checkbox-container"><a href="#">XXL<span>7</span></a>
                                        <input type="checkbox"/>
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                            </div>
                            <div class="sidebar-wrapper tag">
                                <h4 class="sidebar-title">Popular Tags</h4>
                                <ul class="tags">
                                    <li><a href="#">Clothing</a></li>
                                    <li><a href="#">Accessories</a></li>
                                    <li><a href="#">For Men</a></li>
                                    <li><a href="#">Women</a></li>
                                    <li><a href="#">Fashion</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      

    </>
  )
}

export {ShopPage}