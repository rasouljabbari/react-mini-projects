import React, {Suspense,lazy, memo } from 'react';
import {Route, Routes} from "react-router-dom";
const Articles = lazy(() => import("../articles"));
const Users = lazy(() => import("../users"));
const Products = lazy(() => import("../products/Products"));
const Todo = lazy(() => import("../todo-list(lifting-state-up)/Todo"));

function RouteHandler() {
    return (
        <Suspense fallback={<h3>Loading...</h3>}>
            <Routes>
                <Route index element={<Articles/>}/>
                <Route path={'articles'} element={<Articles/>}/>
                <Route path={'users'} element={<Users/>}/>
                <Route path={'products'} element={<Products/>}/>
                <Route path={'todo'} element={<Todo/>}/>
            </Routes>
        </Suspense>
    );
}

export default memo(RouteHandler);
