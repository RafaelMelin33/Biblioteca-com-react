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

    return (
        <>
            {livros.map((livro, index) => (
                <div className='col-md-3 col-12' key={index}>
                    <div className='d-flex justify-content-between bg-secondary text-center mt-2'>
                        <Button texto={'Editar'} tipo={'editar'}/>
                        <Button texto={'Excluir'} tipo={'excluir'}/>
                    </div>
                    <BookCard titulo={livro.titulo} autor={livro.autor} tipo={livro.tipo} imagem={livro.imagem} id={index+1} />
                </div>
            ))}
        </>
    )
}