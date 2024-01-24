import React from "react";
import TodoItem from "./TodoItem";

const TodoItems = ({ todoItem, handleDelete }) => {
  return (
    <>
      {todoItem.map((item) => (
        <TodoItem
          handleDelete={handleDelete}
          key={item.name}
          todoName={item.name}
          todoDate={item.dueDate}
        />
      ))}
    </>
  );
};

export default TodoItems;
