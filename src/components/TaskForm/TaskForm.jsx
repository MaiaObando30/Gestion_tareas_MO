// Importamos herramientas necesarias de React y una función para crear IDs únicos
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

// Este componente muestra un formulario para agregar o editar tareas
const TaskForm = ({ tasks, setTasks, editingTask, setEditingTask }) => {
  // Guardamos lo que el usuario escribe en el título
  const [title, setTitle] = useState('');
  // Guardamos lo que el usuario escribe en la descripción
  const [description, setDescription] = useState('');

  // Si hay una tarea que estamos editando, llenamos el formulario con su información
  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description);
    }
  }, [editingTask]);

  // Esta función se ejecuta cuando el usuario envía el formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que se recargue la página
    if (!title.trim() || !description.trim()) return; // Si algún campo está vacío, no se hace nada

    if (editingTask) {
      // Si estamos editando una tarea, se actualiza con los nuevos datos
      setTasks(tasks.map(task =>
        task.id === editingTask.id ? { ...task, title, description } : task
      ));
      setEditingTask(null); // Dejamos de editar después de guardar
    } else {
      // Si es una nueva tarea, la agregamos a la lista
      setTasks([
        ...tasks,
        {
          id: uuidv4(), // Se le asigna un ID único
          title,
          description,
          completed: false, // Al inicio no está completada
          createdAt: new Date() // Fecha actual
        }
      ]);
    }

    // Limpiamos los campos del formulario después de agregar o editar
    setTitle('');
    setDescription('');
  };

  return (
    // Este es el formulario donde el usuario escribe la tarea
    <form onSubmit={handleSubmit} className="mb-6 space-y-4">
      {/* Campo para escribir el título de la tarea */}
      <input
        type="text"
        placeholder="Título de la tarea"
        className="w-full p-2 rounded bg-secondary text-white"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {/* Campo para escribir la descripción de la tarea */}
      <textarea
        placeholder="Descripción"
        className="w-full p-2 rounded bg-secondary text-white"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      {/* Botón para enviar el formulario. Cambia el texto si estás editando o agregando */}
      <button className="bg-primary px-4 py-2 rounded hover:opacity-80 transition">
        {editingTask ? 'Actualizar Tarea' : 'Agregar Tarea'}
      </button>
    </form>
  );
};

// Esto permite usar el formulario en otras partes del proyecto
export default TaskForm;
