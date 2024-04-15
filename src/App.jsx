import React from 'react'
import Home from './Components/Home'
import { BrowserRouter } from 'react-router-dom'
export default function App() {
  return (
    <BrowserRouter>
      <Home/>
    </BrowserRouter>
  )
}
