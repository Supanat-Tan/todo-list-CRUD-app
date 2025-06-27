import type { ToDo } from "../pages/Homepage";
import { useToDoContext } from "../../hooks/useTodoContext"

interface ToDoListDetailProps {
  data: ToDo;
}




const ToDoListDetail = ({ data }: ToDoListDetailProps) => {

  const { toDos, setToDos } = useToDoContext();

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch('/api/todo/delete/' + id, {
        method: "DELETE",
      })

      const json = await response.json();

      if (response.ok) {
        const newToDos = toDos.filter((t) => t._id !== id);
        setToDos(newToDos);
      }
    }
    catch(err) {
      console.log("Error deleting todo Id: ", id, err)
    }
  }

  return (
    <div>
      <div>
        <div>{data.todo}</div>
        <div>{data._id}</div>
      </div>
      <button onClick={() => handleDelete(data._id)}>Delete</button>
    </div>
      
  )
}

export default ToDoListDetail