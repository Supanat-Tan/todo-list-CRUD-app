import RootLayout from './components/layouts/RootLayout'
import Homepage from './components/pages/Homepage'
import Loginpage from './components/pages/Loginpage'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import { rootLoader } from './loaders/rootLoader';


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    loader: rootLoader,
    children: [
      { index: true, element: <Homepage /> },
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
