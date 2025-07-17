import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../hooks/useAuthContext'
import { useLogOut } from '../../hooks/useLogOut';
import '../../styles/navbar.css'

const NavBar = () => {
  const { user } = useAuthContext();
  const { logout } = useLogOut();
  const navigate = useNavigate();

  const handleClick = async () => {
    if (user) {
      await logout();
      navigate('/login')
    }
  }

  return (
    <nav className='nav-bar'>
        <div>Todo - List</div>

        <ul>
            <li>Welcome</li>
            <li>{user?.username}</li>
        </ul>

        <button onClick={handleClick}>{user? "Log-out" : " Login / Sign-up"}</button>
    </nav>
  )
}

export default NavBar