import { useEffect, useState } from "react"
import ToDoListDetail from "../common/ToDoListDetail"
import { useToDoContext } from "../../hooks/useTodoContext"
import { useLoaderData } from "react-router-dom";

import "../../styles/homepage.css"
import "../../styles/todoDetail.css"
import "../../styles/sorter.css"

const Homepage = () => {
  const todoFromLoader = useLoaderData();
  const { toDos, dispatch } = useToDoContext();
  const [sortState, setSortState] = useState<{type: string | null; direction: "ascent" | "descent"}>({
    type: null,
    direction: "ascent"
  })
  const [error, setError] = useState("");

  const sortedTodos = [...toDos];

  const handleSort = (type: string | "name") => {
    const isSameType = sortState.type === type;
    const nextDirection = isSameType && sortState.direction === "ascent"? "descent" : "ascent";
    
    if (type === "date") {
      sortedTodos.sort((a, b) => {
        const result = new Date(a.date).getTime() - new Date(b.date).getTime();
        return nextDirection === "ascent"? result : -result;
      });
    }

    if (type === "name") {
    sortedTodos.sort((a, b) => {
      const result = a.todo.localeCompare(b.todo);
      return nextDirection === "ascent" ? result : -result;
    });
  }
    dispatch({ type: "SET_TODOS", payload: sortedTodos});
    setSortState({ type, direction: nextDirection });
  }

  useEffect(() => {
    if (todoFromLoader.error) {
      setError(todoFromLoader.statusText);
      return;
    }

    if (todoFromLoader) {
      dispatch({ type: "SET_TODOS", payload: todoFromLoader});
    }
  }, [dispatch, todoFromLoader])
  
  return (
    <div className="main-container">

      <div className="detail-container">
        <div className="sorter">
          <button onClick={() => handleSort("name")}>Name</button>
          <button onClick={() => handleSort("date")}>Date</button>
          <button></button>
        </div>
        {toDos.map((todo) => <ToDoListDetail 
        key={todo._id} 
        data={todo}
        />)}
      </div>

      {error? <div>Error fetching Data from database: {error}</div> : ""}

    </div>
  )
}

export default Homepage