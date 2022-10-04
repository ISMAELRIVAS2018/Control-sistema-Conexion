import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './components/Layout'
import NuevoCLiente, {action as nuevoClienteAction}from './pages/NuevoCLiente'
import Index,{loader as clientesLoader}from './pages/Index'
import ErrorPage from './components/ErrorPage'
import EdictarCliente, {loader as edictarClienteLoader, action as editarClienteAction} from './pages/EdictarCliente'
import {action as eliminarClienteAction} from './components/Cliente'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        index: true,
        element:<Index/>,
        loader: clientesLoader,
        errorElement: <ErrorPage/>
      },
      {
        path: '/clientes/nuevo',
        element:<NuevoCLiente/>,
        action:nuevoClienteAction
      },
      {
        path: '/clientes/:clienteId/editar',
        element:<EdictarCliente/>,
        loader: edictarClienteLoader,
        action: editarClienteAction,
        errorElement: <ErrorPage/>
      },
      {
        path:'/clientes/:clienteId/eliminar',
        action: eliminarClienteAction
      }
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>
)
