import Input from "../components/input/Input.jsx";
import Button from "../components/button/Button.jsx";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function PaginaLogin() {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [alerta, setAlerta] = useState('')
    const navegate = useNavigate();

    async function login() {
        let retorno = await fetch(`https://apps-api-livros.ucxocw.easypanel.host/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify({
                email: email,
                senha: senha
            })
        })
        retorno = await retorno.json()
        console.log(retorno)
        if(retorno.token){
            setAlerta('Login realizado com sucesso!');
            localStorage.setItem('token', retorno.token);
            localStorage.setItem('nome', retorno.usuario.nome);
            localStorage.setItem('email', retorno.usuario.email);
            localStorage.setItem('id_usuario', retorno.usuario.id);
            setTimeout(function(){
                navegate('/dashboard-adm')
            },500)
        }
        else{
            setAlerta('Email ou senha errada');
        }
    }





    return (
        <div className={"container"}>
            <div className="row">
                <div className="col-sm-12 col d-flex justify-content-center align-items-center">
                    <form className={"w-75 px-2 py-4 my-4 bg-primary-subtle rounded"}>
                        <p className={'w-100 text-center'}>{alerta}</p>
                        <Input htmlfor={"email"} label={"Insira seu email"} tipo={"email"} value={email} onChange={(e) => setEmail(e.target.value)} />
                        <Input htmlfor={"senha"} label={"Insira sua senha"} tipo={"password"} value={senha} onChange={(e) => setSenha(e.target.value)} />
                        <Button texto={"Logar"} tipo={"form"} type={'button'} onClick={login} />
                    </form>
                </div>
            </div>
        </div>
    )
}