'use server'

import { revalidateTag } from "next/cache";

// import { revalidateTag } from "next/cache";
// import { NextRequest, NextResponse } from "next/server";

// export async function deleteTodo(id: string) {
//     const res = await fetch(`http://localhost:3000/todolist${id}`, {
//         method: "DELETE",
//     });


//     // Revalidate cache
//     revalidateTag("hardik");
// }


// export async function DELETE(req: NextRequest, { deleted }: { deleted: { id: string } }) {
//     const { id } = deleted;

//     const res = await fetch(`http://localhost:3000/todolist${id}`, {
//         method: "DELETE",
//     });

// }

export async function addingdata(formData: FormData) {
  const fullname = formData.get("fullname");
  const email = formData.get("email");
  const password = formData.get("password");
  const res = await fetch(" http://localhost:3004/signUp", {
    method: "POST",
    body: JSON.stringify({
        fullname,
        email,
        password
    }),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  const json = await res.json();
  revalidateTag("hardik");
}