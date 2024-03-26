import React from 'react';

const ProductsList = ({ productsList, className, bestseller }) => {

     const handleClick = (e) => {
       e.preventDefault(); 
     };

    return (
      <>
        <div className="product-content container pb-5">
          <div className="product-boxs row">
            {productsList.map((item, idx) => (
              <div key={idx} className={className}>
                <div className="product-img position-relative">
                  <img className="w-100" src={item.image} />
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
