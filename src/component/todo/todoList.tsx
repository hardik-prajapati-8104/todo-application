import React from "react";
import TodoItem from "./todoItem";


const TodoList = async({filter}) => {
  let url = "  http://localhost:3003/todoList"

  if(filter !== "all") url += `?isdone=${filter==="completed"}`

  const res = await fetch(url, {
    next: { tags: ["hardik"] },
  });
  const json = await res.json();
  

  return (
    <div className="flex flex-col w-full gap-4 p-4 flex-1 overflow-auto">
      {json.map((item) => {
        return (
        <TodoItem key={item.id} item={item}>
          {item.todoItem}
        </TodoItem>
  );
})}
  </div>
  )
}
export default TodoList;
