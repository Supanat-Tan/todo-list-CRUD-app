import { Outlet, useLoaderData } from "react-router-dom"
import NavBar from "../common/NavBar"
import ToDoListForm from "../common/ToDoListForm"
import { useEffect, useState } from "react"
import Overlay from "../common/Overlay"
import { useAuthContext } from "../../hooks/useAuthContext"

const RootLayout = () => {
  const [showForm, setShowForm] = useState(false)

  //Set User
  const userFromLoader = useLoaderData();
  const { dispatch } = useAuthContext();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    dispatch({ type: "SET_USER", payload: userFromLoader ?? null })

    setIsReady(true)

  }, [dispatch, userFromLoader])

  const toggleForm = () =>{
    setShowForm(prev => !prev)
  }

  if (!isReady) return null

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