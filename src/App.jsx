import { useState } from "react";
import { Form } from "./components/Form";
import { Card } from "./components/Card";

export function App() {
  const [formData, setFormData] = useState({ nombre: "", apellido: "", telefono: "" })
  const [showCard, setShowCard] = useState(false)

  const handleFormSubmit = (data) => {
    setFormData(data)
    setShowCard(true)
  };
  return (
    <>
      <Form onFormSubmit={handleFormSubmit} />
      {
        showCard 
        ?
        <Card formData={formData} />
        :
        <p className="completeForm">Completa el formulario y envíalo para ver los datos.</p>      
      }
    </>
  )
}
