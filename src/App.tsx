import { useState } from "react";
import { Todo } from "./interface/to-do-list";
import NewToDoForm from "./components/NewToDoForm";
import ToDoList from "./components/ToDoList";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (title: string) => {
    setTodos((currentToDos: Todo[]) => {
      return [
        ...currentToDos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  };

  const toggleToDo = (id: string, completed: boolean) => {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }

        return todo;
      });
    });
  };

  const deleteToDo = (id: string) => {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  };

  return (
    <>
      <NewToDoForm addTodo={addTodo} />
      <h1 className="header">Todo List</h1>
      <ToDoList todos={todos} toggleToDo={toggleToDo} deleteToDo={deleteToDo} />
    </>
  );
};

export default App;
