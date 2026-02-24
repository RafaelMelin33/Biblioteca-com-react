import Header from "./components/header/Header.jsx";
import Banner from "./components/banner/Banner.jsx";
import Main from "./components/main/Main.jsx";
import Footer from "./components/footer/Footer.jsx";

export default function App() {
    return (
        <>
            <Header />
            <Banner />
            <Main />
            <Footer frase={'Sua livraria digital de confiança. Uma curadoria minimalista das obras mais impactantes para o seu crescimento.'}/>
        </>
    )
}