import React, { useState, type FormEvent} from "react"

import "../../styles/loginform.css"
import { apiCall } from "../../services/todoService";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";

const Loginpage = () => {
  const { dispatch } = useAuthContext()

  const navigate = useNavigate()

  const [loginOrSignup, setLoginOrSignup] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: ""
  });

  const handleToggleLogin = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setLoginOrSignup(prev => !prev)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({...prev, [name]: value}));
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (loginOrSignup) {
      try {
        const response = await apiCall('login', {
        email: formData.email,
        password: formData.password
      });

        if (response) {
          localStorage.setItem("token", response.token);
          localStorage.setItem("user", JSON.stringify(response.user));
          dispatch({ type: "LOGIN", payload: response.user});
          navigate('/');
        }
      } catch(err) {
      console.log(err)
      }
    } 

    else {
      const response = await apiCall('signup', formData);
      console.log(response)
    }

  }

  return (
    <div className="main-login-container">

      <form className="form-container" onSubmit={handleSubmit}>
        <button onClick={handleToggleLogin}>{loginOrSignup? "Login" : "Signup"}</button>
        <label htmlFor="">Email</label>
        <input 
        type="text" 
        name="email" 
        id="email" 
        value={formData.email} 
        onChange={handleChange}
        />

        {loginOrSignup? <></> : <label htmlFor="">Username</label>}
        {loginOrSignup? <></> : <input type="text" name="username" id="username" 
        value={formData.username} 
        onChange={handleChange}/>}

        <label htmlFor="">Passowrd</label>
        <input type="text" name="password" id="password" 
        value={formData.password} 
        onChange={handleChange}/>

        <button>{loginOrSignup? "Login" : "Signup"}</button>
      </form>

    </div>
  )
}

export default Loginpage