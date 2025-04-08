// Este componente muestra una tarea con sus botones para completar, editar o eliminar
const TaskItem = ({ task, setTasks, setEditingTask }) => {
  // Esta función marca la tarea como completada o no (al hacer clic en el botón ✓)
  const toggleComplete = () => {
    setTasks(prev => prev.map(t =>
      t.id === task.id ? { ...t, completed: !t.completed } : t
    ));
  };

  // Esta función elimina la tarea (al hacer clic en el botón ✗)
  const deleteTask = () => {
    setTasks(prev => prev.filter(t => t.id !== task.id));
  };

  return (
    // Contenedor principal de la tarea, con fondo y bordes redondeados
    <div className="p-4 bg-secondary rounded flex justify-between items-start">
      <div>
        {/* Título de la tarea. Si está completada, se muestra tachado */}
        <h3 className={`text-xl font-bold ${task.completed ? 'line-through' : ''}`}>
          {task.title}
        </h3>
        {/* Descripción de la tarea. También se muestra tachada si está completada */}
        <p className={`text-sm ${task.completed ? 'line-through' : ''}`}>
          {task.description}
        </p>
      </div>
      {/* Botones a la derecha: completar, editar y eliminar */}
      <div className="flex flex-col gap-2 ml-4">
        {/* Botón para marcar la tarea como completada o no */}
        <button onClick={toggleComplete} className="text-primary text-sm">✓</button>
        {/* Botón para comenzar a editar la tarea */}
        <button onClick={() => setEditingTask(task)} className="text-yellow-400 text-sm">✎</button>
        {/* Botón para eliminar la tarea */}
        <button onClick={deleteTask} className="text-red-500 text-sm">✗</button>
      </div>
    </div>
  );
};

// Esto permite usar este componente en otras partes de la aplicación
export default TaskItem;

