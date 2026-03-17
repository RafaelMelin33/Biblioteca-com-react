import BookCard from "../BookCard/BookCard.jsx";
import {useState, useEffect} from "react";

export default function Catalogo({inp=''}) {
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
                    <BookCard titulo={livro.titulo} autor={livro.autor} tipo={livro.tipo} imagem={livro.imagem} id={index} />
                </div>
            ))}
        </>
    )
}