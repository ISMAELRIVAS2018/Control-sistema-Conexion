import { useNavigate, Form, redirect, Await } from "react-router-dom";
import { eliminarCliente } from "../data/clientes";

export async function action({ params }) {
 await eliminarCliente(params.clienteId)

  return redirect('/');
}

function Cliente({ informacion }) {
  const navigate = useNavigate();
  const { pNombre, cliente, fechaIni, fechaFin, proyectoID, pro_estatus_ID } =
    informacion;
  return (
    <tr className="border-b">
      <td className="p-6 space-y-2">
        <p className="text-2xl text-gray-800">{pNombre}</p>
        <p>{cliente}</p>
      </td>
      <td className="p-6">
        <p className="text-gray-600">
          <span className="text-gray-800 uppercase font-bold">
            Fecha-Inicio:
          </span>
          {fechaIni}
        </p>
        <p className="text-gray-600">
          <span className="text-gray-800 uppercase font-bold">
            Fecha-Final:
          </span>
          {fechaFin}
        </p>
        <p className="text-gray-600">
          <span className="text-gray-800 uppercase font-bold">Estatus:</span>
          {pro_estatus_ID}
        </p>
      </td>
      <td className="p-6 flex gap-3 text-xs">
        <button
          type="button"
          className="text-blue-600 hover:text-blue-800 uppercase font-bold text-xs"
          onClick={() => navigate(`/clientes/${proyectoID}/editar`)}
        >
          Editar
        </button>

        <Form 
        method='post' 
        action={`/clientes/${proyectoID}/eliminar`}
        onSubmit={(e) => {
          if(!confirm('Deseas eliminar este registro?')) {
            e.preventDefault()
          }
        }}
        >
          <button
            type="submit"
            className="text-red-600 hover:text-red-800 uppercase font-bold text-xs"
          >
            Eliminar
          </button>
        </Form>

        <button
            type="submit"
            className="text-yellow-400 hover:text-yellow-500 uppercase font-bold text-xs"
            onClick={() => navigate(`/clientes/${proyectoID}/ver`)}
          >
            Ver cliente
          </button>
      </td>
    </tr>
  );
}

export default Cliente;
