
import { useState } from 'react'
import './App.css'
import Navbar from './assets/Components/Navbar/Navbar'
import CookingInfo from './Components/CookingInfo/CookingInfo'
import Hero from './Components/Hero/Hero'
import Recipes from './Components/Recipes/Recipes'

function App() {
  const [cooking, setCooking] = useState([]);
  const handleCooking = recipe => {

    console.log(recipe);
  }

  return (
    <>
      <div className='Container'>
        <Navbar></Navbar>
        <Hero></Hero>
        <h1 className='text-3xl text-center font-bold mb-3'>Our Recipies</h1>
        <p className='text-gray-600 text-base text-center mb-3'>Find most delicious and healthy foods for you and your family.Most qualified chefs are here to make  your food.</p>
        <div className='md:flex'>
          <Recipes handleCooking={handleCooking}></Recipes>
          <CookingInfo></CookingInfo>
        </div>


      </div>
    </>
  )
}

export default App
