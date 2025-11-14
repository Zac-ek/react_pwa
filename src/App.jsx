import { useState, useEffect } from "react";
import EmployeForm from "./components/EmployeForm";
import EmployeTable from "./components/EmployeTable";
import "./index.css";
import {
  getAllEmployes,
  addEmploye,
  deleteEmploye,
  updateEmploye,
} from "./db";

function App() {
  const [employes, setEmployes] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getAllEmployes();
      setEmployes(data);
    })();
  }, []);

  const handleAdd = async (employe) => {
    await addEmploye(employe);
    setEmployes(await getAllEmployes());
  };

  const handleDelete = async (name) => {
    await deleteEmploye(name);
    setEmployes(await getAllEmployes());
  };

  const handleUpdate = async (updated) => {
    await updateEmploye(updated);
    setEmployes(await getAllEmployes());
  };

  return (
    <div className="container">
      <h2>Agregar Nuevo Empleado</h2>
      <EmployeForm onAdd={handleAdd} />
      <h3>Lista de Empleados ({employes.length})</h3>
      <EmployeTable
        employes={employes}
        onDelete={handleDelete}
        onUpdate={handleUpdate}
      />
    </div>
  );
}

export default App;
