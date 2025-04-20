import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const TaskForm = ({ tasks, setTasks, editingTask, setEditingTask }) => {
  const [title, setTitle]         = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description);
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
      setTasks([
        ...tasks,
        {
          id: uuidv4(),
          title,
          description,
          completed: false,
          createdAt: new Date()
        }
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
        autoFocus
        pattern='[A-Za-z0-9]{3,50}'
        onChange={(e) => {
          setTitle(e.target.value);
          if (editingTask.target.value.trim())
          (""); //borrar el error si sd escribe algo mal   
        }}
      />

      <textarea
        placeholder="Descripción"
        className="w-full p-2 rounded bg-secondary text-text border border-gray-300 placeholder:text-muted"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />

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
