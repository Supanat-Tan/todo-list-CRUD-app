import RootLayout from './components/layouts/RootLayout'
import Homepage from './components/pages/Homepage'
import Loginpage from './components/pages/Loginpage'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={ <RootLayout /> }>
          <Route index element={ <Homepage /> }/>
          <Route path='/login' element={ <Loginpage /> }/>
        </Route>
      </Routes>
    </>
  )
}

export default App
