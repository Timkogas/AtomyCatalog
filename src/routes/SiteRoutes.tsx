import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../Containers/Layout/Layout";
import MainPage from "../Pages/MainPage/MainPage";

interface routesProps {
    
}

const routes: React.FC<routesProps> = () => {
    return (
       <Routes>
        <Route element={<Layout/>}>
            <Route path="/" element={<MainPage/>}/>

            
        </Route>
       </Routes>
    );
};

export default routes;