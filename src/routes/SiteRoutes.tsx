import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import MainPage from "../Pages/MainPage/MainPage";
import Vitamins from "../Pages/Vitamins/Vitamins";
import Cosmetics from "../Pages/Cosmetics/Cosmetics";
import Hygiene from "../Pages/Hygiene/Hygiene";
import Housing from "../Pages/Housing/Housing";
import FoodNDrinks from "../Pages/FoodNDrinks/FoodNDrinks";
import Clothes from "../Pages/Clothes/Clothes";
import Contacts from "../Pages/Contacts/Contacts";
import Hemohim from "../Pages/Hemohim/Hemohim";
import BuyPage from "../Pages/BuyPage/BuyPage";
import RegistryPage from "../Pages/RegistryPage/RegistryPage";

interface routesProps {

}

const routes: React.FC<routesProps> = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<MainPage />} />
                <Route path="/vitamins" element={<Vitamins/>}/>
                <Route path="/cosmetics" element={<Cosmetics/>}/>
                <Route path="/hygiene" element={<Hygiene/>}/>
                <Route path="/housing" element={<Housing/>}/>
                <Route path="/foodndrinks" element={<FoodNDrinks/>}/>
                <Route path="/clothes" element={<Clothes/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
                <Route path="/hemohim" element={<Hemohim/>}/>
                <Route path="/order" element={<BuyPage/>}/>
                <Route path="/registry" element={<RegistryPage/>}/>
            </Route>
        </Routes>
    );
};

export default routes;