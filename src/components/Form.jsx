import { useState } from "react"

export const Form = ( {onFormSubmit} ) => {
    const [formData, setFormData] = useState({ nombre: "", apellido: "", telefono: "" })
    const [error, setError] = useState(false)

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (formData.nombre.length <= 3 || formData.nombre.length == "" || formData.apellido.length <= 6 || formData.telefono == "") {
            setError(true)
        } else {
            setError(false)
            onFormSubmit(formData)
        }
    }
    return (
        <div>

            <form onSubmit={handleSubmit} action="">
                <ul className="formList">
                    <li>
                        <h5>
                            Nombre
                        </h5>
                        <input type="text"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleInputChange}
                            placeholder="Ingrese su nombre"
                        />
                    </li>
                    <li>
                        <h5>
                            Apellido
                        </h5>
                        <input
                            type="text"
                            name="apellido"
                            value={formData.apellido}
                            onChange={handleInputChange}
                            placeholder="Ingrese su apellido"
                        />
                    </li>
                    <li>
                        <h5>
                            Telefono
                        </h5>
                        <input type="number"
                            name="telefono"
                            value={formData.telefono}
                            onChange={handleInputChange}
                            placeholder="Ingrese su numero de telefono"
                        />
                    </li>
                    <button className="buttonForm">Enviar</button>
                </ul>
            </form>
            <p>
                {error ? (
                    <p>Por favor chequea que la información sea correcta</p> 
                    ) : 
                    ""}
            </p>
        </div>
    )
}
