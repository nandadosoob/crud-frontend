import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function NovaConta() {
  const [name, setName] = useState(""); 
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [confirmPassword, setConfirmPassword] = useState(""); 
  const [error, setError] = useState(""); 
  const navigate = useNavigate(); 

  // Cadastro
  const handleRegister = (event) => {
    event.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      setError("Todos os campos devem ser preenchidos.");
      return;
    }
    if (password !== confirmPassword) {
      setError("As senhas não coincidem.");
      return;
    }

    const isRegistered = true;

    if (isRegistered) {
      navigate("/login"); 
    } else {
      setError("Erro ao criar a conta. Tente novamente.");
    }
  };

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
          <form className="space-y-4" onSubmit={handleRegister}>
            <div>
              <label className="block text-lg font-medium text-gray-300 mb-1">Nome</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Digite seu nome"
                className="w-full px-4 py-3 border border-gray-600 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-700"
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-300 mb-1">E-mail</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite seu e-mail"
                className="w-full px-4 py-3 border border-gray-600 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-700"
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-300 mb-1">Senha</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Digite sua senha"
                className="w-full px-4 py-3 border border-gray-600 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-700"
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-300 mb-1">Confirme a senha</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirme sua senha"
                className="w-full px-4 py-3 border border-gray-600 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-700"
              />
            </div>
            {error && (
              <p className="text-red-500 text-sm">{error}</p> 
            )}
            <button
              type="submit"
              className="w-full py-3 bg-red-700 text-lg font-bold rounded-lg hover:bg-red-800 transition"
            >
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

      <div className="hidden md:block md:w-1/2 bg-black relative">
        <img src="goth.jpeg" className="absolute inset-0 w-full h-full object-cover" />
      </div>
    </div>
  );
}
