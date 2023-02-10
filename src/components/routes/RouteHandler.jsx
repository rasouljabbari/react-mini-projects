import React from 'react';
import {Route, Routes} from "react-router-dom";
import Articles from "../articles";
import Users from "../users";
import Products from "../products/Products";

function RouteHandler() {
    return (
        <Routes>
            <Route index element={<Articles/>}/>
            <Route path={'articles'} element={<Articles/>}/>
            <Route path={'users'} element={<Users/>}/>
            <Route path={'products'} element={<Products/>}/>
        </Routes>
    );
}

export default RouteHandler;
