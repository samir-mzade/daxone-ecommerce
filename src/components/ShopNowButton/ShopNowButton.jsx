import React from 'react'
import './__ShopNowButton.scss'

const ShopNowButton = ({idx, index}) => {
  return (
    <>
    <button className={`shop-now-button  ${idx === index ? 'sliderItemActive' : ''} btn btn-form mt-5`} >SHOP NOW</button>
    </>
  )
}


export {ShopNowButton}