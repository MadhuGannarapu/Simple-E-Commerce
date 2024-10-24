

import React from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'
import LandingPage from './e-commerce/pages/LandingPage'
import Kitchen from './e-commerce/components/Kitchen'
import MobilePage from './e-commerce/pages/MobilePage'
import CompPage from './e-commerce/pages/CompPage'
import WatchPage from './e-commerce/pages/WatchPage'
import MenPage from './e-commerce//pages/MenPage'
import WomanPage from './e-commerce/pages/WomanPage'
import FurniturePage from './e-commerce/pages/FurniturePage'
import AcPage from './e-commerce/pages/AcPage'
import KitchenPage from './e-commerce/pages/KitchenPage'
import MobileSingle from './e-commerce/singles/MobileSingle'
import UserCart from './e-commerce/UserCart'
import FridgePage from './e-commerce/pages/FridgePage'
import ComputerSingle from './e-commerce/singles/ComputerSingle'
import FurnitureSingle from './e-commerce/singles/FurnitureSingle'
import KitchenSingle from './e-commerce/singles/KitchenSingle'
import AcSingle from './e-commerce/singles/AcSingle'
import MenSingle from './e-commerce/singles/MenSingle'
import WatchSingle from './e-commerce/singles/WatchSingle'
import WomanSingle from './e-commerce/singles/WomanSingle'
import FridgeSingle from './e-commerce/singles/FridgeSingle'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element = { <LandingPage />}/>
        <Route path= '/kitchen' element = {<KitchenPage />} />
        <Route path='/mobiles' element= {<MobilePage />} />
        <Route path='/computers' element= {<CompPage />} />
        <Route path='/watch' element= {<WatchPage />} />
        <Route path='/fridge' element={<FridgePage />} />
        <Route path='/men' element= {<MenPage />} /> 
        <Route path='/woman' element= {<WomanPage />} />             
        <Route path='/furniture' element= {<FurniturePage />} />             
        <Route path='/ac' element= {<AcPage />} />             
           <Route path='/mobiles/:id' element = {<MobileSingle />} />
      <Route path='/cart' element = {<UserCart />} />
      <Route path='/ac/:id' element = {<AcSingle />} />
      <Route path='/computers/:id' element = {<ComputerSingle />} />
      <Route path='/furniture/:id' element = {<FurnitureSingle />} />
      <Route path='/kitchen/:id' element = {<KitchenSingle />} />
      <Route path='/men/:id' element = {<MenSingle />} />
      <Route path='/watch/:id' element = {<WatchSingle />} />
      <Route path='/woman/:id' element = {<WomanSingle />} />
      <Route path='/fridge/:id' element = {<FridgeSingle />} />
      </Routes>
    </div>
  )
}

export default App