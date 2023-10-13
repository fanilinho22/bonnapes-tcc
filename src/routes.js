import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Usuario from "./Components/Usuario/User"
import Login from "./Components/Login/Login"
import Cadastro from "./Components/Cadastro/Cadastro"
import MainPage from "./Components/MainPage/MainPage"

export default function Routas() {
    return (

        <BrowserRouter>
            <Routes>
                <Route element={<Login />} path="/" exact />
                <Route element={<Cadastro />} path="/Cadastro" />
                <Route element={<Home />} path="/sobre" />
                <Route element={<MainPage />} path="/home" />
                <Route element={<Usuario />} path="/usuario" />

            </Routes>
        </BrowserRouter>
    )
}