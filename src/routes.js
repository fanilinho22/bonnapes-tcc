import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Usuario from "./Components/Usuario/User"
import Login from "./Components/Login/Login"
import Cadastro from "./Components/Cadastro/Cadastro"
import MainPage from "./Components/MainPage/MainPage"
import BaixarReceitas from "./Components/funca/BaixarReceitas/BaixarReceitas"
import Conversordemedidas from "./Components/funca/Conversordemedidas/Conversordemedidas"
import PesquisaReceita from "./Components/funca/PesquisaReceita/PesquisaReceita"
import ReceitasSalvas from "./Components/funca/ReceitasSalvas/ReceitasSalvas"
import Sugestoes from "./Components/funca/Sugestoes/Sugestoes"

export default function Routas() {
    return (

        <BrowserRouter>
            <Routes>
                <Route element={<Login />} path="/" exact />
                <Route element={<Cadastro />} path="/Cadastro" />
                <Route element={<Home />} path="/sobre" />
                <Route element={<MainPage />} path="/home" />
                <Route element={<Usuario />} path="/usuario" />
                <Route element={<BaixarReceitas />} path="/baixar-receitas" />
                <Route element={<Conversordemedidas />} path="/conversor-de-medida" />
                <Route element={<PesquisaReceita />} path="/Pesquisar-receitas" />
                <Route element={<ReceitasSalvas />} path="/Receitas-salvas" />
                <Route element={<Sugestoes />} path="/Sugestoes" />

            </Routes>
        </BrowserRouter>
    )
}