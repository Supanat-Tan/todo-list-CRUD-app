import type { ToDoListDetailProps } from "../../types/type";
import { useToDoContext } from "../../hooks/useTodoContext"

import "../../styles/todoDetail.css"

const ToDoListDetail = ({ data }: ToDoListDetailProps) => {

  const { dispatch } = useToDoContext();

  const handleDelete = async (id: string) => {
    try {
      const json = await fetch(`/api/todo/delete/${id}`, {
        method: "DELETE",
      })

      if (json) {
        dispatch({ type: "DELETE_TODO", payload: id})
      }
    }
    catch(err) {
      console.log("Error deleting todo Id: ", id, err)
    }
  }

  return (
    <div>
      <div>{data.todo}</div>
      <div>{new Date(data.date).toLocaleDateString()}</div>
      <div>
        <button onClick={() => handleDelete(data._id)}>-</button>
      </div>
    </div>
      
  )
}

export default ToDoListDetail