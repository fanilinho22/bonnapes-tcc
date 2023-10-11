import { Route, BrowserRouter, Routes } from "react-router-dom";
import Dicas from './Components/Dicas/Dicas'
import Home from "./Components/Home/Home";
import Usuario from "./Components/Usuario/User"
import Publicacoes from "./Components/Publicacoes/Publicacoes"

export default function Routas(){
    return(
        
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path="/" exact />
                <Route element={<Usuario />} path="/usuario" />
                <Route element={<Publicacoes />} path="/publicacoes" />
                <Route element={<Dicas/>} path="/dicas" />

            </Routes>
        </BrowserRouter>
    )
}