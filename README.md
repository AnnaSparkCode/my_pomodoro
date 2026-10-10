
# 🍏 Pomodoro Timer

**Live Demo:** [Try My Pomodoro Timer](https://chic-fox-147a66.netlify.app/)

**Source Code:** [View on GitHub](https://github.com/AnnaSparkCode/my_pomodoro)


A customizable Pomodoro timer built with **HTML, CSS, and vanilla JavaScript**.

This project started as a simple timer and gradually grew into a small frontend application with multiple themes, customizable timer durations, automatic Pomodoro cycles, sound notifications, and saved user preferences.

## ✨ Features

- ⏱️ Pomodoro, Short Break, and Long Break modes
- ▶️ Start, pause, and resume the timer
- 🔄 Automatic Pomodoro cycle
- 🔁 Reset the current timer and cycle
- 🎨 Five selectable themes
- ⚙️ Customizable Pomodoro and break durations
- 💾 Saves theme and timer settings using `localStorage`
- 🔊 Plays a sound when a timer finishes
- 📱 Responsive layout for smaller screens
- 🌐 Built with vanilla HTML, CSS, and JavaScript

## 🛠️ Built With

- HTML5
- CSS3
- JavaScript
- DOM Manipulation
- Browser `localStorage`
- CSS Custom Properties
- `setInterval()`
- HTML Audio API

## 🔄 Pomodoro Cycle

The automatic cycle follows this sequence:

**Pomodoro → Short Break → Pomodoro → Short Break → Pomodoro → Long Break**

After completing the long break, the cycle stops and the timer returns to the Pomodoro state so a new cycle can be started.

The user can also manually select any timer mode instead of following the automatic cycle.
But when the user starts with pomodoro timer it auto starts the cycle.

## 🎨 Themes

The timer includes five visual themes:

- Fresh
- Mist
- Chill
- Sci-fi
- Vintage

The selected theme is saved in the browser, so it remains selected when the application is opened again.

## ⚙️ Custom Timer Settings

The Settings panel allows the user to customize:

- Pomodoro duration
- Short Break duration
- Long Break duration

These settings are stored using `localStorage` and are restored when the application is opened again.

## 🧠 What I Practiced

This project gave me practical experience with several frontend concepts, including:

- Selecting and manipulating DOM elements
- Handling user events with event listeners
- Managing application state with JavaScript variables
- Working with timers using `setInterval()`
- Converting between minutes and seconds
- Updating the UI based on application state
- Adding and removing CSS classes dynamically
- Using CSS variables for themes
- Working with `localStorage`
- Creating and updating `<select>` options dynamically
- Managing transitions between different application states
- Debugging JavaScript and CSS behavior
- Making a layout responsive with CSS media queries

## 🐛 Debugging & Problem Solving

One of the main goals of this project was not just to make the timer work, but to understand how different pieces of the application interact.

During development I worked through issues involving:

- Timer state and countdown behavior
- Moving between different Pomodoro stages
- Resetting the cycle correctly
- Keeping the display in sync with the timer
- Remember user preferences by storing them in `localStorage`
- Applying saved settings when the page loads
- CSS specificity when styling the active timer button
- Making the Settings panel behave like a popup instead of affecting the page layout
- Responsive behavior of the timer controls

The project evolved through repeated testing, debugging, and small changes rather than being built as one finished piece from the beginning.

## 🚀 Running Locally

No build tools or frameworks are required.

1. Clone the repository.
2. Open the project folder.
3. Open `index.html` in a browser.

Alternatively, use a local development server such as VS Code Live Server.



## 📖 About This Project

This is a learning and portfolio project created while developing my frontend skills with vanilla JavaScript.

The focus was on building functionality from scratch, understanding how the DOM, JavaScript state, CSS, and browser APIs work together, and learning through debugging and iteration.


