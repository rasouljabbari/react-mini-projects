import React from 'react';
import {Route, Routes} from "react-router-dom";
import Articles from "../articles";
import Users from "../users";
import Products from "../products/Products";
import Todo from "../todo-list(lifting-state-up)/Todo";

function RouteHandler() {
    return (
        <Routes>
            <Route index element={<Articles/>}/>
            <Route path={'articles'} element={<Articles/>}/>
            <Route path={'users'} element={<Users/>}/>
            <Route path={'products'} element={<Products/>}/>
            <Route path={'todo'} element={<Todo/>}/>
        </Routes>
    );
}

export default RouteHandler;
