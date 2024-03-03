import React from 'react'
import './__ProductsList.scss'



const ProductsList = ({ productsList, bestseller }) => {

     const handleClick = (e) => {
       e.preventDefault(); 
     };

    return (
      <>
        <div className="product-content container pb-5">
          <div className="product-boxs row">
            {productsList.map((item, idx) => (
              <div className="product-box col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pt-5">
                <div className="product-img position-relative">
                  <img src={item.image} />
                  <div className="product-icons position-absolute">
                    <div className="product-icon">
                      <a href="#" title="Quick View" onClick={handleClick}>
                        <i className="fa-solid fa-plus"></i>
                      </a>
                    </div>
                    <div className="product-icon">
                      <a href="/wishlist" title="Wishlist">
                        <i className="fa-regular fa-heart"></i>
                      </a>
                    </div>
                    <div className="product-icon">
                      <a href="#" title="Compare">
                        <i className="fa-solid fa-retweet"></i>
                      </a>
                    </div>
                  </div>
                  <span className="badge position-absolute">
                    {item.text.sale}
                  </span>
                </div>
                <div className="product-con">
                  <p className="py-3">Chair</p>
                  <a href="#" className="pro-name">
                    {item.text.title}
                  </a>
                  <div className="d-flex justify-content-between">
                    <div>
                      <p className="dollar">
                        <span className="product-cost">{item.text.price}</span>
                        <span className="old-cost">{item.text.salePrice}</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="product-addtocart plusBtn"
                  onClick={handleClick}
                >
                  <a href="#">+ Add To Cart</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
}

export default ProductsList






// <section className="product-section">
// <div className="container">
//     <div className="product-area">
//         <div className="product-content">
//             <h2>{bestseller}</h2>
//             <p className="d-flex col-xl-5 col-lg-6 col-md-7 col-sm-11">Lorem Ipsum is simply dummy text of the
//                 printing and typesetting industry. Lorem Ipsum has

//                 been the industry's standard dummy text
//             </p>
//         </div>
//         <div className="product-boxs row">
//         {productsList.map((item, idx) => (
//             <div className="product-box col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pt-5">
//                 <div className="product-img position-relative">
//                     <img className="w-100" src={item.image}/>
//                     <div className="product-icons position-absolute">
//                         <div className="product-icon"><a href="#" title="Quick View" ><i
//                                     className="fa-solid fa-plus"></i></a></div>
//                         <div className="product-icon"><a href="wishlist.html" title="Wishlist"><i
//                                     className="fa-regular fa-heart"></i></a></div>
//                         <div className="product-icon"><a href="#" title="Compare"><i
//                                     className="fa-solid fa-retweet"></i></a></div>
//                     </div>
//                     <span className="badge position-absolute">{item.text.sale}</span>
//                 </div>
//                 <div className="product-con">
//                     <p>Chair</p>
//                     <a href="#" className="pro-name">{item.text.title}</a>
//                     <div className="d-flex justify-content-between">
//                         <div>
//                             <p className="dollar"><span className="product-cost">{item.text.price}</span><span
//                                     className="old-cost">{item.text.salePrice}</span></p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="product-addtocart plusBtn" ><a href="#">+ Add To Cart</a>
//                 </div>
//             </div>

//         ))}



//         </div>
//     </div>
// </div>
// </section>
