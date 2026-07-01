# Satyam Pandey — Developer Portfolio

A React (Vite) personal portfolio, styled like a code editor — file-explorer
sidebar, tab bar for navigation, and a VS Code-style status bar.

## Folder Structure

```
portfolio/
├── index.html              # HTML entry — fonts are loaded here
├── package.json             # Dependencies & scripts
├── vite.config.js           # Vite + React plugin config
│
├── public/
│   └── images/
│       ├── profile-placeholder.svg           # swap for your real photo
│       └── projects/
│           └── weather-app-placeholder.svg   # swap for your project screenshot
│
└── src/
    ├── main.jsx              # React entry point
    ├── App.jsx                # Assembles the whole page + scroll-tracking logic
    ├── index.css              # All styles (design tokens at the top)
    │
    ├── data/
    │   └── resumeData.js      # ALL your text content lives here — edit this
    │                            first for any text change (name, about, skills,
    │                            education, experience, projects, contact info)
    │
    └── components/
        ├── Sidebar.jsx         # Left file-explorer navigation
        ├── TabBar.jsx          # Top "open tabs" navigation (mobile + desktop)
        ├── Hero.jsx            # Landing section with photo
        ├── About.jsx           # About Me section
        ├── Skills.jsx          # Skills grid
        ├── Experience.jsx      # Experience + Education + Certifications timeline
        ├── Projects.jsx        # Project cards with image + links
        ├── Contact.jsx         # Contact details
        └── StatusBar.jsx       # Bottom status bar
```

## How to Add Your Own Images

1. **Profile photo** — put your photo file (e.g. `profile.jpg`) inside
   `public/images/`, then open `src/data/resumeData.js` and change:
   ```js
   photo: "/images/profile-placeholder.svg",
   ```
   to:
   ```js
   photo: "/images/profile.jpg",
   ```

2. **Project screenshot** — put your screenshot (e.g. `weather-app.png`) inside
   `public/images/projects/`, then in `src/data/resumeData.js` change the
   `image` field of the project the same way.

3. **Add a new project** — copy the commented-out example block at the bottom
   of the `projects` array in `resumeData.js`, fill in the details, and drop
   its screenshot in `public/images/projects/`.

No other file needs to change for text or image updates — everything is
driven from `src/data/resumeData.js`.

## Running Locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

## Building for Production

```bash
npm run build
```

This outputs a static `dist/` folder you can deploy to Vercel, Netlify,
GitHub Pages, or any static host.
