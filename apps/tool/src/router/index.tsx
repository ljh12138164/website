import { createBrowserRouter } from 'react-router-dom';
import Eletron from '../page/Eletron';
import TodoList from '../page/TodoList';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <TodoList />,
    },
    {
      path: '/eletron',
      element: <Eletron />,
    },
  ],
  {
    basename: '/',
  }
);

export default router;
