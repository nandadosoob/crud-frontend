import { useState } from "react";

export default function NovaEncomenda() {
    const [cliente, setCliente] = useState("")
    const [estilista, setEstilista] = useState("")
    const [tipoEncomenda, setTipoEncomenda] = useState("")
    const [horarioPedido, setHorarioPedido] = useState("")
    const [valor, setValor] = useState("")

    const handleSubmit = async (event) => {
        event.preventDefault();

        const encomendas = {
            cliente,
            estilista,
            tipoEncomenda,
            horarioPedido,
            valor
            
        };
        console.log(encomendas)

        try {
            const resposta = await fetch("https://final-project-dw2.onrender.com/encomendas", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(encomendas)
            });

            if (resposta.status === 201) {
                alert("Cadastro concluído");

                setCliente("");
                setEstilista("");
                setTipoEncomenda("");
                setHorarioPedido("");
                setValor("");
            } else {
                alert(`Erro no cadastro; ${resposta.status}`);
            }

        } catch (error) {
            console.log(error);
            // alert("Erro ao conectar com o servidor.")
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
                <input onChange={(event) => setEstilista(event.target.value)}
                value={estilista} /></div>
            <div className="py-4 px-4 w-16.6">
                tipo encomenda
                <input onChange={(event) => setTipoEncomenda(event.target.value)}
                value={tipoEncomenda} /></div>
            {/* <div className="py-4 px-4 w-16.6"><input onChange={(event) => setHorarioPedido(event.target.value)}
                value={horarioPedido} /></div> */}
            <div className="py-4 px-4 w-16.6"><input onChange={(event) => setValor(event.target.value)}
                value={valor} /></div>
            <div>
                <button type="submit" className="bg-slate-500">Registrar pedido</button>
            </div>
        </form>

        // <div className="text-gray-700 border-b border-gray-200 hover:bg-gray-100 flex "
        // onSubmit={handleSubmit}>
        // </div>


    )
}