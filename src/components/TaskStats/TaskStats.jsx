// Este componente muestra cuántas tareas hay en total y cuántas están pendientes
const TaskStats = ({ tasks }) => {
  // Contamos el total de tareas
  const total = tasks.length;
  // Contamos solo las tareas que no están completadas
  const pending = tasks.filter(task => !task.completed).length;

  return (
    // Mostramos los números en pantalla con algo de estilo
    <div className="mt-6 text-sm text-gray-300">
      <p>Total de tareas: {total}</p>
      <p>Pendientes: {pending}</p>
    </div>
  );
};

// Esto permite usar este componente en otras partes del proyecto
export default TaskStats;
