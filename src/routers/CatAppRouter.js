import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import CatApp from '../components/CatApp'

const CatAppRouter = () => {
    return (
        <BrowserRouter>
            <nav>
                <h1>
                    Cat-Api
                </h1>
                <Link to="/">Main</Link>
            </nav>
            <Routes>
                <Route path="/" element={<CatApp/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default CatAppRouter
