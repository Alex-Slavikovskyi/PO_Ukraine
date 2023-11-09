import { createBrowserRouter } from 'react-router-dom';
import App from '../App.jsx';
import { HomePage } from '../Page/HomePage.jsx';
import { NewsPage } from '../Page/NewsPage.jsx';


export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>Not found</div>,
    children: [
      {
        path: '/',
        element: <HomePage />,
        index: true,
      },
      {
        path: '/news/:newsId',
        element: <NewsPage />,
      },
    ]
  }
])