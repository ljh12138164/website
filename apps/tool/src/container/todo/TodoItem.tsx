import type { Todo } from '../../types/todo';

interface TodoItemProps {
  todo: Todo;
  onToggle: () => void;
  onDelete: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
  return (
    <div
      className={`p-3 border rounded-md flex items-center justify-between ${
        todo.completed ? 'bg-gray-50' : 'bg-white'
      }`}
    >
      <div className='flex items-center gap-3'>
        <input
          type='checkbox'
          checked={todo.completed}
          onChange={onToggle}
          className='h-5 w-5 text-blue-500 rounded focus:ring-blue-500'
        />
        <span
          className={`${
            todo.completed ? 'line-through text-gray-500' : 'text-gray-900'
          }`}
        >
          {todo.text}
        </span>
      </div>

      <button
        onClick={onDelete}
        className='text-red-500 hover:text-red-700 focus:outline-none'
        aria-label='删除'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-5 w-5'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
          />
        </svg>
      </button>
    </div>
  );
};

export default TodoItem;
