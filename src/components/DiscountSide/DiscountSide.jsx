import React from 'react'
import './__DiscountSide.scss'
import {ShopNowButton} from '../ShopNowButton/ShopNowButton'
import banner from '../../assets/images/banner/banner-1.jpg'


const DiscountSide = () => {







  return (
    <>
        <section className="discount-section">
            <div className="container">
                <div className="discount-area row align-items-center">
                    <div className="discount-img col-lg-6 col-md-5 col-sm-10 col-10">
                        <a href="#">
                            <img className="w-100" src={banner}/>
                        </a>
                    </div>
                    <div className="discount-content col-lg-4 col-md-5 col-sm-12 col-12">
                        <p>Lorem Ipsum is simply dummy text of the <br/> and typesetting industry.</p>
                        <h2>Winter Discount
                            <br/> Up to 30%
                        </h2>
                        <p className="discount-p">It is a long established fact that a reader will be distracted by the
                            readable content of a page when looking at its layout.</p>
                        <div className="discount-btn">
                            <ShopNowButton/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default DiscountSide