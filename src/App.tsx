import RootLayout from './components/layouts/RootLayout'
import Homepage from './components/pages/Homepage'
import Loginpage from './components/pages/Loginpage'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import { todoLoader } from './loaders/todoLoader';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Homepage />, loader: todoLoader, },
      { path: "login", element: <Loginpage /> }
    ],
  },
],
);

function App() {
  return (
      <RouterProvider router={router} />
  )
}

export default App
