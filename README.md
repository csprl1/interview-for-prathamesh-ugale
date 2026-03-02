# 🚀 SpaceX Dashboard

A modern SpaceX Launch Dashboard built with React, TypeScript, Vite, and Tailwind CSS.

This project visualizes SpaceX launch data in a structured, filterable, and paginated interface, focusing on performance, clean architecture, and responsive UI design.

---

## 🌐 Live Deployment

👉 https://interview-for-prathamesh-ugale.vercel.app/

Deployed on **Vercel** with optimized production builds and global CDN delivery.

---

## ✨ Overview

The SpaceX Dashboard provides a clean and interactive way to explore launch history with:

- 📅 Date-based filtering
- 📊 Launch status indicators
- 🛰 Orbit classification
- 🚀 Rocket information
- 📍 Launch site details
- 📄 Paginated data table
- ⚡ Fast performance using Vite

Designed with scalable architecture and reusable component patterns.

---

## 🔥 Core Features

### 📆 Date Range Filtering
Filter launches by:
- Past 6 Months
- Custom date selection (via date picker)

Powered by:
- `react-datepicker`
- `date-fns`

---

### 🚀 Launch Status Indicators
Visual status badges:
- 🟡 Upcoming
- 🟢 Success
- 🔴 Failed (extendable)

Clear visual feedback for mission state.

---

### 📊 Launch Data Table
Structured table with:

- Launch Number
- Launch Date (UTC)
- Location
- Mission Name
- Orbit Type (LEO, SSO, MEO, VLEO, etc.)
- Launch Status
- Rocket Type

---

### 📄 Pagination
Efficient page navigation:
- Previous / Next controls
- Numbered pagination
- Optimized rendering

---

### 🎨 Modern UI
- Tailwind CSS 4 styling
- Clean spacing & layout
- Professional dashboard feel
- Fully responsive

---

## ⚙️ Tech Stack

### Core
- **React 19**
- **TypeScript 5**
- **Vite 7**

### Styling
- **Tailwind CSS 4**
- **PostCSS**
- **Autoprefixer**

### Utilities
- **date-fns**
- **react-datepicker**

### Tooling
- ESLint
- TypeScript strict configuration

---

## 📁 Project Structure

```
spacex-dashboard/
│
├── public/
├── src/
│   ├── components/
│   ├── hooks/
│   ├── utils/
│   ├── types/
│   └── App.tsx
│
├── index.html
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── package.json
```

---

## 🧠 Engineering Highlights

- Modular component architecture
- Clean separation of concerns
- Strong typing with TypeScript
- Efficient pagination logic
- Date filtering with optimized computation
- Reusable status badge component
- Scalable data structure

---

## 🚀 Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/spacex-dashboard.git
cd spacex-dashboard
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Run Development Server

```bash
npm run dev
```

Open:

```
http://localhost:5173
```

---

### 4️⃣ Build for Production

```bash
npm run build
```

---

### 5️⃣ Preview Production Build

```bash
npm run preview
```

---

## 📜 Available Scripts

| Script | Description |
|--------|------------|
| npm run dev | Start development server |
| npm run build | Type-check + production build |
| npm run preview | Preview production build |
| npm run lint | Run ESLint |

---

## 📈 Performance Strategy

- Vite-powered lightning-fast builds
- Efficient rendering of paginated lists
- Minimal re-renders
- Lightweight dependency usage
- Optimized date filtering logic

---

## 📄 License

MIT License

---

Built with precision and performance-focused frontend architecture.
