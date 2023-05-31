export const Card = ( {formData}) => {
    const { nombre, apellido, telefono } = formData
    return (
        <div className="CardForm">
            <h2>Datos del Alumno</h2>
            <ul>
                <li>Nombre: {nombre} </li>
                <li>Apellido: {apellido} </li>
                <li>Telefono: {telefono} </li>
            </ul>
        </div>
    )
}
