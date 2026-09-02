# Arpan Hota - Academic Portfolio

This is a professional academic portfolio website for Arpan Hota, Assistant Professor at IIT Kharagpur.

## Tech Stack

- **Framework:** React (Vite)
- **Styling:** Tailwind CSS
- **Routing:** React Router
- **Animations:** Framer Motion
- **Icons:** Lucide React

## Project Structure

- `src/components`: Reusable UI components (Navbar, Footer, Cards, etc.)
- `src/pages`: Individual pages (Home, About, Research, etc.)
- `src/data`: Centralized data file (`portfolio.ts`) containing all resume information.
- `src/lib`: Utility functions.

## Running Locally

1.  Clone the repository.
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the development server:
    ```bash
    npm run dev
    ```
4.  Open http://localhost:3000 in your browser.

## Deployment

### Vercel

1.  Push your code to a GitHub repository.
2.  Go to [Vercel](https://vercel.com) and sign up/login.
3.  Click "Add New..." -> "Project".
4.  Import your GitHub repository.
5.  Vercel will automatically detect Vite and configure the build settings.
6.  Click "Deploy".

### GitHub Pages

1.  Update `vite.config.ts` to set the base path if you are deploying to a subdirectory (e.g., `base: '/repo-name/'`).
2.  Install `gh-pages`:
    ```bash
    npm install gh-pages --save-dev
    ```
3.  Add a deploy script to `package.json`:
    ```json
    "scripts": {
      "predeploy": "npm run build",
      "deploy": "gh-pages -d dist"
    }
    ```
4.  Run `npm run deploy`.

## Updating Content

To update the website content (publications, projects, bio, etc.), simply edit the `src/data/portfolio.ts` file. The changes will automatically reflect across the website.

## Google Scholar Integration

To automatically fetch Google Scholar citations, you would typically need a backend service or a third-party API like SerpApi, as Google Scholar does not provide a public API and blocks scraping.

For a client-side only solution, you can use a library like `bibtex-js` if you export your scholar profile to BibTeX, or manually update the `portfolio.ts` file periodically.
