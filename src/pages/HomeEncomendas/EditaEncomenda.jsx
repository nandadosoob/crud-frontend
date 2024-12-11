import { useState } from "react";
import { Link } from "react-router-dom";

export default function EditaEncomenda() {
    const [cliente, setCliente] = useState("")
    const [estilista, setEstilista] = useState("")
    const [tipoEncomenda, setTipoEncomenda] = useState("")
    const [valor, setValor] = useState("")

    const handleSubmit = async (event) => {
        event.preventDefault();


        const horarioPedido = new Date().toISOString();
        const encomendas = {
            cliente,
            estilista,
            tipoEncomenda,
            valor
            
        };
        console.log(encomendas, horarioPedido)

        try {
            const resposta = await fetch("https://final-project-dw2.onrender.com/encomendas", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(encomendas, horarioPedido)
            });

            if (resposta.status === 201) {
                alert("Cadastro concluído");

                setCliente("");
                setEstilista("");
                setTipoEncomenda("");
                setValor("");
            } else {
                alert(`Erro no cadastro; ${resposta.status}`);
            }

        } catch (error) {
            console.log(error);
            alert("Erro ao conectar com o servidor.")
        };
    }
    // const [criaPedido, setCriaPedido] = useState("");

    return (
        <form onSubmit={handleSubmit}>

            <div className="py-4 px-4 w-16.6">
                <label > cliente nome</label>
                <input onChange={(event) => setCliente(event.target.value)}
                value={cliente} /></div>
            <div className="py-4 px-4 w-16.6">
                <label> estilista </label>
                {/* <input onChange={(event) => setEstilista(event.target.value)}
                value={estilista} /> */}
                <select onChange={(event) => setEstilista(event.target.value)}>
                    <option value="Coco Chanel">Coco Chanel </option>
                    <option value="Christian Dior">Christian Dior</option>
                    <option value="Valentino Garavani">Valentino Garavani</option>
                    <option value="Miuccia Prada">Miuccia Prada</option>
                    <option value="Giorgio Armani">Giorgio Armani</option>
                    <option value="Gianni Versace ">Gianni Versace </option>
                    <option value="Alexander McQueen">Alexander McQueen</option>
                    <option value="John Galliano">John Galliano</option>
                    <option value="Vivienne Westwood">Vivienne Westwood</option>
                </select>
            </div>

            <div className="py-4 px-4 w-16.6">
                <label>tipo encomenda</label>
                <input onChange={(event) => setTipoEncomenda(event.target.value)}
                value={tipoEncomenda} /></div>
           
            <div className="py-4 px-4 w-16.6">
                <label>Valor</label>
                <input onChange={(event) => setValor(event.target.value)}
                value={valor} /></div>
            <div>
                <button type="submit" className="bg-slate-500">Salvar edições do pedido</button>
            </div>
            <div>
                <button className="bg-slate-500">
                    <Link to="/HomeEncomendas" className="hover:underline">
                    Cancelar edições
                    </Link>
                </button>
            </div>
        </form>

        // <div className="text-gray-700 border-b border-gray-200 hover:bg-gray-100 flex "
        // onSubmit={handleSubmit}>
        // </div>


    )
}