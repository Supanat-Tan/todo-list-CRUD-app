import { useAuthContext } from '../../hooks/useAuthContext'
import '../../styles/navbar.css'

const NavBar = () => {
  const {user} = useAuthContext()

  const testClick = () => {
    console.log(user)
  }
  return (
    <nav className='nav-bar'>
        <div>Hello</div>

        <ul>
            <li onClick={testClick}>Menu 1</li>
            <li>{user?.email}</li>
            <li>Menu 3</li>
        </ul>

        <button>Login / Signup</button>
    </nav>
  )
}

export default NavBar