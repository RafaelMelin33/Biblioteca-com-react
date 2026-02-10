import css from './Header.module.css'

export default function Header({titulo = "BOOK PLUS"}){
    return(
        <header className={'py-4'}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-between align-items-center">
                        <div className='d-flex gap-2'>
                            <img src="/iconeDoLivro.png" alt="Icone livro aberto" className={css.iconLogo} />
                            <h1 className="">{titulo}</h1>
                        </div>
                        <div className={'w-50 d-flex justify-content-between'}>
                            <nav className={'w-75 d-flex justify-content-between align-items-center'}>
                                <a href="#">CATÁLOGO</a>
                                <a href="#">LANÇAMENTOS</a>
                                <a href="#">MAIS VENDIDOS</a>
                            </nav>
                            <button className={css.btnLoginAdm}>LOGIN ADMIN</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}