<div align="center">

# TaskFlow

**A clean, dark-themed to-do app with categories, priorities, filters and persistent storage.**

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white&style=flat-square)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black&style=flat-square)
![CSS3](https://img.shields.io/badge/CSS3-Custom%20Properties-1572B6?logo=css3&logoColor=white&style=flat-square)
![Storage](https://img.shields.io/badge/Storage-localStorage-C9A84C?style=flat-square)

[**Live Demo**](https://Olukolade238.github.io/to-do-app)

![TaskFlow desktop view](../to-do/doc/screenshot-desktop.png)

</div>

---

## Overview

TaskFlow is a task manager built with React. It focuses on a polished interface and predictable state management: every action goes through a single `useReducer` reducer, and tasks persist in the browser, so nothing is lost on refresh.

The first time you open the app it loads a set of **demo tasks**, so you can explore every feature straight away. **Reset demo data** in the sidebar brings them back at any time.

## Features

- **Add, edit, complete and delete** tasks (press `Enter` to save an edit, `Esc` to cancel)
- **Categories** (Work, Study, Personal, Health) shown as colour-coded badges
- **Priority levels** (High, Medium, Low) with a colour accent bar on each task
- **Filters** for All, Active and Completed, each with a live count
- **Progress tracking** with total, remaining and done stats plus a progress bar
- **Clear completed** to remove finished tasks in one click
- **Persistent storage** through `localStorage`
- **Responsive layout** that adapts from desktop to mobile
- **Accessible controls** with ARIA labels, keyboard focus styles and checkbox semantics

## Tech Stack

| Area | Tools |
| --- | --- |
| UI | React 19 (functional components and hooks) |
| State | `useReducer` with a pure reducer |
| Styling | Plain CSS with custom properties, Flexbox and Grid |
| Icons | [react-icons](https://react-icons.github.io/react-icons/) |
| Font | [Outfit](https://fonts.google.com/specimen/Outfit) |
| Tooling | Create React App, `gh-pages` for deployment |

## Getting Started

**Prerequisites:** [Node.js](https://nodejs.org/) 18 or newer.

```bash
# 1. Clone the repository
git clone https://github.com/Olukolade238/to-do-app.git
cd to-do-app

# 2. Install dependencies
npm install

# 3. Start the dev server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Other scripts

| Command | What it does |
| --- | --- |
| `npm start` | Runs the app in development mode |
| `npm run build` | Creates an optimized production build in `build/` |
| `npm test` | Runs the test runner |
| `npm run deploy` | Builds and publishes to GitHub Pages |

## Project Structure

```
src/
├── components/
│   ├── TaskForm.js      # Add-task form (text, category, priority)
│   ├── TaskItem.js      # Single task: check, inline edit, delete
│   └── TaskReducer.js   # ADD / UPDATE / COMPLETE / DELETE / CLEAR_COMPLETED / RESET
├── data/
│   └── seedTasks.js     # Demo tasks loaded on first visit
├── css/
│   ├── reset.css        # Modern CSS reset
│   └── index.css        # Theme variables and component styles
├── App.js               # Layout, filters, stats, localStorage sync
└── index.js
```

## How It Works

State changes are described as actions and handled in one place:

```js
dispatch({ type: 'ADD', text, priority, category });
dispatch({ type: 'COMPLETE', id });
dispatch({ type: 'CLEAR_COMPLETED' });
```

`App.js` saves the task list to `localStorage` whenever it changes. On the first visit, when nothing has been saved yet, it loads the demo tasks. After that, an empty list stays empty.

## Screenshots

<div align="center">

| Desktop | Mobile |
| --- | --- |
| <img src="../to-do/doc/screenshot-desktop.png" alt="Desktop view" width="520"> | <img src="../to-do/doc/screenshot-mobile.png" alt="Mobile view" width="220"> |

</div>

## Roadmap

- [ ] Due dates and overdue highlighting
- [ ] Search and sort
- [ ] Drag-and-drop reordering
- [ ] Unit tests for the reducer

## Author

**Kolade Kaka** · Software Development student · [GitHub](https://github.com/Olukolade238)

---

<div align="center">If you like this project, consider giving it a ⭐</div>
