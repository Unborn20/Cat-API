import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CatApp from '../components/cat-components/CatApp'
import Navbar from '../components/partials/Navbar'

const CatAppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<CatApp/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default CatAppRouter
