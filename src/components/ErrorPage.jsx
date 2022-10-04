import {useRouteError} from 'react-router-dom'

export default function ErrorPage() {
    const error = useRouteError()
    console.log(error.message)
  return (
    <div className='space-y-8'>
      <h1 className='text-center text-6xl font-extrabold mt-20 text-blue-900'>CONEXION - CLIENTES</h1>
      <h1 className='text-center'>Hubo un error</h1>
      <h1 className='text-center'>{error.statusTex || error.message}</h1>
    </div>
  )
}
