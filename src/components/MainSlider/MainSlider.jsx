import React from 'react'
import './__MainSlider.scss'
import chair from '../../assets/images/chair.webp'
import chair2 from '../../assets/images/chair2.webp'


const MainSlider = () => {
  return (
    <>
    <section className="slider-container" id="slider-container">
      <div className="container">
          <div className="slider" id="slider">

              <div
                  className="slider-item sliderActive d-block d-sm-flex d-md-flex d-lg-flex d-xl-flex justify-content-center justify-content-sm-between justify-content-md-between justify-content-lg-between justify-content-xl-between jus align-items-center gap-5">
                  <div className="slider-image sliderPicActive" id="slider-image">
                      <img src={chair} alt=""/>
                  </div>
                  <div className="slider-text">
                      <h3 id="slider-sale" className="ddd slider-sale sliderItemActive">30% off</h3>
                      <h1 id="slider-sale" className="ddd slider-sale sliderItemActive"
                          style={{fontWeight: "bold", marginTop: "40px"}}>Comfort Chair</h1>
                      <h5 id="slider-sale" className="ddd slider-sale sliderItemActive">Collect from Daxone & get 30%
                          Discount.</h5>
                      <button id="slider-sale" className="shop-now-button btn btn-form mt-5 sliderItemActive">SHOP
                          NOW</button>
                  </div>
              </div>
              <div id="slider-item"
                  className="slider-item  sliderActive d-block d-sm-flex d-md-flex d-lg-flex d-xl-flex justify-content-center justify-content-sm-between justify-content-md-between justify-content-lg-between justify-content-xl-between jus align-items-center gap-5">
                  <div className="slider-image" id="slider-image">
                      <img src={chair2} alt=""/>
                  </div>
                  <div className="slider-text">
                      <h3 className="ddd slider-sale" id="slider-sale">30% off</h3>
                      <h1 className="ddd slider-sale" id="slider-sale" style={{fontWeight: "bold", marginTop: "40px"}}>
                          Comfort Chair</h1>
                      <h5 className="ddd slider-sale" id="slider-sale">Collect from Daxone & get 30% Discount.</h5>
                      <button id="slider-sale" className="shop-now-button btn btn-form mt-5">SHOP NOW</button>
                  </div>
              </div>


              <div className="up-down-button d-flex flex-column justify-content-center align-item-center gap-3">
                  <i id="up" className="fa-solid fa-chevron-up"></i>
                  <span id="count" style={{textAlign: "center"}}>00</span>
                  <i id="down" className="fa-solid fa-chevron-down"></i>
              </div>
          </div>
      </div>
  </section>
  </>
  )
}


export default MainSlider