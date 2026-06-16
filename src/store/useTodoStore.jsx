import { create } from "zustand";

export const useTodoStore = create((set) => ({
  todos: [],

  // Add new todo
  addTodo: (text) => {
    set((state) => ({
      todos: [...state.todos,
      {
        id: Date.now(),
        text,
        completed: false,
        createdAt: new Date()
      }]
    }))
  },

  // remove todo
  deleteTodo: (id) => {
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id)
    }))
  },

  // check off / restore todo 
  completedTodo: (id) => {
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    }))
  },
}))