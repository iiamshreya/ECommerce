import React from 'react'
import './Promo.css'

export default function Promo() {
  return (
    <div className='promo-container'>
        <div>
            <img className='promo-img' src="Client/public/images/black.jpg" alt="promo" />
        </div>
        <div>
            <img className='promo-img' src="Client/public/images/blue.jpg" alt="promo" />
        </div>
        <div>
            <img className='promo-img' src="Client/public/images/green.jpeg" alt="promo" />
        </div>
        <div>
            <img className='promo-img' src="Client/public/images/yellow.jpg" alt="promo" />
        </div>
      
    </div>
  )
}