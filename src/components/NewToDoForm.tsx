import { FormEvent, useState } from "react";

const NewToDoForm = ({ addTodo }) => {
  const [newItem, setNewItem] = useState<string>("");
  console.log(addTodo);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (newItem === "") return;

    addTodo(newItem);

    setNewItem("");
  };

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item" className="form-label">
          New Item
        </label>
        <input
          className="form-control"
          type="text"
          id="item"
          value={newItem}
          onChange={(e) => {
            setNewItem(e.target.value);
          }}
        />
      </div>
      <button className="btn btn-primary my-2" type="submit">
        Add
      </button>
    </form>
  );
};

export default NewToDoForm;
