const TaskItem = ({ task, setTasks, setEditingTask }) => {
  const toggleComplete = () => {
    setTasks(prev => prev.map(t =>
      t.id === task.id ? { ...t, completed: !t.completed } : t
    ));
  };

  const deleteTask = () => {
    setTasks(prev => prev.filter(t => t.id !== task.id));
  };

  const formattedDate = new Date(task.createdAt).toLocaleDateString('es-ES');

  return (
    <div className="p-4 bg-secondary rounded shadow flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
      <div className="flex-1 overflow-hidden">
        <h3 className={`text-xl font-bold break-words ${task.completed ? 'line-through text-muted' : 'text-text'}`}>
          {task.title}
        </h3>
        <p className={`text-sm break-words ${task.completed ? 'line-through text-muted' : 'text-muted'}`}>
          {task.description}
        </p>
        <p className="text-xs text-muted mt-1">Creada el: {formattedDate}</p>
      </div>

      <div className="flex flex-row sm:flex-col items-center gap-2 sm:ml-4">
        <button onClick={toggleComplete} className="text-green-400 hover:scale-110">✓</button>
        <button onClick={() => setEditingTask(task)} className="text-yellow-400 hover:scale-110">✎</button>
        <button onClick={deleteTask} className="text-red-500 hover:scale-110">✗</button>
      </div>
    </div>
  );
};

export default TaskItem;
