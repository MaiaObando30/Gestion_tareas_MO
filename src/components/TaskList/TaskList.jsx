// Importamos el componente que muestra una sola tarea
import TaskItem from '../TaskItem/TaskItem';

// Este componente muestra la lista completa de tareas
const TaskList = ({ tasks, setTasks, setEditingTask }) => {
  return (
    // Contenedor con espacio entre cada tarea
    <div className="space-y-4">
      {/* Recorremos todas las tareas y mostramos una por una usando TaskItem */}
      {tasks.map(task => (
        // Mostramos cada tarea usando el componente TaskItem
        // Le pasamos la información de la tarea y las funciones necesarias
        <TaskItem
          key={task.id} // Ayuda a React a identificar cada tarea
          task={task}
          setTasks={setTasks}
          setEditingTask={setEditingTask}
        />
      ))}
    </div>
  );
};

// Esto permite usar el componente en otras partes de la app
export default TaskList;
