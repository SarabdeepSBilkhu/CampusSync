# CampusSync

CampusSync is a streamlined web platform that centralizes essential utilities for college students. It brings together timetables, notes, placement updates, and roommate coordination in one clean, responsive interface to reduce chaos and boost productivity.

## 🚀 Features

- 📅 Weekly timetable viewer
- 📓 Notes dashboard
- 💼 Placement news and notifications
- 🛏️ Roommate coordination board
- 🌙 Dark mode support
- ⚡ Fast, responsive design with animations

## 🛠️ Tech Stack

- **Frontend:** React (with SWC), TypeScript
- **Routing:** React Router DOM
- **Styling:** Tailwind CSS, ShadCN UI, tailwindcss-animate
- **State Management:** React Query
- **Build Tool:** Vite
- **Icons & Animations:** Lucide Icons, Headless UI, Custom Utility Hooks

## 📁 Folder Structure

```

src/
├── components/          # UI components
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions, config
├── pages/               # Page-level components
└── main.tsx             # Entry point

````

## 📦 Getting Started

### 1. Clone and Install Dependencies

```bash
git clone https://github.com/your-username/CampusSync.git
cd CampusSync
npm install
````

### 2. Start the Dev Server

```bash
npm run dev
```

### 3. Build for Production

```bash
npm run build
```

## ⚙️ Configuration Tips

* Ensure `tailwind.config.js` includes:

  ```js
  content: [
    "./src/components/**/*.{ts,tsx}",
    "./src/hooks/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
    "./src/pages/**/*.{ts,tsx}",
  ],
  ```
* Ensure you're using the correct theme classes like `bg-background`, `text-foreground` defined via `@shadcn/ui`.

## 📄 License

MIT
