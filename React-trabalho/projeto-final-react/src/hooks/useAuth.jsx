import { createContext, useContext, useState, useEffect } from "react";
import { loginUser, registerNewUser, updateUser } from "../services/Api.jsx";
import fotoDefault from '../assets/images/images.png';

const AuthContext = createContext({}); //Aqui, criamos o contexto de autenticação.
//Ele será usado para compartilhar o usuário e as funções de login/logout/edição com toda a aplicação. {valor inicial (padrão}

export const AuthProvider = ({ children }) => { //“envolver” (wrap) outros componentes.

//O children são os elementos filhos dentro do provedor (tudo o que está dentro de <AuthProvider> ... </AuthProvider>).
  const [usuario, setUsuario] = useState(null);

  const login = async (email, senha) => {
    const user = await loginUser(email, senha); //loginUser(email, senha) para autenticar o usuário (provavelmente faz uma requisição para a API
    if (!user) throw new Error("Email ou senha incorretos");

    if (!user.avatar) {
      user.avatar = fotoDefault;//ão tiver uma imagem (avatar), define a fotoDefault.
    }

    setUsuario(user);//setUsuario(user) → isso faz a UI reagir (exibir o usuário logado).
    localStorage.setItem("usuario", JSON.stringify(user));
  };

  const register = async (userData) => { 

    if(!userData.avatar) {
      userData.avatar = fotoDefault; //imagem (avatar), define fotoDefault.
    }

    const newUser = await registerNewUser(userData);

    if (!newUser.avatar) {
      newUser.avatar = fotoDefault;
    }

    setUsuario(newUser);
    localStorage.setItem("usuario", JSON.stringify(newUser)); //Atualiza o estado e salva no localStorage.
  };

  const logout = () => {
    setUsuario(null); //Remove o usuário da aplicação (zera o estado).
    localStorage.removeItem("usuario");
  };

  const editar = async (novosDados) => {
    if (!usuario) return; //erifica se há um usuário logado (caso contrário, não faz nada).
    try {
      const updatedUser = await updateUser(usuario.id, novosDados); //Usa a função updateUser para atualizar o perfil no servidor.

      if (!updatedUser.avatar) {
        updatedUser.avatar = fotoDefault;
      }

      setUsuario(updatedUser);
      localStorage.setItem("usuario", JSON.stringify(updatedUser));
    } catch (error) {
      console.error("Erro ao atualizar usuário:", error);
    }
  };

  //Esse useEffect faz o “auto login”:
//“Quando o app é recarregado, verifica se havia um usuário salvo no localStorage.
//Se sim, restaura ele no estado e mantém o usuário logado.”

  useEffect(() => { //useEffect: carregar usuário do localStorage
    const storedUser = localStorage.getItem("usuario");
    if (storedUser) {
      const user = JSON.parse(storedUser); //Verifica se há um usuário salvo no localStorage (sessão anterior).
      // Se existir, transforma de string JSON para objeto.
      //O localStorage só armazena strings, então você precisa “desconverter” (parse) de volta para objeto JavaScript.
      if (!user.avatar) {
        user.avatar = fotoDefault;
      }
      setUsuario(user);//Isso coloca o usuário recuperado no useState(usuario).
    }
  }, []); //Se não houver nada (ou seja, o usuário nunca logou antes), ele simplesmente não faz nada.

  return (
    <AuthContext.Provider value={{ usuario, login, logout, register, editar }}>
      {children}
    </AuthContext.Provider>
  );
};
//O AuthContext.Provider fornece (disponibiliza) o valor do contexto para todos os componentes dentro dele.
//O valor inclui:
//usuario → o usuário logado
//login, logout, register, editar → as funções de autenticação
//{children} → são os componentes filhos que terão acesso a esse contexto.

export const useAuth = () => useContext(AuthContext);