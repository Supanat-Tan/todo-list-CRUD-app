import { Outlet } from "react-router-dom"
import NavBar from "../common/NavBar"
import ToDoListForm from "../common/ToDoListForm"
import { useState } from "react"
import Overlay from "../common/Overlay"

const RootLayout = () => {
  const [showForm, setShowForm] = useState(false)

  const toggleForm = () =>{
    setShowForm(prev => !prev)
  }

  return (
    <>
        <NavBar />
        <ToDoListForm isVisible={showForm}/>
        <Overlay isVisible={showForm} setShowForm={setShowForm}/>
        <button onClick={toggleForm}>+</button>
        <main style={{ paddingTop: '75px' }}>
            <Outlet />
        </main>
    </>
  )
}

export default RootLayout