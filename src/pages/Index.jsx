import { useLoaderData } from "react-router-dom"
import {obtenerClientes} from '../data/clientes'
import Cliente from "../components/Cliente";

export function loader(){
   const clientes = obtenerClientes()

  //  console.log(import.meta.env)

   return clientes
}
const Index = () => {

  const clientes = useLoaderData();

// const peopleFinal=[]
// const people=clientes.map((a)=>{
//   a.facebook='hola'
//   peopleFinal.push(a)
// });
  
// console.log(peopleFinal)


  //Error Boundaries

  return (
    <>
      <h1 className='font-black text-4xl text-blue-900'>clientes</h1>
      <h1 className='mt-3'>Administra tus clientes</h1>

      {clientes.length ?(
        <table className="w-full mt-5 table-auto shadow bg-white">
        <thead className="bg-dark-purple text-white">
        <tr>
          <th className='p-2'>Nombre</th>
          <th  className='p-2' >Contacto</th>
          <th className='p-2'>Acciones</th>
        </tr>
        </thead>
        <tbody>
        {clientes.map(informacion =>(
        <Cliente
          informacion = {informacion}
          key = {informacion.proyectoID}
        />
          
        ))}
        </tbody>
      
        </table>
      ):(
        <p className="text-center mt-10">No hay clientes</p>
      )}
    </>
  )
}

export default Index
