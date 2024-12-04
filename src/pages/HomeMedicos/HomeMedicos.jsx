import { Pagina } from "../../components/Pagina";

export function HomeMedicos() {
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
      <header className="bg-red-900 text-white py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-1xl font-bold">Gerenciamento de Estilistas</h1>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a
                  href="#"
                  className="hover:underline"
                >
                  Encomendas
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline"
                >
                  Estilistas
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline"
                >
                  Contato
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <div className="min-h-screen bg-gray-100">
        <div className="container mx-auto py-8">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h1 className="text-2xl font-bold mb-4">Estilistas</h1>
            <div className="flex justify-between items-center mb-4">
              <button className="px-4 py-2 bg-red-900 text-white rounded hover:bg-red-800">
                Novo Estilista
              </button>
              <input
                type="text"
                placeholder="Buscar por nome do estilista"
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:ring-gray-200"
              />
            </div>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6">Estilista</th>
                  <th className="py-3 px-6 text-right">Ações</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 text-sm">
                {estilistas.map((estilista) => (
                  <tr
                    key={estilista.id}
                    className="border-b border-gray-200 hover:bg-gray-100"
                  >
                    <td className="py-3 px-6">{estilista.nome}</td>
                    <td className="py-3 px-6 text-right">
                      <button className="text-red-800 hover:text-red-600 px-2">
                        ✎
                      </button>
                      <button className="text-red-500 hover:text-red-600 px-2">
                        🗑
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Pagina>
  );
}
