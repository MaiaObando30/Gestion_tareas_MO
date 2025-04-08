// Importamos herramientas de React y nuestros componentes
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid'; // Para generar un ID único por cada tarea
import TaskForm from './components/TaskForm/TaskForm'; // El formulario para escribir una tarea
import TaskList from './components/TaskList/TaskList'; // La lista que muestra todas las tareas
import TaskFilter from './components/TaskFilter/TaskFilter'; // Botones para mostrar solo algunas tareas
import TaskStats from './components/TaskStats/TaskStats'; // Muestra cuántas tareas hay y cuántas faltan

// Esta es una tarea de ejemplo, por si el usuario nunca guardó ninguna
const initialTasks = [
  {
    id: uuidv4(), // Genera un ID único
    title: "Aprender React", // El nombre de la tarea
    description: "Estudiar los fundamentos de React", // Una descripción opcional
    completed: false, // Dice si ya la hiciste o no
    createdAt: new Date() // Cuándo fue creada
  }
];

function App() {
  // Guardamos las tareas. Si hay tareas guardadas en el navegador, usamos esas. Si no, usamos la de ejemplo.
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks'); // Busca si hay tareas guardadas
    return savedTasks ? JSON.parse(savedTasks) : initialTasks;
  });

  // Este valor indica qué tipo de tareas queremos ver (todas, solo activas o solo completadas)
  const [filter, setFilter] = useState('Todas');

  // Acá guardamos si estamos editando una tarea (y cuál)
  const [editingTask, setEditingTask] = useState(null);

  // Cada vez que cambia la lista de tareas, la guardamos en el navegador
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Según el filtro seleccionado, mostramos solo ciertas tareas
  const filteredTasks = tasks.filter(task => {
    if (filter === 'Activas') return !task.completed; // Muestra solo las no hechas
    if (filter === 'Completadas') return task.completed; // Muestra solo las hechas
    return true; // Si el filtro es "Todas", muestra todo
  });

  return (
    // Contenedor principal con algo de estilo (centrado, márgenes, color de texto)
    <div className="max-w-2xl mx-auto p-4 text-white">
      {/* Título grande de la app */}
      <h1 className="text-3xl font-bold text-primary mb-6">Gestión de Tareas</h1>

      {/* Componente para crear nuevas tareas o editar una existente */}
      <TaskForm
        tasks={tasks}
        setTasks={setTasks}
        editingTask={editingTask}
        setEditingTask={setEditingTask}
      />

      {/* Botones para elegir qué tareas mostrar */}
      <TaskFilter filter={filter} setFilter={setFilter} />

      {/* Lista de tareas filtradas que se muestra en pantalla */}
      <TaskList tasks={filteredTasks} setTasks={setTasks} setEditingTask={setEditingTask} />

      {/* Muestra un resumen: cuántas tareas hay y cuántas están pendientes */}
      <TaskStats tasks={tasks} />
    </div>
  );
}

// Exportamos el componente para que lo pueda usar toda la app
export default App;
