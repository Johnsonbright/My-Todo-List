import React from 'react'
import styles from "./footer.module.css"

export default function Footer({completedTodos, totalTodos}) {
  console.log("My First React Project")
  return (
    <div className={styles.footer}>
      <span className={styles.item}>Completed Todos: {completedTodos}</span>
      <span className={styles.item}>Total Todos: {totalTodos}</span>
    </div>
  )
}
