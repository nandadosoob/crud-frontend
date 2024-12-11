import { useState } from "react";
import { Pagina } from "../../components/Pagina";
import { Link } from "react-router-dom";
import { use } from "react";
import NovaEncomenda from "./NovaEncomenda";

export function HomeEncomendas() {
  const encomendas = [
    {
      id: 1,
      cliente: "Heber Stein Mazutti",
      estilista: "Flávia Cristina",
      encomenda: "Vestido Sob Medida",
      dataHora: "01/10/2024 - 08:30",
      valor: "R$ 500,00",
    },
    {
      id: 2,
      cliente: "Marcos Antunes",
      estilista: "Ana Beatriz Rutini",
      encomenda: "Terno Social",
      dataHora: "01/10/2024 - 10:00",
      valor: "R$ 700,00",
    },
    {
      id: 3,
      cliente: "Joana Silveira Araújo",
      estilista: "Nise da Silveira",
      encomenda: "Blusa Bordada",
      dataHora: "02/10/2024 - 11:45",
      valor: "R$ 300,00",
    },
    {
      id: 4,
      cliente: "Marcelo Bueno",
      estilista: "Sandra Rocha",
      encomenda: "Calça Casual",
      dataHora: "02/10/2024 - 15:00",
      valor: "R$ 400,00",
    },
    {
      id: 5,
      cliente: "Solange Carvalho",
      estilista: "Sandra Rocha",
      encomenda: "Vestido Sereia",
      dataHora: "03/10/2024 - 17:30",
      valor: "R$ 200,00",
    },
  ];

  const [filteredEncomendas, setFilteredEncomendas] = useState(encomendas);
  const [dataInicio, setDataInicio] = useState('');
  const [dataFim, setDataFim] = useState('');
  const [estilista, setEstilista] = useState('');

  const handleFilter = () => {
    let filtered = encomendas;

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
              ><Link to={NovaEncomenda} className="hover:underline">
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
                <option value="Flávia Cristina">Flávia Cristina</option>
                <option value="Ana Beatriz Rutini">Ana Beatriz Rutini</option>
                <option value="Hugo Antunes Silva">Hugo Antunes Silva</option>
                <option value="Helton Mazutti">Helton Mazutti</option>
                <option value="Janete Martins">Janete Martins</option>
                <option value="Amelie Albuquerque Marques">Amelie Albuquerque Marques</option>
                <option value="Nise da Silveira">Nise da Silveira</option>
                <option value="Sandra Rocha">Sandra Rocha</option>
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
                  <td className="py-4 px-4">{encomenda.encomenda}</td>
                  <td className="py-4 px-4">{encomenda.dataHora}</td>
                  <td className="py-4 px-4">{encomenda.valor}</td>
                  <td className="py-4 px-4 text-center">
                    <button className="bg-pink-800 text-white hover:bg-pink-900 px-3 py-2 rounded-md mr-2">
                      ✎
                    </button>
                    <button className="bg-gray-400 text-white hover:bg-gray-500 px-3 py-2 rounded-md">
                      🗑
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
