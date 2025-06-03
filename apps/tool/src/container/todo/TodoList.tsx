import type { Todo } from '../../types/todo';
import TodoItem from './TodoItem';

interface TodoListProps {
  todos: Todo[];
  onToggleTodo: (id: string) => void;
  onDeleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  onToggleTodo,
  onDeleteTodo,
}) => {
  if (todos.length === 0) {
    return (
      <div className='text-center py-4 text-gray-500'>
        没有待办事项，请添加新的待办事项
      </div>
    );
  }

  return (
    <div className='mt-4 space-y-2'>
      {todos
        .sort((a, b) => b.createdAt - a.createdAt)
        .map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={() => onToggleTodo(todo.id)}
            onDelete={() => onDeleteTodo(todo.id)}
          />
        ))}
    </div>
  );
};

export default TodoList;
