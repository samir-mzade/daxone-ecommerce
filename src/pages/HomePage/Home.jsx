import React from 'react'
import './__Home.scss'
import MainSlider from '../../components/MainSlider/MainSlider'
import AdvertisementSide from '../../components/AdvertisementSide/AdvertisementSide'
import ProductsList from '../../components/ProductsList/ProductsList'
import DiscountSide from '../../components/DiscountSide/DiscountSide'
import chair from '../../assets/images/chair.webp'
import chair2 from '../../assets/images/chair2.webp'


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
          sale: 'New',
          price: '$210.00',
          salePrice: '$550.00',
          title: 'Silver Pency Comfort Chair',
      }
  },
  {
      image: chair2,
      text: {
          category:'Chair',
          sale: 'Stock out',
          price: '$210.00',
          salePrice: '$550.00',
          title: 'Silver Pency Comfort Chair',
      }
  },
  {
      image: chair2,
      text: {
          category:'Chair',
          sale: 'Stock out',
          price: '$210.00',
          salePrice: '$550.00',
          title: 'Silver Pency Comfort Chair',
      }
  },
  {
    image: chair,
    text: {
        category:'Chair',
        sale: 'New',
        price: '$210.00',
        salePrice: '$550.00',
        title: 'Silver Pency Comfort Chair',
    }
},
{
    image: chair2,
    text: {
        category:'Chair',
        sale: 'Stock out',
        price: '$210.00',
        salePrice: '$550.00',
        title: 'Silver Pency Comfort Chair',
    }
},
{
    image: chair2,
    text: {
        category:'Chair',
        sale: 'Stock out',
        price: '$210.00',
        salePrice: '$550.00',
        title: 'Silver Pency Comfort Chair',
    }
}
];







const Home = () => {
  return (
    <>
        <MainSlider/>
        <AdvertisementSide/>

        <div className="content-main">
            <h2 className='content-main-title'>Best Sell</h2>
            <p className="d-flex col-xl-5 col-lg-6 col-md-7 col-sm-11">Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
        </div>

        <ProductsList productsList={productsList.slice(0,4)} bestseller = {"Best Sell"}/>
        <DiscountSide/>

        
        <div className="content-main">
            <h2 className='content-main-title'>All Products</h2>
            <p className="d-flex col-xl-5 col-lg-6 col-md-7 col-sm-11">Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
        </div>

        <ProductsList productsList={productsList} bestseller = {"All Products"}/>
    </>
  )
}

export default Home