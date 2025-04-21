import { useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const TaskForm = ({ tasks, setTasks, editingTask, setEditingTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // Referencia para el campo de descripción
  const descriptionRef = useRef(null);

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description);
      // Enfocar el campo de descripción al editar una tarea
      descriptionRef.current?.focus();
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    if (editingTask) {
      setTasks(tasks.map(t =>
        t.id === editingTask.id ? { ...t, title, description } : t
      ));
      setEditingTask(null);
    } else {
      // Agregar la nueva tarea al principio del array
      setTasks([
        {
          id: uuidv4(),
          title,
          description,
          completed: false,
          createdAt: new Date()
        },
        ...tasks
      ]);
    }

    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 space-y-4">
      <input
        type="text"
        id="title"
        placeholder="Título de la tarea"
        className="w-full p-2 rounded bg-secondary text-text border border-gray-300 placeholder:text-muted"
        value={title}
        maxLength={50}
        autoFocus
        onChange={(e) => setTitle(e.target.value)}
      />
      <p className="text-xs text-muted text-right">{title.length}/50 caracteres</p>

      <textarea
        ref={descriptionRef}  // Referencia al campo de descripción
        placeholder="Descripción"
        className="w-full p-2 rounded bg-secondary text-text border border-gray-300 placeholder:text-muted"
        value={description}
        onChange={e => setDescription(e.target.value)}
        maxLength={200}
      />
      <p className="text-xs text-muted text-right">{description.length}/200 caracteres</p>

      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-primary text-white px-4 py-2 rounded hover:bg-pink-700 transition"
        >
          {editingTask ? 'Actualizar Tarea' : 'Agregar Tarea'}
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
