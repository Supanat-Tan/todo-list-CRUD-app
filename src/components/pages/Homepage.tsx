import { useEffect } from "react"
import ToDoListDetail from "../common/ToDoListDetail"
import { apiCall } from "../../services/todoService";
import { useToDoContext } from "../../hooks/useTodoContext"

export interface ToDo {
  _id: string;
  todo: string;
}

const Homepage = () => {
  const { toDos, setToDos } = useToDoContext();

  useEffect(() => {
    const fetchedData = async () => {
      try {
        const json = await apiCall('getAllTodo');

        if (json) {
          setToDos(json.data)
        }

      } catch (err) {
          console.log(err)
      }
    }

    fetchedData();
  }, [setToDos])
  
  return (
    <>
      <div>
        {toDos.map((t) => <ToDoListDetail 
        key={t._id} 
        data={t}
        />)}
      </div>
    </>
  )
}

export default Homepage