import BookCard from "../BookCard/BookCard.jsx";
import { livros } from '../../dados/livros.js';

export default function Catalogo() {

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