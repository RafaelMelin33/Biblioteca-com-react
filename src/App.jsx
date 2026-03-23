import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaHome from "./pages/PaginaHome.jsx";
import PaginaLogin from "./pages/PaginaLogin.jsx";
import Input from "./components/input/Input.jsx";
import PaginaCadastro from "./pages/PaginaCadastro.jsx";
import PaginaCatalogoLivros from "./pages/PaginaCatalogoLivros.jsx";
import PaginaDetalhesLivro from "./pages/PaginaDetalhesLivro.jsx";
import PaginaDashAdm from "./pages/PaginaDashAdm.jsx";

export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path={"/"} element={<PaginaHome />} />
                <Route path={"/login"} element={<PaginaLogin />} />
                <Route path={"/cadastro"} element={<PaginaCadastro />} />
                <Route path={"/catalogo-livros"} element={<PaginaCatalogoLivros />} />
                <Route path={"/detalhe-livro/:id"} element={<PaginaDetalhesLivro />} />
                <Route path={"/dashboard-adm"} element={<PaginaDashAdm />} />
            </Routes>
            {/* <Banner />
            <Main /> */}
            <Footer frase={'Sua livraria digital de confiança. Uma curadoria minimalista das obras mais impactantes para o seu crescimento.'} />
        </BrowserRouter>
    )
}


// import {useEffect, useState} from "react";

// export default function App(){

//     const [email, setEmail] = useState('');
//     const [senha, setSenha] = useState('');
//     const [alerta, setAlerta] = useState('');

//     async function realizarLogin(){
//         let retorno = await fetch('https://apps-api-livros.ucxocw.easypanel.host/login',{
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer ${localStorage.getItem('token')}`,
//             },
//             body: JSON.stringify({
//                 email: email,
//                 senha: senha,
//             })
//         })

//         retorno = await retorno.json();

//         console.log(retorno);

//         if(retorno.token){
//             setAlerta('Login realizado com sucesso!');
//             localStorage.setItem('token', retorno.token);
//             localStorage.setItem('nome', retorno.usuario.nome);
//             localStorage.setItem('email', retorno.usuario.email);
//             localStorage.setItem('id_usuario', retorno.usuario.id);
//         }
//         else{
//             setAlerta('Email ou senha errada');
//         }
//     }

//     useEffect(function(){
//         let token = localStorage.getItem('token');
//         if(token){
//             let nome = localStorage.getItem('nome');
//             setAlerta(`Olá, ${nome} você já está logado.`);
//         }
//     }, [])

//     return(
//         <div>
//             <label>Email:</label>
//             <input type={"email"} value={email} onChange={(e) => setEmail(e.target.value)} />
//             <label>Senha:</label>
//             <input type={'password'} value={senha} onChange={(e) => setSenha(e.target.value)} />
//             <button onClick={realizarLogin}>Enviar</button>
//             <p>{alerta}</p>
//         </div>
//   )
// }