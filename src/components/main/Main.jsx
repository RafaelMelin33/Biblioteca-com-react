import css from './Main.module.css'
import Button from '../button/Button.jsx';
import BookCard from '../BookCard/BookCard.jsx';

export default function Main(){

    const livros = [
        {
            titulo: 'O Silêncio do Mar',
            autor: 'Helena Vasconcelos',
            tipo: 'Poesia',
            imagem: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfPUvluJk-HiK0Px5gMH_BQBTb27qwJ60GGLCTrpOAAYFz8ODYpVVOV2O3H0-BSlmEa2ohe6ftiet7tpJzzXqwrqqUor68qTw-bwD1uGjhWJcvHsWClI0VuBYce5rxZwgBVQV4bhHqPxrEBM3LkzshPTJe7ieqD4TS1WBM3tBpYhGbRcqANDyZcqO8gLGClOuhnWi0GrUe89miMPaSuLf43oTjqYI0bFS_SBPM5Oh-f_SIfyjMhezNzi5D1Mv_gaT50wKuwIsP8bdt'
        },
        {
            titulo: 'Caminhos de Areia',
            autor: 'Marcos Dutra',
            tipo: 'Romance',
            imagem: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBV0Fo6K0kg37JnY2R67Fc9vlpJ4pwABfTQsIXi9LAdJOi8oz6Y3xsHDbk_5w5Hp8YSNjmdpSpjYuOlnVUm-uy7b45GWzXqhhI9-ao9rt8Q2lrG9nNo2lgys-BBnYPVXxc8VVcqUNy_PPpbX7N2Z5hRfoziivBV6HIgVrjo8zW0sqjyXYCFaEmdF9Cb-fRdOKMYPed3WE9LQybhTTrWaUn0WJftRaZvSO8udDnj2HI10poLHdjIE2qfvT7Qz7F5D9LYyPF_qnOT-z-D'
        },
        {
            titulo: 'Arquitetura da Alma',
            autor: 'Beatriz Muniz',
            tipo: 'Ensaios',
            imagem: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8VyP47_-PgunXI5hTdpn5e_owd_pT-1_tY6trdpnEXHEe9sO6ybipb7pxSkP7hu54OJxwfj2LJ3K_885etjv0OXG2Msa_37dVO0YgCsEfyl9Ih6YRCy8b4pcTAiPHNScTg9f7P1suLyTLjbQpvOF2fu3MA4cFToqfJY_8CcPJPiVvdvzxDU91Vboa9fzVFZCf3OLKL3lUiPKgJHTgdqYKD9uPo55yF2b2WY68rg-K8cwOom3jkFjsXIK8lit88024T_n8yjqD1kaL'
        },
        {
            titulo: 'O Último Inverno',
            autor: 'Ricardo Almeida',
            tipo: 'Mistério',
            imagem: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAURKfYJHJw6LLOsifFzm7CAan-Kw4sdvlY2yyE-RjNdqOuAhBvlXXJZBQSt01H_rmgrFGXhpsGxir_GPmSqxfW6zsRfFDKE1yyLi91QXM4ZltWse8vjQ5qwflgoj1jLHyhH8EmKzueAbeYhY-2ynolxHQxWikUS9t4-CZyLYjgy77QmqitnknAwAuHjuQchnjtv7CR6Z2Z3iwI3dD_cChz7-azkF60eFyKoHhjpOy8R8Xvtoe5PEsHZlL_ij7Unm-GwXENrTrkdpa-'
        },
        {
            titulo: 'Além do Horizonte',
            autor: 'Juliano Mendes',
            tipo: 'Aventura',
            imagem: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSgr_vyBigWMwwVrRouBgS916W22Ws3OqI2rZhMRgoO6PX_iVW2VGAgmrJdorj4ffehQFjklPhZJ_Am7rHl0469VKQiz-HHNvRYxXzpq7vPG-BZGCWapyG2Lk8fkh-VKw-OSbk61Kfb8IJgBhilmM9KlPYlssH4z5oqAs985k4CdaupuonOrBFhzGow36ifDJVsx-vYdyogku1ag9FUwpi6WGyrKJdpgXpnN43ClCKAsSLXdKYT5ojtWLw5gNqi-hAauUdsg0NXKQR'
        },
        {
            titulo: 'O Despertar da Mente',
            autor: 'Dra. Sônia Luz',
            tipo: 'Psicologia',
            imagem: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDIrOniwwx7O8UYZpSiLJUgTJXhZna95wsoFrsm-nZTeLuJkMTHrgkmPvjcq1ZsrD5L_VsN-dig-V9df78pKgQflbtzZAS9x8xTuMWeMOlXQKdRiINMpABc62S6Yfm2Ne72hh4Z3eOoM2NTRKyvoGXXA-Cs2ttpKTnB3HiAk3lET2KeQ0Jry5uwO9LgDRuDWfNDJHdXCKJLru6YRxJIPdp1pLAa1Mw4F2pjW5va6Dby_ukqe6rY3yBOe6ToBV62BSJ72_QKPow_iOqE'
        },
        {
            titulo: 'Fragmentos',
            autor: 'Carlos Eduardo',
            tipo: 'Contos',
            imagem: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBL-p7VMFKMrJ3m2mgNbTHioDJnF--bq4fgkF2CMeH_ZlX5876uyFH0_SBCKuGWl0zGNM6QqQ6BudDR4njMloF7JX49DmXoonlUO0mMf7rTbxcZSDSLth-GKJw9C5rjkhb1NB4_Go1OJ9-MmEZckBFxD_JAfENWKZhavhiQw-ETy_lsD1lS1ioEwnP8MLTEc4Wb8TuaI4R7IBwkrUi-TPIEqh8oTj5OKvZBDUn9o5-YYUGusr6AgNmG8PrLMa24ACBs4PCWU_4rKTiI'
        },
        {
            titulo: 'Luz e Sombra',
            autor: 'Patrícia Lima',
            tipo: 'Ficção',
            imagem: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCbecKio3xro7kgbDmdD5jUiNAkzgWcfTOjbZi7iWXl_fzEavnubnulN_POs4g-6qNfk6wMnQjQ0mO-k_XYG3U_LWGTmPlVzISCU776heCbx9zeFxvcTQqzj1trhylmNN_bzEvYadHW2LlCvxvEDjjQfMAfEjFsiSy7ZXyOGKDP4sI6ejnK7o8LefZzrqkm5xkRfwqmLpiI6UTat6AaESrl9MoJZt2VSlsNYPDHwSxxUJYkZ2d9RzpD3uVgZRfPoF4VZTMc1QbyOvo5'
        }
    ];

    return(
        <main className={'pt-5'}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <p className={'d-flex align-items-center'}>
                            <span className={css.tracinho + ' d-inline-block'}></span>
                            <span className={css.textoNovidades}>NOVIDADES</span>
                        </p>
                    </div>
                    <div className='col-12 d-flex justify-content-between align-items-center mb-2'>
                        <div className='row w-100 justify-content-between align-items-center'>
                            <div className="col-12 col-md-6">
                                <p className={css.titulo}>Destaques da Semana</p>
                            </div>
                            <div className="col-12 col-md-6 d-flex justify-content-md-end justify-content-start align-items-center gap-3 mt-3 mt-md-0">
                                <select name="categorias" id="categorias" className={'rounded-5 p-2 ' + css.select}>
                                    <option value="relevancia">Ordenar por: Relevância</option>
                                    <option value="maisRecentes">Mais recentes</option>
                                    <option value="menorPreco">Menor preço</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    
                    {livros.map((livro, index) => (
                        <div className='col-md-3 col-12' key={index}>
                            <BookCard titulo={livro.titulo} autor={livro.autor} tipo={livro.tipo} imagem={livro.imagem} />
                        </div>
                    ))}
                    <div className='col-12 d-flex justify-content-center py-5'>
                        <Button texto={'Ver catálogo completo'} tipo={'vazio color-dark'} />
                    </div>
                </div>
            </div>
        </main>
    )
}