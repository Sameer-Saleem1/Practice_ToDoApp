import { useState } from "react";
import "./App.css";
import ToDO from "./ToDO.jsx";
import TodoItems from "./TodoItems.jsx";
import ErrorMessage from "./ErrorMessage.jsx";

function App() {
  let initialTodoItem = [];
  const [todoItem, setTodoItem] = useState(initialTodoItem);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`item added: ${itemName}, ${itemDueDate} `);
    const newItem = [...todoItem, { name: itemName, dueDate: itemDueDate }];
    setTodoItem(newItem);
  };

  const handleDeleteItem = (itemName) => {
    const newTodoList = todoItem.filter((item) => item.name !== itemName);
    setTodoItem(newTodoList);
  };

  return (
    <>
      <ToDO handleNewItem={handleNewItem} />
      {todoItem.length === 0 ? <ErrorMessage /> : ""}
      <TodoItems todoItem={todoItem} handleDelete={handleDeleteItem} />
    </>
  );
}

export default App;
