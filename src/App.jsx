import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TaskFilter from './components/TaskFilter/TaskFilter';
import TaskForm from './components/TaskForm/TaskForm';
import TaskList from './components/TaskList/TaskList';

const initialTasks = [
  {
    id: uuidv4(),
    title: "Aprender React",
    description: "Estudiar los fundamentos de React",
    completed: false,
    createdAt: new Date()
  }
];

function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : initialTasks;
  });

  const [filter, setFilter] = useState('Todas');
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Calcular estadísticas
  const total = tasks.length;
  const pending = tasks.filter(t => !t.completed).length;

  // Filtrar tareas según el filtro seleccionado
  const filteredTasks = tasks.filter(task => {
    if (filter === 'Activo') return !task.completed;
    if (filter === 'Completada') return task.completed;
    return true;
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-6">
        {/* Encabezado con estadísticas arriba */}
        <header className="mb-6">
          <h1 className="text-3xl font-bold text-primary">Gestión de Tareas</h1>
          <div className="mt-2 flex space-x-6 text-sm text-text">
            <span>Total de tareas: <strong>{total}</strong></span>
            <span>Pendientes: <strong>{pending}</strong></span>
          </div>
        </header>

        <TaskForm
          tasks={tasks}
          setTasks={setTasks}
          editingTask={editingTask}
          setEditingTask={setEditingTask}
        />

        <TaskFilter filter={filter} setFilter={setFilter} />

        <TaskList
          tasks={filteredTasks}
          setTasks={setTasks}
          setEditingTask={setEditingTask}
        />
      </div>
    </div>
  );
}

export default App;
