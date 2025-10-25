# Portfolio Experiment
AI EXPERIMENT: This project has been built with GitHub Copilot so that I can test it out.
A modern developer portfolio built with React.

## Usage

1. Place `Portfolio.jsx` and `Portfolio.css` in your `src/` directory.
2. Import and use the `Portfolio` component in your `App.jsx`:

```jsx
import Portfolio from './Portfolio';
function App() {
  return <Portfolio />;
}
```

3. Update your information, projects, and images in `Portfolio.jsx`.

 
## Local dev (Vite)

If you'd like to run this project locally with Vite, from the repository root:

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

Then open the URL shown by Vite (usually http://localhost:5173).

Build for production with:

```bash
npm run build
```

Preview the production build locally with:

```bash
npm run preview
```

## GitHub Pages deployment

I've added a GitHub Actions workflow that builds the project and deploys the `dist/` folder to the `gh-pages` branch whenever you push to `main`.

What I added:
- `vite.config.js` — sets Vite `base` to `/portfolio-experiment/` so assets load correctly on GitHub Pages.
- `.github/workflows/gh-pages.yml` — Action that runs `npm ci`, `npm run build`, and publishes `./dist` to GitHub Pages.

After the next push to `main`, the workflow will run and publish the site to:

```
https://eli-evans149.github.io/portfolio-experiment/
```

If you prefer a custom domain or to use the `docs/` folder instead, I can adjust the workflow.