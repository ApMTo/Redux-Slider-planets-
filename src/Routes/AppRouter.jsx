import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../Pages/HomePage/HomePage';
import Gallery from '../Pages/Gallery/Gallery';

const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/gallery' element={<Gallery />} />
            </Routes>
        </>
    );
}

export default AppRouter;
