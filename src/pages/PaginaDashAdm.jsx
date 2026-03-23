import Catalogo from "../components/catalogo/Catalogo.jsx";
import Titulo from "../components/titulo/Titulo.jsx";
import {useEffect, useState} from "react";
import css from "../components/main/Main.module.css";
import {useNavigate} from "react-router-dom";

export default function PaginaDashAdm(){
    const [inp,setInp] = useState('')
    const [nome, setNome] = useState('')
    const navegate = useNavigate()

    useEffect(function(){
        let token = localStorage.getItem('token');
        if(token){
            setNome(localStorage.getItem('nome'));
        }
        else{
            alert('Faça login primeio')
            navegate('/login')
        }
    }, [])

    return (
        <div className={'container'}>
            <div className={'row'}>
                <div className={'col-12'}>
                    <Titulo texto={'Dashboard do ADM'}/>
                    <p>Bem vindo {nome}</p>
                </div>
                <input type="text" name="autor" id="autor" placeholder="Digite um nome de autor" value={inp} onChange={(e) => setInp(e.target.value)} className={'mb-3 rounded-5 p-2 ' + css.input}/>
                <Catalogo inp={inp} setInp={setInp} />
            </div>
        </div>
    )
}