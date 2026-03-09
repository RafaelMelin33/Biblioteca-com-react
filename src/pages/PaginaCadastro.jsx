import Button from "../components/button/Button";
import Input from "../components/input/Input";

export default function PaginaCadastro() {
    return (
        <div className={"container"}>
            <div className={"row"}>
                <div className={"col-sm-12 col d-flex justify-content-center align-items-center"}>
                    <form className={"w-sm-100 w-50 px-2 py-4 my-4 bg-primary-subtle rounded"}>
                        <Input htmlfor={"nome"} label={"Insira seu Nome"} tipo={"text"} />
                        <Input htmlfor={"email"} label={"Insira seu email"} tipo={"email"} />
                        <Input htmlfor={"senha"} label={"Insira sua senha"} tipo={"password"} />
                        <Button texto={"Cadastrar"} tipo={"form"} />
                    </form>
                </div>
            </div>
        </div>
    )
}