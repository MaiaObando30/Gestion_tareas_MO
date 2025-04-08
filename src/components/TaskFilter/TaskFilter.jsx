// Este componente muestra los botones para filtrar las tareas
// Recibe dos cosas: el filtro actual y una función para cambiarlo
const TaskFilter = ({ filter, setFilter }) => {
  // Lista con los filtros disponibles: ver todas, solo las activas o las completadas
  const filters = ['Todas', 'Activas', 'Completadas']; // corregido "completadas" con mayúscula

  return (
    // Contenedor para los botones, con espacio entre ellos
    <div className="flex gap-2 mb-4">
      {/* Recorremos cada filtro para crear un botón */}
      {filters.map(f => (
        <button
          key={f} // Un identificador único para cada botón
          onClick={() => setFilter(f)} // Cuando se hace clic, cambia el filtro
          // Estilo del botón: si está activo, lo resaltamos
          className={`px-3 py-1 rounded ${filter === f ? 'bg-primary text-white' : 'bg-secondary text-gray-400'}`}
        >
          {/* Mostramos el nombre del filtro, asegurándonos que empiece en mayúscula */}
          {f.charAt(0).toUpperCase() + f.slice(1)}
        </button>
      ))}
    </div>
  );
};

// Exportamos este componente para poder usarlo en otros archivos
export default TaskFilter;
