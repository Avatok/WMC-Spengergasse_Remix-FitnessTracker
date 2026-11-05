# Fitness Tracker 🏋️‍♂️

A fitness and nutrition tracking web application built with **Remix, React, and TypeScript** as part of a WMC project at **HTL Spengergasse**.

Track your workouts and meals, review your activity history, and explore ready-made training and nutrition plans—all in one place.

## ✨ Features

- **Workout tracking:** Record workouts with their name, duration (minutes), and date.
- **Meal tracking:** Log meals with their name, calories, and date.
- **Activity history:** View workout and meal entries grouped by date, with the latest dates first.
- **Entry management:** Delete individual workout or meal entries.
- **Training plans:** Browse 15 predefined plans, including strength training, cardio, yoga, HIIT, and mobility. Each plan includes a duration, difficulty level, and exercises.
- **Nutrition plans:** Explore 15 predefined approaches, including Mediterranean, vegetarian, vegan, low-carb, and balanced eating.
- **Responsive interface:** Navigate between the tracker and plan pages on different screen sizes.

## 🛠️ Tech Stack

![Remix](https://img.shields.io/badge/Remix-000000?style=flat-square&logo=remix&logoColor=white)
![React](https://img.shields.io/badge/React-18-149ECA?style=flat-square&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5-7952B3?style=flat-square&logo=bootstrap&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)

- **Framework:** Remix 2 with React 18
- **Language:** TypeScript
- **Styling:** Tailwind CSS 3 and Bootstrap 5
- **Build tool:** Vite 6
- **Runtime:** Node.js 20+

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) **20 or newer**
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/YOUR_USERNAME/WMC-Spengergasse_Remix-FitnessTracker.git
   cd WMC-Spengergasse_Remix-FitnessTracker
   ```

   Replace `YOUR_USERNAME` with your GitHub username, and adjust the repository name if necessary.

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the local URL shown in your terminal (typically `http://localhost:5173`).

## 📍 Pages

| Route | Description |
| --- | --- |
| `/` | Fitness dashboard for logging, viewing, and deleting workouts and meals |
| `/tplans` | Collection of predefined training plans |
| `/eplans` | Collection of predefined nutrition plans |

## 📁 Project Structure

```text
app/
├── db/
│   └── entries.ts          # In-memory workout and meal entries
├── routes/
│   ├── _index.tsx          # Tracker dashboard and form actions
│   ├── tplans.tsx          # Training plans
│   └── eplans.tsx          # Nutrition plans
├── styles/
│   └── styles.css
├── tailwind.css
├── root.tsx               # Root layout and navigation
├── entry.client.tsx
└── entry.server.tsx
public/                     # Static assets
package.json
tailwind.config.ts
vite.config.ts
```

## 📜 Available Commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm start` | Serve the production build |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run the TypeScript type checker |

### Production Build

```bash
npm run build
npm start
```

Remix generates the production output in `build/server` and `build/client`.

## ⚠️ Current Limitations

**Workout and meal entries are stored in server memory**, using arrays in `app/db/entries.ts`. They are **not persisted to a database** and will be lost when the server process restarts. This setup is suitable for a learning project, but a production deployment would need persistent storage.

The training and nutrition plans are predefined examples rather than personalized recommendations.

## 🔮 Possible Improvements

- Add a database for persistent tracking history.
- Introduce user accounts and personal dashboards.
- Add charts for workout progress and calorie intake.
- Allow users to create and edit their own plans.
- Add filtering and search for historical entries.

## 🎓 Project Context

Developed as a web development (WMC) school project at HTL Spengergasse, focusing on full-stack development with Remix, React, TypeScript, and server-side form handling.
