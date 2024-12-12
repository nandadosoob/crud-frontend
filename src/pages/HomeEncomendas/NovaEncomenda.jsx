import { useState } from "react";
import { Link } from "react-router-dom";

export default function NovaEncomenda() {
  const [cliente, setCliente] = useState("");
  const [estilista, setEstilista] = useState("");
  const [tipoEncomenda, setTipoEncomenda] = useState("");
  const [valor, setValor] = useState("");

  const [pedidoFeito, setPedidoFeito] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const horarioPedido = new Date().toISOString();
    const encomendas = {
      cliente,
      estilista,
      tipoEncomenda,
      valor,
      horarioPedido,
    };
    console.log(encomendas, horarioPedido);

    try {
      const resposta = await fetch(
        "https://final-project-dw2.onrender.com/encomendas",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(encomendas),
        }
      );

      if (resposta.status === 201) {
        alert("Cadastro concluído");

        setCliente("");
        setEstilista("");
        setTipoEncomenda("");
        setValor("");
        setPedidoFeito(true)
      } else {
        alert(`Erro no cadastro; ${resposta.status}`);
      }
    } catch (error) {
      console.log(error);
      alert("Erro ao conectar com o servidor.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 py-8 px-6">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-3xl w-full">
        <h1 className="text-2xl font-bold mb-6 text-gray-700 text-center">
          Nova Encomenda
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Nome do Cliente
            </label>
            <input
              type="text"
              value={cliente}
              onChange={(event) => setCliente(event.target.value)}
              placeholder="Digite o nome do cliente"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring focus:ring-gray-200"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Estilista
            </label>
            <select
              value={estilista}
              onChange={(event) => setEstilista(event.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring focus:ring-gray-200"
              required
            >
              <option value="">Selecione um estilista</option>
              <option value="Coco Chanel">Coco Chanel</option>
              <option value="Christian Dior">Christian Dior</option>
              <option value="Valentino Garavani">Valentino Garavani</option>
              <option value="Miuccia Prada">Miuccia Prada</option>
              <option value="Giorgio Armani">Giorgio Armani</option>
              <option value="Gianni Versace">Gianni Versace</option>
              <option value="Alexander McQueen">Alexander McQueen</option>
              <option value="John Galliano">John Galliano</option>
              <option value="Vivienne Westwood">Vivienne Westwood</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Tipo de Encomenda
            </label>
            <input
              type="text"
              value={tipoEncomenda}
              onChange={(event) => setTipoEncomenda(event.target.value)}
              placeholder="Digite o tipo de encomenda"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring focus:ring-gray-200"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Valor</label>
            <input
              type="number"
              step="0.01"
              value={valor}
              onChange={(event) => setValor(event.target.value)}
              placeholder="Digite o valor (em R$)"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring focus:ring-gray-200"
              required
            />
          </div>

          <div className="flex space-x-4">
            <Link
              to="/HomeEncomendas"
              className="w-full bg-gray-600 text-white py-2 px-4 rounded-md font-medium hover:bg-gray-700 text-center focus:outline-none focus:ring focus:ring-gray-200"
            >
              Cancelar
            </Link>
            {pedidoFeito ? (<Link to="/HomeEncomendas" className="w-full bg-pink-700 text-white py-2 px-4 rounded-md font-medium hover:bg-pink-800 focus:outline-none focus:ring focus:ring-pink-200">Voltar à lista de cadastros</Link>) : (
              <button
                type="submit"
                className="w-full bg-pink-700 text-white py-2 px-4 rounded-md font-medium hover:bg-pink-800 focus:outline-none focus:ring focus:ring-pink-200">
                Registrar Pedido
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
