import React from 'react'
import TodoItem from "./TodoItem"
import styles from "./todolist.module.css"

export default function TodoList({todos, setTodos}) {
  const sortedTodos = todos.slice().sort((a,b)=>Number(a.done - b.done))
  return (
    <div className={styles.list}> 
      {sortedTodos.map((item) => 
      <TodoItem key={item.name} item={item} todos={todos} setTodos={setTodos} /> )}</div>
  )
}
