import React from 'react'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import FormularioCRUD from '../components/FormularioCRUD'
import Home from '../components/Home'
import Login from '../components/Login'
import NavBarr from '../components/NavBarr'

const AppRouter = () => {
    return (
        <div>
            <BrowserRouter>
            <NavBarr/>
            {/* <Home/> */}
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/Home" element={<Home/>} />
            </Routes>
            
            </BrowserRouter>
            
        </div>
    )
}

export default AppRouter
