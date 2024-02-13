import React from 'react'
import './__MainSlider.scss'

export default function MainSlider() {
  return (
    <>
    <section class="slider-container" id="slider-container">
      <div class="container">
          <div class="slider" id="slider">

              <div
                  class="slider-item sliderActive d-block d-sm-flex d-md-flex d-lg-flex d-xl-flex justify-content-center justify-content-sm-between justify-content-md-between justify-content-lg-between justify-content-xl-between jus align-items-center gap-5">
                  <div class="slider-image sliderPicActive" id="slider-image">
                      <img src={sliderChair1} alt=""/>
                  </div>
                  <div class="slider-text">
                      <h3 id="slider-sale" class="ddd slider-sale sliderItemActive">30% off</h3>
                      <h1 id="slider-sale" class="ddd slider-sale sliderItemActive"
                          style={{fontWeight: "bold", marginTop: "40px"}}>Comfort Chair</h1>
                      <h5 id="slider-sale" class="ddd slider-sale sliderItemActive">Collect from Daxone & get 30%
                          Discount.</h5>
                      <button id="slider-sale" class="shop-now-button btn btn-form mt-5 sliderItemActive">SHOP
                          NOW</button>
                  </div>
              </div>
              <div id="slider-item"
                  class="slider-item  sliderActive d-block d-sm-flex d-md-flex d-lg-flex d-xl-flex justify-content-center justify-content-sm-between justify-content-md-between justify-content-lg-between justify-content-xl-between jus align-items-center gap-5">
                  <div class="slider-image" id="slider-image">
                      <img src={sliderChair2} alt=""/>
                  </div>
                  <div class="slider-text">
                      <h3 class="ddd slider-sale" id="slider-sale">30% off</h3>
                      <h1 class="ddd slider-sale" id="slider-sale" style={{fontWeight: "bold", marginTop: "40px"}}>
                          Comfort Chair</h1>
                      <h5 class="ddd slider-sale" id="slider-sale">Collect from Daxone & get 30% Discount.</h5>
                      <button id="slider-sale" class="shop-now-button btn btn-form mt-5">SHOP NOW</button>
                  </div>
              </div>


              <div class="up-down-button d-flex flex-column justify-content-center align-item-center gap-3">
                  <i id="up" class="fa-solid fa-chevron-up"></i>
                  <span id="count" style={{textAlign: "center"}}>00</span>
                  <i id="down" class="fa-solid fa-chevron-down"></i>
              </div>
          </div>
      </div>
  </section>
  </>
  )
}
