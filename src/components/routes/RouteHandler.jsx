import React from 'react';
import {Route, Routes} from "react-router-dom";
import Articles from "../articles";
import Users from "../users";

function RouteHandler() {
    return (
        <Routes>
            <Route index element={<Articles/>}/>
            <Route path={'articles'} element={<Articles/>}/>
            <Route path={'users'} element={<Users/>}/>
        </Routes>
    );
}

export default RouteHandler;
