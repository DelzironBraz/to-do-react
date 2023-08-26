import ToDoItem from "./ToDoItem";

const ToDoList = ({ todos, toggleToDo, deleteToDo }) => {
  return (
    <ul className="list">
      {todos.length === 0 && "No todos"}
      {todos.map((todo) => (
        <ToDoItem
          {...todo}
          key={todo.id}
          toggleToDo={toggleToDo}
          deleteToDo={deleteToDo}
        />
      ))}
    </ul>
  );
};

export default ToDoList;
