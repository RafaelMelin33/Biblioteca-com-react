import css from "./Catalogo.module.css"
import BookCard from "../BookCard/BookCard.jsx";
import {useState, useEffect} from "react";
import Button from "../button/Button.jsx";

export default function Catalogo({inp='', logado = false}) {
    const [livros, setLivros] = useState([])

    async function buscarLivros() {
        let buscarTitulo = await fetch(`https://apps-api-livros.ucxocw.easypanel.host/livro?titulo=${inp}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        buscarTitulo = await buscarTitulo.json()

        let buscarAutor = await fetch(`https://apps-api-livros.ucxocw.easypanel.host/livro?autor=${inp}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        buscarAutor = await buscarAutor.json()
        if (inp){
            setLivros(buscarTitulo.livros.concat(buscarAutor.livros))
        } else{
            setLivros(buscarTitulo.livros)
        }


        // setLivros(buscar.livros)
        console.log(livros)
    }

    useEffect(function () {
        buscarLivros()
    }, [inp])

    async function excluir(id) {
        let exclusao = await fetch(`https://apps-api-livros.ucxocw.easypanel.host/livro/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },

        })
        exclusao = await exclusao.json()
        console.log(exclusao)
        buscarLivros()
    }

    return (
        <>
            {livros.map((livro, index) => (
                <div className='col-md-3 col-12' key={index}>
                    {logado == true ? (
                        <>
                            <div className={'d-flex justify-content-between bg-secondary text-center mt-2 px-2 ' + css.card}>
                                <Button texto={'Editar'} tipo={'editar'}/>
                                <Button texto={'Excluir'} tipo={'excluir'} onClick={() => excluir(livro.id)}/>
                            </div>
                            <BookCard titulo={livro.titulo} autor={livro.autor} tipo={livro.tipo} imagem={livro.imagem} id={livro.id} estilo={'logado'} />
                        </>
                    ) : (
                        <BookCard titulo={livro.titulo} autor={livro.autor} tipo={livro.tipo} imagem={livro.imagem} id={livro.id} />
                    )}


                </div>
            ))}
        </>
    )
}