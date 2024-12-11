import { useState } from "react";
import { Pagina } from "../../components/Pagina";
import { Link } from "react-router-dom";

export function HomeEstilistas() {
  const estilistas = [
    { id: 1, nome: "Coco Chanel" },
    { id: 2, nome: "Christian Dior" },
    { id: 3, nome: "Valentino Garavani" },
    { id: 4, nome: "Miuccia Prada" },
    { id: 5, nome: "Giorgio Armani" },
    { id: 6, nome: "Gianni Versace" },
    { id: 7, nome: "Alexander McQueen" },
    { id: 8, nome: "John Galliano" },
    { id: 9, nome: "Vivienne Westwood" },

  ];

  const [search, setSearch] = useState("");
  const [filteredEstilistas, setFilteredEstilistas] = useState(estilistas);

  const handleFilter = () => {
    const filtered = estilistas.filter((estilista) =>
      estilista.nome.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredEstilistas(filtered);
  };

  return (
    <Pagina>
      {/* Cabeçalho */}
      <header className="bg-red-900 text-white shadow-md" style={{ height: "80px" }}>
        <div className="flex items-center px-6 h-full">
          <img src="logoDF.png" alt="Logo DF" style={{ height: "100%", width: "auto" }} />

          <nav className="ml-11">
            <ul className="flex space-x-8 text-lg">
              <li>
                <Link to="/homeEncomendas" className="hover:underline">
                  ENCOMENDAS
                </Link>
              </li>
              <li>
                <Link to="/homeEstilistas" className="font-bold hover:underline">
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
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-16">
              <h1 className="text-2xl font-bold">Estilistas</h1>
              <button className="px-3 py-2 bg-white text-red-900 rounded-md hover:bg-gray-200 text-lg font-semibold border border-red-900">
                Novo Estilista
              </button>
            </div>

            <div className="flex items-center space-x-3">
              <input
                type="text"
                placeholder="Buscar por nome do estilista"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border border-gray-300 rounded-md px-4 py-2 text-lg focus:outline-none focus:ring focus:ring-gray-200 w-80"
              />
              <button
                className="px-5 py-2 bg-red-900 text-white rounded-md hover:bg-red-600 text-lg font-semibold"
                onClick={handleFilter}
              >
                Filtrar
              </button>
            </div>
          </div>

          <table className="w-full text-left border-collapse text-lg">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-4 px-4 text-lg font-semibold">Estilistas</th>
                <th className="py-4 px-4 text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {filteredEstilistas.map((estilista) => (
                <tr
                  key={estilista.id}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="py-4 px-4">{estilista.nome}</td>
                  <td className="py-4 px-4 text-right">
                    <button className="bg-gray-600 text-white hover:bg-gray-700 px-3 py-2 rounded-md mr-2">
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
