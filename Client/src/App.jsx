import React from 'react'
import{Routes,Route} from 'react-router-dom'
import Homepage from './Pages/Homepage/Homepage'
import Loginpage from './Pages/Loginpage/Loginpage'
import Registerpage from './Pages/Registerpage/Registerpage'
import Navbar from './Components/Navbar/Navbar'
import './App.css'
import ProductDetails from './Pages/ProductDetails/ProductDetails'

export default function App(){
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Homepage/>}></Route>
      <Route path='/login' element={<Loginpage/>}></Route>
      <Route path='/register' element={<Registerpage/>}></Route>
      <Route path='/product/:id' element={<ProductDetails/>}/>
    </Routes>
    </>
  )
}

