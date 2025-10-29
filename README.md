# portfolio (React)

This repository was converted from a static HTML portfolio to a React (Vite) app.

Quick start:
1. Install dependencies:
   npm install
2. Run dev server:
   npm run dev
3. Build for production:
   npm run build
4. Preview production build:
   npm run preview

Migration notes and checklist:
- Copy sections from your original index.html into the React components:
  - Header/navigation -> src/components/Header.jsx
  - Footer -> src/components/Footer.jsx
  - Body sections (hero, about, projects, contact) -> src/pages/Home.jsx or new pages/components
- Replace all HTML attributes:
  - class -> className
  - for -> htmlFor
  - inline event handlers (onclick) -> use React onClick handlers
- Move CSS:
  - Place global CSS in src/index.css or use CSS modules / styled-components as preferred.
- Move assets (images, fonts) into public/ or src/assets/ and update references.
- If you used inline scripts for interactivity, convert them to React state/effects (useState, useEffect).
- If you want routed pages, install react-router-dom and replace Home.jsx with routes.
