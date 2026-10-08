# My Todos List

A modern, responsive, and beautiful Todo List application built with React.

## Features

- **CRUD Operations:** Easily add, edit, delete, and view your tasks.
- **Modern UI/UX:** Stunning glassmorphic design, premium typography (Poppins), and beautiful gradients.
- **Responsive:** Works flawlessly on mobile, tablet, and desktop screens.
- **Notifications:** Integrated `react-hot-toast` for elegant, non-intrusive toast notifications when you perform actions.
- **Persistent Storage:** Tasks are automatically saved to your browser's local storage so you never lose them.

## Technology Stack

- React (with Hooks: `useState`, `useEffect`)
- React Router (for navigation)
- `react-hot-toast` (for notifications)
- Custom CSS Variables (for consistent theming and dark mode)

## Getting Started

1. Clone the repository or navigate to the project directory:
   ```bash
   cd first-react-project
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

The application will be available at `http://localhost:3000`.

## Scripts

- `npm start`: Runs the app in development mode.
- `npm test`: Runs the test watcher in an interactive mode.
- `npm run build`: Builds the app for production to the `build` folder.

## Deployment

To serve the production build locally, you can use the `serve` package:

1. Install `serve` globally:
   ```bash
   npm install -g serve
   ```

2. Build the project:
   ```bash
   npm run build
   ```

3. Serve the built application:
   ```bash
   serve -s build
   ```

Your production build will now be served, typically at `http://localhost:3000`.
