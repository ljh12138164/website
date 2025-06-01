import { createBrowserRouter } from 'react-router-dom';
import App from '../page/App';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
    },
  ],
  {
    basename: '/tool',
  }
);

export default router;
