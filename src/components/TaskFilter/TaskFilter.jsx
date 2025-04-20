const TaskFilter = ({ filter, setFilter }) => {
  const filters = ['Todas', 'Activo', 'Completada'];

  return (
    <div className="flex gap-2 mb-4">
      {filters.map(f => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className={`px-3 py-1 rounded border transition-colors ${
            filter === f
              ? 'bg-secondary  text-black border-primary'
              : 'bg-secondary text-muted border border-gray-300 hover:border-primary'
          }`}
        >
          {f}
        </button>
      ))}
    </div>
  );
};

export default TaskFilter;

