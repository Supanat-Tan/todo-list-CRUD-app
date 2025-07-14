import { useState, type FormEvent } from "react";
import { useToDoContext } from "../../hooks/useTodoContext";
import { apiCall } from "../../services/todoService";
import type { ToDoListFormProps } from "../../types/type";
import "../../styles/form.css"
import { useAuthContext } from "../../hooks/useAuthContext";

const ToDoListForm = ({ isVisible }: ToDoListFormProps) => {
  const { dispatch } = useToDoContext();
  const { user } = useAuthContext();

  const [notice, setNotice] = useState("")

  //For submit
  const [formData, setFormData] = useState({
    todo: "",
    date: "",
    user: user?._id,
  });

  const handleNotice = () => {
    setNotice("Successfully create a Todolist")
    
    setTimeout(() => {
      setNotice("")
    }, 5000);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    let newValue = value;

    if (name === "date") {
      const rawDate = new Date(value);

      newValue = rawDate.toISOString().split("T")[0];
    }

    setFormData((prev) => ({...prev, [name]: newValue}));
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const user = localStorage.getItem("user")

    if (!user) {
      console.error("Not currently login")
    }

    console.log(formData)
  
    const json = await apiCall('create-todo', formData);
  
    if (json) {
      dispatch({ type: "ADD_TODO", payload: json})
      handleNotice();
    }
  }
  
  return (
    <form className={`todo-form ${isVisible? "show" : "hide "}`} onSubmit={handleSubmit}>
      <div className="top-container">

        <div>
          <label htmlFor="">Todo</label>
          <input 
          type="text" 
          name="todo" 
          id="todo" 
          value={formData.todo}
          onChange={handleChange}
          />
        </div>
        
        <div>
          <label htmlFor="">Date</label>
          <input 
          type="date" 
          name="date" 
          id="date" 
          value={formData.date}
          onChange={handleChange}
          />
        </div>
      </div>
      <button>Create</button>
      {notice? <div className="notice">{notice}</div> : <></>}
    </form>
  )
}

export default ToDoListForm