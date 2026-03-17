import Catalogo from "../components/catalogo/Catalogo.jsx";
import Titulo from "../components/titulo/Titulo.jsx";
import css from "../components/main/Main.module.css";
import { useState } from "react";

export default function PaginaCatalogoLivros() {
    const [inp,setInp] = useState('')
    return (
        <main className={"mt-4"}>
            <div className={"container"}>
                <div className={"row"}>
                    <div className="col-12 col-md-6">
                        <Titulo texto={"Catálogo de livros"} />
                    </div>
                    <div className="col-12 col-md-6 d-flex justify-content-md-end justify-content-start align-items-center gap-3 mt-3 mt-md-0 mb-3">
                        <select name="categorias" id="categorias" className={'rounded-5 p-2 ' + css.select}>
                            <option value="relevancia">Ordenar por: Relevância</option>
                            <option value="maisRecentes">Mais recentes</option>
                            <option value="menorPreco">Menor preço</option>
                        </select>
                        <input type="text" name="autor" id="autor" placeholder="Digite um nome de autor" value={inp} onChange={(e) => setInp(e.target.value)} className={'rounded-5 p-2 ' + css.input}/>
                    </div>
                    <Catalogo inp={inp} setInp={setInp} />
                </div>
            </div>
        </main>
    )
}