# 🚀 React Todo Application – State Management with Zustand

A clean, responsive, and lightweight task manager application built with React, Vite, and Zustand. This project successfully implements all core global state requirements outlined by the Technigo curriculum.

## 🌟 Features Implemented (Core Goals)

- **Global State Container:** Powered completely by Zustand to handle a unified data store without prop-drilling or Context Providers.
- **Task Analytics & Counter:** Displays dynamic real-time statistics tracking both total accumulated tasks and currently completed tasks.
- **Full CRUD Mutations:** Users can fluidly add new tasks, instantly toggle completion states back and forth, and completely excise tasks from the array via the delete module.
- **Custom UI Architecture:** Built with a clean, hardware-inspired custom dark theme tailored for modern workspace aesthetic.

---

## 🛠️ Architecture Blueprint

* `src/store/useTodoStore.js` – Central repository containing state mutation logic (`addTodo`, `deleteTodo`, `completeTodo`).
* `src/components/TodoList.jsx` – Subscribes to the slice store, computes data analytics (task counters), and handles rendering.
* `src/App.jsx` – Clean root node rendering the integrated layout shell.

---

## 🚀 Deployment

The production build of this application is deployed and hosted on Cloudflare Pages.

🔗 **Live Demo Link:** [KLISTRA_IN_DIN_CLOUDFLARE_LÄNK_HÄR]

---

## 🛠️ Local Development Setup

1. Clone and navigate to the project directory.
2. Install project packages:
   ```bash
   npm install