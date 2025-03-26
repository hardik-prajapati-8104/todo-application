import TodoFilter from '@/components/todo/todoFilter'
import TodoForm from '@/components/todo/todoForm'
import TodoList from '@/components/todo/todoList'
import React from 'react'



const Todo = async({ searchParams }) => {
  const filter = (await searchParams).filter

  return (
    <div className='flex flex-col items-center gap-4 h-screen max-h-screen overflow-hidden'>
        <h1 className='text-4xl font-semibold mt-4'>Todo App</h1>
        <TodoForm/>
        <TodoList filter={filter}/>
        <TodoFilter  filter={filter}/>
     
  
        


    </div>
  )
}

export default Todo