# Sujil S — Portfolio

Modern, production-ready portfolio built with **React 18 + Vite + Tailwind CSS**.

## ✨ Tech Stack

- **React 18** — component-based UI
- **Vite 5** — lightning-fast dev server & bundler
- **Tailwind CSS 3** — utility-first styling
- **Lucide React** — clean icon library
- **DM Sans / Syne / DM Mono** — Google Fonts

---

## 🚀 Running Locally in VS Code

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- [VS Code](https://code.visualstudio.com/)

### Steps

```bash
# 1. Clone or extract the project
cd sujil-portfolio

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open **http://localhost:5173** in your browser. Hot-reload is on — save any file and it refreshes instantly.

### Useful VS Code extensions

- **ES7+ React/Redux/React-Native snippets** — component shortcuts
- **Tailwind CSS IntelliSense** — autocomplete for Tailwind classes
- **Prettier** — auto-format on save

---

## 📦 Building for Production

```bash
npm run build
```

This outputs a `dist/` folder — static files ready to deploy anywhere.

```bash
# Preview the production build locally
npm run preview
```

---

## 🌐 Free Deployment Options

### Option 1 — Vercel (Recommended, easiest)

1. Push code to GitHub (see section below)
2. Go to [vercel.com](https://vercel.com) → Sign up with GitHub
3. Click **"New Project"** → import your repo
4. Vercel auto-detects Vite — click **Deploy**
5. Live URL in ~30 seconds ✅

**Custom domain**: free subdomain like `sujil-portfolio.vercel.app`, or connect your own domain.

### Option 2 — Netlify

1. Go to [netlify.com](https://netlify.com) → Sign up
2. **New site from Git** → connect GitHub repo
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy ✅

### Option 3 — GitHub Pages (via gh-pages)

```bash
npm install --save-dev gh-pages
```

Add to `package.json` scripts:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

Add to `vite.config.js`:
```js
base: '/your-repo-name/',
```

Then:
```bash
npm run deploy
```

---

## 🐙 Pushing to GitHub

```bash
# 1. Init git (if not already)
git init

# 2. Add all files
git add .

# 3. First commit
git commit -m "Initial commit — Sujil S portfolio"

# 4. Create a repo on github.com (e.g. sujil-portfolio)
#    Then link it:
git remote add origin https://github.com/YOUR_USERNAME/sujil-portfolio.git

# 5. Push
git branch -M main
git push -u origin main
```

---

## 📁 Project Structure

```
sujil-portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   ├── Achievements.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── .gitignore
```

---

## 🎨 Customisation

- **Colors**: edit `tailwind.config.js` → `theme.extend.colors`
- **Content**: edit the data inside each component file
- **Fonts**: swap Google Fonts import in `index.html`
