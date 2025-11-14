import { useState } from "react";
import editIcon from "../assets/boton-editar.png";
import deleteIcon from "../assets/borrar.png";

function EmployeTable({ employes, onDelete, onUpdate }) {
  const [editingEmploye, setEditingEmploye] = useState(null);
  const [editData, setEditData] = useState({});

  const startEdit = (employe) => {
    setEditingEmploye(employe);
    setEditData({ ...employe });
  };

  const handleChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const saveEdit = () => {
    onUpdate(editData);
    setEditingEmploye(null);
    setEditData({});
  };

  const cancelEdit = () => {
    setEditingEmploye(null);
    setEditData({});
  };

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Empleado</th>
    <th>Area</th>
            <th>Puesto</th>
            <th>Salario</th>
            <th>Horario</th>
            <th>Fecha contratacion</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {employes.map((p) => (
            <tr key={p.name}>
              <td>{p.name}</td>
              <td>{p.area}</td>
              <td>{p.workstation}</td>
              <td>${p.salary}</td>
              <td>{p.schedule}</td>
              <td>{p.hiringDate}</td>
              <td>
                <img
                  src={editIcon}
                  alt="Editar"
                  onClick={() => startEdit(p)}
                  className="icon-btn"
                />
                <img
                  src={deleteIcon}
                  alt="Eliminar"
                  onClick={() => onDelete(p.name)}
                  className="icon-btn"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pop-up de edición */}
      {editingEmploye && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Editar Empleado</h2>
            <div className="edit-form">
              <div className="form-group">
                <label>Empleado:</label>
                <input type="text" value={editData.name} disabled />
              </div>
              <div className="form-group">
                <label>Área:</label>
                <input 
                  name="area" 
                  value={editData.area} 
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Puesto:</label>
                <input 
                  name="workstation" 
                  value={editData.workstation} 
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Salario:</label>
                <input 
                  name="salary" 
                  value={editData.salary} 
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Horario:</label>
                <input 
                  name="schedule" 
                  value={editData.schedule} 
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Fecha de contratación:</label>
                <input 
                  name="hiringDate" 
                  value={editData.hiringDate} 
                  onChange={handleChange}
                />
              </div>
              <div className="modal-actions">
                <button className="btn-cancel" onClick={cancelEdit}>
                  Cancelar
                </button>
                <button className="btn-save" onClick={saveEdit}>
                  Guardar Cambios
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default EmployeTable;