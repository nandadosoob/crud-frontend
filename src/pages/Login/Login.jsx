import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Login() {
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [error, setError] = useState(""); 
  const navigate = useNavigate(); 

  // login
  const handleLogin = (event) => {
    event.preventDefault(); 

    if (!email || !password) {
      setError("Preencha todos os campos!"); 
      return;
    }

    const isAuthenticated = true;

    if (isAuthenticated) {
      navigate("/homeEncomendas"); 
    } else {
      setError("Credenciais inválidas!"); 
    }
  };

  return (
    <div className="flex min-h-screen">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 bg-pink-950 text-white">
        <div className="w-full max-w-sm bg-gray-900 p-8 rounded-lg shadow-lg">
          <div className="flex justify-center mb-6">
            <img src="logoDF2.png" style={{ height: "80px", width: "auto" }} />
          </div>

          {/* Cabeçalho */}
          <h1 className="text-3xl font-bold text-center mb-6">DF Modas</h1>
          <p className="text-gray-300 text-center text-lg mb-6 font-semibold">
          Seu estilo, nossa medida!
          </p>
          <p className="text-gray-300 text-center text-lg mb-6">
            Acesse sua conta.
          </p>

          {/* Formulário */}
          <form className="space-y-4" onSubmit={handleLogin}>
            <div>
              <label className="block text-lg font-medium text-gray-300 mb-1">
                E-mail
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Digite seu e-mail"
                className="w-full px-4 py-3 border border-gray-600 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-300 mb-1">
                Senha
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Digite sua senha"
                className="w-full px-4 py-3 border border-gray-600 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>
            {error && (
              <p className="text-red-500 text-sm">{error}</p> 
            )}
            <button
              type="submit"
              className="w-full py-3 bg-pink-500 text-lg font-bold rounded-lg hover:bg-pink-600 transition"
            >
              Acessar
            </button>
          </form>

          <p className="text-sm text-gray-400 text-center mt-6">
            Não tem conta?{" "}
            <a href="/novaConta" className="text-pink-400 hover:underline">
              Criar agora!
            </a>
          </p>
        </div>
      </div>

      <div className="hidden md:block md:w-1/2 bg-pink-300 relative">
        <img
          src="moda.jpeg"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
