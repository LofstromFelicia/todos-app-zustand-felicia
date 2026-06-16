import React, { useState, useEffect } from "react"
import { TodoList } from "./components/TodoList"
import { use } from "react"

export const App = () => {
  const [isLightMode, setIsLightMode] = useState(false)

  useEffect(() => {
    if (isLightMode) {
      document.body.classList.add('light-theme')
    } else {
      document.body.classList.remove('light-theme')
    }
  }, [isLightMode])

  return (
    <main>
      {/* Dark Mode Light Mode switch btn */}
      <button
        className="theme-toggle-btn"
        onClick={() => setIsLightMode(!isLightMode)}
      >
        {isLightMode ? '🌙 Dark Mode' : '☀️ Light Mode'}
      </button>

      <header className="app-header">
        <h1>🎯Gör-Det-Listan</h1>
        <p>"Börja där du står. Använd det du har."</p>
      </header>

      <TodoList />

      <footer className="app-footer">
        <p>Built with React & Zustand • Made by Felicia</p>
      </footer>
    </main >
  )
}

export default App
