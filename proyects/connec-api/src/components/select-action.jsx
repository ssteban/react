import "./select.css";

function Select({ label, value, onchange, opciones }) {
  return (
    <div className="select-container">
      <label className="select-label">{label}</label>

      <select
        className="select-input"
        value={value}
        onChange={onchange}
      >
        <option value="">Seleccione {label}</option>

        {opciones.map(opc => (
          <option key={opc.id} value={opc.id}>
            {opc.nombre}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
