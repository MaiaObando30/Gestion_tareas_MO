import TaskItem from '../TaskItem/TaskItem';

const TaskList = ({ tasks, setTasks, setEditingTask }) => {
  if (tasks.length === 0) {
    return <p className="text-center text-muted">No hay tareas para mostrar.</p>;
  }

  return (
    <div className="space-y-4">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          setTasks={setTasks}
          setEditingTask={setEditingTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
