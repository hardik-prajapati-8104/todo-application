"use client";

import React from "react";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { deletingtodo, updateTodo} from "@/app/action";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
 
type props = {};


const TodoItem = ({ children, item }: props) => {
  return (
    <div className="flex items-center gap-4 mx-2">
      <div>
        <Checkbox
          id="togglecomplete"
          checked={item.isdone}
          onCheckedChange={(isdone)=>{
            updateTodo({ ...item , isdone });
          }}
        />
        <label htmlFor="togglecomplete" className="sr-only">
          Toggle complete
        </label>
      </div>
      <p className="flex-1">{children}</p>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button>Delete</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={()=>deletingtodo(item.id)}>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
    )};

export default TodoItem;
