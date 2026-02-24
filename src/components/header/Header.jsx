import css from './Header.module.css'

export default function Header({ titulo = "BOOK PLUS" }) {
    return (
        <header className={'py-4'}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 justify-content-between align-items-center d-block d-md-flex">
                        <div className='d-flex gap-2'>
                            <img src="/iconeDoLivro.png" alt="Icone livro aberto" className={css.iconLogo} />
                            <h1 className="">{titulo}</h1>
                        </div>



                        <div className={'w-50 d-flex justify-content-center justify-content-sm-center'}>
                            <nav className={'navbar navbar-expand-lg w-100 d-flex justify-content-between align-items-center'}>
                                <button className={"navbar-toggler"} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className={"navbar-toggler-icon"}></span>
                                </button>
                                <div className={'collapse navbar-collapse'} id="navbarNav">
                                    <ul className={'navbar-nav d-flex align-items-center justify-content-between w-100'}>
                                        <li className={'nav-item active'}>
                                            <a href="#">CATÁLOGO</a>
                                        </li>
                                        <li className={'nav-item'}>
                                            <a href="#">LANÇAMENTOS</a>
                                        </li>
                                        <li className={'nav-item'}>
                                            <a href="#">MAIS VENDIDOS</a>
                                        </li>
                                        <li className={'nav-item'}>
                                            <button className={css.btnLoginAdm + ' px-4'}>LOGIN ADMIN</button>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                            
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}