import css from './Button.module.css'

export default function Button({texto = "Botão", tipo = ""}){
    return(
        <button className={css[tipo] + ' ' + css.botao + ' rounded-5 py-3 my-1'}>
            {texto}
        </button>
    )
}