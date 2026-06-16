# 🚀 React Todo Application – State Management with Zustand

A clean, responsive, and lightweight task manager application built with React, Vite, and Zustand. This project successfully implements all core global state requirements outlined by the Technigo curriculum.

## 🚀 Deployment

The production build of this application is deployed and hosted on Cloudflare Pages.

🔗 **Live Demo Link:** [(https://todos-app-zustand-felicia.pages.dev)]

---

## 🌟 Features Implemented (Core Goals)

- **Global State Container:** Powered completely by Zustand to handle a unified data store without prop-drilling or Context Providers.
- **Task Analytics & Counter:** Displays dynamic real-time statistics tracking both total accumulated tasks and currently completed tasks.
- **Full CRUD Mutations:** Users can fluidly add new tasks, instantly toggle completion states back and forth, and completely excise tasks from the array via the delete module.
- **Custom UI Architecture:** Built with a clean, hardware-inspired custom dark theme tailored for modern workspace aesthetic.

### ⚡ Stretch Goals Achieved
- **🌗 Dynamic Dark / Light Mode:** Implemented a full theme-switch module using React hooks and CSS custom properties (variables) with smooth transitions, retaining a cohesive sage-green identity in both modes.
- **⏳ Real-time Timestamps:** Every task automatically captures its creation date and formats it into a localized Swedish layout (`Intl.DateTimeFormat`) without relying on heavy external libraries.
- **🧹 "Complete All" Module:** A strategic one-click function to batch-update all tasks to a completed state instantly.
- **🎨 Custom Checkboxes & Micro-UX:** Includes custom-styled checkboxes that react visually to state changes, custom brand identity using a 🌿 favicon, and a designated empty-state message when the list is clear.

---

## 🛠️ Architecture Blueprint

* `src/store/useTodoStore.js` – Central repository containing state mutation logic (`addTodo`, `deleteTodo`, `completeTodo`).
* `src/components/TodoList.jsx` – Subscribes to the slice store, computes data analytics (task counters), and handles rendering.
* `src/App.jsx` – Clean root node rendering the integrated layout shell.

---

## 🛠️ Local Development Setup

1. Clone and navigate to the project directory.
2. Install project packages:
   ```bash
   npm install