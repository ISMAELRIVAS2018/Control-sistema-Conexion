const Formulario = ({ cliente }) => {
  return (
    <>
      <div className="mb-4">
        <label className="text-gray-800" htmlFor="pNombre">
          Nombre:
        </label>
        <input
          id="pNombre"
          type="text"
          className="mt-2 block w-full p-3 bg-gray-50"
          placeholder="Nombre del Cliente"
          name="pNombre"
          defaultValue={cliente?.[0].pNombre}
        />
      </div>
      <div className="mb-4">
        <label className="text-gray-800" htmlFor="cliente">
          Empresa:
        </label>
        <input
          id="cliente"
          type="text"
          className="mt-2 block w-full p-3 bg-gray-50"
          placeholder="Empresa del Cliente"
          name="cliente"
          defaultValue={cliente?.[0].cliente}
        />
      </div>
      <div className="mb-4">
        <label className="text-gray-800" htmlFor="pro_estatus_ID">
          Estatus:
        </label>
        <input
          id="pro_estatus_ID"
          type="text"
          className="mt-2 block w-full p-3 bg-gray-50"
          placeholder="Estatus"
          name="pro_estatus_ID"
          defaultValue={cliente?.[0].pro_estatus_ID}
        />
      </div>

      {/* <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="email"
                >E-mail:</label>
                <input 
                    id="fechaIni"
                    type="email"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Email del Cliente"
                    name="email"
                />
            </div> */}

      <div className="mb-4">
        <label className="text-gray-800" htmlFor="fechaIni">
          Fecha-Inicial:
        </label>
        <input
          id="fechaIni"
          type="date"
          className="mt-2 block w-full p-3 bg-gray-50"
          placeholder="Fecha de Inicio"
          name="fechaIni"
          min="2018-01-01"
          max="2030-12-31"
          defaultValue={cliente?.[0].fechaIni}
        />
      </div>

      <div className="mb-4">
        <label className="text-gray-800" htmlFor="fechaFin">
          Fecha-Final:
        </label>
        <input
          id="fechaFin"
          type="date"
          className="mt-2 block w-full p-3 bg-gray-50"
          placeholder="Fecha Final"
          name="fechaFin"
          min="2018-01-01"
          max="2030-12-31"
          defaultValue={cliente?.[0].fechaFin}
        />
      </div>

      <div className="mb-4">
        <label className="text-gray-800" htmlFor="descripcion">
          Descripcion:
        </label>
        <textarea
          as="textarea"
          id="descripcion"
          type="text"
          className="mt-2 block w-full p-3 bg-gray-50 h-40 align-self"
          placeholder="Descripcion del Proyecto"
          name="descripcion"
          defaultValue={cliente?.[0].descripcion}
        />
      </div>
    </>
  );
};

export default Formulario;
