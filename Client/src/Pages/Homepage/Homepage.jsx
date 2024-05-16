import React from 'react'
import './Homepage.css'
import Banner from '../../Components/Banner/Banner'
import Promo from '../../Components/Promo/Promo'
import Services from '../../Components/Services/Services'
import Footer from '../../Components/Footer/Footer'
import Brands from '../../Components/Brands/Brands'



export default function Homepage() {
  return (
    <>
    <div className='homepage'>
      <Banner />
      <Promo />
    </div>
    <Services />
    <Brands />
    <Footer/>
    </>
    )

}
