import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CatMain from '../components/cat-components/CatMain'
import Navbar from '../components/partials/Navbar'
import CatsByBreed from '../components/cat-components/CatsByBreed'
const CatAppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<CatMain/>} />
                <Route path="/breed" element={<CatsByBreed/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default CatAppRouter
