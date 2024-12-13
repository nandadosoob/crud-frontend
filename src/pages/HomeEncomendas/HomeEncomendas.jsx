import { useEffect, useState } from "react";
import { Pagina } from "../../components/Pagina";
import { Link } from "react-router-dom";
import { use } from "react";
import NovaEncomenda from "./NovaEncomenda";

export function HomeEncomendas() {
  const encomendas = [];

  const [dataInicio, setDataInicio] = useState('');
  const [dataFim, setDataFim] = useState('');
  const [estilista, setEstilista] = useState('');
  
  const [encomenda, setEncomenda] = useState(encomendas)
  const [filteredEncomendas, setFilteredEncomendas] = useState(encomenda);

  useEffect(()=>{
    fetch(`https://final-project-dw2.onrender.com/encomendas`, {
      method: "GET",  // Método DELETE para excluir a encomenda
    }).then(e => { 
        e.json().then(r => {
          setEncomenda(r)
        setFilteredEncomendas(r)})
      })

  }, [])
  

  const handleFilter = () => {
    console.log(encomenda)
    let filtered = encomenda;


    const formatDate = (dateStr) => {
      const [day, month, year] = dateStr.split(' - ')[0].split('/');
      return new Date(`${year}-${month}-${day}`); // Convertendo para Date
    };

    if (dataInicio) {
      const dataInicioFormatted = new Date(dataInicio);
      filtered = filtered.filter(encomenda => formatDate(encomenda.dataHora) >= dataInicioFormatted);
    }

    if (dataFim) {
      const dataFimFormatted = new Date(dataFim);
      filtered = filtered.filter(encomenda => formatDate(encomenda.dataHora) <= dataFimFormatted);
    }

    if (estilista) {
      filtered = filtered.filter(encomenda => encomenda.estilista === estilista);
    }

    setFilteredEncomendas(filtered);
  };

  const [filtraEncomendas, setFiltraEncomendas] = useState(encomenda);

  const deletarEncomenda = async (id) => {
    try {
      const resposta = await fetch(`https://final-project-dw2.onrender.com/encomendas/${id}`, {
        method: "DELETE",  // Método DELETE para excluir a encomenda
      });

      if (resposta.status === 200) {
        // Se a encomenda foi deletada com sucesso, atualiza a lista
        setFiltraEncomendas(filtraEncomendas.filter((encomenda) => encomenda.id !== id));
        alert("Erro ao deletar a encomenda.");
      } else {
        alert("Encomenda deletada com sucesso!");
        window.location.reload();
      }
    } catch (error) {
      console.error("Erro ao conectar com o servidor:", error);
      alert("Erro ao conectar com o servidor.");
    }
  };

  return (
    <Pagina>
      {/* Cabeçalho */}
      <header className="bg-pink-700 text-white shadow-md" style={{ height: "80px" }}>
        <div className="flex items-center px-6 h-full">
          <img src="logoDF2.png" style={{ height: "100%", width: "auto" }} />
          <nav className="ml-11">
            <ul className="flex space-x-8 text-lg">
              <li>
                <a href="#" className="font-bold hover:underline">
                  ENCOMENDAS
                </a>
              </li>
              <li>
                <Link to="/homeEstilistas" className="hover:underline">
                  ESTILISTAS
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <div className="min-h-screen bg-gray-200 py-8 px-6">
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="flex items-center justify-between mb-6 flex-wrap">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold">Encomendas</h1>
              <button className="px-3 py-2 bg-white text-pink-800 rounded-md hover:bg-gray-200 text-lg font-semibold border border-pink-800"
              ><Link to="/NovaEncomenda" className="hover:underline">
                  Nova Encomenda
                </Link>
              </button>
            </div>

            <div className="flex items-center space-x-4">
              <input
                type="date"
                value={dataInicio}
                onChange={(e) => setDataInicio(e.target.value)}
                className="border border-gray-300 rounded-md px-4 py-2 text-lg focus:outline-none focus:ring focus:ring-gray-200"
              />
              <span className="text-gray-600">Até</span>
              <input
                type="date"
                value={dataFim}
                onChange={(e) => setDataFim(e.target.value)}
                className="border border-gray-300 rounded-md px-4 py-2 text-lg focus:outline-none focus:ring focus:ring-gray-200"
              />
              <select
                value={estilista}
                onChange={(e) => setEstilista(e.target.value)}
                className="border border-gray-300 rounded-md px-4 py-2 text-lg focus:outline-none focus:ring focus:ring-gray-200"
              >
                <option value="">Todos os estilistas</option>
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
              <button
                onClick={handleFilter}
                className="px-5 py-2 bg-pink-700 text-white rounded-md hover:bg-pink-800 text-lg font-semibold"
              >
                Filtrar
              </button>
            </div>
          </div>

          {/* Tabela */}
          <table className="w-full text-left border-collapse text-lg">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-4 px-4">Cliente</th>
                <th className="py-4 px-4">Estilista</th>
                <th className="py-4 px-4">Tipo da Encomenda</th>
                <th className="py-4 px-4">Data / Hora</th>
                <th className="py-4 px-4">Valor</th>
                <th className="py-4 px-4 text-center">Ações</th>
              </tr>
            </thead>

            <tbody className="text-gray-700">
              {filteredEncomendas.map((encomenda) => (
                <tr
                  key={encomenda.id}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="py-4 px-4">{encomenda.cliente}</td>
                  <td className="py-4 px-4">{encomenda.estilista}</td>
                  <td className="py-4 px-4">{encomenda.tipoencomenda}</td>
                  <td className="py-4 px-4">{encomenda.horariopedido}</td>
                  <td className="py-4 px-4">{encomenda.valor}</td>
                  <td className="py-4 px-4 text-center">
                  <Link to={`/EditaEncomenda/${encomenda.id}`} state={encomenda} className="hover:underline" >
                  <button className="bg-pink-700 text-white hover:bg-pink-800 px-3 py-3 rounded-md mr-2">
                  <img src="pencil-solid.svg" alt="Editar" className="w-5 h-5" />
                  </button>
                  </Link>
                  <button 
                  className="bg-gray-400 text-white hover:bg-gray-500 px-3 py-3 rounded-md" 
                  onClick={() => deletarEncomenda(encomenda.id)}>
                  <img src="trash-solid.svg" alt="Deletar" className="w-5 h-5" />
                  </button>

                  </td>
                </tr>
              ))}
            </tbody>
          </table>


        </div>
      </div>
    </Pagina>
  );
}
