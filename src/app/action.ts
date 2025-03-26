"use server";

import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { stringify } from "querystring";
import Todo from "./todo/page";
import TodoList from "@/components/todo/todoList";
import { Delete } from "lucide-react";

export async function addingtodo(formData: FormData) {
  const todoItem = formData.get("todoText");

  const res = await fetch("http://localhost:3003/todoList", {
    method: "POST",
    body: JSON.stringify({
      todoItem,
      isdone: false,
    }),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  const json = await res.json();
  revalidateTag("hardik");
  // Update data
  // Revalidate cache
}

export async function updateTodo(data) {
  console.log(data);

  const res = await fetch(`http://localhost:3003/todoList/${data.id}`,
    {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  );
  const json = await res.json();
  revalidateTag("hardik");
  // Update data
  // Revalidate cache
}

export async function deletingtodo(id: number) {
  const res = await fetch(
    `http://localhost:3003/todoList/${id}`,
    {
      method: "DELETE",
    }
  );
  revalidateTag("hardik");
  // Update data
  // Revalidate cache
}

// Update data
// Revalidate cache

// export async function showwhether(formData: FormData) {
//   const temperature = formData.get('whether')
//   const city = formData.get('whether')
//   console.log(city);

//   const res = await fetch(`http://localhost:3000/whether`)

//   const data = await res.json();
//   revalidateTag("hardik");
// }

export async function checkWeather(formData: FormData) {
  const city = formData.get("weather-city");
  
  revalidateTag("hardik");
  redirect(`/whether?city=${city}`);
 
}
