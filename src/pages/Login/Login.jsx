import { Pagina } from "../../components/Pagina";

export function Login() {
  return (
    <div className="flex min-h-screen">
      {/* Coluna esquerda com o formulário */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 bg-white">
        <h1 className="text-2xl font-bold text-pink-400 mb-4">DF Modas</h1>
        <p className="text-gray-700 text-center mb-6">Acesse sua conta.</p>

        <form className="w-full max-w-sm">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">E-mail</label>
            <input
              type="email"
              placeholder="E-mail"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-200"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Senha</label>
            <input
              type="password"
              placeholder="Senha"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-200"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 rounded-lg font-semibold hover:bg-pink-600 transition"
          >
            Acessar
          </button>
        </form>

        <p className="text-sm text-gray-600 mt-4">
          Não tenho conta.{" "}
          <a href="#" className="text-pink-400 hover:underline">
            Criar agora!
          </a>
        </p>
      </div>

      {/* Coluna direita com a imagem */}
      <div className="hidden md:block md:w-1/2 bg-pink-500 relative">
        <img
          src="/.../assets/fundo.png"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
