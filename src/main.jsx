import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Login } from './pages/Login/Login.jsx'
import { NovaConta } from './pages/NovaConta/NovaConta.jsx'
import { HomeAgendamentos } from './pages/HomeAgendamentos/HomeAgendamentos.jsx'
import { HomeMedicos } from './pages/HomeMedicos/HomeMedicos.jsx'



const rotas = createBrowserRouter(createRoutesFromElements(
  <Route path="/">
    <Route index element={<Login/>} />
    <Route path="login" element={<Login/>} />
    <Route path="novaConta" element={<NovaConta/>} />
    <Route path="homeAgendamento" element={<HomeAgendamentos/>} />
    <Route path="homeMedicos" element={<HomeMedicos/>} />

    {/* <Route path="*" element={<Pagina404/>} /> */}
  </Route>

 
))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={rotas}/>
  </StrictMode>,
)
