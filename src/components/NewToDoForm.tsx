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
        <label htmlFor="item">New Item</label>
        <input
          type="text"
          id="item"
          value={newItem}
          onChange={(e) => {
            setNewItem(e.target.value);
          }}
        />
      </div>
      <button className="btn" type="submit">
        Add
      </button>
    </form>
  );
};

export default NewToDoForm;
