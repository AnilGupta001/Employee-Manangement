import { useState } from 'react'
import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Nav from './Components/Nav'
import Bottom from './Components/Bottom'
import Body  from './Components/Body'
import Product from './Components/Product'
function App() {
 

  return (
    <>
    
  <BrowserRouter>
  <Nav></Nav>
  <Routes>
    
    <Route path='/Product' element={<Product/>}>
      
    </Route>
    <Route>
      
    </Route>
  </Routes>
  <Body></Body>
  <Bottom></Bottom>
  </BrowserRouter>
    </>
  )
}

export default App
