const TaskItem = ({ task, setTasks, setEditingTask }) => {
  const toggleComplete = () => {
    setTasks(prev => prev.map(t =>
      t.id === task.id ? { ...t, completed: !t.completed } : t
    ));
  };

  const deleteTask = () => {
    setTasks(prev => prev.filter(t => t.id !== task.id));
  };

  // Formatear la fecha de creación de la tarea
  const formattedDate = new Date(task.createdAt).toLocaleDateString('es-ES');

  return (
    <div className="p-4 bg-secondary rounded shadow flex justify-between items-start">
      <div>
        <h3 className={`text-xl font-bold ${task.completed ? 'line-through text-muted' : 'text-text'}`}>
          {task.title}
        </h3>
        <p className={`text-sm ${task.completed ? 'line-through text-muted' : 'text-muted'}`}>
          {task.description}
        </p>
        {/* Fecha de creación */}
        <p className="text-xs text-muted mt-1">Creada el: {formattedDate}</p>
      </div>

      <div className="flex flex-col items-center gap-1 ml-4">
        <button onClick={toggleComplete} className="text-green-400 hover:scale-110">✓</button>
        <button onClick={() => setEditingTask(task)} className="text-yellow-400 hover:scale-110">✎</button>
        <button onClick={deleteTask} className="text-red-500 hover:scale-110">✗</button>
      </div>
    </div>
  );
};

export default TaskItem;


