import React from 'react'
import './__CheckoutPage.scss'

export const CheckoutPage = () => {
  return (
    <>


<section class="bg-section">
            <div class="d-flex justify-content-center align-items-center flex-column">
                <h2>Checkout Page</h2>
                <p><a href="index.html">Home</a><span class="ps-2 pe-2 fw-light"><i
                            class="fa-solid fa-slash fa-rotate-90"></i></span><span class="active">Contact Us</span></p>
            </div>
        </section>
        <section class="checkout-page mt-5">
            <div class="container">
                <div class="checkout-accordion1" id="checkout-accordion1">

                    <div class="checkout-accordion1-title d-flex align-items-center gap-3">

                        <i class="fa-regular fa-circle-check"></i>

                        <p>Returning customer?<span id="checkout-click" class="checkout-click"> Click here to
                                login</span></p>
                    </div>

                    <div class="checkout-accordion-body  mt-3" id="checkout-accordion-body">

                        <p>If you have shopped with us before, please enter your details in the boxes below. If you are
                            a new customer, please proceed to the Billing & Shipping section.</p>

                        <div class="checkout-inputs d-flex justify-content-between align-items-center gap-4 mt-3">

                            <div class="checkout-inputs-username w-50">
                                <h5>Username Or Email Address</h5>
                                <input class="form form-control" type="text"/>
                            </div>
                            <div class="checkout-inputs-password w-50">
                                <h5>Password</h5>
                                <input class="form form-control" type="text"/>
                            </div>


                        </div>

                        <div class="checkout-login d-flex mt-3 gap-4">

                            <button class="btn btn-danger">Login</button>

                            <div class="checkout-login-checkbox d-flex align-items-center gap-2">

                                <input type="checkbox"/>

                                <p>Remember me</p>

                            </div>

                        </div>

                        <div class="checkout-social mt-3">

                            <p>Lost your password?</p>

                            <p class="mt-3">Login with:</p>

                            <div class="checkout-social-buttons mt-3 d-flex gap-3">

                                <div class="social-button">FACEBOOK</div>
                                <div class="social-button">TWITTER</div>
                                <div class="social-button">GOOGLE</div>

                            </div>


                        </div>

                    </div>
                </div>
                <div class="checkout-accordion1  mt-3" id="checkout-accordion1">
                    <div class="checkout-accordion1-title d-flex align-items-center gap-3">
                        <i class="fa-regular fa-circle-check"></i>
                        <p>Have a coupon?<span id="checkout-click" class="checkout-click"> Click here to enter your
                                code</span></p>
                    </div>
                    <div class="checkout-accordion-body mt-3" id="checkout-accordion-body">
                        <div class="checkout-accordion-coupon d-flex align-items-center gap-2">
                            <input class="form form-control w-50" type="text" placeholder="Coupon code"/>
                            <button class="btn">APPLY COUPON</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="checkout-form mt-5">
            <div class="container">
                <div class="row">

                    <div class="col-lg-7 col-md-12 col-sm-12 col-12">

                        <h5>BILLING DETAILS</h5>

                        <div class="checkout-form-line"></div>

                        <div
                            class="checkout-form-name d-flex flex-column flex-sm-column flex-md-row flex-lg-row gap-4 mt-3">

                            <div class="checkout-form-input w-100 mt-3">
                                <p>First Name</p>
                                <input class="w-100" type="text"/>
                            </div>

                            <div class="checkout-form-input w-100 mt-3">
                                <p>Last Name</p>
                                <input class="w-100" type="text"/>
                            </div>
                        </div>


                        <div class="checkout-form-input mt-3">
                            <p>Company Name</p>
                            <input class="w-100" type="text"/>
                        </div>

                        <div class="checkout-form-input mt-3">
                            <p>Country</p>
                            <select name="" id="" class="w-100">
                                <option value="">Select Country:</option>
                                <option value="">Azerbaijan</option>
                                <option value="">Turkey</option>
                                <option value="">Georgia</option>
                            </select>
                        </div>

                        <div class="checkout-form-input mt-3">
                            <p>Street Address</p>
                            <input class="w-100 " type="text" placeholder="House Number"/>
                            <input class="w-100 mt-3" type="text" placeholder="Apartment"/>
                        </div>

                        <div class="checkout-form-input mt-3">
                            <p>State/Country</p>
                            <input class="w-100 " type="text"/>
                        </div>

                        <div class="checkout-form-input mt-3">
                            <p>PostCode/ZipCode</p>
                            <input class="w-100 " type="text"/>
                        </div>

                        <div class="checkout-form-input mt-3">
                            <p>Phone</p>
                            <input class="w-100 " type="text"/>
                        </div>

                        <div class="checkout-form-input mt-3">
                            <p>Email Address</p>
                            <input class="w-100 " type="text"/>
                        </div>

                        <div class="checkout-login-checkbox d-flex align-items-center gap-2 mt-3">
                            <input type="checkbox"/>
                            <p>Create an account</p>
                        </div>

                        <textarea style={{border: "none" , backgroundColor: "#E8EFF7"}} rows="6" name="" id="textarea"
                            class="w-100 p-3 mt-3" placeholder="Your Notes..."></textarea>

                    </div>

                    <div class="col-lg-5 col-md-12 col-sm-12 col-12">

                        <div class="order-checkout p-5">


                            <div class="order-title">
                                <h5>Your order</h5>
                                <div class="order-line"></div>
                            </div>

                            <div class="order-product  mt-5">

                                <div class="product-total">

                                    <p style={{fontSize:"14px", fontWeight:"bold"}}>PRODUCT</p>

                                    <p style={{color: "#FF6541"}}>TOTAL</p>
                                </div>

                                <div class="product-name">


                                    <div class="product-price mt-2">

                                        <p>Product Name X 1</p>

                                        <p>$329</p>
                                    </div>


                                    <div class="product-price mt-2">

                                        <p>Product Name X 1</p>

                                        <p>$329</p>
                                    </div>

                                </div>

                                <div class="product-total">

                                    <p style={{fontSize: "14px", fontWeight:"bold"}}>SUBTOTAL</p>

                                    <p style={{color: "#FF6541"}}>$329</p>
                                </div>

                                <div class="product-total">

                                    <p style={{fontSize:"14px", fontWeight:"bold"}}>SHIPPING</p>

                                    <p style={{color: "#FF6541"}}>Enter your full address</p>
                                </div>

                                <div class="product-total">

                                    <p style={{fontSize: "14px", fontWeight:"bold"}}>TOTAL</p>

                                    <p style={{color: "#FF6541"}}>$273</p>
                                </div>

                                <div class="checkout-radio d-flex align-items-center gap-2 mt-3">

                                    <input type="radio"/>

                                    <p>DIRECT BANK TRANSFER</p>
                                </div>

                                <p style={{fontsize: "12px"}}>Make your payment directly into our bank account. Please use
                                    your Order ID as the payment reference.</p>

                                <div class="checkout-payment">

                                    <div class="checkout-radio d-flex align-items-center gap-2 mt-3">

                                        <input type="radio"/>

                                        <p>CHECK PAYMENTS</p>
                                    </div>

                                    <div class="checkout-radio d-flex align-items-center gap-2 mt-3">

                                        <input type="radio"/>

                                        <p>CASH ON DELIVERY</p>
                                    </div>

                                    <div class="checkout-radio d-flex align-items-center gap-2 mt-3">

                                        <input type="radio"/>

                                        <p>PAYPAL</p>
                                        <img style={{width: "40%"}} src="assets/images/payment.webp" alt=""/>
                                        <p style={{fontSize: "12px"}}><a style={{textDecoration: "underline" , color: "black"}}
                                                href="">WHAT IS PAYPAL?</a></p>
                                    </div>


                                    <button class="btn btn-form mt-5 checkout-button">
                                        PLACE ORDER
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>









    </>
  )
}
