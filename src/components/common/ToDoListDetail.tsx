import type { ToDoListDetailProps } from "../../types/type";
import { useToDoContext } from "../../hooks/useTodoContext"

import "../../styles/todoDetail.css"
import { apiCall } from "../../services/todoService";
import { useState, type FormEvent } from "react";

const ToDoListDetail = ({ data }: ToDoListDetailProps) => {
  const { dispatch } = useToDoContext();
  const [showUpdateComponent, setShowUpdateComponent] = useState(false)
  const [updateData, setUpdateData] = useState({
    todo: "",
    date: "",
    _id: data._id,
  });

  const handleShowComponent = () => {
    setShowUpdateComponent(prev => !prev)
  }

  const handleDelete = async (id: string) => {
    try {
      const json = await apiCall('delete-todo', id)

      if (json) {
        dispatch({ type: "DELETE_TODO", payload: id})
      }
    }
    catch(err) {
      console.log("Error deleting todo Id: ", id, err)
    }
  }

  const handleUpdate = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      const response = await apiCall('update-todo', updateData, updateData._id)

      if (response) {
        dispatch({ type: "UPDATE_TODO", payload: updateData })
      }

    }

    catch(err) {
      console.log(err)
    }
  }

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    setUpdateData((prev) => ({...prev, [name]: value}))
  }

  return (
    <div>

      <div onClick={handleShowComponent}>
        <p>{data.todo}</p>
        <div>{new Date(data.date).toLocaleDateString()}</div>

        <div>
          <button onClick={() => handleDelete(data._id)}>-</button>
        </div>
      </div>

      <form 
      className={`update-form ${showUpdateComponent? "show" : "hide"}`}
      onSubmit={handleUpdate}
      >
        <div>
          <label htmlFor="">New todo</label>
          <input type="text" name="todo" id="todo" value={updateData.todo} onChange={handleChange}/>
        </div>
        
        <div>
          <label htmlFor="">New date</label>
          <input type="date" name="date" id="date" value={updateData.date} onChange={handleChange}/>
        </div>

        <div>
          <button> Update </button>
        </div>
      </form>

    </div>
      
  )
}

export default ToDoListDetail