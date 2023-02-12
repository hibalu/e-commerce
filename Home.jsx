import React from 'react'
import Announcement from './Announcement'
import Categories from './Categories';
import Navbar from './Navbar';
import Products from './Products';
import Slider from "./Slider";
import Newsletter from "./Newsletter"
import Footer from './Footer';
import Product from '../Components/Product';
import Register from '../Components/Register';
import Login from '../Components/Login';
import Cart from './Cart';

const Home = () => {
  return (
    <div>
      <Announcement/>
      <Navbar/>
      <Slider/>
      <Product/>
      <Categories/>
      <Products/>
      <Cart/>
      <Register/>
      <Login/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Home