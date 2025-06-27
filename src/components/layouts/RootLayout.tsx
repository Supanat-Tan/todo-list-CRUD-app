import { Outlet } from "react-router-dom"
import NavBar from "../common/NavBar"

const RootLayout = () => {
  return (
    <>
        <NavBar />
        <main style={{ paddingTop: '75px' }}>
            <Outlet />
        </main>
    </>
  )
}

export default RootLayout