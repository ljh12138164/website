import { useState, useEffect } from 'react';
import TodoList from '../container/todo/TodoList';
import TodoForm from '../container/todo/TodoForm';
import type { Todo } from '../types/todo';
import { todoService } from '../services/todoService';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTodos = async () => {
      try {
        const loadedTodos = await todoService.getAllTodos();
        setTodos(loadedTodos);
      } catch (error) {
        console.error('加载待办事项失败:', error);
      } finally {
        setLoading(false);
      }
    };

    loadTodos();
  }, []);

  const addTodo = async (text: string) => {
    try {
      const newTodo = await todoService.addTodo(text);
      setTodos([...todos, newTodo]);
    } catch (error) {
      console.error('添加待办事项失败:', error);
    }
  };

  const toggleTodo = async (id: string) => {
    try {
      const updatedTodo = await todoService.toggleTodo(id);
      setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo)));
    } catch (error) {
      console.error('更新待办事项状态失败:', error);
    }
  };

  const deleteTodo = async (id: string) => {
    try {
      await todoService.deleteTodo(id);
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error('删除待办事项失败:', error);
    }
  };

  return (
    <div className='p-4 max-w-md mx-auto h-[calc(100vh-100px)]'>
      <section className='bg-white p-4 rounded-lg shadow-md'>
        <h2 className='text-2xl font-bold mb-4'>待办事项列表</h2>
        <TodoForm onAddTodo={addTodo} />

        {loading ? (
          <div className='text-center py-4'>加载中...</div>
        ) : (
          <TodoList
            todos={todos}
            onToggleTodo={toggleTodo}
            onDeleteTodo={deleteTodo}
          />
        )}
      </section>
    </div>
  );
}

export default App;
