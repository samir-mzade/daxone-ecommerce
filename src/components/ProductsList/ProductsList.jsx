import React from 'react'
import './__ProductsList.scss'
import chair from '../../assets/images/chair.webp'
import chair2 from '../../assets/images/chair2.webp'

const ProductsList = () => {


    const productsList = [
        {
            image: chair,
            text: {
                category:'Chair',
                sale: '',
                price: '$240.00',
                salePrice: '',
                title: 'Golden Easy Comfort Chair',
            }
        },
        {
            image: chair2,
            text: {
                category:'Chair',
                sale: '30% off',
                price: '$210.00',
                salePrice: '$550.00',
                title: 'Silver Pency Comfort Chair',
            }
        }, 
        {
            image: chair,
            text: {
                category:'Chair',
                sale: '30% off',
                price: '$210.00',
                salePrice: '$550.00',
                title: 'Silver Pency Comfort Chair',
            }
        },
        {
            image: chair2,
            text: {
                category:'Chair',
                sale: '30% off',
                price: '$210.00',
                salePrice: '$550.00',
                title: 'Silver Pency Comfort Chair',
            }
        }
    ];







  return (
    <>
        <section className="product-section">
            <div className="container">
                <div className="product-area">
                    <div className="product-content">
                        <h2>Best Sell</h2>
                        <p className="d-flex col-xl-5 col-lg-6 col-md-7 col-sm-11">Lorem Ipsum is simply dummy text of the
                            printing and typesetting industry. Lorem Ipsum has

                            been the industry's standard dummy text
                        </p>
                    </div>
                    <div className="product-boxs row">
                    {productsList.map((item, idx) => (
                        <div className="product-box col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="product-img position-relative">
                                <img className="w-100" src={item.image}/>
                                <div className="product-icons position-absolute">
                                    <div className="product-icon"><a href="#" title="Quick View" onclick="return false"><i
                                                className="fa-solid fa-plus"></i></a></div>
                                    <div className="product-icon"><a href="wishlist.html" title="Wishlist"><i
                                                className="fa-regular fa-heart"></i></a></div>
                                    <div className="product-icon"><a href="#" title="Compare"><i
                                                className="fa-solid fa-retweet"></i></a></div>
                                </div>
                                <span className="badge position-absolute">{item.text.sale}</span>
                            </div>
                            <div className="product-con">
                                <p>Chair</p>
                                <a href="#" className="pro-name">{item.text.title}</a>
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <p className="dollar"><span className="product-cost">{item.text.price}</span><span
                                                className="old-cost">{item.text.salePrice}</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="product-addtocart plusBtn" onclick="return false"><a href="#">+ Add To Cart</a>
                            </div>
                        </div>

                    ))}

                        {/* <div className="product-box col-xl-3 col-lg-4 col-md-6 col-sm-6 d-sm-block d-none">
                            <div className="product-img position-relative">
                                <img className="w-100" src="assets/images/products/pro-hm1-2.jpg"/>
                                <div className="product-icons position-absolute">
                                    <div className="product-icon"><a href="#" title="Quick View" onclick="return false"><i
                                                className="fa-solid fa-plus"></i></a></div>
                                    <div className="product-icon"><a href="wishlist.html" title="Wishlist"><i
                                                className="fa-regular fa-heart"></i></a></div>
                                    <div className="product-icon"><a href="#" title="Compare"><i
                                                className="fa-solid fa-retweet"></i></a></div>
                                </div>
                                <span className="badge position-absolute">-30%</span>
                            </div>
                            <div className="product-con">
                                <p>Chair</p>
                                <a href="#" className="pro-name">Golden Easy Spot Chair2.</a>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div>
                                        <p className="dollar">$<span className="product-cost">210.00</span><span
                                                className="old-cost">$230.00</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="product-addtocart plusBtn" onclick="return false"><a href="#">+ Add To Cart</a>
                            </div>
                        </div>




                        <div className="product-box col-xl-3 col-lg-4 d-lg-block d-none">
                            <div className="product-img position-relative">
                                <img className="w-100" src="assets/images/products/pro-hm1-3.jpg"/>
                                <div className="product-icons position-absolute">
                                    <div className="product-icon"><a href="#" title="Quick View" onclick="return false"><i
                                                className="fa-solid fa-plus"></i></a></div>
                                    <div className="product-icon"><a href="wishlist.html" title="Wishlist"><i
                                                className="fa-regular fa-heart"></i></a></div>
                                    <div className="product-icon"><a href="#" title="Compare"><i
                                                className="fa-solid fa-retweet"></i></a></div>
                                </div>
                                <span className="badge fs-12 position-absolute">Stock <br/> Out</span>
                            </div>
                            <div className="product-con">
                                <p>Chair</p>
                                <a href="#" className="pro-name">Golden Easy Spot Chair3.</a>
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <p className="dollar">$<span className="product-cost">250.00</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="product-addtocart plusBtn" onclick="return false"><a href="#">+ Add To Cart</a>
                            </div>
                        </div>




                        <div className="product-box col-xl-3 d-xl-block d-none">
                            <div className="product-img position-relative">
                                <img className="w-100" src="assets/images/products/pro-hm1-4.jpg"/>
                                <div className="product-icons position-absolute">
                                    <div className="product-icon"><a href="#" title="Quick View" onclick="return false"><i
                                                className="fa-solid fa-plus"></i></a></div>
                                    <div className="product-icon"><a href="wishlist.html" title="Wishlist"><i
                                                className="fa-regular fa-heart"></i></a></div>
                                    <div className="product-icon"><a href="#" title="Compare"><i
                                                className="fa-solid fa-retweet"></i></a></div>
                                </div>
                                <span className="badge fs-12 left position-absolute">NEW</span>
                            </div>
                            <div className="product-con">
                                <p>Chair</p>
                                <a href="#" className="pro-name">Golden Easy Spot Chair4.</a>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div>
                                        <p className="dollar">$<span className="product-cost">320.00</span><span
                                                className="old-cost">$120.00</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="product-addtocart plusBtn" onclick="return false"><a href="#">+ Add To Cart</a>
                            </div>
                        </div> */}



                    </div>
                </div>
            </div>
        </section>



    </>
  )
}

export default ProductsList