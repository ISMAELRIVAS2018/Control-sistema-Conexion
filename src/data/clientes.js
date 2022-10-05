//Get
export async function obtenerClientes() {
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjQ5MTU0L2FwaS9hdXRoL2xvZ2luIiwiaWF0IjoxNjY0OTg1MjA4LCJleHAiOjE2NjUwNzE2MDgsIm5iZiI6MTY2NDk4NTIwOCwianRpIjoicEdTR2FFMVhDbnN0dlVjWCIsInN1YiI6IjMiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.WmN7Gqk79hDa54kEVeclgaUkbsTbIyx7KwjWXt02i3Y';

    const respuesta = await fetch((`${import.meta.env.VITE_API_URL}/proyecto/lista/1`), {
        headers: {
            "Content-type": "application/json",
            Accept: "application/json",
            authorization: `bearer ${token}`,
        },
    })

    const resultado = await respuesta.json()
    // console.log(resultado)
    return resultado
}

//Edictar
export async function obtenerCliente(proyectoID) {
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjQ5MTU0L2FwaS9hdXRoL2xvZ2luIiwiaWF0IjoxNjY0OTg1MjA4LCJleHAiOjE2NjUwNzE2MDgsIm5iZiI6MTY2NDk4NTIwOCwianRpIjoicEdTR2FFMVhDbnN0dlVjWCIsInN1YiI6IjMiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.WmN7Gqk79hDa54kEVeclgaUkbsTbIyx7KwjWXt02i3Y';



    const respuesta = await fetch((`${import.meta.env.VITE_API_URL}/proyecto/lista/id/${proyectoID}`), {
        headers: {
            "Content-type": "application/json",
            Accept: "application/json",
            authorization: `bearer ${token}`,
        },
    })

    const resultado = await respuesta.json()
    console.log(resultado)
    return resultado
}

//Post

export async function agregarCliente(datos) {
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjQ5MTU0L2FwaS9hdXRoL2xvZ2luIiwiaWF0IjoxNjY0OTg1MjA4LCJleHAiOjE2NjUwNzE2MDgsIm5iZiI6MTY2NDk4NTIwOCwianRpIjoicEdTR2FFMVhDbnN0dlVjWCIsInN1YiI6IjMiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.WmN7Gqk79hDa54kEVeclgaUkbsTbIyx7KwjWXt02i3Y';

    console.log(datos)
    try {

        const respuesta = await fetch((`${import.meta.env.VITE_API_URL}/proyecto/agregar `), {
            method: 'POST',
            headers: {
                "Content-type": "application/json",
                "authorization": `bearer ${token}`,
            },
            body: JSON.stringify(datos),

        })

        const data = await respuesta.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
    console.log(datos)
}



export async function actualizarCliente(proyectoID, datos){
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjQ5MTU0L2FwaS9hdXRoL2xvZ2luIiwiaWF0IjoxNjY0OTg1MjA4LCJleHAiOjE2NjUwNzE2MDgsIm5iZiI6MTY2NDk4NTIwOCwianRpIjoicEdTR2FFMVhDbnN0dlVjWCIsInN1YiI6IjMiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.WmN7Gqk79hDa54kEVeclgaUkbsTbIyx7KwjWXt02i3Y';

    console.log(datos)
    try {

        const respuesta = await fetch((`${import.meta.env.VITE_API_URL}/proyecto/editar/${proyectoID} `), {
            method: 'PUT',
            headers: {
                "Content-type": "application/json",
                "authorization": `bearer ${token}`,
            },
            body: JSON.stringify(datos),

        })

        const data = await respuesta.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
    console.log(datos)
}

    // Eliminar cliente

export async function eliminarCliente(proyectoID){
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjQ5MTU0L2FwaS9hdXRoL2xvZ2luIiwiaWF0IjoxNjY0OTg1MjA4LCJleHAiOjE2NjUwNzE2MDgsIm5iZiI6MTY2NDk4NTIwOCwianRpIjoicEdTR2FFMVhDbnN0dlVjWCIsInN1YiI6IjMiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.WmN7Gqk79hDa54kEVeclgaUkbsTbIyx7KwjWXt02i3Y';

    try {
        const respuesta = await fetch((`${import.meta.env.VITE_API_URL}/proyecto/borrar/${proyectoID}`), {
            method: 'DELETE',
            headers: {
                "Content-type": "application/json",
                "authorization": `bearer ${token}`,
            },
        })

     await respuesta.json()
    } catch (error) {
        console.log(error)
    }
   
}