import { useState } from "react";

function EmployeForm({ onAdd }) {
  const [formData, setFormData] = useState({
    name: "",
    area: "",
    workstation: "",
    salary: "",
    schedule: "",
    hiringDate: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.area || !formData.workstation || !formData.salary || !formData.schedule || !formData.hiringDate) {
      alert("Completa todos los campos.");
      return;
    }

    onAdd(formData);
    setFormData({ name: "", area: "", workstation: "", salary: "", schedule: "", hiringDate: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form-column">
        <input
          name="name"
          placeholder="Nombre del empleado"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          name="area"
          placeholder="Area de trabajo"
          value={formData.area}
          onChange={handleChange}
          required
        />
        <input
          name="workstation"
          placeholder="Puesto"
          value={formData.workstation}
          onChange={handleChange}
          required
        />
        <input
          name="salary"
          type="number"
          placeholder="Salario"
          value={formData.salary}
          onChange={handleChange}
          required
        />
        <input
          name="schedule"
          placeholder="Horario"
          value={formData.schedule}
          onChange={handleChange}
          required
        />
        <input
          name="hiringDate"
          type="date"
          placeholder="Fecha de contratacion"
          value={formData.hiringDate}
          onChange={handleChange}
          required
        />
        <button type="submit">Agregar Empleado</button>
      </div>
    </form>
  );
}

export default EmployeForm;