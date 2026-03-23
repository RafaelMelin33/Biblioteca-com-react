import { useParams } from "react-router-dom";
import { livros } from "../dados/livros.js"
import Titulo from "../components/titulo/Titulo.jsx";
import {useEffect, useState} from 'react'

export default function PaginaDetalhesLivro() {

    const { id } = useParams();

    const [livros, setLivros] = useState([])

    async function buscarLivros() {
        let buscar = await fetch(`https://apps-api-livros.ucxocw.easypanel.host/livro/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        buscar = await buscar.json()
        setLivros(buscar.livro)

        // setLivros(buscar.livros)
        console.log(livros)
    }

    useEffect(function(){
        buscarLivros()
    }, [])

    return (
        <main className="mt=4">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <img src={livros.imagem} alt={`Livro ${livros.nome}`} className={"w-100"} />
                    </div>
                    <div className="col">
                        <div class="row">
                            <div className="col-12">
                                <Titulo texto={livros.titulo} />
                            </div>
                            <div className="col-12">
                                <small className="mb-3">{livros.tipo}</small>
                            </div>
                            <div className="col-12">
                                <p>Por <span className="text-primary">{livros.autor}</span></p>
                            </div>

                            <div className="col-12">
                                <p className="mb-1"><small>SINOPSE</small></p>
                                <p className="text-secondary"> {livros.descricao}</p>
                            </div>
                            <div className="col-12">
                                <p>Faixa etária: {livros.faixa_etaria}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}