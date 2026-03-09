import Input from "../components/input/Input.jsx";
import Button from "../components/button/Button.jsx";
import { Link } from "react-router-dom";

export default function PaginaLogin() {
    return (
        <div className={"container"}>
            <div className="row">
                <div className="col-sm-12 col d-flex justify-content-center align-items-center">
                    <form className={"w-75 px-2 py-4 my-4 bg-primary-subtle rounded"}>
                        <Input htmlfor={"email"} label={"Insira seu email"} tipo={"email"} />
                        <Input htmlfor={"senha"} label={"Insira sua senha"} tipo={"password"} />
                        <Button texto={"Logar"} tipo={"form"} />
                        <Link to={"/cadastro"}>Cadastrar</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}