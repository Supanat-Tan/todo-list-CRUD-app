import React, { useState, type FormEvent} from "react"

import "../../styles/loginform.css"
import { apiCall } from "../../services/todoService";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";


const Loginpage = () => {

  const navigate = useNavigate()

  const [loginOrSignup, setLoginOrSignup] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });
  const { login } = useLogin();

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
          await login(response);
          navigate('/');
        }

      } 
      catch(err) {
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
        <h2>Please Login or Sign-up to use this website</h2>
        <button type="button" onClick={handleToggleLogin}>Toggle: {loginOrSignup? "Login" : "Signup"}</button>

        <div>
          <label htmlFor="">Email</label>
          <input 
          type="text" 
          name="email" 
          id="email" 
          value={formData.email} 
          onChange={handleChange}
          />
        </div>

        <div>
          {loginOrSignup? <></> : <label htmlFor="">Username</label>}
          {loginOrSignup? <></> : <input type="text" name="username" id="username" 
          value={formData.username} 
          onChange={handleChange}/>}
        </div>
        
        <div>
          <label htmlFor="">Passowrd</label>
          <input type="password" name="password" id="password" 
          value={formData.password} 
          onChange={handleChange}/>
        </div>
        
        <button>{loginOrSignup? "Login" : "Signup"}</button>
      </form>

    </div>
  )
}

export default Loginpage