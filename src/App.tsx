import RootLayout from './components/layouts/RootLayout'
import Homepage from './components/pages/Homepage'
import Loginpage from './components/pages/Loginpage'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import { todoLoader } from './loaders/todoLoader';
import { apiCall } from './services/todoService';

const rootLoader = async () => {
  const response = await apiCall('check-user')

  if (!response.ok) {
    return null
  }

  return await response.json()
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    loader: rootLoader,
    children: [
      { index: true, element: <Homepage />, loader: todoLoader, },
    ],
  },
  {
    path: "login",
    element: <Loginpage />
  }
],
);

function App() {
  return (
      <RouterProvider router={router} />
  )
}

export default App
