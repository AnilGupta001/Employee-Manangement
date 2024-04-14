import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Components/Nav.jsx'
import Add from './Components/Add.jsx'
import {BrowserRouter ,Routes,Route} from 'react-router-dom'
import List from './Components/List.jsx'
import Update from './Components/Update.jsx'

function App() {
  

  return (
    <>
<BrowserRouter>
<Nav></Nav>
<Routes>
<Route index element={<List/>}  />
<Route path='/' element={<List/>} />
<Route path='/employeeList' element={<List/>} />
<Route path='/add' element={<Add/>} />
<Route path='/update/:id' element={<Update/>}></Route>
</Routes>
</BrowserRouter>
    </>
    
  )
}

export default App
//
