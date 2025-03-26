import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { addingtodo } from "@/app/action";
// import { addingtodo } from "@/app/action";

const TodoForm = () => {
  return (
    <form className="*:not-first:mt-2" action={addingtodo}>
      <Label htmlFor="todo-text" className="sr-only">
        Input with button
      </Label>
      <div className="flex gap-2">
        <Input
          id="todo-text"
          name="todoText"
          className="flex-1 w-[300]"
          placeholder="Enter Your Todo Year..."
          type="text"
          required
        />
        <Button variant="outline" className="bg-black text-white">Add Todo</Button>
      
      </div>
    </form>
  );
};

export default TodoForm;
