import Button from "../components/button/Button";
import Input from "../components/input/Input";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function PaginaCadastro() {

    const [imagem, setImagem] = useState('')
    const [titulo, setTitulo] = useState('')
    const [categoria, setCategoria] = useState('')
    const [descricao, setDescricao] = useState('')
    const [autor, setAutor] = useState('')
    const [faixa_etaria, setFaixa_etaria] = useState('')
    const navegate = useNavigate()


    async function cadastrar() {
        let retorno = await fetch(`https://apps-api-livros.ucxocw.easypanel.host/livro`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify({
                imagem: imagem,
                titulo: titulo,
                categoria: categoria,
                descricao: descricao,
                autor: autor,
                faixa_etaria: faixa_etaria,
            })
        })
        retorno = await retorno.json()
        console.log(retorno)
        navegate('/dashboard-adm')
    }
    return (
        <div className={"container"}>
            <div className={"row"}>
                <div className={"col-sm-12 col d-flex justify-content-center align-items-center"}>
                    <form className={"w-sm-100 w-75 px-2 py-4 my-4 bg-primary-subtle rounded"}>
                        <Input htmlfor={"imagem"} label={"Insira o link da imagem"} tipo={"text"} value={imagem} onChange={(e) => setImagem(e.target.value)} />
                        <Input htmlfor={"titulo"} label={"Insira o título do livro"} tipo={"text"} value={titulo} onChange={(e) => setTitulo(e.target.value)} />
                        <Input htmlfor={"autor"} label={"Insira o autor do livro"} tipo={"text"} value={autor} onChange={(e) => setAutor(e.target.value)} />
                        <Input htmlfor={"categoria"} label={"Insira a categoria do livro"} tipo={"text"} value={categoria} onChange={(e) => setCategoria(e.target.value)} />
                        <Input htmlfor={"descricao"} label={"Insira a descrição do livro"} tipo={"text"} value={descricao} onChange={(e) => setDescricao(e.target.value)} />
                        <Input htmlfor={"faixa_etaria"} label={"Insira a faixa etária do livro"} tipo={"text"} value={faixa_etaria} onChange={(e) => setFaixa_etaria(e.target.value)} />
                        <Button texto={"Cadastrar"} tipo={"form"} onClick={cadastrar}/>
                    </form>
                </div>
            </div>
        </div>
    )
}