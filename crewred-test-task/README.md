# 🎨 CrewRed UI Component Library

This repository contains a React component library built with Storybook. It features three highly reusable, accessible, and typed UI components.

## 🚀 Tech Stack
* **Framework:** React 18 + Vite
* **Language:** TypeScript
* **Styling:** Tailwind CSS (No external component libraries used)
* **Documentation:** Storybook

## 📦 Setup Instructions

To run this project locally, clone the repository and run the following commands:

```bash
# Install dependencies
npm install

# Start the Storybook environment
npm run storybook


🧩 Component Overview
1. Smart Input (<Input />): A flexible input field supporting multiple types and states.
Features: Toggle visibility for type="password", clearable "X" button for text inputs.
State Management: Fully controlled or uncontrolled via local state in Storybook.

2. Toast Notification (<Toast />): A non-blocking feedback message that slides in from the bottom right.
Features: Auto-dismisses after a configurable duration, smooth CSS enter/exit transitions.
Variants: Success, Error, Info, Warning.

3. Sidebar Menu (<SidebarMenu />): A sliding off-canvas navigation menu.
Features: Smooth transform animations, dark background overlay (click outside to close).
Recursive Rendering: Automatically handles deeply nested submenus via an internal accordion logic.