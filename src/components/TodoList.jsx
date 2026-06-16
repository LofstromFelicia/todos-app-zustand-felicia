import React, { useState } from "react"
import { useTodoStore } from "../store/useTodoStore"

export const TodoList = () => {
  const [inputValue, setInputValue] = useState("")
  const { todos, addTodo, deleteTodo, completedTodo } = useTodoStore()

  // counter 
  const totalTasks = todos.length
  const completedTasks = todos.filter(todo => todo.completed).length

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    addTodo(inputValue)
    setInputValue("")
  }

  return (
    <div className="todo-container">
      {/* Header w/title and statistics for clean look */}
      <div className="todo-header">
        <div className="header-text">
          <h2>Idag</h2>
          <p>{completedTasks} av {totalTasks} avklarade</p>
        </div>
      </div>

      {/* Stastistic counter */}
      <div className="todo-list">
        {todos.length === 0 ? (
          <p className="empty message">Inga uppgifter inlagda. Njut! ✨</p>
        ) : (
          todos.map((todo) => (
            <li key={todo.id} className={`todo-item ${todo.completed ? "completed" : ""}`}>
              <div className="todo-content" onClick={() => completedTodo(todo.id)}>
                {/* custom checkbox */}
                <div className="todo-checkbox">
                  {todo.completed && <span className="checkmark">✓</span>}
                </div>
                <span className="todo-text">{todo.text}</span>
              </div>
              <button onClick={() => deleteTodo(todo.id)} className="delete-btn">
                🗑️
              </button>
            </li>
          ))
        )}
      </ul>

      <form onSubmit={handleSubmit} className="todo-form">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Skriv en ny uppgift..."
        />
        <button type="submit" className="add-btn">+</button>
      </form>
    </div >
  )
}