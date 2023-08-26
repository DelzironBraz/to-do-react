import { Todo } from "../interface/to-do-list";

const ToDoItem = ({ id, title, completed, toggleToDo, deleteToDo }: Todo) => {
  return (
    <li key={id} className="list-group-item">
      <label className="px-5">
        <input
          className="block px-5"
          type="checkbox"
          checked={completed}
          onChange={(e) => {
            toggleToDo(id, e.target.checked);
          }}
        />
        {title}
      </label>
      <button className="btn btn-danger" onClick={() => deleteToDo(id)}>
        delete
      </button>
    </li>
  );
};

export default ToDoItem;
