import React from 'react'
import MainSlider from '../../components/MainSlider/MainSlider'
import AdvertisementSide from '../../components/AdvertisementSide/AdvertisementSide'
import ProductsList from '../../components/ProductsList/ProductsList'
import DiscountSide from '../../components/DiscountSide/DiscountSide'







const Home = () => {
  return (
    <>
        <MainSlider/>
        <AdvertisementSide/>
        <ProductsList/>
        <DiscountSide/>
    </>
  )
}

export default Home