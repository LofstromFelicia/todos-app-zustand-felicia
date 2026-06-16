import React from "react"
import { TodoList } from "./components/TodoList"

export const App = () => {
  return (
    <div className="App">
      <header className="app-header">
        <h1>🎯Gör-Det-Listan</h1>
        <p>"Börja där du står. Använd det du har."</p>
      </header>

      <main>
        <TodoList />
      </main>

      <footer className="app-footer">
        <p>Built with React & Zustand • Made by Felicia</p>
      </footer>
    </div>
  )
}
