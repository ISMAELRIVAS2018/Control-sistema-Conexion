import { useLoaderData } from "react-router-dom"
import {obtenerClientes} from '../data/clientes'


export function loader(){
  const cliente = obtenerClientes()


   console.log(cliente)

   return cliente
}



const Vercliente = () => {
    const cliente= useLoaderData();
 
 
  return (
    
      <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
      
      <div>
        <h1 className='font-black text-4xl text-blue-900'>Vercliente: {cliente?.[0].pNombre}</h1>
        <p className='mt-3'>Informacion del cliente </p>

        {cliente?.[0].pNombre && (
          <p className='text-4xl text-gray-600 mt-10'>
            <span className=' text-gray-800 uppercase font-bold'>Cliente:</span>
            {cliente?.[0].pNombre}</p>
        )}

        {cliente.cliente && (
          <p className='text-2xl text-gray-500 mt-4 '>
            <span className='text-gray-800 uppercase font-bold'>Email:</span>
            {cliente?.[0].cliente}</p>
        )}


        {cliente.pro_estatus_ID && (
          <p className='text-2xl text-gray-500 mt-4 '>
            <span className='text-gray-800 uppercase font-bold'>telefono:</span>
            {cliente?.[0].pro_estatus_ID}</p>
        )}

        {cliente.fechaIni && (
          <p className='text-2xl text-gray-500 mt-4 '>
            <span className='text-gray-800 uppercase font-bold'>Empresa:</span>
            {cliente?.[0].fechaIni}</p>
        )}

        {cliente.fechaFin && (
          <p className='text-2xl text-gray-500 mt-4 '>
            <span className='text-gray-800 uppercase font-bold'>Notas:</span>
            {cliente?.[0].fechaFin}</p>
        )}
        {cliente.descripcion && (
          <p className='text-2xl text-gray-500 mt-4 '>
            <span className='text-gray-800 uppercase font-bold'>Notas:</span>
            {cliente?.[0].descripcion}</p>
        )}

      </div>
      </div>
    )
}

export default Vercliente

