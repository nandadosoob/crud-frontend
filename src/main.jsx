import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Login } from './pages/Login/Login.jsx'
import { NovaConta } from './pages/NovaConta/NovaConta.jsx'
import { HomeEncomendas } from './pages/HomeEncomendas/HomeEncomendas.jsx'
import { HomeEstilistas } from './pages/HomeEstilistas/HomeEstilistas.jsx'
import NovaEncomenda from './pages/HomeEncomendas/NovaEncomenda.jsx'
import EditaEncomenda from './pages/HomeEncomendas/EditaEncomenda.jsx'



const rotas = createBrowserRouter(createRoutesFromElements(
  <Route path="/">
    <Route index element={<Login/>} />
    <Route path="login" element={<Login/>} />
    <Route path="novaConta" element={<NovaConta/>} />
    <Route path="homeEncomendas" element={<HomeEncomendas/>} />
    <Route path="homeEstilistas" element={<HomeEstilistas/>} />
    <Route path="novaEncomenda" element={<NovaEncomenda/>} />
    <Route path="novaEncomenda" element={<NovaEncomenda/>} />
    <Route path="EditaEncomenda" element={<EditaEncomenda/>} />

    {/* <Route path="*" element={<Pagina404/>} /> */}
  </Route>

 
))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={rotas}/>
  </StrictMode>,
)
