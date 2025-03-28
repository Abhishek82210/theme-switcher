Theme Switcher using Context API (React + Vite)

📌 Overview

This is a basic React project demonstrating how to use the Context API for managing global state. The app allows users to toggle between Light Mode and Dark Mode using a global theme context.

⚙️ Features
✅ Uses React Context API for state management
✅ Implements Theme Switching (Light/Dark Mode)
✅ Built with Vite for fast development
✅ No Redux or external state management libraries

🛠️ Tech Stack
Frontend: React.js (with Vite)

State Management: Context API

Styling: Inline CSS

Build Tool: Vite

📂 Project Structure

/theme-switcher
│── /src
│   ├── /components
│   │   ├── Navbar.jsx
│   │   ├── Content.jsx
│   ├── /context
│   │   ├── ThemeContext.jsx
│   ├── App.jsx
│   ├── main.jsx
│── /public
│── index.html
│── package.json
│── vite.config.js
│── README.md


🚀 How to Run the Project
1️⃣ Clone the Repository

git clone https://github.com/your-username/theme-switcher.git
cd theme-switcher


2️⃣ Install Dependencies

npm install


3️⃣ Start the Development Server

npm run dev


The app will run at http://localhost:5173/ (default Vite port).

📜 Usage Instructions
The Navbar contains a toggle button to switch between Light Mode and Dark Mode.

Clicking the button updates the global theme state using Context API.

The Content component dynamically changes the background and text color based on the selected theme.
