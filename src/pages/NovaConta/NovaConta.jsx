export function NovaConta() {
  return (
    <div className="flex min-h-screen">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 bg-red-950 text-white">
        <div className="w-full max-w-sm bg-gray-900 p-8 rounded-lg shadow-lg">
          <div className="flex justify-center mb-6">
            <img src="logoDF.png" style={{ height: "80px", width: "auto" }} />
          </div>
          <h1 className="text-3xl font-bold text-center mb-6">DF Modas</h1>
          <p className="text-gray-300 text-center text-lg mb-6">Crie sua conta agora mesmo!</p>

          {/* Formulário */}
          <form className="space-y-4">
            <div>
              <label className="block text-lg font-medium text-gray-300 mb-1">Nome</label>
              <input type="text" placeholder="Digite seu nome" className="w-full px-4 py-3 border border-gray-600 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-700" />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-300 mb-1">E-mail</label>
              <input type="email" placeholder="Digite seu e-mail" className="w-full px-4 py-3 border border-gray-600 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-700" />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-300 mb-1">Senha</label>
              <input type="password" placeholder="Digite sua senha" className="w-full px-4 py-3 border border-gray-600 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-700" />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-300 mb-1">Confirme a senha</label>
              <input type="password" placeholder="Confirme sua senha" className="w-full px-4 py-3 border border-gray-600 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-700" />
            </div>
            <button type="submit" className="w-full py-3 bg-red-700 text-lg font-bold rounded-lg hover:bg-red-800 transition">
              Criar minha conta
            </button>
          </form>

          <p className="text-sm text-gray-400 text-center mt-6">
            Já tem uma conta?{" "}
            <a href="/login" className="text-red-500 hover:underline">
              Acessar agora!
            </a>
          </p>
        </div>
      </div>

      {/* Coluna direita com a imagem */}
      <div className="hidden md:block md:w-1/2 bg-black relative">
        <img src="goth.jpeg" className="absolute inset-0 w-full h-full object-cover" />
      </div>
    </div>
  );
}
