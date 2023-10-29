import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './screens/home/Home'
import CarDetail from './screens/car-detail/CarDetail'

export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route element = {<Home/>} path='/'/>
            <Route element = {<CarDetail/>} path='/car/:id'/>
            <Route path='*' element = {<div>Not found</div>}/>
        </Routes>
    </BrowserRouter>
  )
}
