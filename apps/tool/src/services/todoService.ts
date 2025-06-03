import localforage from 'localforage';
import type { Todo } from '../types/todo';

// 配置localforage
localforage.config({
  name: 'todoApp',
  storeName: 'todos',
  description: '存储待办事项的IndexedDB数据库',
});

class TodoService {
  // 获取所有待办事项
  async getAllTodos(): Promise<Todo[]> {
    try {
      const todos = await localforage.getItem<Todo[]>('todos');
      return todos || [];
    } catch (error) {
      console.error('获取待办事项失败:', error);
      return [];
    }
  }

  // 添加待办事项
  async addTodo(text: string): Promise<Todo> {
    try {
      const todos = await this.getAllTodos();

      const newTodo: Todo = {
        id: Date.now().toString(),
        text,
        completed: false,
        createdAt: Date.now(),
      };

      const updatedTodos = [...todos, newTodo];
      await localforage.setItem('todos', updatedTodos);

      return newTodo;
    } catch (error) {
      console.error('添加待办事项失败:', error);
      throw error;
    }
  }

  // 切换待办事项完成状态
  async toggleTodo(id: string): Promise<Todo> {
    try {
      const todos = await this.getAllTodos();
      const todoIndex = todos.findIndex((todo) => todo.id === id);

      if (todoIndex === -1) {
        throw new Error('待办事项不存在');
      }

      const updatedTodo = {
        ...todos[todoIndex],
        completed: !todos[todoIndex].completed,
      };

      todos[todoIndex] = updatedTodo;
      await localforage.setItem('todos', todos);

      return updatedTodo;
    } catch (error) {
      console.error('更新待办事项状态失败:', error);
      throw error;
    }
  }

  // 删除待办事项
  async deleteTodo(id: string): Promise<void> {
    try {
      const todos = await this.getAllTodos();
      const updatedTodos = todos.filter((todo) => todo.id !== id);
      await localforage.setItem('todos', updatedTodos);
    } catch (error) {
      console.error('删除待办事项失败:', error);
      throw error;
    }
  }
}

export const todoService = new TodoService();
