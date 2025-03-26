"use client";

import React, { useCallback } from "react";
import { Button } from "../ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const TodoFilter = (filter) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)
 
      return params.toString()
    },
    [searchParams]
  )
 

  return (
    <footer className="w-full flex">
      <Button
        className="flex-1 rounded-none hover:active:bg-black"
        // variant={filter ? "default" : "secondary"}
        onClick={() => {
          router.push(pathname);
        }}
      >
        All
      </Button>
      <Button
        className="flex-1 rounded-none"
         variant={filter === "pending" ? "default" : "default"}
        onClick={() => {
          router.push(pathname + "?" + createQueryString("filter", "pending"));
        }}
      >
        Pending
      </Button>
      <Button
        className="flex-1 rounded-none "
        variant={filter == "completed" ? "default" : "default"}

        onClick={() => {
          router.push(pathname + "?" + createQueryString("filter", "completed"));
        }}
      >
        Completed
      </Button>
    </footer>
  );
};

export default TodoFilter;
