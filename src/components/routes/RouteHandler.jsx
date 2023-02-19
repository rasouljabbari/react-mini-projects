import React, {Suspense,lazy, memo } from 'react';
import {Route, Routes} from "react-router-dom";
import MobxTodoList from "../todo-mobx/MobxTodoList";
import {TodoStore} from "../todo-mobx/TodoStore";
import AnimalEnergy from "../Animal/AnimalEnergy";
import {AnimalStore} from "../Animal/AnimalStore";
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
                <Route path={'mobx-todo'} element={<MobxTodoList todoStore={TodoStore}/>}/>
                <Route path={'mobx-animal'} element={<AnimalEnergy animalStore={AnimalStore}/>}/>
            </Routes>
        </Suspense>
    );
}

export default memo(RouteHandler);
