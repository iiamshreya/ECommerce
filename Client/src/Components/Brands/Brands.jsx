import React from 'react'
import Marquee from "react-fast-marquee";
import './Brands.css'

const fakeBrandsdata =[
    {
        id: 1,
        image: '/Images/50O3UN2AYABA09_1.webp'
    },
    {
        id: 2,
        image: ''
    },
    {
        id: 3,
        image: '/images/ktmlogo.jpg'
    },
    {
        id: 4,
        image: 'Client/public/images/yamahalogo.png'
    },
    {
        id: 5,
        image: ''
    },
    {
        id: 6,
        image: ''
    }
]

export default function Brand() {
  return (
<div className='brands-container'>
      <Marquee>
        {fakeBrandsdata.map((Brand) =>{
            return(
                <img src={Brand.image} key={Brand.id}
                className='marquee-image' alt='brand-image' />
            )
        })}
      </Marquee>
    </div>
  )
}