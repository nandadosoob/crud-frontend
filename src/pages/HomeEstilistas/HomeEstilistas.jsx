
import { Pagina } from "../../components/Pagina";

export function HomeEstilistas() {
  const estilistas = [
    { id: 1, nome: 'Flávia Cristina' },
    { id: 2, nome: 'Ana Beatriz Rutini' },
    { id: 3, nome: 'Nise da Silveira' },
    { id: 4, nome: 'Sandra Rocha' },
    { id: 5, nome: 'Amelie Albuquerque Marques' },
    { id: 6, nome: 'Janete Martins' },
    { id: 7, nome: 'Helton Mazutti' },
    { id: 8, nome: 'Hugo Antunes Silva' },
  ];

  return (
    <Pagina>
      {/* Cabeçalho */}
      <header className="bg-red-900 text-white shadow-md" style={{ height: '80px' }}>
      <div className="flex items-center px-6 h-full">
        <img src="logoDF.png" alt="Logo DF" style={{ height: '100%', width: 'auto' }} />

        <nav className="ml-11">
          <ul className="flex space-x-8 text-lg">
            <li>
              <a href="#" className="font-bold hover:underline">
                ENCOMENDAS
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                ESTILISTAS
              </a>
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
              className="border border-gray-300 rounded-md px-4 py-2 text-lg focus:outline-none focus:ring focus:ring-gray-200 w-80"
            />
            <button className="px-5 py-2 bg-red-900 text-white rounded-md hover:bg-red-600 text-lg font-semibold">
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
          {estilistas.map((estilista) => (
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