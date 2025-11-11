import { Route, Routes, BrowserRouter } from "react-router";
import { Perfil } from "../pages/Perfil";
import { Login } from "../pages/Login";
import { AuthProvider } from "../hooks/useAuth.jsx";
import { Ranking } from "../pages/Ranking";
import { Home } from "../pages/Home";
import { Categoria } from "../pages/Categoria";
import { Quiz } from "../pages/Quiz";
import { Cadastro } from "../pages/Cadastro";
import { Favorito } from "../pages/Favorito";
import { PerfilPublico } from "../pages/PerfilPublico/index.jsx";

export const Routers = () => {
    const PageError = () => {
        return (
            <div style={{ padding: '50px', color: '#f8f9fa', backgroundColor: '#1e1e2e', minHeight: '100vh' }}>
                <h1>404 | Página não encontrada!</h1>
                <p>Verifique o endereço digitado.</p>
            </div>
        );
    };

    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/cadastro" element={<Cadastro />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/perfil" element={<Perfil />} />
                    <Route path="/categoria" element={<Categoria />} />
                    <Route path="/ranking" element={<Ranking />} />
                    <Route path="/quiz" element={<Quiz />} />
                    <Route path="/favorito" element={<Favorito/>} />
                    <Route path="/perfil/:id" element={<PerfilPublico />} />
                    <Route path="*" element={<PageError />} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
};
