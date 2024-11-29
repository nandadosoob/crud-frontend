import { Pagina } from "../../components/Pagina";

export function NovaConta() {
  return (
    <Pagina>
      <div className="flex flex-col items-center p-8">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-pink-300 mb-4">Agendei</h1>
        <p className="text-gray-700 text-center mb-6">Crie sua conta agora mesmo.</p>

        {/* Formulário */}
        <form className="w-full max-w-sm">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Nome</label>
            <input
              type="text"
              placeholder="Nome"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">E-mail</label>
            <input
              type="email"
              placeholder="E-mail"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Senha</label>
            <input
              type="password"
              placeholder="Senha"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">Confirme a senha</label>
            <input
              type="password"
              placeholder="Confirme a senha"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-pink-300 text-white py-2 rounded-lg font-semibold hover:bg-pink-500 transition"
          >
            Criar minha conta
          </button>
        </form>

        {/* Acesso existente */}
        <p className="text-sm text-gray-600 mt-4">
          Já tenho uma conta.{" "}
          <a href="#" className="text-pink-300 hover:underline">
            Acessar agora!
          </a>
        </p>
      </div>
    </Pagina>
  );
}
